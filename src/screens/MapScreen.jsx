import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TIPOS = ["Insulina", "Sensor CGM", "Bomba de insulina", "Tiras reactivas", "Lancetas", "Glucómetro", "Otro"];

function distKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

const IconoDC = () => (
  <svg viewBox="252 89 21 21" width="20" height="20" fill="none">
    <path d="M271.931 100.156C271.931 105.219 267.827 109.323 262.764 109.323C257.702 109.323 253.598 105.219 253.598 100.156C253.598 95.0933 257.702 90.9893 262.764 90.9893C267.827 90.9893 271.931 95.0933 271.931 100.156Z" fill="#7890D0"/>
    <path d="M270.557 100.156C270.557 104.46 267.068 107.949 262.764 107.949C258.461 107.949 254.972 104.46 254.972 100.156C254.972 95.8521 258.461 92.3632 262.764 92.3632C267.068 92.3632 270.557 95.8521 270.557 100.156Z" fill="#B7C3E3"/>
    <path d="M260.603 97.8155C260.579 97.6961 260.59 97.3262 260.589 97.1863C260.587 96.4875 260.544 95.9835 260.948 95.3663C261.246 94.9161 261.761 94.5303 262.296 94.4284C262.965 94.301 263.595 94.3804 264.152 94.7652C265.012 95.36 265.17 96.2277 265.125 97.2068C265.116 97.3917 265.131 97.5939 265.118 97.7851C265.393 97.7813 265.669 97.7798 265.944 97.7807C266.364 97.7807 266.636 97.7723 267.038 97.9201C268.597 98.4927 268.929 100.702 267.808 101.83C267.345 102.296 266.844 102.474 266.196 102.481L265.488 102.481C265.397 102.481 265.19 102.486 265.112 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.037 106.136 261.18 105.22C260.548 104.545 260.552 103.257 260.592 102.384L260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.126C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155ZM260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.585 101.915 260.589 101.645 260.589 101.539L260.59 100.671L260.589 99.1033C260.589 98.7909 260.583 98.4434 260.597 98.1338ZM264.779 102.475C264.628 102.488 264.349 102.481 264.187 102.481L263.08 102.481L261.695 102.481C261.461 102.481 261.15 102.489 260.921 102.475C260.848 102.818 260.947 103.933 261.043 104.279C261.093 104.465 261.173 104.642 261.278 104.804C261.818 105.64 263.071 105.868 263.874 105.302C264.33 104.981 264.617 104.58 264.709 104.022C264.79 103.57 264.815 102.931 264.779 102.475ZM260.901 102.171C262.689 102.141 264.515 102.181 266.308 102.165C266.816 102.139 267.292 101.912 267.633 101.536C268.362 100.715 268.313 99.2839 267.462 98.5568C266.896 98.0726 266.351 98.0653 265.651 98.0879C265.388 98.094 265.088 98.0766 264.829 98.095C264.817 98.0959 264.804 98.097 264.792 98.0985C264.789 97.7566 264.789 97.4147 264.792 97.0728C264.793 96.3302 264.784 95.7989 264.199 95.231C263.835 94.8764 263.344 94.6812 262.836 94.6883C262.81 94.6888 262.784 94.6898 262.759 94.6914C262.383 94.7269 262.083 94.8017 261.769 95.01C261.223 95.3731 260.92 95.9617 260.908 96.6126C260.905 96.7697 260.903 96.9287 260.903 97.088L260.904 98.0131L260.904 100.727C260.904 101.182 260.917 101.727 260.901 102.171Z" fill="#252E52"/>
    <path d="M260.592 102.384C260.676 102.39 260.838 102.395 260.907 102.44L260.921 102.475C260.848 102.818 260.948 103.933 261.044 104.279C261.094 104.465 261.173 104.642 261.279 104.804C261.819 105.64 263.072 105.868 263.875 105.302C264.331 104.981 264.617 104.58 264.71 104.022C264.791 103.57 264.815 102.931 264.78 102.475C264.791 102.371 264.991 102.384 265.069 102.395C265.111 102.426 265.098 102.415 265.113 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.038 106.136 261.18 105.22C260.548 104.545 260.553 103.257 260.592 102.384Z" fill="#252E52"/>
    <path d="M260.603 97.8155C260.621 97.8499 260.613 98.0938 260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.609 102.096 260.638 102.288 260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.125C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155Z" fill="#252E52"/>
    <path d="M33.6054 171.573V157.573H35.9654V163.523H42.0754V157.573H44.4354V171.573H42.0754V165.563H35.9654V171.573H33.6054ZM49.2283 164.573C49.2283 167.493 51.4483 169.743 54.2683 169.743C57.0883 169.743 59.3183 167.493 59.3183 164.573C59.3183 161.663 57.0883 159.403 54.2683 159.403C51.4483 159.403 49.2283 161.663 49.2283 164.573ZM46.8383 164.573C46.8383 160.493 50.0683 157.333 54.2683 157.333C58.4683 157.333 61.7083 160.493 61.7083 164.573C61.7083 168.653 58.4683 171.813 54.2683 171.813C50.0683 171.813 46.8383 168.653 46.8383 164.573ZM64.0937 171.573V157.573H66.4537V169.533H72.4237V171.573H64.0937ZM78.3757 157.573H80.9957L86.1357 171.573H83.6057L82.4357 168.193H76.9257L75.7557 171.573H73.2257L78.3757 157.573ZM77.5757 166.223H81.7957L79.6857 160.133L77.5757 166.223ZM88.0566 170.243C88.0566 169.583 88.6466 168.903 89.5466 168.903C90.3766 168.903 91.0066 169.513 91.0066 170.553C91.0066 172.223 90.0766 173.653 88.1466 174.493L87.5166 173.693C89.0966 172.603 89.1066 172.053 88.3166 170.983C88.1666 170.783 88.0566 170.523 88.0566 170.243ZM100.09 171.573V157.573H108.59V159.603H102.45V163.533H108.09V165.543H102.45V169.553H108.77V171.573H100.09ZM111.457 157.573H116.167C119.147 157.573 121.017 159.333 121.017 162.013C121.017 164.183 119.787 165.733 117.727 166.233L121.317 171.573H118.727L115.307 166.443H113.807V171.573H111.457V157.573ZM116.027 159.563H113.807V164.493H116.027C117.697 164.493 118.647 163.513 118.647 162.033C118.647 160.533 117.697 159.563 116.027 159.563ZM123.746 157.573H126.106V171.573H123.746V157.573ZM140.615 166.973L142.045 168.013C140.635 170.553 138.565 171.813 135.715 171.813C131.745 171.813 128.655 168.743 128.655 164.573C128.655 160.413 131.745 157.333 135.715 157.333C139.065 157.333 141.495 159.253 142.235 162.363H139.765C139.185 160.433 137.575 159.403 135.745 159.403C133.235 159.403 131.045 161.403 131.045 164.573C131.045 167.753 133.285 169.743 135.835 169.743C137.935 169.743 139.535 168.703 140.615 166.973ZM148.278 157.573H150.898L156.038 171.573H153.508L152.338 168.193H146.828L145.658 171.573H143.128L148.278 157.573ZM147.478 166.223H151.698L149.588 160.133L147.478 166.223ZM168.392 172.973H188.392V152.973H168.392V172.973Z" fill="#252E52"/>
  </svg>
);
const IcoInicio   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={a?"white":"#b0b8d0"}/></svg>;
const IcoPublicar = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.5" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5"/><path d="M12 8v8M8 12h8" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IcoBuscar   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7.5" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5"/><path d="M16.5 16.5L21 21" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IcoCanjes   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 9h13M4 9l3-3M4 9l3 3" stroke={a?"white":"#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 15H7M20 15l-3-3M20 15l-3 3" stroke={a?"white":"#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IcoPerfil   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/></svg>;

