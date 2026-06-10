import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Logo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M40 8C22.3 8 8 22.3 8 40s14.3 32 32 32 32-14.3 32-32S57.7 8 40 8z" fill="#e8e8f4"/>
    <path d="M40 20c-2.2 0-4 1.8-4 4v12H24c-2.2 0-4 1.8-4 4s1.8 4 4 4h12v12c0 2.2 1.8 4 4 4s4-1.8 4-4V44h12c2.2 0 4-1.8 4-4s-1.8-4-4-4H44V24c0-2.2-1.8-4-4-4z" fill="#7b7fd4"/>
  </svg>
);

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

        // Marcador usuario
        const el = document.createElement("div");
        el.style.cssText = `
          width: 20px; height: 20px; border-radius: 50%;
          background: #1e2a4a; border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        `;
        new mapboxgl.Marker({ element: el })
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
      .from("publicaciones").select("*").eq("estado", "activa");
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
      el.style.cssText = `
        width: 36px; height: 36px; border-radius: 50%;
        background: ${p.urgente ? "#e05555" : "#7b7fd4"};
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px;
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
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
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
      fontFamily: "'Outfit', sans-serif", overflow: "hidden",
      background: "#f0f0f5",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ padding: "52px 24px 16px", background: "#f0f0f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <Logo size={32} />
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontSize: 13, color: "#1e2a4a", fontWeight: 600 }}>Hola, {nombre}</p>
            <div style={{
              background: "#e8e8f4", borderRadius: 50,
              padding: "4px 12px", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4,
            }}>
              <span style={{ fontSize: 14 }}>🪙</span>
              <span style={{ fontWeight: 700, fontSize: 13, color: "#1e2a4a" }}>{dc} DC</span>
            </div>
          </div>
        </div>

        {/* Pills radio */}
        <div style={{ display: "flex", gap: 8 }}>
          {[2, 5, 10].map((r) => (
            <button
              key={r}
              onClick={() => setRadio(r)}
              style={{
                padding: "8px 20px", borderRadius: 50, border: "none",
                background: radio === r ? "#1e2a4a" : "white",
                color: radio === r ? "white" : "#7b7fd4",
                fontWeight: 600, fontSize: 13, cursor: "pointer",
                fontFamily: "'Outfit', sans-serif",
                boxShadow: radio === r ? "none" : "0 1px 6px rgba(0,0,0,0.06)",
                transition: "all 0.15s",
              }}
            >
              {r} KM
            </button>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div ref={mapContainer} style={{ flex: 1 }} />

      {/* Card seleccionado */}
      {seleccionado && (
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "100%", maxWidth: 430,
          background: "white", borderRadius: "24px 24px 0 0",
          padding: 24, boxShadow: "0 -4px 24px rgba(0,0,0,0.1)",
          zIndex: 10,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: 11, color: "#b0b0c8", textTransform: "uppercase", letterSpacing: 1 }}>
                CERCANO · {distanciaTexto(seleccionado)}
              </p>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>
                {seleccionado.nombre_insumo}
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#7b7fd4", fontFamily: "'Outfit', sans-serif" }}>
                {seleccionado.mensaje || "Sin descripción adicional"}
              </p>
            </div>
            <button onClick={() => setSeleccionado(null)}
              style={{ background: "#f0f0f5", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>
              ✕
            </button>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              flex: 1, padding: 14,
              background: "#1e2a4a", color: "white",
              border: "none", borderRadius: 50,
              fontWeight: 600, fontSize: 14, cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
            }}>
              Reservar canje
            </button>
            <button style={{
              width: 50, height: 50, borderRadius: "50%",
              border: "1.5px solid #e0e0f0", background: "white",
              fontSize: 20, cursor: "pointer",
            }}>
              ♡
            </button>
          </div>
        </div>
      )}

      {/* Botón volver */}
      <button
        onClick={onBack}
        style={{
          position: "absolute", top: 52, left: 24,
          background: "white", border: "none", borderRadius: "50%",
          width: 40, height: 40, cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18,
        }}
      >
        ←
      </button>
    </div>
  );
}
