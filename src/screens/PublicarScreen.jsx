import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function PublicarScreen({ user }) {
  const [vista, setVista] = useState("elegir");
  if (vista === "compartir") return <CompartirForm onBack={() => setVista("elegir")} user={user} />;
  if (vista === "solicitar") return <SolicitarForm onBack={() => setVista("elegir")} user={user} />;

  return (
    <div style={{ padding: "52px 24px 24px", fontFamily: "'Outfit', sans-serif", background: "#f5f5fa", minHeight: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <img src="/logo-vector.svg" alt="RESCAT" style={{ height: 40 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "white", borderRadius: 20, padding: "6px 14px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#7b7fd4" strokeWidth="1.8"/><path d="M12 8v4l2 2" stroke="#7b7fd4" strokeWidth="1.8" strokeLinecap="round"/></svg>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1e2a4a" }}>240 DC</span>
        </div>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1e2a4a", margin: "0 0 8px" }}>¿Qué quieres hacer?</h2>
      <p style={{ fontSize: 15, color: "#7b7fd4", margin: "0 0 32px", lineHeight: 1.5 }}>Elige la opción que mejor se adapte a lo que necesitas.</p>

      <div onClick={() => setVista("compartir")} style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 16, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", border: "1.5px solid #e0e0f8" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#eeeeff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#7b7fd4" strokeWidth="1.5" fill="none"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="#7b7fd4" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a" }}>Compartir insumo</h3>
          <p style={{ margin: 0, fontSize: 13, color: "#aaa", lineHeight: 1.4 }}>Tengo insumos disponibles para ayudar a otro miembro.</p>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #e0e0f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#7b7fd4" }}>→</span>
        </div>
      </div>

      <div onClick={() => setVista("solicitar")} style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 24, display: "flex", alignItems: "center", gap: 16, cursor: "pointer", border: "1.5px solid #ffe0e0" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#fff0f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#e05c5c" strokeWidth="1.5" fill="none"/><path d="M12 9v4M10 11h4" stroke="#e05c5c" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a" }}>Solicitar ayuda</h3>
          <p style={{ margin: 0, fontSize: 13, color: "#aaa", lineHeight: 1.4 }}>Necesito conseguir un insumo con urgencia.</p>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #ffe0e0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#e05c5c" }}>→</span>
        </div>
      </div>

      <div style={{ background: "white", borderRadius: 12, padding: "14px 16px", border: "1px solid #e8e8f0", display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#7b7fd4" strokeWidth="1.5"/><path d="M12 8v4M12 15v1" stroke="#7b7fd4" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <span style={{ fontSize: 13, color: "#aaa" }}>Tu identidad permanecerá oculta hasta que un miembro acepte ayudarte.</span>
      </div>
    </div>
  );
}

function CompartirForm({ onBack, user }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ nombre_insumo: "Insulina", estado: "Sellado", cantidad: "", fecha_vencimiento: "", ubicacion: "" });

  const handleSubmit = async () => {
    setLoading(true);
    // Obtener ubicación
    let latitud = -33.4180, longitud = -70.6060;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
      latitud = pos.coords.latitude;
      longitud = pos.coords.longitude;
    } catch {}

    const { error } = await supabase.from("publicaciones").insert({
      user_id: user?.id,
      tipo: "insumo",
      nombre_insumo: form.nombre_insumo,
      urgente: false,
      anonimo: false,
      latitud,
      longitud,
      estado: form.estado,
      cantidad: form.cantidad,
      fecha_vencimiento: form.fecha_vencimiento,
      mensaje: "",
    });
    setLoading(false);
    if (!error) setSuccess(true);
  };

  if (success) return (
    <div style={{ minHeight: "100%", background: "#f5f5fa", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", marginBottom: 12 }}>¡Insumo publicado!</h2>
      <p style={{ fontSize: 14, color: "#7b7fd4", textAlign: "center" }}>Ya aparece en el mapa para que otros miembros puedan encontrarlo.</p>
      <button onClick={onBack} style={{ marginTop: 32, width: "100%", padding: "16px", borderRadius: 10, border: "none", background: "#1e2a4a", color: "white", fontSize: 15, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Volver</button>
    </div>
  );

  return (
    <div style={{ padding: "52px 24px 40px", fontFamily: "'Outfit', sans-serif", background: "#f5f5fa", minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontSize: 22, padding: 0 }}>‹</button>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1e2a4a" }}>Compartir insumo</h2>
      </div>

      <div style={{ background: "#eeeeff", borderRadius: 12, padding: "14px 16px", marginBottom: 24, display: "flex", alignItems: "center", gap: 14, border: "1px solid #ddddf5" }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#7b7fd4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/><path d="M12 8v4l2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>Valor estimado</p>
          <p style={{ margin: 0, fontSize: 12, color: "#7b7fd4" }}>Basado en publicaciones similares</p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 4 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#7b7fd4" }}>50 DC</span>
            <span style={{ fontSize: 13, color: "#aaa" }}>🌐 240 DC</span>
          </div>
        </div>
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Foto del insumo</label>
      <div style={{ border: "2px dashed #c0c0e0", borderRadius: 12, padding: "28px 16px", textAlign: "center", background: "white", cursor: "pointer", marginBottom: 20 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 8px", display: "block" }}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#7b7fd4" strokeWidth="1.5" fill="none"/><circle cx="12" cy="13" r="4" stroke="#7b7fd4" strokeWidth="1.5"/></svg>
        <p style={{ margin: 0, fontSize: 14, color: "#7b7fd4", fontWeight: 500 }}>Subir foto</p>
        <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>JPG, PNG (máx. 5MB)</p>
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Tipo de insumo</label>
      <select value={form.nombre_insumo} onChange={e => setForm({...form, nombre_insumo: e.target.value})} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", marginBottom: 20 }}>
        {["Insulina", "Sensor Freestyle", "Tiras reactivas", "Lancetas", "Otro"].map(o => <option key={o}>{o}</option>)}
      </select>

      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Estado del producto</label>
          <select value={form.estado} onChange={e => setForm({...form, estado: e.target.value})} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none" }}>
            {["Sellado", "Abierto", "Por vencer"].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Cantidad disponible</label>
          <input type="text" placeholder="3 cajas" value={form.cantidad} onChange={e => setForm({...form, cantidad: e.target.value})} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", boxSizing: "border-box" }} />
        </div>
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Fecha de vencimiento</label>
      <div style={{ position: "relative", marginBottom: 20 }}>
        <input type="text" placeholder="12 / 2027" value={form.fecha_vencimiento} onChange={e => setForm({...form, fecha_vencimiento: e.target.value})} style={{ width: "100%", padding: "12px 14px 12px 40px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", boxSizing: "border-box" }} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}><rect x="3" y="4" width="18" height="18" rx="2" stroke="#7b7fd4" strokeWidth="1.5" fill="none"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#7b7fd4" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Ubicación</label>
      <div style={{ position: "relative", marginBottom: 32 }}>
        <input type="text" placeholder="Las Condes, Santiago" value={form.ubicacion} onChange={e => setForm({...form, ubicacion: e.target.value})} style={{ width: "100%", padding: "12px 40px 12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", boxSizing: "border-box" }} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)" }}><circle cx="12" cy="12" r="3" stroke="#7b7fd4" strokeWidth="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#7b7fd4" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>

      <button onClick={handleSubmit} disabled={loading} style={{ width: "100%", padding: "16px", borderRadius: 10, border: "none", background: loading ? "#ccc" : "#1e2a4a", color: "white", fontSize: 16, fontWeight: 600, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer" }}>
        {loading ? "Publicando..." : "Publicar insumo"}
      </button>
    </div>
  );
}

function SolicitarForm({ onBack, user }) {
  const [urgencia, setUrgencia] = useState("normal");
  const [anonimo, setAnonimo] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [nombreInsumo, setNombreInsumo] = useState("Sensor Freestyle Libre 2");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (anonimo === null) {
      setError("Por favor elige cómo quieres publicar tu solicitud.");
      return;
    }
    setError("");
    setLoading(true);

    let latitud = -33.4180, longitud = -70.6060;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
      latitud = pos.coords.latitude;
      longitud = pos.coords.longitude;
    } catch {}

    const { error: dbError } = await supabase.from("publicaciones").insert({
      user_id: user?.id,
      tipo: "solicitud",
      nombre_insumo: nombreInsumo,
      urgente: urgencia === "urgente",
      anonimo,
      latitud,
      longitud,
      estado: "",
      cantidad: "",
      fecha_vencimiento: "",
      mensaje,
    });
    setLoading(false);
    if (!dbError) setSuccess(true);
  };

  if (success) return (
    <div style={{ minHeight: "100%", background: "#f5f5fa", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#fff0f0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#e05c5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", marginBottom: 12 }}>¡Solicitud enviada!</h2>
      <p style={{ fontSize: 14, color: "#7b7fd4", textAlign: "center" }}>Tu solicitud ya aparece en el mapa para que otros miembros puedan ayudarte.</p>
      <button onClick={onBack} style={{ marginTop: 32, width: "100%", padding: "16px", borderRadius: 10, border: "none", background: "#e05c5c", color: "white", fontSize: 15, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Volver</button>
    </div>
  );

  return (
    <div style={{ padding: "52px 24px 40px", fontFamily: "'Outfit', sans-serif", background: "#f5f5fa", minHeight: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontSize: 22, padding: 0 }}>‹</button>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1e2a4a" }}>Solicitar ayuda</h2>
      </div>

      <div style={{ background: "#fff5f5", borderRadius: 12, padding: "14px 16px", marginBottom: 24, display: "flex", alignItems: "center", gap: 14, border: "1px solid #ffe0e0" }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#e05c5c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/><path d="M12 8v4l2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>Valor estimado</p>
          <p style={{ margin: 0, fontSize: 12, color: "#e05c5c" }}>Basado en publicaciones similares</p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 4 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#e05c5c" }}>120 DC</span>
            <span style={{ fontSize: 13, color: "#aaa" }}>🌐 240 DC</span>
          </div>
        </div>
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>¿Qué insumo necesitas?</label>
      <select value={nombreInsumo} onChange={e => setNombreInsumo(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", marginBottom: 20 }}>
        {["Sensor Freestyle Libre 2", "Insulina Rápida", "Insulina Lenta", "Tiras reactivas", "Lancetas", "Otro"].map(o => <option key={o}>{o}</option>)}
      </select>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 10 }}>Urgencia</label>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {[{ id: "normal", label: "Normal" }, { id: "urgente", label: "Urgente" }].map(u => (
          <button key={u.id} onClick={() => setUrgencia(u.id)} style={{
            flex: 1, padding: "12px", borderRadius: 10,
            border: `1.5px solid ${urgencia === u.id ? (u.id === "urgente" ? "#e05c5c" : "#7b7fd4") : "#e0e0f0"}`,
            background: urgencia === u.id ? (u.id === "urgente" ? "#fff0f0" : "#f0f0ff") : "white",
            color: urgencia === u.id ? (u.id === "urgente" ? "#e05c5c" : "#7b7fd4") : "#aaa",
            fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: urgencia === u.id ? (u.id === "urgente" ? "#e05c5c" : "#7b7fd4") : "#ddd" }} />
            {u.label}
          </button>
        ))}
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 8 }}>Mensaje opcional</label>
      <div style={{ position: "relative", marginBottom: 20 }}>
        <textarea value={mensaje} onChange={e => setMensaje(e.target.value)} maxLength={150} placeholder="Mi sensor se despegó hoy y necesito uno lo antes posible." style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e0e0f0", background: "white", fontSize: 14, fontFamily: "inherit", color: "#1e2a4a", outline: "none", resize: "none", height: 100, boxSizing: "border-box" }} />
        <span style={{ position: "absolute", bottom: 10, right: 14, fontSize: 11, color: "#aaa" }}>{mensaje.length} / 150</span>
      </div>

      <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a", display: "block", marginBottom: 10 }}>¿Cómo quieres publicar esta solicitud?</label>
      {[
        { val: false, label: "Con mi nombre", desc: "Tu nombre será visible para otros miembros" },
        { val: true, label: "De forma anónima", desc: "Tu identidad permanecerá oculta" },
      ].map(op => (
        <div key={String(op.val)} onClick={() => setAnonimo(op.val)} style={{
          background: "white", borderRadius: 10,
          border: `1.5px solid ${anonimo === op.val ? "#7b7fd4" : "#e0e0f0"}`,
          padding: "12px 14px", marginBottom: 10,
          display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
        }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${anonimo === op.val ? "#7b7fd4" : "#ddd"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {anonimo === op.val && <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#7b7fd4" }} />}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1e2a4a" }}>{op.label}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>{op.desc}</p>
          </div>
        </div>
      ))}

      {error && <p style={{ color: "#e05c5c", fontSize: 13, marginBottom: 12 }}>{error}</p>}

      <button onClick={handleSubmit} disabled={loading} style={{ width: "100%", padding: "16px", borderRadius: 10, border: "none", background: loading ? "#ccc" : "#e05c5c", color: "white", fontSize: 16, fontWeight: 600, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer", marginTop: 8 }}>
        {loading ? "Enviando..." : "Solicitar ayuda"}
      </button>
    </div>
  );
}
