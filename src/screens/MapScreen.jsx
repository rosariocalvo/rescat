import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import mapboxgl from "mapbox-gl";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

// ─── íconos SVG exactos del diseño ────────────────────────────────────────

const IconBack = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/>
  </svg>
);

export default function MapScreen({ user, onBack }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [radio, setRadio] = useState(2);
  const [publicaciones, setPublicaciones] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const markersRef = useRef([]);

  const nombre = user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: import.meta.env.VITE_MAPBOX_STYLE || "mapbox://styles/mapbox/light-v11",
      center: [-70.6483, -33.4569],
      zoom: 13,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([longitude, latitude]);
        map.current.flyTo({ center: [longitude, latitude], zoom: 14 });

        new mapboxgl.Marker({ color: "#252E52" })
          .setLngLat([longitude, latitude])
          .addTo(map.current);
      },
      () => {}
    );
  }, []);

  useEffect(() => {
    fetchPublicaciones();
  }, [radio, userLocation]);

  async function fetchPublicaciones() {
    const { data } = await supabase
      .from("publicaciones")
      .select("*")
      .eq("estado", "activa");

    if (!data) return;

    let filtradas = data;
    if (userLocation) {
      filtradas = data.filter((p) => {
        if (!p.latitud || !p.longitud) return false;
        const d = distanciaKm(userLocation[1], userLocation[0], p.latitud, p.longitud);
        return d <= radio;
      });
    }

    setPublicaciones(filtradas);

    // Limpiar markers anteriores
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    filtradas.forEach((p) => {
      if (!p.latitud || !p.longitud) return;
      const el = document.createElement("div");
      el.style.cssText = `
        width: 32px; height: 32px; border-radius: 50%;
        background: ${p.urgente ? "#DC2626" : "#252E52"};
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        color: white; font-size: 13px; font-weight: 700;
      `;
      el.innerHTML = p.urgente ? "🚨" : "💊";
      el.addEventListener("click", () => setSeleccionado(p));

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([p.longitud, p.latitud])
        .addTo(map.current);
      markersRef.current.push(marker);
    });
  }

  function distanciaKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function distanciaTexto(p) {
    if (!userLocation || !p.latitud) return "";
    const d = distanciaKm(userLocation[1], userLocation[0], p.latitud, p.longitud);
    return d < 1 ? `${(d * 1000).toFixed(0)} m` : `${d.toFixed(1)} km`;
  }

  return (
    <div style={{
      maxWidth: 430, margin: "0 auto",
      height: "100vh", display: "flex", flexDirection: "column",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      background: "#F5F6FA", overflow: "hidden",
    }}>

      {/* Header */}
      <div style={{
        background: "#252E52", padding: "48px 20px 16px",
        color: "white",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <button
            onClick={onBack}
            style={{ background: "transparent", border: "none", cursor: "pointer", padding: 4 }}
          >
            <IconBack />
          </button>
          <div style={{ flex: 1, marginLeft: 8 }}>
            <p style={{ margin: 0, fontSize: 11, opacity: 0.7 }}>Hola,</p>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{nombre}</p>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 10, padding: "5px 12px",
            display: "flex", alignItems: "center", gap: 5,
          }}>
            <span>🪙</span>
            <span style={{ fontWeight: 700 }}>{dc}</span>
          </div>
        </div>

        {/* Pills de radio */}
        <div style={{ display: "flex", gap: 8 }}>
          {[2, 5, 10].map((r) => (
            <button
              key={r}
              onClick={() => setRadio(r)}
              style={{
                padding: "6px 16px", borderRadius: 20, border: "none",
                background: radio === r ? "white" : "rgba(255,255,255,0.2)",
                color: radio === r ? "#252E52" : "white",
                fontWeight: 600, fontSize: 13, cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {r} km
            </button>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div ref={mapContainer} style={{ flex: 1 }} />

      {/* Card seleccionado */}
      {seleccionado && (
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          maxWidth: 430, margin: "0 auto",
          background: "white", borderRadius: "20px 20px 0 0",
          padding: 20, boxShadow: "0 -4px 20px rgba(0,0,0,0.12)",
          zIndex: 10,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 0.5 }}>
                CERCANO: {distanciaTexto(seleccionado)}
              </p>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: "#252E52" }}>
                {seleccionado.nombre_insumo}
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#6B7280" }}>
                {seleccionado.mensaje || "Sin descripción"}
              </p>
            </div>
            <button
              onClick={() => setSeleccionado(null)}
              style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9CA3AF" }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button style={{
              flex: 1, padding: 13,
              background: "#252E52", color: "white",
              border: "none", borderRadius: 14,
              fontWeight: 700, fontSize: 14, cursor: "pointer",
            }}>
              Reservar canje
            </button>
            <button style={{
              width: 48, height: 48, borderRadius: 14,
              border: "2px solid #E5E7EB", background: "white",
              fontSize: 20, cursor: "pointer",
            }}>
              ♡
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
