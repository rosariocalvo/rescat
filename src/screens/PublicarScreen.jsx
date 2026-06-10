import { useState } from "react";
import { supabase } from "../supabase";

export default function PublicarScreen({ user, onBack }) {
  const [modo, setModo] = useState(null); // "compartir" | "solicitar"
  const [form, setForm] = useState({
    nombre_insumo: "",
    tipo_insumo: "",
    cantidad: "",
    estado: "sellado",
    fecha_vencimiento: "",
    urgente: false,
    mensaje: "",
    anonimo: null,
    ubicacion_manual: "",
    usar_ubicacion_manual: false,
  });
  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");

  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;

  async function obtenerUbicacion() {
    return new Promise((resolve) => {
      navigator.geolocation?.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => resolve({ lat: null, lng: null })
      );
    });
  }

  async function handleSubmit() {
    setError("");
    if (!form.nombre_insumo.trim()) { setError("Escribe el nombre del insumo."); return; }
    if (modo === "solicitar" && form.anonimo === null) { setError("Elige cómo quieres publicar."); return; }

    setLoading(true);
    let lat = null, lng = null;

    if (!form.usar_ubicacion_manual) {
      const pos = await obtenerUbicacion();
      lat = pos.lat; lng = pos.lng;
    }

    const { error: dbError } = await supabase.from("publicaciones").insert([{
      user_id: user?.id,
      tipo: modo,
      nombre_insumo: form.nombre_insumo,
      urgente: form.urgente,
      anonimo: modo === "solicitar" ? form.anonimo : false,
      latitud: lat,
      longitud: lng,
      estado: "activa",
      cantidad: form.cantidad ? parseInt(form.cantidad) : null,
      fecha_vencimiento: form.fecha_vencimiento || null,
      mensaje: form.mensaje,
    }]);

    setLoading(false);
    if (dbError) setError("Ocurrió un error. Intenta de nuevo.");
    else setExito(true);
  }

  const s = {
    screen: { maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f0f0f5", fontFamily: "'Outfit', sans-serif" },
    label: { display: "block", fontSize: 13, fontWeight: 600, color: "#1e2a4a", marginBottom: 6 },
    input: { width: "100%", padding: "12px 16px", borderRadius: 14, border: "1.5px solid #e0e0f0", fontSize: 14, color: "#1e2a4a", background: "white", marginBottom: 16, boxSizing: "border-box", outline: "none", fontFamily: "'Outfit', sans-serif" },
  };

  if (exito) return (
    <div style={s.screen}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", padding: 32, textAlign: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#e8e8f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, marginBottom: 20 }}>✅</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", marginBottom: 8, fontFamily: "'Outfit', sans-serif" }}>¡Publicado!</h2>
        <p style={{ color: "#7b7fd4", marginBottom: 32, fontFamily: "'Outfit', sans-serif" }}>Tu publicación ya está visible en el mapa.</p>
        <button onClick={onBack} style={{ padding: "14px 40px", background: "#1e2a4a", color: "white", border: "none", borderRadius: 50, fontWeight: 600, fontSize: 15, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
          Volver al inicio
        </button>
      </div>
    </div>
  );

  if (!modo) return (
    <div style={s.screen}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ padding: "52px 24px 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <p style={{ margin: 0, fontSize: 13, color: "#7b7fd4" }}>Hola, {nombre}</p>
          </div>
          <div style={{ background: "#e8e8f4", borderRadius: 50, padding: "6px 14px", display: "flex", alignItems: "center", gap: 6 }}>
            <span>🪙</span>
            <span style={{ fontWeight: 700, fontSize: 13, color: "#1e2a4a" }}>{dc} DC</span>
          </div>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1e2a4a", margin: "0 0 6px" }}>¿Qué quieres hacer?</h2>
        <p style={{ color: "#7b7fd4", fontSize: 14, margin: "0 0 32px" }}>Elige la opción que mejor se adapte a lo que necesitas.</p>

        {/* Card Compartir */}
        <button onClick={() => setModo("compartir")} style={{
          width: "100%", background: "white", borderRadius: 20, padding: 20, marginBottom: 16,
          border: "1.5px solid #e0e0f0", cursor: "pointer", textAlign: "left",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "#e8e8f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>📦</div>
            <div>
              <p style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>Compartir insumo</p>
              <p style={{ margin: 0, fontSize: 13, color: "#7b7fd4", fontFamily: "'Outfit', sans-serif" }}>Tengo insumos disponibles para ayudar.</p>
            </div>
          </div>
          <span style={{ color: "#b0b0c8", fontSize: 20 }}>›</span>
        </button>

        {/* Card Solicitar */}
        <button onClick={() => setModo("solicitar")} style={{
          width: "100%", background: "white", borderRadius: 20, padding: 20,
          border: "1.5px solid #ffe0e0", cursor: "pointer", textAlign: "left",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>🤝</div>
            <div>
              <p style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>Solicitar ayuda</p>
              <p style={{ margin: 0, fontSize: 13, color: "#7b7fd4", fontFamily: "'Outfit', sans-serif" }}>Necesito conseguir un insumo con urgencia.</p>
            </div>
          </div>
          <span style={{ color: "#b0b0c8", fontSize: 20 }}>›</span>
        </button>

        {/* Info */}
        <div style={{ marginTop: 16, background: "white", borderRadius: 14, padding: "12px 16px", border: "1.5px solid #e0e0f0", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18, color: "#7b7fd4" }}>ℹ️</span>
          <p style={{ margin: 0, fontSize: 12, color: "#b0b0c8", fontFamily: "'Outfit', sans-serif" }}>
            Tu identidad permanecerá oculta hasta que un miembro acepte ayudarte.
          </p>
        </div>
      </div>
    </div>
  );

  const esCompartir = modo === "compartir";

  return (
    <div style={s.screen}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ padding: "52px 24px 100px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <button onClick={() => setModo(null)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#1e2a4a" }}>←</button>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>
            {esCompartir ? "Compartir insumo" : "Solicitar ayuda"}
          </h2>
          <span style={{
            marginLeft: "auto", borderRadius: 50, padding: "4px 12px", fontSize: 13, fontWeight: 700,
            background: esCompartir ? "#e8e8f4" : "#fff0f0",
            color: esCompartir ? "#7b7fd4" : "#e05555",
            fontFamily: "'Outfit', sans-serif",
          }}>
            {esCompartir ? "+50 DC" : "−120 DC"}
          </span>
        </div>

        {esCompartir && (
          <>
            {/* Foto insumo */}
            <div style={{ border: "2px dashed #d0d0e8", borderRadius: 16, padding: "28px 20px", textAlign: "center", marginBottom: 20, background: "white", cursor: "pointer" }}>
              <div style={{ fontSize: 32, color: "#b0b0c8", marginBottom: 8 }}>📷</div>
              <p style={{ margin: "0 0 4px", color: "#7b7fd4", fontSize: 14, fontWeight: 500, fontFamily: "'Outfit', sans-serif" }}>Subir foto</p>
              <p style={{ margin: 0, color: "#b0b0c8", fontSize: 12, fontFamily: "'Outfit', sans-serif" }}>JPG, PNG (máx. 5MB)</p>
            </div>
          </>
        )}

        {/* Nombre insumo */}
        <label style={s.label}>¿Qué insumo {esCompartir ? "tienes" : "necesitas"}? *</label>
        <input value={form.nombre_insumo} onChange={(e) => setForm({ ...form, nombre_insumo: e.target.value })}
          placeholder="Ej: Insulina glargina, Sensor Freestyle..." style={s.input} />

        {/* Tipo insumo */}
        <label style={s.label}>Tipo de insumo</label>
        <select value={form.tipo_insumo} onChange={(e) => setForm({ ...form, tipo_insumo: e.target.value })} style={s.input}>
          <option value="">Seleccionar...</option>
          <option value="insulina">Insulina</option>
          <option value="tiras">Tiras reactivas</option>
          <option value="lancetas">Lancetas</option>
          <option value="glucometro">Glucómetro</option>
          <option value="cateter">Catéter/Infusión</option>
          <option value="sensor">Sensor MCG</option>
          <option value="otro">Otro</option>
        </select>

        {esCompartir && (
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={s.label}>Estado del producto</label>
              <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })} style={s.input}>
                <option value="sellado">Sellado</option>
                <option value="abierto">Abierto</option>
                <option value="casi_vencido">Casi vencido</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={s.label}>Cantidad disponible</label>
              <input type="number" value={form.cantidad} onChange={(e) => setForm({ ...form, cantidad: e.target.value })}
                placeholder="Ej: 3 cajas" style={s.input} min="1" />
            </div>
          </div>
        )}

        {esCompartir && (
          <>
            <label style={s.label}>Fecha de vencimiento</label>
            <input type="month" value={form.fecha_vencimiento} onChange={(e) => setForm({ ...form, fecha_vencimiento: e.target.value })} style={s.input} />
          </>
        )}

        {!esCompartir && (
          <>
            <label style={s.label}>Urgencia</label>
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              {[{ val: false, label: "Normal", icon: "🟢" }, { val: true, label: "Urgente", icon: "🔴" }].map(({ val, label, icon }) => (
                <button key={label} onClick={() => setForm({ ...form, urgente: val })} style={{
                  flex: 1, padding: "12px", borderRadius: 14, border: "1.5px solid",
                  borderColor: form.urgente === val ? (val ? "#e05555" : "#7b7fd4") : "#e0e0f0",
                  background: form.urgente === val ? (val ? "#fff0f0" : "#e8e8f4") : "white",
                  cursor: "pointer", fontWeight: 600, fontSize: 13, color: "#1e2a4a",
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {icon} {label}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Mensaje */}
        <label style={s.label}>Mensaje opcional</label>
        <textarea value={form.mensaje} onChange={(e) => { if (e.target.value.length <= 150) setForm({ ...form, mensaje: e.target.value }); }}
          placeholder={esCompartir ? "Describe el estado, marca, notas..." : "Explica brevemente tu situación..."}
          rows={3} style={{ ...s.input, resize: "none" }} />
        <p style={{ textAlign: "right", fontSize: 11, color: "#b0b0c8", margin: "-10px 0 16px" }}>{form.mensaje.length}/150</p>

        {/* Ubicación */}
        <label style={s.label}>Ubicación</label>
        <div style={{ background: "white", borderRadius: 14, border: "1.5px solid #e0e0f0", padding: "12px 16px", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>📍</span>
            <span style={{ fontSize: 14, color: form.usar_ubicacion_manual ? "#b0b0c8" : "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>
              {form.usar_ubicacion_manual ? "Ubicación manual" : "Usar mi ubicación actual"}
            </span>
          </div>
          <button onClick={() => setForm({ ...form, usar_ubicacion_manual: !form.usar_ubicacion_manual })}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#7b7fd4", fontSize: 13, fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
            Cambiar
          </button>
        </div>
        {form.usar_ubicacion_manual && (
          <input value={form.ubicacion_manual} onChange={(e) => setForm({ ...form, ubicacion_manual: e.target.value })}
            placeholder="Ej: Las Condes, Santiago" style={s.input} />
        )}

        {/* Anónimo (solo solicitar) */}
        {!esCompartir && (
          <div style={{ background: "white", border: "1.5px solid #ffe0e0", borderRadius: 16, padding: 16, marginBottom: 16 }}>
            <p style={{ margin: "0 0 12px", fontWeight: 700, fontSize: 14, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>
              ¿Cómo quieres publicar esta solicitud? *
            </p>
            {[{ val: true, label: "Anónimo", desc: "Tu nombre no será visible", icon: "🎭" },
              { val: false, label: "Con mi nombre", desc: "Tu nombre será visible", icon: "👤" }].map(({ val, label, desc, icon }) => (
              <button key={label} onClick={() => setForm({ ...form, anonimo: val })} style={{
                width: "100%", display: "flex", alignItems: "center", gap: 12,
                padding: "12px 14px", borderRadius: 12, border: "1.5px solid",
                borderColor: form.anonimo === val ? "#e05555" : "#e0e0f0",
                background: form.anonimo === val ? "#fff0f0" : "white",
                cursor: "pointer", marginBottom: 8, textAlign: "left",
              }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 13, color: form.anonimo === val ? "#e05555" : "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>{label}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#b0b0c8", fontFamily: "'Outfit', sans-serif" }}>{desc}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {error && (
          <div style={{ background: "#fff0f0", border: "1px solid #ffcccc", borderRadius: 12, padding: "10px 14px", marginBottom: 16, color: "#e05555", fontSize: 13, fontFamily: "'Outfit', sans-serif" }}>
            {error}
          </div>
        )}

        <button onClick={handleSubmit} disabled={loading} style={{
          width: "100%", padding: 16,
          background: loading ? "#b0b0c8" : (esCompartir ? "#1e2a4a" : "#e05555"),
          color: "white", border: "none", borderRadius: 50,
          fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer",
          fontFamily: "'Outfit', sans-serif",
        }}>
          {loading ? "Publicando..." : esCompartir ? "Publicar insumo" : "Solicitar ayuda"}
        </button>
      </div>
    </div>
  );
}
