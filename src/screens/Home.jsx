import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// ─── SVG íconos exactos del diseño Figma ───────────────────────────────────

// Casa (Inicio) - activo
const IconCasaActivo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/>
  </svg>
);

// Casa (Inicio) - inactivo
const IconCasa = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#252E52"/>
  </svg>
);

// + circular (Publicar)
const IconPublicar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" fill="#252E52"/>
  </svg>
);

// Lupa (Buscar)
const IconBuscar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" fill="#252E52"/>
  </svg>
);

// Flechas (Canjes)
const IconCanjes = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22l-4-4 1.4-1.425 1.6 1.575V13h2v5.15l1.6-1.575L16 18l-4 4zM6.175 9.025L4.6 7.45 6.2 5.85l-1.6-1.575L6 3l4 4-3.825 2.025zM12 2l4 4-1.4 1.425-1.6-1.575V11h-2V5.85L9.4 7.425 8 6l4-4z" fill="#252E52"/>
  </svg>
);

// Persona (Perfil)
const IconPerfil = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11.105c-1.1 0-2.042-.391-2.825-1.174C8.392 9.146 8 8.204 8 7.104c0-1.1.392-2.04 1.175-2.825C9.958 3.496 10.9 3.104 12 3.104c1.1 0 2.042.392 2.825 1.175C15.608 5.064 16 6.004 16 7.104c0 1.1-.392 2.042-1.175 2.827C14.042 10.714 13.1 11.105 12 11.105zM4 19.104v-2.8c0-.567.146-1.088.438-1.563.291-.475.679-.838 1.162-1.088 1.033-.516 2.083-.904 3.15-1.162C9.817 12.234 10.9 12.104 12 12.104c1.1 0 2.183.13 3.25.387 1.067.259 2.117.647 3.15 1.163.483.25.871.613 1.162 1.088.292.475.438.996.438 1.562v2.8H4zm2-2h12v-.8a.974.974 0 00-.202-.6 1.037 1.037 0 00-.548-.365c-.9-.45-1.808-.787-2.725-1.012A11.61 11.61 0 0012 14.104a11.6 11.6 0 00-2.525.223c-.917.225-1.825.562-2.725 1.012a1.04 1.04 0 00-.548.365.974.974 0 00-.202.6v.8zm6-8a2 2 0 001.553-.65A2 2 0 0014 7.104a2 2 0 00-.447-1.35A2 2 0 0012 5.104a2 2 0 00-1.553.65A2 2 0 0010 7.104a2 2 0 00.447 1.35A2 2 0 0012 9.104z" fill="#252E52"/>
  </svg>
);

