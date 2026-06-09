import { useState, useEffect, useRef } from "react";

const MAPBOX_TOKEN = "pk.eyJ1Ijoicm9zYXJpb2NhbHZvIiwiYSI6ImNtcTV0cWNqNjAyeWI0OW9yM3k1czUxdGwifQ.vvfYtaplB7hQjmo9fqvPcg";
const MAPBOX_STYLE = "mapbox://styles/rosariocalvo/cmq76exby005s01qw8yh57wch";

const INSUMOS_MOCK = [
  { id: 1, lat: -33.4180, lng: -70.6060, titulo: "Insulina Novorapid Flexpen 100 UI/ML", usuario: "Cristina Fernandez - 5 Cartuchos 3 ML", distancia: "0.3", urgente: false },
  { id: 2, lat: -33.4220, lng: -70.6100, titulo: "Sensor Freestyle Libre 2", usuario: "Ana López - 2 sensores", distancia: "0.8", urgente: true },
  { id: 3, lat: -33.4150, lng: -70.6020, titulo: "Tiras Reactivas Accu-Chek", usuario: "Carlos M. - 100 tiras", distancia: "1.2", urgente: false },
];

const ZOOM_POR_RADIO = { 2: 14, 5: 12.5, 10: 11.5 };

export default function MapScreen({ user }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const userMarker = useRef(null);
  const [radio, setRadio] = useState(2);
  const [selectedInsumo, setSelectedInsumo] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const nombre = user?.user_metadata?.nombre_completo?.split(" ")[0]?.toUpperCase() ||
    user?.email?.split("@")[0]?.toUpperCase() || "USUARIO";

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.longitude, pos.coords.latitude];
        setUserLocation(coords);
        if (map.current) {
          map.current.flyTo({ center: coords, zoom: ZOOM_POR_RADIO[radio] });
          if (userMarker.current) userMarker.current.remove();
          const el = document.createElement("div");
          el.style.cssText = `width:16px;height:16px;border-radius:50%;background:#7b7fd4;border:3px solid white;box-shadow:0 0 0 3px rgba(123,127,212,0.3);`;
          userMarker.current = new window.mapboxgl.Marker(el).setLngLat(coords).addTo(map.current);
        }
      },
      () => {}
    );
  }, []);

  useEffect(() => {
    if (map.current && userLocation) {
      map.current.flyTo({ center: userLocation, zoom: ZOOM_POR_RADIO[radio], duration: 800 });
    }
  }, [radio]);

  useEffect(() => {
    if (map.current) return;

    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js";
    script.onload = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css";
      document.head.appendChild(link);

      window.mapboxgl.accessToken = MAPBOX_TOKEN;
      map.current = new window.mapboxgl.Map({
        container: mapContainer.current,
        style: MAPBOX_STYLE,
        center: [-70.6060, -33.4180],
        zoom: 14,
      });

      map.current.on("load", () => {
        INSUMOS_MOCK.forEach(insumo => {
          const el = document.createElement("div");
          el.style.cssText = `
            width:${insumo.urgente ? 16 : 12}px;
            height:${insumo.urgente ? 16 : 12}px;
            border-radius:50%;
            background:${insumo.urgente ? "#e05c5c" : "#2d3561"};
            border:2px solid white;
            cursor:pointer;
            box-shadow:0 2px 6px rgba(0,0,0,0.25);
          `;
          el.addEventListener("click", () => setSelectedInsumo(insumo));
          new window.mapboxgl.Marker(el).setLngLat([insumo.lng, insumo.lat]).addTo(map.current);
        });
      });
    };
    document.head.appendChild(script);

    return () => { if (map.current) { map.current.remove(); map.current = null; } };
  }, []);

  return (
    <div style={{ height: "100%", position: "relative", background: "#eeeef8" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        padding: "48px 20px 12px",
        background: "linear-gradient(to bottom, rgba(238,238,248,0.98) 75%, transparent)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <img src="/logo-vector.svg" alt="RESCAT" style={{ height: 36 }} />
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontSize: 12, color: "#7b7fd4", fontFamily: "'Outfit', sans-serif" }}>HOLA, {nombre}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end" }}>
              <span style={{ fontSize: 13 }}>🌐</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>240 DC</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[2, 5, 10].map(km => (
            <button key={km} onClick={() => setRadio(km)} style={{
              padding: "8px 18px", borderRadius: 20, border: "none",
              background: radio === km ? "#1e2a4a" : "rgba(255,255,255,0.9)",
              color: radio === km ? "white" : "#1e2a4a",
              fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif",
              cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}>
              {km} KM
            </button>
          ))}
        </div>
      </div>

      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />

      {selectedInsumo && (
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
          background: "white", borderRadius: "20px 20px 0 0",
          padding: "20px 20px 32px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ background: "#1e2a4a", borderRadius: 6, padding: "5px 12px" }}>
              <span style={{ color: "white", fontSize: 12, fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>CERCANO : {selectedInsumo.distancia} KM</span>
            </div>
            <button onClick={() => setSelectedInsumo(null)} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: 22 }}>×</button>
          </div>
          <div style={{ background: "#f0f0f8", borderRadius: 12, padding: "16px", marginBottom: 14, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 13, color: "#7b7fd4", fontFamily: "'Outfit', sans-serif" }}>📦 Foto del insumo</span>
          </div>
          <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>{selectedInsumo.titulo}</h3>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "#aaa", fontFamily: "'Outfit', sans-serif" }}>{selectedInsumo.usuario}</p>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              flex: 1, padding: "14px", borderRadius: 10,
              border: "1.5px solid #e0e0f0", background: "white",
              color: "#1e2a4a", fontSize: 14, fontWeight: 600,
              fontFamily: "'Outfit', sans-serif", cursor: "pointer",
            }}>Reservar canje</button>
            <button style={{
              width: 48, height: 48, borderRadius: 10,
              border: "1.5px solid #e0e0f0", background: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", fontSize: 18,
            }}>🤍</button>
          </div>
        </div>
      )}
    </div>
  );
}
