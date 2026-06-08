import { useState } from "react";

export default function PublicarScreen() {
  const [vista, setVista] = useState("elegir");

  if (vista === "compartir") return <CompartirForm onBack={() => setVista("elegir")} />;
  if (vista === "solicitar") return <SolicitarForm onBack={() => setVista("elegir")} />;

  return (
    <div style={{ padding: "52px 24px 24px", fontFamily: "'Outfit', sans-serif", background: "#f0f0f5", minHeight: "100%" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <img src="/logo-vector.svg" alt="RESCAT" style={{ height: 30 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 13 }}>🪙</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#1e2a4a" }}>240 DC</span>
        </div>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1e2a4a", margin: "0 0 8px" }}>¿Qué quieres hacer?</h2>
      <p style={{ fontSize: 15, color: "#7b7fd4", margin: "0 0 32px", lineHeight: 1.5 }}>Elige la opción que mejor se adapte a lo que necesitas.</p>

      {/* Compartir */}
      <div
        onClick={() => setVista("compartir")}
        style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 16, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", border: "1.5px solid #e8e8f8", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      >
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#eeeeff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="#7b7fd4" strokeWidth="1.8" fill="none"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#7b7fd4" strokeWidth="1.8"/></svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a" }}>Compartir insumo</h3>
          <p style={{ margin: 0, fontSize: 13, color: "#aaa", lineHeight: 1.4 }}>Tengo insumos disponibles para ayudar a otro miembro.</p>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #e0e0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#7b7fd4", fontSize: 16 }}>→</span>
        </div>
      </div>

      {/* Solicitar */}
      <div
        onClick={() => setVista("solicitar")}
        style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 24, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", border: "1.5px solid #ffe8e8", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      >
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#fff0f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#e05c5c" strokeWidth="1.8" fill="none"/><path d="M12 8v4M10 10h4" stroke="#e05c5c" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a" }}>Solicitar ayuda</h3>
          <p style={{ margin: 0, fontSize: 13, color: "#aaa", lineHeight: 1.4 }}>Necesito conseguir un insumo con urgencia.</p>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #ffe0e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#e05c5c", fontSize: 16 }}>→</span>
        </div>
      </div>
    </div>
  );
}

function CompartirForm({ onBack }) {
  return (
    <div style={{ padding: "52px 24px 24px", fontFamily: "'Outfit', sans-serif", background: "#f0f0f5", minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontSize: 20 }}>‹</button>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1e2a4a" }}>Compartir insumo</h2>
      </div>

      {/* Valor estimado */}
      <div style={{ background: "#eeeeff", borderRadius: 12, padding: "14px 16px", marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#7b7fd4", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 16 }}>🪙</span>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 12, color: "#7b7fd4" }}>Valor estimado</p>
          <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>Basado en publicaciones similares</p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 4 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#7b7fd4" }}>50 DC</span>
            <span style={{ fontSize: 13, color: "#aaa" }}>🌐 240 DC</span>
          </div>
        </div>
      </div>

      {[
        { label: "Foto del insumo", type: "file" },
        { label: "Tipo de insumo", type: "select", options: ["Insulina", "Sensor", "Tiras reactivas", "Otro"] },
        { label: "Estado del producto", type: "select", options: ["Sellado", "Abierto", "Por vencer"] },
        { label: "Cantidad disponible", type: "text", placeholder: "3 cajas" },
        { label: "Fecha de vencimiento", type: "text", placeholder: "MM/AAAA" },
        { label: "Ubicación", type: "text", placeholder: "Las Condes, Santiago" },
      ].map((field, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>{field.label}</label>
          {field.type === "select" ? (
            <select style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none" }}>
              {field.options.map(o => <option key={o}>{o}</option>)}
            </select>
          ) : field.type === "file" ? (
            <div style={{ border: "2px dashed #c0c0e0", borderRadius: 12, padding: "24px", textAlign: "center", background: "white", cursor: "pointer" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>📷</div>
              <p style={{ margin: 0, fontSize: 13, color: "#7b7fd4", fontWeight: 500 }}>Subir foto</p>
              <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>JPG, PNG (máx. 5MB)</p>
            </div>
          ) : (
            <input type="text" placeholder={field.placeholder} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", boxSizing: "border-box" }} />
          )}
        </div>
      ))}

      <button style={{ width: "100%", padding: "16px", borderRadius: 10, border: "none", background: "#1e2a4a", color: "white", fontSize: 16, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
        Publicar insumo
      </button>
    </div>
  );
}

function SolicitarForm({ onBack }) {
  const [urgencia, setUrgencia] = useState("normal");

  return (
    <div style={{ padding: "52px 24px 24px", fontFamily: "'Outfit', sans-serif", background: "#f0f0f5", minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontSize: 20 }}>‹</button>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1e2a4a" }}>Solicitar ayuda</h2>
      </div>

      {/* Valor estimado */}
      <div style={{ background: "#fff0f0", borderRadius: 12, padding: "14px 16px", marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#e05c5c", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 16 }}>🪙</span>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 12, color: "#e05c5c" }}>Valor estimado</p>
          <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>Basado en publicaciones similares</p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 4 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#e05c5c" }}>120 DC</span>
            <span style={{ fontSize: 13, color: "#aaa" }}>🌐 240 DC</span>
          </div>
        </div>
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>¿Qué insumo necesitas?</label>
      <select style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", marginBottom: 20 }}>
        {["Sensor Freestyle Libre 2", "Insulina Rápida", "Tiras reactivas", "Otro"].map(o => <option key={o}>{o}</option>)}
      </select>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 10 }}>Urgencia</label>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {["normal", "urgente"].map(u => (
          <button key={u} onClick={() => setUrgencia(u)} style={{
            flex: 1, padding: "12px", borderRadius: 10,
            border: `1.5px solid ${urgencia === u ? (u === "urgente" ? "#e05c5c" : "#7b7fd4") : "#e0e0f0"}`,
            background: urgencia === u ? (u === "urgente" ? "#fff0f0" : "#f0f0ff") : "white",
            color: urgencia === u ? (u === "urgente" ? "#e05c5c" : "#7b7fd4") : "#aaa",
            fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          }}>
            {u === "urgente" && <span style={{ width: 8, height: 8, borderRadius: "50%", background: urgencia === "urgente" ? "#e05c5c" : "#ddd", display: "inline-block" }} />}
            {u.charAt(0).toUpperCase() + u.slice(1)}
          </button>
        ))}
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Mensaje opcional</label>
      <textarea placeholder="Mi sensor se despegó hoy y necesito uno lo antes posible." style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", resize: "none", height: 90, boxSizing: "border-box", marginBottom: 24 }} />

      <button style={{ width: "100%", padding: "16px", borderRadius: 10, border: "none", background: "#e05c5c", color: "white", fontSize: 16, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
        Solicitar ayuda
      </button>
    </div>
  );
}
