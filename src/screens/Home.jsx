import { useState } from "react";
import { supabase } from "../supabase";
import Logo from "../components/Logo";
import MapScreen from "./MapScreen";
import PublicarScreen from "./PublicarScreen";

export default function Home({ user, onSignOut }) {
  const [activeTab, setActiveTab] = useState("inicio");

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    onSignOut();
  };

  const nombre = user?.user_metadata?.nombre_completo?.split(" ")[0] || user?.email?.split("@")[0] || "Usuario";

  const tabStyle = (tab) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    background: "none",
    border: "none",
    cursor: "pointer",
    color: activeTab === tab ? "#1e2a4a" : "#aaa",
    fontSize: 11,
    fontFamily: "'Outfit', sans-serif",
    fontWeight: activeTab === tab ? 600 : 400,
    padding: "8px 12px",
  });

  const TabIcon = ({ tab }) => {
    const color = activeTab === tab ? "#1e2a4a" : "#aaa";
    const icons = {
      inicio: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      publicar: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/><path d="M12 8v8M8 12h8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
      buscar: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8"/><path d="M20 20l-3-3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
      canjes: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 16l-4-4 4-4M17 8l4 4-4 4M14 4l-4 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      perfil: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    };
    return icons[tab];
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#f0f0f5", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap');`}</style>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto" }}>
        {activeTab === "inicio" && <InicioTab nombre={nombre} onVerMapa={() => setActiveTab("buscar")} />}
        {activeTab === "buscar" && <MapScreen />}
        {activeTab === "publicar" && <PublicarScreen />}
        {activeTab === "canjes" && <PlaceholderTab title="Canjes" />}
        {activeTab === "perfil" && <PerfilTab nombre={nombre} email={user?.email} onSignOut={handleSignOut} />}
      </div>

      {/* Bottom nav */}
      <div style={{
        display: "flex", justifyContent: "space-around", alignItems: "center",
        background: "white", borderTop: "0.5px solid #e8e8f0",
        paddingBottom: "env(safe-area-inset-bottom, 8px)",
      }}>
        {["inicio", "publicar", "buscar", "canjes", "perfil"].map(tab => (
          <button key={tab} style={tabStyle(tab)} onClick={() => setActiveTab(tab)}>
            <TabIcon tab={tab} />
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

function InicioTab({ nombre, onVerMapa }) {
  const urgencias = [
    { titulo: "Necesita Sensor Freestyle", distancia: "0.6 km de ti" },
    { titulo: "Busca Insulina Rápida (Aspart)", distancia: "1.2 km de ti" },
  ];

  const actividad = [
    { icono: "📦", titulo: "Reserva confirmada", subtitulo: "Insulina Novorapid Flexpen", tiempo: "hace 15 min" },
    { icono: "🪙", titulo: "+ 20 DC", subtitulo: "Canje Completado", tiempo: "hace 2 hrs" },
  ];

  return (
    <div style={{ padding: "52px 20px 20px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <img src="/logo-vector.svg" alt="RESCAT" style={{ height: 36 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "white", borderRadius: 20, padding: "6px 14px", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
          <span style={{ fontSize: 14 }}>🪙</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1e2a4a" }}>240 DC</span>
        </div>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", margin: "0 0 4px" }}>HOLA, {nombre.toUpperCase()} 👋</h2>
      <p style={{ fontSize: 14, color: "#7b7fd4", margin: "0 0 20px" }}>¿Necesitas algún insumo hoy?</p>

      {/* Mapa mini */}
      <div onClick={onVerMapa} style={{ background: "white", borderRadius: 16, padding: 16, marginBottom: 24, cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#7b7fd4" strokeWidth="1.8" fill="none"/></svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>12 publicaciones cerca de ti</span>
          </div>
          <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 14px" }}>En un radio de 2 km</p>
          <div style={{ background: "#1e2a4a", borderRadius: 8, padding: "10px 16px", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>Ver Mapa →</span>
          </div>
        </div>
        <div style={{ width: 100, height: 90, borderRadius: 10, background: "linear-gradient(135deg, #e8e8f8, #d0d0f0)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: "30%", left: "40%", width: 12, height: 12, borderRadius: "50%", background: "#e05c5c" }} />
          <div style={{ position: "absolute", top: "55%", left: "20%", width: 8, height: 8, borderRadius: "50%", background: "#1e2a4a" }} />
          <div style={{ position: "absolute", top: "45%", right: "15%", width: 7, height: 7, borderRadius: "50%", background: "#7b7fd4" }} />
        </div>
      </div>

      {/* Actividad reciente */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#1e2a4a" }}>Actividad reciente</span>
        <span style={{ fontSize: 13, color: "#7b7fd4", cursor: "pointer" }}>Ver todas &gt;</span>
      </div>
      {actividad.map((item, i) => (
        <div key={i} style={{ background: "white", borderRadius: 12, padding: "14px 16px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f0f0f8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.icono}</div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1e2a4a" }}>{item.titulo}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>{item.subtitulo}</p>
          </div>
          <span style={{ fontSize: 12, color: "#aaa" }}>{item.tiempo}</span>
        </div>
      ))}

      {/* Urgencias */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 16 }}>⚠️</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#1e2a4a" }}>Urgencias cerca de ti</span>
        </div>
        <span style={{ fontSize: 13, color: "#7b7fd4", cursor: "pointer" }}>Ver todas &gt;</span>
      </div>
      {urgencias.map((item, i) => (
        <div key={i} style={{ background: "white", borderRadius: 12, padding: "14px 16px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 1px 6px rgba(0,0,0,0.04)", cursor: "pointer" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l9 18H3L12 2z" stroke="#e05c5c" strokeWidth="1.8" fill="none" strokeLinejoin="round"/><path d="M12 9v5M12 16v1" stroke="#e05c5c" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: "0 0 2px", fontSize: 12, fontWeight: 600, color: "#e05c5c" }}>Urgente</p>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1e2a4a" }}>{item.titulo}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>📍 {item.distancia}</p>
          </div>
          <span style={{ color: "#aaa", fontSize: 18 }}>›</span>
        </div>
      ))}
    </div>
  );
}

function PlaceholderTab({ title }) {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa", fontSize: 16 }}>
      {title} — próximamente
    </div>
  );
}

function PerfilTab({ nombre, email, onSignOut }) {
  return (
    <div style={{ padding: "52px 24px 24px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e2a4a", marginBottom: 4 }}>Mi perfil</h2>
      <p style={{ color: "#7b7fd4", fontSize: 14, marginBottom: 32 }}>{email}</p>
      <div style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#1e2a4a" }}>{nombre}</p>
        <p style={{ margin: "4px 0 0", fontSize: 13, color: "#aaa" }}>Miembro RESCAT</p>
      </div>
      <button onClick={onSignOut} style={{ width: "100%", padding: "16px", borderRadius: 50, border: "1px solid #e0e0f0", background: "white", color: "#e05c5c", fontSize: 15, fontWeight: 500, fontFamily: "inherit", cursor: "pointer" }}>
        Cerrar sesión
      </button>
    </div>
  );
}
