import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import Logo from "../components/Logo";

// ─── Íconos BottomNav ──────────────────────────────────────────────────────
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

// ─── BottomNav ─────────────────────────────────────────────────────────────
function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: "inicio", label: "Inicio", Icon: IconInicio },
    { id: "publicar", label: "Publicar", Icon: IconPublicar },
    { id: "buscar", label: "Buscar", Icon: IconBuscar },
    { id: "canjes", label: "Canjes", Icon: IconCanjes },
    { id: "perfil", label: "Perfil", Icon: IconPerfil },
  ];

  return (
    <nav style={{
      position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
      width: "100%", maxWidth: 430,
      background: "white", borderRadius: "20px 20px 0 0",
      boxShadow: "0 -2px 20px rgba(30,42,74,0.08)",
      display: "flex", alignItems: "center",
      height: 72, zIndex: 100,
    }}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = activeTab === id;
        return (
          <button key={id} onClick={() => onTabChange(id)} style={{
            flex: 1, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 4, border: "none", background: "transparent",
            cursor: "pointer", padding: "6px 4px",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: isActive ? "#e8eaf0" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}>
              <Icon active={isActive} />
            </div>
            <span style={{
              fontSize: 10, fontWeight: isActive ? 700 : 400,
              color: isActive ? "#1e2a4a" : "#b0b8d0",
              fontFamily: "'Outfit', sans-serif",
            }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ─── Tab Inicio ────────────────────────────────────────────────────────────
function TabInicio({ user }) {
  const [publicaciones, setPublicaciones] = useState([]);
  const [urgentes, setUrgentes] = useState([]);

  useEffect(() => {
    supabase.from("publicaciones").select("*").eq("estado", "activa")
      .order("created_at", { ascending: false }).limit(5)
      .then(({ data }) => { if (data) setPublicaciones(data); });
    supabase.from("publicaciones").select("*").eq("urgente", true).eq("estado", "activa")
      .order("created_at", { ascending: false }).limit(3)
      .then(({ data }) => { if (data) setUrgentes(data); });
  }, []);

  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;

  return (
    <div style={{ paddingBottom: 90 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ padding: "52px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Logo size={36} />
        <div style={{ background: "#e8eaf0", borderRadius: 50, padding: "6px 16px", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 15 }}>🪙</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>{dc} DC</span>
        </div>
      </div>

      <div style={{ padding: "16px 24px 0" }}>
        <p style={{ fontSize: 14, color: "#7b80a0", margin: "0 0 2px", fontFamily: "'Outfit', sans-serif" }}>HOLA, {nombre.toUpperCase()} 👋</p>
        <p style={{ fontSize: 14, color: "#7b80a0", margin: "0 0 20px", fontFamily: "'Outfit', sans-serif" }}>¿Necesitas algún insumo hoy?</p>

        {/* Card Ver Mapa */}
        <div onClick={() => window.dispatchEvent(new CustomEvent("openMapa"))}
          style={{ background: "#e8eaf0", borderRadius: 20, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, cursor: "pointer" }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: 12, color: "#7b80a0", fontFamily: "'Outfit', sans-serif" }}>
              {publicaciones.length > 0 ? `${publicaciones.length} publicaciones` : "Insumos"} cerca de ti
            </p>
            <p style={{ margin: "0 0 4px", fontSize: 13, color: "#5b6080", fontFamily: "'Outfit', sans-serif" }}>En un radio de 2 km</p>
            <div style={{ background: "#1e2a4a", color: "white", borderRadius: 50, padding: "8px 16px", display: "inline-block", fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif", marginTop: 8 }}>
              Ver Mapa →
            </div>
          </div>
          {/* Miniatura mapa */}
          <div style={{ width: 80, height: 80, borderRadius: 14, background: "#d0d4e8", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#7b80a0"/>
            </svg>
          </div>
        </div>

        {/* Actividad reciente */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1e2a4a", margin: 0, fontFamily: "'Outfit', sans-serif" }}>Actividad reciente</h3>
          <span style={{ fontSize: 13, color: "#7b80a0", fontFamily: "'Outfit', sans-serif" }}>Ver todas &gt;</span>
        </div>

        {publicaciones.length === 0 ? (
          <p style={{ color: "#b0b8d0", fontSize: 13, fontFamily: "'Outfit', sans-serif" }}>Sin actividad reciente.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {publicaciones.map((p) => (
              <div key={p.id} style={{ background: "white", borderRadius: 16, padding: "14px 16px", boxShadow: "0 1px 8px rgba(30,42,74,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: p.tipo === "compartir" ? "#e8eaf0" : "#fff0f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill={p.tipo === "compartir" ? "#7b80a0" : "#e05060"}/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: 14, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>{p.nombre_insumo}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#b0b8d0", fontFamily: "'Outfit', sans-serif" }}>
                      {p.tipo === "compartir" ? "Compartiendo" : "Solicitando"} · hace poco
                    </p>
                  </div>
                </div>
                <span style={{ padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: p.tipo === "compartir" ? "#e8eaf0" : "#fff0f2", color: p.tipo === "compartir" ? "#5b6080" : "#e05060", fontFamily: "'Outfit', sans-serif" }}>
                  {p.tipo === "compartir" ? "Ofrece" : "Necesita"}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Urgencias */}
        {urgentes.length > 0 && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1e2a4a", margin: 0, fontFamily: "'Outfit', sans-serif" }}>Urgencias cerca de ti</h3>
              <span style={{ fontSize: 13, color: "#7b80a0", fontFamily: "'Outfit', sans-serif" }}>Ver todas &gt;</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {urgentes.map((p) => (
                <div key={p.id} style={{ background: "white", borderRadius: 16, padding: "14px 16px", border: "1.5px solid #ffe0e4", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "#fff0f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#e05060"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ margin: "0 0 2px", fontSize: 11, color: "#e05060", fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>Urgente</p>
                      <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: 14, color: "#1e2a4a", fontFamily: "'Outfit', sans-serif" }}>{p.nombre_insumo}</p>
                      <p style={{ margin: 0, fontSize: 11, color: "#b0b8d0", fontFamily: "'Outfit', sans-serif" }}>📍 {p.latitud ? "Cerca de ti" : "Sin ubicación"}</p>
                    </div>
                  </div>
                  <span style={{ color: "#b0b8d0", fontSize: 20 }}>›</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Tab Perfil ────────────────────────────────────────────────────────────
function TabPerfil({ user, onSignOut }) {
  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const email = user?.email || "";
  const dc = user?.user_metadata?.dc || 240;
  const rut = user?.user_metadata?.rut || "";

  return (
    <div style={{ padding: "52px 24px 100px", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e2a4a", marginBottom: 24 }}>Mi Perfil</h2>
      <div style={{ background: "#1e2a4a", borderRadius: 20, padding: 24, color: "white", marginBottom: 16, textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="white"/></svg>
        </div>
        <h3 style={{ margin: "0 0 4px", fontSize: 17, fontFamily: "'Outfit', sans-serif" }}>{nombre}</h3>
        <p style={{ margin: "0 0 14px", opacity: 0.7, fontSize: 13 }}>{email}</p>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "8px 20px", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span>🪙</span>
          <span style={{ fontWeight: 700, fontSize: 17 }}>{dc}</span>
          <span style={{ opacity: 0.8, fontSize: 13 }}>DiabetCoins</span>
        </div>
      </div>
      {rut && (
        <div style={{ background: "white", borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: "0 1px 8px rgba(30,42,74,0.05)" }}>
          <p style={{ margin: "0 0 4px", fontSize: 11, color: "#b0b8d0" }}>RUT</p>
          <p style={{ margin: 0, fontWeight: 600, color: "#1e2a4a" }}>{rut}</p>
        </div>
      )}
      <button onClick={onSignOut} style={{ marginTop: 20, width: "100%", padding: "16px", background: "transparent", border: "1.5px solid #dde0ea", borderRadius: 50, color: "#7b80a0", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
        Cerrar sesión
      </button>
    </div>
  );
}

// ─── Home principal ────────────────────────────────────────────────────────
export default function Home({ user, onSignOut }) {
  const [activeTab, setActiveTab] = useState("inicio");

  const renderTab = () => {
    switch (activeTab) {
      case "inicio": return <TabInicio user={user} />;
      case "perfil": return <TabPerfil user={user} onSignOut={onSignOut} />;
      default:
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh", color: "#b0b8d0", gap: 12, fontFamily: "'Outfit', sans-serif" }}>
            <span style={{ fontSize: 48 }}>🚧</span>
            <p style={{ margin: 0, fontSize: 15 }}>Próximamente</p>
          </div>
        );
    }
  };

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f0f0f5", fontFamily: "'Outfit', sans-serif" }}>
      {renderTab()}
      <BottomNav activeTab={activeTab} onTabChange={(tab) => {
        if (tab === "publicar") window.dispatchEvent(new CustomEvent("openPublicar"));
        else if (tab === "buscar") window.dispatchEvent(new CustomEvent("openMapa"));
        else setActiveTab(tab);
      }} />
    </div>
  );
}