// ─── Componente BottomNav ──────────────────────────────────────────────────

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: "inicio",   label: "Inicio",   Icon: IconCasa,    IconActive: IconCasaActivo },
    { id: "publicar", label: "Publicar", Icon: IconPublicar, IconActive: IconPublicar  },
    { id: "buscar",   label: "Buscar",   Icon: IconBuscar,  IconActive: IconBuscar    },
    { id: "canjes",   label: "Canjes",   Icon: IconCanjes,  IconActive: IconCanjes    },
    { id: "perfil",   label: "Perfil",   Icon: IconPerfil,  IconActive: IconPerfil    },
  ];

  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "white", borderRadius: "15px 15px 0 0",
      boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
      display: "flex", alignItems: "center",
      height: 68, paddingBottom: 4, zIndex: 100,
    }}>
      {tabs.map(({ id, label, Icon, IconActive }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 3, border: "none", background: "transparent",
              cursor: "pointer", padding: "6px 4px",
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: isActive ? "#252E52" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}>
              {isActive ? <IconActive /> : <Icon />}
            </div>
            <span style={{
              fontSize: 10, fontWeight: 500,
              color: isActive ? "#252E52" : "#9CA3AF",
              lineHeight: 1,
            }}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

// ─── Pantalla de Inicio ───────────────────────────────────────────────────

function TabInicio({ user }) {
  const [publicaciones, setPublicaciones] = useState([]);
  const [urgentes, setUrgentes] = useState([]);

  useEffect(() => {
    fetchRecientes();
    fetchUrgentes();
  }, []);

  async function fetchRecientes() {
    const { data } = await supabase
      .from("publicaciones")
      .select("*")
      .eq("estado", "activa")
      .order("created_at", { ascending: false })
      .limit(5);
    if (data) setPublicaciones(data);
  }

  async function fetchUrgentes() {
    const { data } = await supabase
      .from("publicaciones")
      .select("*")
      .eq("urgente", true)
      .eq("estado", "activa")
      .order("created_at", { ascending: false })
      .limit(3);
    if (data) setUrgentes(data);
  }

  const nombre = user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;

  return (
    <div style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{
        background: "#252E52",
        padding: "48px 20px 20px",
        color: "white",
        borderRadius: "0 0 24px 24px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, opacity: 0.7, margin: "0 0 2px" }}>Hola,</p>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{nombre}</h2>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 12, padding: "6px 14px",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{ fontSize: 18 }}>🪙</span>
            <span style={{ fontWeight: 700, fontSize: 16 }}>{dc}</span>
            <span style={{ fontSize: 11, opacity: 0.8 }}>DC</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 20px 0" }}>

        {/* Mini mapa / card ver mapa */}
        <div style={{
          background: "#E8EAFF",
          borderRadius: 16, padding: 16,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 20,
        }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: 12, color: "#252E52", opacity: 0.7 }}>Insumos cerca de ti</p>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 18, color: "#252E52" }}>Ver mapa →</p>
          </div>
          <div style={{
            width: 80, height: 60, borderRadius: 12,
            background: "#C9CDF0", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28,
          }}>
            🗺️
          </div>
        </div>

        {/* Actividad reciente */}
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#252E52", margin: "0 0 12px" }}>
          Actividad reciente
        </h3>

        {publicaciones.length === 0 ? (
          <p style={{ color: "#9CA3AF", fontSize: 13 }}>Sin actividad reciente.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {publicaciones.map((p) => (
              <div key={p.id} style={{
                background: "white", borderRadius: 12,
                padding: "12px 14px", boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: 14, color: "#252E52" }}>
                    {p.nombre_insumo}
                  </p>
                  <p style={{ margin: 0, fontSize: 11, color: "#9CA3AF" }}>
                    {p.tipo === "compartir" ? "Compartiendo" : "Solicitando"} · hace poco
                  </p>
                </div>
                <span style={{
                  padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                  background: p.tipo === "compartir" ? "#EEF2FF" : "#FEF2F2",
                  color: p.tipo === "compartir" ? "#4F46E5" : "#DC2626",
                }}>
                  {p.tipo === "compartir" ? "Ofrece" : "Necesita"}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Urgencias */}
        {urgentes.length > 0 && (
          <>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#252E52", margin: "20px 0 12px" }}>
              🚨 Urgencias cerca
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {urgentes.map((p) => (
                <div key={p.id} style={{
                  background: "#FFF0F0", borderRadius: 12,
                  padding: "12px 14px", border: "1px solid #FFD0D0",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: 14, color: "#DC2626" }}>
                      {p.nombre_insumo}
                    </p>
                    <p style={{ margin: 0, fontSize: 11, color: "#EF4444" }}>URGENTE</p>
                  </div>
                  <button style={{
                    background: "#DC2626", color: "white",
                    border: "none", borderRadius: 10, padding: "6px 12px",
                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                  }}>
                    Ayudar
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Pantalla Perfil básico ───────────────────────────────────────────────

function TabPerfil({ user, onSignOut }) {
  const nombre = user?.user_metadata?.nombre || "Usuario";
  const email = user?.email || "";
  const dc = user?.user_metadata?.dc || 240;
  const rut = user?.user_metadata?.rut || "";

  return (
    <div style={{ padding: "48px 20px 100px" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#252E52", marginBottom: 24 }}>Mi Perfil</h2>

      <div style={{
        background: "#252E52", borderRadius: 20, padding: 24,
        color: "white", marginBottom: 20, textAlign: "center",
      }}>
        <div style={{
          width: 70, height: 70, borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28, margin: "0 auto 12px",
        }}>
          👤
        </div>
        <h3 style={{ margin: "0 0 4px", fontSize: 18 }}>{nombre}</h3>
        <p style={{ margin: "0 0 12px", opacity: 0.7, fontSize: 13 }}>{email}</p>
        <div style={{
          background: "rgba(255,255,255,0.15)",
          borderRadius: 12, padding: "8px 16px",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ fontSize: 20 }}>🪙</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>{dc}</span>
          <span style={{ opacity: 0.8 }}>DiabetCoins</span>
        </div>
      </div>

      <div style={{ background: "white", borderRadius: 16, padding: 16, boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
        <p style={{ margin: "0 0 4px", fontSize: 11, color: "#9CA3AF" }}>RUT</p>
        <p style={{ margin: 0, fontWeight: 600, color: "#252E52" }}>{rut || "No registrado"}</p>
      </div>

      <button
        onClick={onSignOut}
        style={{
          marginTop: 24, width: "100%", padding: "14px",
          background: "transparent", border: "2px solid #E5E7EB",
          borderRadius: 14, color: "#6B7280", fontSize: 14,
          fontWeight: 600, cursor: "pointer",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

// ─── Home principal ────────────────────────────────────────────────────────

export default function Home({ user, onSignOut }) {
  const [activeTab, setActiveTab] = useState("inicio");

  // Importar pantallas dinámicamente (las definimos en el mismo render)
  const renderTab = () => {
    switch (activeTab) {
      case "inicio":
        return <TabInicio user={user} />;
      case "perfil":
        return <TabPerfil user={user} onSignOut={onSignOut} />;
      default:
        return (
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            height: "60vh", color: "#9CA3AF", gap: 12,
          }}>
            <span style={{ fontSize: 48 }}>🚧</span>
            <p style={{ margin: 0, fontSize: 15 }}>Próximamente</p>
          </div>
        );
    }
  };

  return (
    <div style={{
      maxWidth: 430, margin: "0 auto",
      minHeight: "100vh", background: "#F5F6FA",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
    }}>
      {renderTab()}
      <BottomNav activeTab={activeTab} onTabChange={(tab) => {
        if (tab === "publicar") {
          window.dispatchEvent(new CustomEvent("openPublicar"));
        } else if (tab === "buscar") {
          window.dispatchEvent(new CustomEvent("openMapa"));
        } else if (tab === "canjes") {
          window.dispatchEvent(new CustomEvent("openCanjes"));
        } else {
          setActiveTab(tab);
        }
      }} />
    </div>
  );
}
