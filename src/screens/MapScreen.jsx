import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Logo from "../components/Logo";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const IconInicio = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconPublicar = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconBuscar = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconCanjes = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 22l-4-4 1.4-1.425 1.6 1.575V13h2v5.15l1.6-1.575L16 18l-4 4zM12 2l4 4-1.4 1.425-1.6-1.575V11h-2V5.85L9.4 7.425 8 6l4-4z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconPerfil = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);

function BottomNav({ onTabChange }) {
  const tabs = [
    { id: "inicio", label: "Inicio", Icon: IconInicio },
    { id: "publicar", label: "Publicar", Icon: IconPublicar },
    { id: "buscar", label: "Buscar", Icon: IconBuscar, active: true },
    { id: "canjes", label: "Canjes", Icon: IconCanjes },
    { id: "perfil", label: "Perfil", Icon: IconPerfil },
  ];
  return (
    <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "white", borderRadius: "20px 20px 0 0", boxShadow: "0 -2px 20px rgba(30,42,74,0.08)", display: "flex", alignItems: "center", height: 72, zIndex: 100 }}>
      {tabs.map(({ id, label, Icon, active }) => (
        <button key={id} onClick={() => onTabChange(id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, border: "none", background: "transparent", cursor: "pointer", padding: "6px 4px" }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: active ? "#e8eaf0" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon active={active} />
          </div>
          <span style={{ fontSize: 10, fontWeight: active ? 700 : 400, color: active ? "#1e2a4a" : "#b0b8d0", fontFamily: "'Outfit', sans-serif" }}>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default function MapScreen({ user, onBack }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [radio, setRadio] = useState(2);
  const [seleccionado, setSeleccionado] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const markersRef = useRef([]);

  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: import.meta.env.VITE_MAPBOX_STYLE || "mapbox://styles/rosariocalvo/cmq5um0xt007201queia40i36",
      center: [-70.6483, -33.4569],
      zoom: 13,
    });
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([longitude, latitude]);
        map.current.flyTo({ center: [longitude, latitude], zoom: 14 });
        const el = document.createElement("div");
        el.style.cssText = "width:18px;height:18px;border-radius:50%;background:#1e2a4a;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);";
        new mapboxgl.Marker({ element: el }).setLngLat([longitude, latitude]).addTo(map.current);
      },
      () => {}
    );
  }, []);

  useEffect(() => { fetchPublicaciones(); }, [radio, userLocation]);

  async function fetchPublicaciones() {
    const { data } = await supabase.from("publicaciones").select("*").eq("estado", "activa");
    if (!data) return;
    let filtradas = data;
    if (userLocation) {
      filtradas = data.filter((p) => {
        if (!p.latitud || !p.longitud) return false;
        return distanciaKm(userLocation[1], userLocation[0], p.latitud, p.longitud) <= radio;
      });
    }
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];
    filtradas.forEach((p) => {
      if (!p.latitud || !p.longitud) return;
      const el = document.createElement("div");
      el.style.cssText = `width:32px;height:32px;border-radius:50%;background:${p.urgente ? "#e05060" : "#1e2a4a"};border:3px solid white;box-shadow:0 2px 10px rgba(0,0,0,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;`;
      el.innerHTML = p.urgente ? "🚨" : "💊";
      el.addEventListener("click", () => setSeleccionado(p));
      markersRef.current.push(new mapboxgl.Marker({ element: el }).setLngLat([p.longitud, p.latitud]).addTo(map.current));
    });
  }

  function distanciaKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function distanciaTexto(p) {
    if (!userLocation || !p.latitud) return "";
    const d = distanciaKm(userLocation[1], userLocation[0], p.latitud, p.longitud);
    return d < 1 ? `${(d * 1000).toFixed(0)} m` : `${d.toFixed(1)} km`;
  }

  function handleNavTab(tab) {
    if (tab === "inicio") onBack();
    else if (tab === "publicar") { onBack(); setTimeout(() => window.dispatchEvent(new CustomEvent("openPublicar")), 50); }
  }

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", height: "100vh", display: "flex", flexDirection: "column", fontFamily: "'Outfit', sans-serif", overflow: "hidden", background: "#f0f0f5" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ padding: "52px 24px 16px", background: "#f0f0f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <Logo size={32} />
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontSize: 13, color: "#1e2a4a", fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>HOLA, {nombre.toUpperCase()}</p>
            <div style={{ background: "#e8eaf0", borderRadius: 50, padding: "4px 12px", display: "inline-flex", alignItems: "center", gap: 5, marginTop: 4 }}>
              <span style={{ fontSize: 13 }}>🪙</span>
              <span style={{ fontWeight: 700, fontSize: 13, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>{dc} DC</span>
            </div>
          </div>
        </div>
        {/* Pills radio */}
        <div style={{ display: "flex", gap: 8 }}>
          {[2, 5, 10].map((r) => (
            <button key={r} onClick={() => setRadio(r)} style={{ padding: "8px 20px", borderRadius: 50, border: "none", background: radio === r ? "#1e2a4a" : "white", color: radio === r ? "white" : "#7b80a0", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "'Outfit', sans-serif", boxShadow: radio === r ? "none" : "0 1px 6px rgba(30,42,74,0.08)", transition: "all 0.15s" }}>
              {r} KM
            </button>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div ref={mapContainer} style={{ flex: 1, marginBottom: 72 }} />

      {/* Card seleccionado */}
      {seleccionado && (
        <div style={{ position: "fixed", bottom: 72, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "white", borderRadius: "24px 24px 0 0", padding: 24, boxShadow: "0 -4px 24px rgba(30,42,74,0.12)", zIndex: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <p style={{ margin: "0 0 4px", fontSize: 11, color: "#b0b8d0", textTransform: "uppercase", letterSpacing: 1 }}>CERCANO · {distanciaTexto(seleccionado)}</p>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>{seleccionado.nombre_insumo}</h3>
              <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", fontFamily: "'Outfit', sans-serif" }}>{seleccionado.mensaje || "Sin descripción adicional"}</p>
            </div>
            <button onClick={() => setSeleccionado(null)} style={{ background: "#f0f0f5", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16, color: "#7b80a0" }}>✕</button>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ flex: 1, padding: 14, background: "#1e2a4a", color: "white", border: "none", borderRadius: 50, fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
              Reservar canje
            </button>
            <button style={{ width: 50, height: 50, borderRadius: "50%", border: "1.5px solid #dde0ea", background: "white", fontSize: 20, cursor: "pointer" }}>♡</button>
          </div>
        </div>
      )}

      <BottomNav onTabChange={handleNavTab} />
    </div>
  );
}
