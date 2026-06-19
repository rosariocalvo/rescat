import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// ─── íconos ────────────────────────────────────────────────────────────────

const IconBack = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#252E52"/>
  </svg>
);

export default function PublicarScreen({ user, onBack }) {
  const [modo, setModo] = useState(null); // "compartir" | "solicitar"
  const [form, setForm] = useState({
    nombre_insumo: "",
    tipo_insumo: "",
    cantidad: "",
    estado: "abierto",
    fecha_vencimiento: "",
    urgente: false,
    mensaje: "",
    anonimo: null, // obligatorio en solicitar
  });
  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");

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
    if (!form.nombre_insumo.trim()) {
      setError("Escribe el nombre del insumo.");
      return;
    }
    if (modo === "solicitar" && form.anonimo === null) {
      setError("Debes elegir cómo quieres publicar (anónimo o con nombre).");
      return;
    }

    setLoading(true);
    const { lat, lng } = await obtenerUbicacion();

    const { error: dbError } = await supabase.from("publicaciones").insert([{
      user_id: user?.id,
      tipo: modo,
      nombre_insumo: form.nombre_insumo,
      urgente: form.urgente || false,
      anonimo: modo === "solicitar" ? (form.anonimo || false) : false,
      latitud: lat,
      longitud: lng,
      estado: "activa",
      cantidad: form.cantidad ? String(form.cantidad) : null,
      fecha_vencimiento: form.fecha_vencimiento || null,
      mensaje: form.mensaje || null,
    }]);

    setLoading(false);
    if (dbError) {
      setError("Ocurrió un error. Intenta de nuevo.");
    } else {
      setExito(true);
    }
  }

  // ── Éxito ──────────────────────────────────────────────────────────────
  if (exito) {
    return (
      <div style={styles.screen}>
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          minHeight: "70vh", padding: 32, textAlign: "center",
        }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#252E52", marginBottom: 8 }}>
            ¡Publicado!
          </h2>
          <p style={{ color: "#6B7280", marginBottom: 32 }}>
            Tu publicación ya está visible en el mapa.
          </p>
          <button onClick={onBack} style={styles.btnPrimary}>
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  // ── Selector de modo ──────────────────────────────────────────────────
  if (!modo) {
    return (
      <div style={styles.screen}>
        <div style={{ padding: "48px 20px 20px" }}>
          <button onClick={onBack} style={styles.btnBack}>
            <IconBack />
          </button>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#252E52", margin: "16px 0 6px" }}>
            ¿Qué quieres hacer?
          </h2>
          <p style={{ color: "#6B7280", fontSize: 14, margin: "0 0 32px" }}>
            Elige una opción para continuar
          </p>

          {/* Card Compartir */}
          <button
            onClick={() => setModo("compartir")}
            style={{
              width: "100%", background: "#252E52",
              borderRadius: 20, padding: 24, marginBottom: 16,
              border: "none", cursor: "pointer", textAlign: "left",
              color: "white",
            }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, marginBottom: 12,
            }}>
              💊
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 18, fontWeight: 700 }}>Compartir insumo</span>
              <span style={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: 8, padding: "2px 8px", fontSize: 12, fontWeight: 600,
              }}>
                +50 DC
              </span>
            </div>
            <p style={{ margin: 0, opacity: 0.75, fontSize: 13 }}>
              Ofrece insumos que te sobran a la comunidad
            </p>
          </button>

          {/* Card Solicitar */}
          <button
            onClick={() => setModo("solicitar")}
            style={{
              width: "100%", background: "#FFF0F0",
              borderRadius: 20, padding: 24,
              border: "1.5px solid #FFD0D0", cursor: "pointer", textAlign: "left",
            }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: "#FFE0E0",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, marginBottom: 12,
            }}>
              🆘
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#252E52" }}>Solicitar ayuda</span>
              <span style={{
                background: "#FFD0D0", borderRadius: 8,
                padding: "2px 8px", fontSize: 12, fontWeight: 600, color: "#DC2626",
              }}>
                −120 DC
              </span>
            </div>
            <p style={{ margin: 0, color: "#9CA3AF", fontSize: 13 }}>
              Pide insumos que necesitas urgente
            </p>
          </button>
        </div>
      </div>
    );
  }

  // ── Formulario ────────────────────────────────────────────────────────
  const esCompartir = modo === "compartir";
  const accentColor = esCompartir ? "#252E52" : "#DC2626";
  const accentBg = esCompartir ? "#EEF2FF" : "#FEF2F2";

  return (
    <div style={styles.screen}>
      <div style={{ padding: "48px 20px 100px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <button onClick={() => setModo(null)} style={styles.btnBack}>
            <IconBack />
          </button>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#252E52" }}>
              {esCompartir ? "Compartir insumo" : "Solicitar ayuda"}
            </h2>
          </div>
          <span style={{
            marginLeft: "auto",
            background: accentBg, color: accentColor,
            borderRadius: 10, padding: "4px 10px", fontSize: 13, fontWeight: 700,
          }}>
            {esCompartir ? "+50 DC" : "−120 DC"}
          </span>
        </div>

        {/* Nombre insumo */}
        <label style={styles.label}>Nombre del insumo *</label>
        <input
          value={form.nombre_insumo}
          onChange={(e) => setForm({ ...form, nombre_insumo: e.target.value })}
          placeholder="Ej: Insulina glargina, Tiras reactivas..."
          style={styles.input}
        />

        {/* Tipo insumo */}
        <label style={styles.label}>Tipo de insumo</label>
        <select
          value={form.tipo_insumo}
          onChange={(e) => setForm({ ...form, tipo_insumo: e.target.value })}
          style={styles.input}
        >
          <option value="">Seleccionar...</option>
          <option value="insulina">Insulina</option>
          <option value="tiras">Tiras reactivas</option>
          <option value="lancetas">Lancetas</option>
          <option value="glucometro">Glucómetro</option>
          <option value="cateter">Catéter/Infusión</option>
          <option value="sensor">Sensor MCG</option>
          <option value="otro">Otro</option>
        </select>

        {/* Cantidad y Estado (solo compartir) */}
        {esCompartir && (
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Cantidad</label>
              <input
                type="number"
                value={form.cantidad}
                onChange={(e) => setForm({ ...form, cantidad: e.target.value })}
                placeholder="Ej: 3"
                style={styles.input}
                min="1"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Estado</label>
              <select
                value={form.estado}
                onChange={(e) => setForm({ ...form, estado: e.target.value })}
                style={styles.input}
              >
                <option value="abierto">Abierto</option>
                <option value="cerrado">Cerrado</option>
                <option value="casi_vencido">Casi vencido</option>
              </select>
            </div>
          </div>
        )}

        {/* Fecha vencimiento (solo compartir) */}
        {esCompartir && (
          <>
            <label style={styles.label}>Fecha de vencimiento</label>
            <input
              type="date"
              value={form.fecha_vencimiento}
              onChange={(e) => setForm({ ...form, fecha_vencimiento: e.target.value })}
              style={styles.input}
            />
          </>
        )}

        {/* Urgencia (solo solicitar) */}
        {!esCompartir && (
          <>
            <label style={styles.label}>Nivel de urgencia</label>
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              {[
                { val: false, label: "Normal", icon: "🟢" },
                { val: true,  label: "Urgente", icon: "🔴" },
              ].map(({ val, label, icon }) => (
                <button
                  key={label}
                  onClick={() => setForm({ ...form, urgente: val })}
                  style={{
                    flex: 1, padding: "10px 12px", borderRadius: 12, border: "2px solid",
                    borderColor: form.urgente === val ? accentColor : "#E5E7EB",
                    background: form.urgente === val ? accentBg : "white",
                    cursor: "pointer", fontWeight: 600, fontSize: 13,
                    color: form.urgente === val ? accentColor : "#6B7280",
                  }}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Mensaje */}
        <label style={styles.label}>
          Mensaje {!esCompartir && "(opcional)"}
        </label>
        <textarea
          value={form.mensaje}
          onChange={(e) => {
            if (e.target.value.length <= 150)
              setForm({ ...form, mensaje: e.target.value });
          }}
          placeholder={esCompartir
            ? "Describe el estado, marca, notas importantes..."
            : "Explica brevemente tu situación..."}
          rows={3}
          style={{ ...styles.input, resize: "none" }}
        />
        <p style={{ textAlign: "right", fontSize: 11, color: "#9CA3AF", margin: "-10px 0 16px" }}>
          {form.mensaje.length}/150
        </p>

        {/* Cómo publicar (OBLIGATORIO en solicitar) */}
        {!esCompartir && (
          <div style={{
            background: "#FFF8F8", border: "1.5px solid #FFE0E0",
            borderRadius: 14, padding: 16, marginBottom: 16,
          }}>
            <p style={{ margin: "0 0 12px", fontWeight: 700, fontSize: 14, color: "#252E52" }}>
              ¿Cómo quieres publicar? *
            </p>
            {[
              { val: true,  label: "Anónimo", desc: "Tu nombre no será visible", icon: "🎭" },
              { val: false, label: "Con mi nombre", desc: "Tu nombre será visible", icon: "👤" },
            ].map(({ val, label, desc, icon }) => (
              <button
                key={label}
                onClick={() => setForm({ ...form, anonimo: val })}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 12px", borderRadius: 10, border: "2px solid",
                  borderColor: form.anonimo === val ? "#DC2626" : "#E5E7EB",
                  background: form.anonimo === val ? "#FFF0F0" : "white",
                  cursor: "pointer", marginBottom: 8, textAlign: "left",
                }}
              >
                <span style={{ fontSize: 20 }}>{icon}</span>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 13,
                    color: form.anonimo === val ? "#DC2626" : "#252E52" }}>{label}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#9CA3AF" }}>{desc}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            background: "#FEF2F2", border: "1px solid #FCA5A5",
            borderRadius: 10, padding: "10px 14px", marginBottom: 16,
            color: "#DC2626", fontSize: 13,
          }}>
            {error}
          </div>
        )}

        {/* Botón publicar */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%", padding: 15,
            background: loading ? "#9CA3AF" : accentColor,
            color: "white", border: "none", borderRadius: 14,
            fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Publicando..." : esCompartir ? "Compartir insumo" : "Solicitar ayuda"}
        </button>

        {/* Ubicación aviso */}
        <p style={{ textAlign: "center", fontSize: 11, color: "#9CA3AF", marginTop: 10 }}>
          📍 Se usará tu ubicación actual para el mapa
        </p>
      </div>
    </div>
  );
}

const styles = {
  screen: {
    maxWidth: 430, margin: "0 auto",
    minHeight: "100vh", background: "#F5F6FA",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
  },
  btnBack: {
    background: "none", border: "none", cursor: "pointer", padding: 4,
  },
  label: {
    display: "block", fontSize: 13, fontWeight: 600,
    color: "#252E52", marginBottom: 6,
  },
  input: {
    width: "100%", padding: "12px 14px",
    borderRadius: 12, border: "1.5px solid #E5E7EB",
    fontSize: 14, color: "#252E52",
    background: "white", marginBottom: 16,
    boxSizing: "border-box", outline: "none",
  },
  btnPrimary: {
    padding: "14px 32px",
    background: "#252E52", color: "white",
    border: "none", borderRadius: 14,
    fontWeight: 700, fontSize: 15, cursor: "pointer",
  },
};
