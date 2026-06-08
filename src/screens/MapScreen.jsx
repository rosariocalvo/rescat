import { useState, useEffect, useRef } from "react";

const MAPBOX_TOKEN = "pk.eyJ1Ijoicm9zYXJpb2NhbHZvIiwiYSI6ImNtcTV0cWNqNjAyeWI0OW9yM3k1czUxdGwifQ.vvfYtaplB7hQjmo9fqvPcg";

const MAPBOX_STYLE = "mapbox://styles/mapbox/light-v11";

const INSUMOS_MOCK = [
  { id: 1, lat: -33.4180, lng: -70.6060, titulo: "Insulina Novorapid Flexpen 100 UI/ML", usuario: "Cristina Fernandez - 5 Cartuchos 3 ML", distancia: "0.3", urgente: false },
  { id: 2, lat: -33.4220, lng: -70.6100, titulo: "Sensor Freestyle Libre 2", usuario: "Ana López - 2 sensores", distancia: "0.8", urgente: true },
  { id: 3, lat: -33.4150, lng: -70.6020, titulo: "Tiras Reactivas Accu-Chek", usuario: "Carlos M. - 100 tiras", distancia: "1.2", urgente: false },
];

export default function MapScreen() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [radio, setRadio] = useState(2);
  const [selectedInsumo, setSelectedInsumo] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

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
        // Aplicar colores morados RESCAT
        const layers = map.current.getStyle().layers;
        layers.forEach(layer => {
          if (layer.type === "fill") {
            if (layer.id.includes("land") || layer.id.includes("background")) {
              map.current.setPaintProperty(layer.id, "fill-color", "#f0f0f8");
            }
            if (layer.id.includes("building")) {
              map.current.setPaintProperty(layer.id, "fill-color", "#e0e0f0");
            }
            if (layer.id.includes("water")) {
              map.current.setPaintProperty(layer.id, "fill-color", "#c8c8ee");
            }
            if (layer.id.includes("park") || layer.id.includes("green")) {
              map.current.setPaintProperty(layer.id, "fill-color", "#d8d8f0");
            }
          }
          if (layer.type === "line") {
            if (layer.id.includes("road") || layer.id.includes("street")) {
              map.current.setPaintProperty(layer.id, "line-color", "#ffffff");
            }
          }
        });

        // Agregar marcadores
        INSUMOS_MOCK.forEach(insumo => {
          const el = document.createElement("div");
          el.style.cssText = `
            width: ${insumo.urgente ? 18 : 14}px;
            height: ${insumo.urgente ? 18 : 14}px;
            border-radius: 50%;
            background: ${insumo.urgente ? "#e05c5c" : "#1e2a4a"};
            border: 2px solid white;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          `;
          el.addEventListener("click", () => setSelectedInsumo(insumo));
          new window.mapboxgl.Marker(el)
            .setLngLat([insumo.lng, insumo.lat])
            .addTo(map.current);
        });

        setMapLoaded(true);
      });
    };
    document.head.appendChild(script);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div style={{ height: "100%", position: "relative", background: "#f0f0f5" }}>
      {/* Header */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        padding: "52px 20px 12px",
        background: "linear-gradient(to bottom, rgba(240,240,245,0.98) 80%, transparent)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <img src="/logo-vector.svg" alt="RESCAT" style={{ height: 30 }} />
          <div>
            <p style={{ margin: 0, fontSize: 12, color: "#aaa", textAlign: "right" }}>HOLA, ERICA</p>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 13 }}>🪙</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#1e2a4a" }}>240 DC</span>
            </div>
          </div>
        </div>

        {/* Filtros de radio */}
        <div style={{ display: "flex", gap: 8 }}>
          {[2, 5, 10].map(km => (
            <button
              key={km}
              onClick={() => setRadio(km)}
              style={{
                padding: "8px 20px",
                borderRadius: 20,
                border: "none",
                background: radio === km ? "#1e2a4a" : "rgba(255,255,255,0.9)",
                color: radio === km ? "white" : "#1e2a4a",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {km} KM
            </button>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />

      {/* Tarjeta insumo seleccionado */}
      {selectedInsumo && (
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
          background: "white",
          borderRadius: "20px 20px 0 0",
          padding: "20px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ background: "#1e2a4a", borderRadius: 6, padding: "4px 10px" }}>
              <span style={{ color: "white", fontSize: 12, fontWeight: 600 }}>CERCANO : {selectedInsumo.distancia} KM</span>
            </div>
            <button onClick={() => setSelectedInsumo(null)} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: 20 }}>×</button>
          </div>

          <div style={{ background: "#f8f8fc", borderRadius: 12, padding: 12, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center", height: 80 }}>
            <span style={{ fontSize: 13, color: "#7b7fd4" }}>📦 {selectedInsumo.titulo}</span>
          </div>

          <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a" }}>{selectedInsumo.titulo}</h3>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "#aaa" }}>{selectedInsumo.usuario}</p>

          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              flex: 1, padding: "14px", borderRadius: 10,
              border: "1.5px solid #e0e0f0", background: "white",
              color: "#1e2a4a", fontSize: 14, fontWeight: 600,
              fontFamily: "'Outfit', sans-serif", cursor: "pointer",
            }}>
              Reservar canje
            </button>
            <button style={{
              width: 48, height: 48, borderRadius: 10,
              border: "1.5px solid #e0e0f0", background: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}>
              🤍
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