export default function MapScreen({ user, onBack }) {
  const mapContainer = useRef(null);
  const map          = useRef(null);
  const markersRef   = useRef([]);

  const [radio,     setRadio]     = useState(50);
  const [todasPubs, setTodasPubs] = useState([]); // TODAS sin filtrar por radio
  const [filtro,    setFiltro]    = useState("");
  const [textoBusq, setTextoBusq] = useState("");
  const [showDrop,  setShowDrop]  = useState(false);
  const [selected,  setSelected]  = useState(null);
  const [userPos,   setUserPos]   = useState(null);

  const nombre    = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const usuariosMarkersRef = useRef([]);
  const dc        = user?.user_metadata?.dc || 240;
  const firstName = nombre.split(" ")[0].toUpperCase();

  // Publicaciones filtradas por texto
  const pubs = todasPubs.filter(p => {
    if (filtro && !p.nombre_insumo?.toLowerCase().includes(filtro.toLowerCase())) return false;
    return true;
  });



  // ── Cargar TODAS las publicaciones activas ─────────────────────────────
  useEffect(() => {
    supabase.from("publicaciones").select("*").eq("estado","activa")
      .then(({ data }) => { if (data) setTodasPubs(data); });
  }, []);

  // ── Guardar ubicación del usuario y cargar ubicaciones de todos ─────────
  useEffect(() => {
    if (!user) return;
    navigator.geolocation?.getCurrentPosition(async (pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      await supabase.from("ubicaciones_usuarios").upsert({
        user_id: user.id,
        latitud: lat,
        longitud: lng,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id" });
    });
  }, []);

  // ── Realtime ───────────────────────────────────────────────────────────
  useEffect(() => {
    const ch = supabase.channel("mapa-rt")
      .on("postgres_changes", { event: "*", schema: "public", table: "publicaciones" }, () => {
        supabase.from("publicaciones").select("*").eq("estado","activa")
          .then(({ data }) => { if (data) setTodasPubs(data); });
      })
      .subscribe();
    return () => supabase.removeChannel(ch);
  }, []);

  // ── Init mapa ──────────────────────────────────────────────────────────
  useEffect(() => {
    // Inject pulse keyframe for markers
    if (!document.getElementById("rescat-marker-style")) {
      const s = document.createElement("style");
      s.id = "rescat-marker-style";
      s.textContent = `@keyframes ringPulse { 0%{transform:translate(-50%,-50%) scale(1);opacity:0.5;} 100%{transform:translate(-50%,-50%) scale(3.5);opacity:0;} }`;
      document.head.appendChild(s);
    }
    if (map.current) return;
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/rosariocalvo/cmq5um0xt007201queia40i36",
      center: [-70.6483, -33.4569],
      zoom: 14,
    });
    navigator.geolocation?.getCurrentPosition((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      setUserPos({ lat, lng });
      map.current.flyTo({ center: [lng, lat], zoom: 14 });
      const el = document.createElement("div");
      el.style.cssText = "width:14px;height:14px;border-radius:50%;background:#63D8B1;border:2.5px solid white;box-shadow:0 1px 6px rgba(99,216,177,0.5);";
      new mapboxgl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map.current);
    });

    map.current.on("load", async () => {
      const { data } = await supabase.from("ubicaciones_usuarios").select("*").neq("user_id", user?.id || "");
      if (!data) return;
      data.forEach(u => {
        if (!u.latitud || !u.longitud) return;
        const el = document.createElement("div");
        el.style.cssText = "width:12px;height:12px;border-radius:50%;background:#63D8B1;border:2px solid white;box-shadow:0 1px 6px rgba(99,216,177,0.4);cursor:default;";
        new mapboxgl.Marker({ element: el, anchor: "center" }).setLngLat([u.longitud, u.latitud]).addTo(map.current);
      });
    });
  }, []);

  // ── Marcadores ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!map.current) return;

    function dibujarMarcadores() {
      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];
      pubs.forEach(pub => {
        if (!pub.latitud || !pub.longitud) return;
        const isCompartir = pub.tipo === "compartir";
        const color = isCompartir ? "#7890D0" : "#EC6765";
        const glow = isCompartir ? "rgba(120,144,208,0.5)" : "rgba(236,103,101,0.5)";
        const delay = (Math.random() * 1.5).toFixed(2);

        // Dot — marcador principal
        const markerEl = document.createElement("div");
        markerEl.className = `rescat-marker rescat-marker-${pub.id}`;
        markerEl.style.cssText = `width:18px;height:18px;border-radius:50%;background:${color};border:2.5px solid white;box-shadow:0 2px 10px ${glow};cursor:pointer;`;
        markerEl.addEventListener("click", () => {
          setSelected(pub);
          map.current.flyTo({ center: [pub.longitud, pub.latitud], zoom: 15, duration: 500 });
        });
        const marker = new mapboxgl.Marker({ element: markerEl, anchor: "center" })
          .setLngLat([pub.longitud, pub.latitud])
          .addTo(map.current);
        markersRef.current.push(marker);

        // Ring — elemento separado con width/height 0 para no afectar layout
        const ringEl = document.createElement("div");
        ringEl.style.cssText = `width:0;height:0;border-radius:50%;position:absolute;top:0;left:0;pointer-events:none;`;
        const inner = document.createElement("div");
        inner.style.cssText = `width:18px;height:18px;border-radius:50%;background:${color};opacity:0.4;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:ringPulse 2s ease-out ${delay}s infinite;pointer-events:none;`;
        ringEl.appendChild(inner);
        markerEl.appendChild(ringEl);
      });
    }

    if (map.current.loaded()) {
      dibujarMarcadores();
    } else {
      map.current.once("load", dibujarMarcadores);
    }
  }, [pubs]);

  // ── Escalar marcadores según radio ────────────────────────────────────
  useEffect(() => {
    const sizeMap = { 2: 22, 5: 18, 10: 14, 50: 10 };
    const size = sizeMap[radio] || 14;
    markersRef.current.forEach(m => {
      const el = m.getElement();
      if (el.classList.contains("rescat-marker")) {
        el.style.width = size + "px";
        el.style.height = size + "px";
      }
    });
  }, [radio]);

  const [liked, setLiked] = useState(new Set());
  const [perfilCache, setPerfilCache] = useState({});

  async function fetchPerfil(userId) {
    if (!userId || perfilCache[userId] !== undefined) return;
    const { data } = await supabase.from("perfiles").select("nombre, foto_url").eq("user_id", userId).single();
    setPerfilCache(prev => ({ ...prev, [userId]: data || null }));
  }

  useEffect(() => {
    if (selected?.user_id) fetchPerfil(selected.user_id);
  }, [selected]);

  function toggleLike(id) {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleNav(tab) {
    if (tab === "buscar") return;
    if (tab === "publicar") { window.dispatchEvent(new CustomEvent("openPublicar")); return; }
    if (tab === "canjes")   { window.dispatchEvent(new CustomEvent("openCanjes"));   return; }
    if (tab === "perfil")   { window.dispatchEvent(new CustomEvent("openPerfil"));   return; }
    onBack();
  }

  const tiposFiltrados = TIPOS.filter(t => textoBusq ? t.toLowerCase().includes(textoBusq.toLowerCase()) : true);

  return (
    <div style={{ maxWidth:430, margin:"0 auto", height:"100dvh", background:"white", display:"flex", flexDirection:"column", position:"relative", overflow:"hidden", fontFamily:"Outfit, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        @keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(30,42,74,0.4)} 70%{box-shadow:0 0 0 10px rgba(30,42,74,0)} 100%{box-shadow:0 0 0 0 rgba(30,42,74,0)} } @keyframes markerPulse { 0%{transform:scale(1);box-shadow:0 0 0 0 rgba(120,144,208,0.5)} 50%{transform:scale(1.15);box-shadow:0 0 0 8px rgba(120,144,208,0)} 100%{transform:scale(1);box-shadow:0 0 0 0 rgba(120,144,208,0)} }
        .mapboxgl-ctrl-attrib { display:none !important; }
        .mapboxgl-ctrl-bottom-right { bottom:80px !important; }
      `}</style>

      {/* Mapa ocupa todo */}
      <div style={{ flex:1, position:"relative" }}>
        <div ref={mapContainer} style={{ position:"absolute", top:0, left:0, right:0, bottom:0 }} />

        {/* Header flotante con degradado */}
        <div style={{ position:"absolute", top:0, left:0, right:0, zIndex:20, background:"linear-gradient(to bottom, rgba(255,255,255,1) 55%, rgba(255,255,255,0))", paddingBottom:32 }}>
          <div style={{ padding:"52px 20px 10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <img src="/logo_rescat.png" alt="RESCAT+" style={{ height:78, width:"auto" }} />
            <div style={{ textAlign:"right" }}>
              <p style={{ margin:"0 0 4px", fontSize:13, fontWeight:700, color:"#1e2a4a" }}>HOLA, {firstName}</p>
              <div style={{ background:"rgba(240,240,245,0.9)", borderRadius:50, padding:"5px 12px", display:"inline-flex", alignItems:"center", gap:6 }}>
                <IconoDC /><span style={{ fontWeight:700, fontSize:13, color:"#1e2a4a" }}>{dc} DC</span>
              </div>
            </div>
          </div>
          {/* Pills KM + Buscador alineados a la derecha */}
          <div style={{ padding:"0 20px", display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
            <div style={{ display:"flex", gap:6, justifyContent:"flex-end" }}>
          {[2,5,10,50].map(km => (
            <button key={km} onClick={() => {
              setRadio(km);
              const zoomMap = { 2: 14, 5: 12.5, 10: 11, 50: 9 };
              const center = userPos ? [userPos.lng, userPos.lat] : [-70.6483, -33.4569];
              map.current?.flyTo({ center, zoom: zoomMap[km], duration: 600 });
            }} style={{
              padding:"7px 18px", borderRadius:50, border:"none", cursor:"pointer",
              fontWeight:700, fontSize:12, fontFamily:"Outfit, sans-serif",
              background: radio===km ? "#1e2a4a" : "white",
              color: radio===km ? "white" : "#7b80a0",
              boxShadow:"0 2px 8px rgba(30,42,74,0.15)",
            }}>
              {km} KM
            </button>
          ))}
            </div>
            {/* Buscador */}
            <div style={{ width:220 }}>
              <div style={{ background:"white", borderRadius:50, padding:"10px 16px", display:"flex", alignItems:"center", gap:8, boxShadow:"0 2px 10px rgba(30,42,74,0.12)", border:"1px solid #e8eaf2" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7.5" stroke="#b0b8d0" strokeWidth="1.8"/><path d="M16.5 16.5L21 21" stroke="#b0b8d0" strokeWidth="1.8" strokeLinecap="round"/></svg>
            <input
              value={textoBusq}
              onChange={e => { setTextoBusq(e.target.value); setFiltro(e.target.value); setShowDrop(true); }}
              onFocus={() => setShowDrop(true)}
              onBlur={() => setTimeout(() => setShowDrop(false), 150)}
              placeholder="Filtra por insumo"
              style={{ border:"none", outline:"none", flex:1, fontSize:13, color:"#1e2a4a", fontFamily:"Outfit, sans-serif", background:"transparent" }}
            />
            {(textoBusq || filtro) && (
              <span onClick={() => { setTextoBusq(""); setFiltro(""); setShowDrop(false); }} style={{ fontSize:16, color:"#b0b8d0", cursor:"pointer" }}>✕</span>
            )}
          </div>
          {showDrop && tiposFiltrados.length > 0 && (
            <div style={{ background:"white", borderRadius:16, marginTop:6, boxShadow:"0 4px 20px rgba(30,42,74,0.14)", overflow:"hidden" }}>
              {tiposFiltrados.map(tipo => (
                <div key={tipo} onMouseDown={() => { setFiltro(tipo); setTextoBusq(tipo); setShowDrop(false); }}
                  style={{ padding:"13px 18px", fontSize:14, color:"#1e2a4a", fontFamily:"Outfit, sans-serif", borderBottom:"1px solid #f0f0f5", cursor:"pointer", background:filtro===tipo?"#f0f1f9":"white", fontWeight:filtro===tipo?600:400 }}>
                  {tipo}
                </div>
              ))}
            </div>
          )}
            </div>
          </div>
        </div>

        {/* Botón ubicación */}
        <button onClick={() => {
          if (userPos) {
            map.current?.flyTo({ center: [userPos.lng, userPos.lat], zoom: 14, duration: 600 });
          } else {
            navigator.geolocation?.getCurrentPosition((pos) => {
              const { latitude: lat, longitude: lng } = pos.coords;
              setUserPos({ lat, lng });
              map.current?.flyTo({ center: [lng, lat], zoom: 14, duration: 600 });
            });
          }
        }} style={{ position:"absolute", bottom:90, right:16, zIndex:20, width:40, height:40, borderRadius:"50%", background:"white", border:"1px solid #dde0ea", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 1px 4px rgba(30,42,74,0.08)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="#1e2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#1e2a4a"/>
          </svg>
        </button>



        {/* Card seleccionada */}
        {selected && (() => {
          const perfil = perfilCache[selected.user_id];
          const nombreUsuario = selected.anonimo ? "Anónimo" : (perfil?.nombre || selected.nombre_usuario || "Miembro RESCAT");
          const distancia = selected.latitud && userPos ? distKm(userPos.lat, userPos.lng, selected.latitud, selected.longitud).toFixed(1) : "0.0";
          return (
            <div style={{ position:"absolute", bottom:80, left:12, right:12, zIndex:20, background:"white", borderRadius:20, boxShadow:"0 8px 32px rgba(30,42,74,0.15)", overflow:"hidden" }}>
              {/* Header usuario */}
              <div style={{ padding:"12px 16px 10px", display:"flex", alignItems:"center", gap:10, borderBottom:"1px solid #f0f0f5" }}>
                <div style={{ width:38, height:38, borderRadius:"50%", background:"#e8eaf0", overflow:"hidden", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  {perfil?.foto_url
                    ? <img src={perfil.foto_url} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="#b0b8d0" strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#b0b8d0" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  }
                </div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:14, fontWeight:700, color:"#7890D0", fontFamily:"Outfit, sans-serif" }}>{nombreUsuario}</p>
                  <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                    {[1,2,3,4,5].map(s => <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill={s<=4?"#f59e0b":"none"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#f59e0b" strokeWidth="1.5"/></svg>)}
                    <span style={{ fontSize:11, color:"#f59e0b", fontWeight:700, marginLeft:2 }}>4.7</span>
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <p style={{ margin:0, fontSize:10, fontWeight:700, color:"#b0b8d0", letterSpacing:"0.06em", fontFamily:"Outfit, sans-serif" }}>CERCANO · {distancia} KM</p>
                </div>
                <button onClick={() => setSelected(null)} style={{ background:"transparent", border:"none", cursor:"pointer", color:"#b0b8d0", fontSize:18, padding:0, marginLeft:4 }}>✕</button>
              </div>
              {/* Foto insumo */}
              {selected.foto_url
                ? <img src={selected.foto_url} alt="" style={{ width:"100%", height:140, objectFit:"cover", display:"block" }} />
                : <div style={{ width:"100%", height:100, display:"flex", alignItems:"center", justifyContent:"center", background:"#f5f6fc" }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#c8cce8" strokeWidth="1.5"/><circle cx="12" cy="13" r="4" stroke="#c8cce8" strokeWidth="1.5"/></svg>
                  </div>
              }
              {/* Contenido */}
              <div style={{ padding:"12px 16px 14px" }}>
                <p style={{ margin:"0 0 2px", fontSize:17, fontWeight:700, color:"#1e2a4a", fontFamily:"Outfit, sans-serif" }}>{selected.nombre_insumo}{selected.cantidad ? ` · ${selected.cantidad}` : ""}</p>
                <p style={{ margin:"0 0 12px", fontSize:12, color: selected.tipo==="compartir" ? "#7890D0" : "#EC6765", fontWeight:600, fontFamily:"Outfit, sans-serif" }}>
                  {selected.tipo === "compartir" ? "Compartiendo Insumo" : "Solicitando Insumo"}
                </p>
                {selected.mensaje && <p style={{ margin:"0 0 12px", fontSize:13, color:"#7b80a0", fontStyle:"italic" }}>"{selected.mensaje}"</p>}
                <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                  <button onClick={async () => {
                    if (!user) return;
                    if (selected.user_id === user.id) { alert("Esta es tu propia publicación."); return; }
                    try {
                      const { data: existing } = await supabase.from("mensajes").select("id").eq("publicacion_id", selected.id).eq("remitente_id", user.id).limit(1);
                      if (!existing || existing.length === 0) {
                        const { error } = await supabase.from("mensajes").insert({ publicacion_id: selected.id, remitente_id: user.id, destinatario_id: selected.user_id, contenido: "Hola, me interesa tu publicación de " + selected.nombre_insumo + " 👋" });
                        if (error) { alert("Error: " + error.message); return; }
                      }
                      window.dispatchEvent(new CustomEvent("openCanjes"));
                    } catch(e) { alert("Error: " + e.message); }
                  }} style={{ flex:1, padding:"13px", background:"white", color:"#1e2a4a", border:"1.5px solid #1e2a4a", borderRadius:50, fontWeight:600, fontSize:14, cursor:"pointer", fontFamily:"Outfit, sans-serif" }}>
                    Reservar canje
                  </button>
                  <button onClick={() => toggleLike(selected.id)} style={{ width:46, height:46, borderRadius:"50%", background:liked.has(selected.id)?"#EC6765":"white", border:liked.has(selected.id)?"none":"1.5px solid #e0e0e8", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", flexShrink:0, transition:"all 0.2s" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill={liked.has(selected.id)?"white":"none"} stroke={liked.has(selected.id)?"none":"#EC6765"} strokeWidth="1.8" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* BottomNav */}
      <nav style={{ position:"absolute", bottom:0, left:0, right:0, background:"white", borderRadius:"20px 20px 0 0", boxShadow:"0 -2px 20px rgba(30,42,74,0.08)", display:"flex", alignItems:"center", height:72, zIndex:30 }}>
        {[
          { id:"inicio",   label:"Inicio",   Ico:IcoInicio   },
          { id:"publicar", label:"Publicar", Ico:IcoPublicar },
          { id:"buscar",   label:"Buscar",   Ico:IcoBuscar,  active:true },
          { id:"canjes",   label:"Canjes",   Ico:IcoCanjes   },
          { id:"perfil",   label:"Perfil",   Ico:IcoPerfil   },
        ].map(({ id, label, Ico, active }) => (
          <button key={id} onClick={() => handleNav(id)} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4, border:"none", background:"transparent", cursor:"pointer", padding:"6px 4px" }}>
            <div style={{ width:44, height:44, borderRadius:14, background:active?"#1e2a4a":"transparent", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Ico a={!!active} />
            </div>
            <span style={{ fontSize:10, fontWeight:active?700:400, color:active?"#1e2a4a":"#b0b8d0", fontFamily:"Outfit, sans-serif" }}>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
