import { useState, useEffect } from "react";
import { supabase } from "../supabase";

const IconoDC = () => (
  <svg viewBox="252 89 21 21" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M271.931 100.156C271.931 105.219 267.827 109.323 262.764 109.323C257.702 109.323 253.598 105.219 253.598 100.156C253.598 95.0933 257.702 90.9893 262.764 90.9893C267.827 90.9893 271.931 95.0933 271.931 100.156Z" fill="#7890D0"/>
    <path d="M270.557 100.156C270.557 104.46 267.068 107.949 262.764 107.949C258.461 107.949 254.972 104.46 254.972 100.156C254.972 95.8521 258.461 92.3632 262.764 92.3632C267.068 92.3632 270.557 95.8521 270.557 100.156Z" fill="#B7C3E3"/>
    <path d="M260.603 97.8155C260.579 97.6961 260.59 97.3262 260.589 97.1863C260.587 96.4875 260.544 95.9835 260.948 95.3663C261.246 94.9161 261.761 94.5303 262.296 94.4284C262.965 94.301 263.595 94.3804 264.152 94.7652C265.012 95.36 265.17 96.2277 265.125 97.2068C265.116 97.3917 265.131 97.5939 265.118 97.7851C265.393 97.7813 265.669 97.7798 265.944 97.7807C266.364 97.7807 266.636 97.7723 267.038 97.9201C268.597 98.4927 268.929 100.702 267.808 101.83C267.345 102.296 266.844 102.474 266.196 102.481L265.488 102.481C265.397 102.481 265.19 102.486 265.112 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.037 106.136 261.18 105.22C260.548 104.545 260.552 103.257 260.592 102.384L260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.126C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155ZM260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.585 101.915 260.589 101.645 260.589 101.539L260.59 100.671L260.589 99.1033C260.589 98.7909 260.583 98.4434 260.597 98.1338ZM264.779 102.475C264.628 102.488 264.349 102.481 264.187 102.481L263.08 102.481L261.695 102.481C261.461 102.481 261.15 102.489 260.921 102.475C260.848 102.818 260.947 103.933 261.043 104.279C261.093 104.465 261.173 104.642 261.278 104.804C261.818 105.64 263.071 105.868 263.874 105.302C264.33 104.981 264.617 104.58 264.709 104.022C264.79 103.57 264.815 102.931 264.779 102.475ZM260.901 102.171C262.689 102.141 264.515 102.181 266.308 102.165C266.816 102.139 267.292 101.912 267.633 101.536C268.362 100.715 268.313 99.2839 267.462 98.5568C266.896 98.0726 266.351 98.0653 265.651 98.0879C265.388 98.094 265.088 98.0766 264.829 98.095C264.817 98.0959 264.804 98.097 264.792 98.0985C264.789 97.7566 264.789 97.4147 264.792 97.0728C264.793 96.3302 264.784 95.7989 264.199 95.231C263.835 94.8764 263.344 94.6812 262.836 94.6883C262.81 94.6888 262.784 94.6898 262.759 94.6914C262.383 94.7269 262.083 94.8017 261.769 95.01C261.223 95.3731 260.92 95.9617 260.908 96.6126C260.905 96.7697 260.903 96.9287 260.903 97.088L260.904 98.0131L260.904 100.727C260.904 101.182 260.917 101.727 260.901 102.171Z" fill="#252E52"/>
    <path d="M260.592 102.384C260.676 102.39 260.838 102.395 260.907 102.44L260.921 102.475C260.848 102.818 260.948 103.933 261.044 104.279C261.094 104.465 261.173 104.642 261.279 104.804C261.819 105.64 263.072 105.868 263.875 105.302C264.331 104.981 264.617 104.58 264.71 104.022C264.791 103.57 264.815 102.931 264.78 102.475C264.791 102.371 264.991 102.384 265.069 102.395C265.111 102.426 265.098 102.415 265.113 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.038 106.136 261.18 105.22C260.548 104.545 260.553 103.257 260.592 102.384Z" fill="#252E52"/>
    <path d="M260.603 97.8155C260.621 97.8499 260.613 98.0938 260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.609 102.096 260.638 102.288 260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.125C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155Z" fill="#252E52"/>
    <path d="M33.6054 171.573V157.573H35.9654V163.523H42.0754V157.573H44.4354V171.573H42.0754V165.563H35.9654V171.573H33.6054ZM49.2283 164.573C49.2283 167.493 51.4483 169.743 54.2683 169.743C57.0883 169.743 59.3183 167.493 59.3183 164.573C59.3183 161.663 57.0883 159.403 54.2683 159.403C51.4483 159.403 49.2283 161.663 49.2283 164.573ZM46.8383 164.573C46.8383 160.493 50.0683 157.333 54.2683 157.333C58.4683 157.333 61.7083 160.493 61.7083 164.573C61.7083 168.653 58.4683 171.813 54.2683 171.813C50.0683 171.813 46.8383 168.653 46.8383 164.573ZM64.0937 171.573V157.573H66.4537V169.533H72.4237V171.573H64.0937ZM78.3757 157.573H80.9957L86.1357 171.573H83.6057L82.4357 168.193H76.9257L75.7557 171.573H73.2257L78.3757 157.573ZM77.5757 166.223H81.7957L79.6857 160.133L77.5757 166.223ZM88.0566 170.243C88.0566 169.583 88.6466 168.903 89.5466 168.903C90.3766 168.903 91.0066 169.513 91.0066 170.553C91.0066 172.223 90.0766 173.653 88.1466 174.493L87.5166 173.693C89.0966 172.603 89.1066 172.053 88.3166 170.983C88.1666 170.783 88.0566 170.523 88.0566 170.243ZM100.09 171.573V157.573H108.59V159.603H102.45V163.533H108.09V165.543H102.45V169.553H108.77V171.573H100.09ZM111.457 157.573H116.167C119.147 157.573 121.017 159.333 121.017 162.013C121.017 164.183 119.787 165.733 117.727 166.233L121.317 171.573H118.727L115.307 166.443H113.807V171.573H111.457V157.573ZM116.027 159.563H113.807V164.493H116.027C117.697 164.493 118.647 163.513 118.647 162.033C118.647 160.533 117.697 159.563 116.027 159.563ZM123.746 157.573H126.106V171.573H123.746V157.573ZM140.615 166.973L142.045 168.013C140.635 170.553 138.565 171.813 135.715 171.813C131.745 171.813 128.655 168.743 128.655 164.573C128.655 160.413 131.745 157.333 135.715 157.333C139.065 157.333 141.495 159.253 142.235 162.363H139.765C139.185 160.433 137.575 159.403 135.745 159.403C133.235 159.403 131.045 161.403 131.045 164.573C131.045 167.753 133.285 169.743 135.835 169.743C137.935 169.743 139.535 168.703 140.615 166.973ZM148.278 157.573H150.898L156.038 171.573H153.508L152.338 168.193H146.828L145.658 171.573H143.128L148.278 157.573ZM147.478 166.223H151.698L149.588 160.133L147.478 166.223ZM168.392 172.973H188.392V152.973H168.392V172.973Z" fill="#252E52"/>
  </svg>
);

const IconInicio = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={active ? "white" : "#b0b8d0"}/>
  </svg>
);
const IconPublicar = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M12 8v8M8 12h8" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconBuscar = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M16.5 16.5L21 21" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCanjes = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 9h13M4 9l3-3M4 9l3 3" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 15H7M20 15l-3-3M20 15l-3 3" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPerfil = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

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
      width: "100%", maxWidth: 430, background: "white",
      borderRadius: "20px 20px 0 0", boxShadow: "0 -2px 20px rgba(30,42,74,0.08)",
      display: "flex", alignItems: "center", height: 72, zIndex: 100,
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
              background: isActive ? "#1e2a4a" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon active={isActive} />
            </div>
            <span style={{
              fontSize: 10, fontWeight: isActive ? 700 : 400,
              color: isActive ? "#1e2a4a" : "#b0b8d0",
              fontFamily: "Outfit, sans-serif",
            }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ─── Historial de actividad ────────────────────────────────────────────────
function TabHistorial({ user, onBack }) {
  const [historial, setHistorial] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("publicaciones")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setHistorial(data || []);
        setLoading(false);
      });
  }, []);

  const formatFecha = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <div style={{ paddingBottom: 90 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ padding: "52px 24px 20px", display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={onBack} style={{
          background: "white", border: "none", borderRadius: 12,
          width: 40, height: 40, display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "pointer",
          boxShadow: "0 1px 6px rgba(30,42,74,0.08)"
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#1e2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>
          Mi actividad
        </h2>
      </div>

      <div style={{ padding: "0 24px" }}>
        {loading && <p style={{ color: "#b0b8d0", fontFamily: "Outfit, sans-serif" }}>Cargando...</p>}
        {!loading && historial.length === 0 && (
          <p style={{ color: "#b0b8d0", fontFamily: "Outfit, sans-serif", fontSize: 14 }}>
            Aún no tienes actividad registrada.
          </p>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {historial.map((p) => (
            <div key={p.id} style={{
              background: "white", borderRadius: 16, padding: "16px",
              boxShadow: "0 1px 8px rgba(30,42,74,0.06)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: p.tipo === "compartir" ? "#f0f1f9" : "#fff0f2",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    {p.tipo === "compartir" ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 9h13M4 9l3-3M4 9l3 3M20 15H7M20 15l-3-3M20 15l-3 3"
                          stroke="#7890D0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                          stroke="#EC6765" strokeWidth="1.5"/>
                        <line x1="12" y1="9" x2="12" y2="13" stroke="#EC6765" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="12" y1="17" x2="12.01" y2="17" stroke="#EC6765" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <span style={{
                      fontSize: 11, fontWeight: 600, fontFamily: "Outfit, sans-serif",
                      color: p.tipo === "compartir" ? "#7890D0" : "#EC6765",
                    }}>
                      {p.tipo === "compartir" ? "Compartiste" : "Solicitaste"}
                    </span>
                    <p style={{ margin: "2px 0", fontWeight: 600, fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>
                      {p.nombre_insumo}
                    </p>
                    {p.cantidad && (
                      <p style={{ margin: 0, fontSize: 12, color: "#7b80a0", fontFamily: "Outfit, sans-serif" }}>
                        Cantidad: {p.cantidad}
                      </p>
                    )}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <span style={{
                    fontSize: 11, color: "#b0b8d0", fontFamily: "Outfit, sans-serif",
                    display: "block", marginBottom: 4
                  }}>
                    {formatFecha(p.created_at)}
                  </span>
                  <span style={{
                    padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                    background: p.estado === "activa" ? "#e8f5e9" : "#f5f5f5",
                    color: p.estado === "activa" ? "#4caf50" : "#9e9e9e",
                    fontFamily: "Outfit, sans-serif",
                  }}>
                    {p.estado === "activa" ? "Activa" : "Cerrada"}
                  </span>
                </div>
              </div>
              {p.mensaje && (
                <p style={{ margin: "10px 0 0", fontSize: 13, color: "#7b80a0", fontFamily: "Outfit, sans-serif", lineHeight: 1.4 }}>
                  "{p.mensaje}"
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabInicio({ user, onVerTodas }) {
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
  const firstName = nombre.split(" ")[0].toUpperCase();

  return (
    <div style={{ paddingBottom: 90 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      <div style={{ padding: "52px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src="/logo_rescat.png" alt="RESCAT+" style={{ height: 100, width: "auto", objectFit: "contain" }} />
        <div style={{
          background: "white", borderRadius: 50, padding: "8px 18px",
          display: "flex", alignItems: "center", gap: 8,
          boxShadow: "0 1px 8px rgba(30,42,74,0.10)",
        }}>
          <IconoDC />
          <span style={{ fontWeight: 700, fontSize: 15, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>{dc} DC</span>
        </div>
      </div>

      <div style={{ padding: "20px 24px 0" }}>
        <p style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", margin: "0 0 4px", fontFamily: "Outfit, sans-serif" }}>
          HOLA, {firstName} 👋
        </p>
        <p style={{ fontSize: 14, color: "#7b80a0", margin: "0 0 28px", fontFamily: "Outfit, sans-serif" }}>
          ¿Necesitas algún insumo hoy?
        </p>

        <div onClick={() => window.dispatchEvent(new CustomEvent("openMapa"))}
          style={{ background: "#e8eaf0", borderRadius: 20, padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, cursor: "pointer" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#7b80a0"/>
              </svg>
              <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", fontFamily: "Outfit, sans-serif" }}>
                {publicaciones.length > 0 ? `${publicaciones.length} publicaciones` : "Insumos"} cerca de ti
              </p>
            </div>
            <p style={{ margin: "0 0 4px", fontSize: 13, color: "#5b6080", fontFamily: "Outfit, sans-serif" }}>En un radio de 2 km</p>
            <div style={{ background: "#7890D0", color: "white", borderRadius: 50, padding: "10px 20px", display: "inline-block", fontSize: 14, fontWeight: 600, fontFamily: "Outfit, sans-serif", marginTop: 10 }}>
              Ver Mapa →
            </div>
          </div>
          <div style={{ width: 100, height: 100, borderRadius: 16, background: "#d0d4e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#7b80a0"/>
            </svg>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1e2a4a", margin: 0, fontFamily: "Outfit, sans-serif" }}>Actividad reciente</h3>
          <span onClick={onVerTodas} style={{ fontSize: 13, color: "#7b80a0", fontFamily: "Outfit, sans-serif", cursor: "pointer" }}>Ver todas &gt;</span>
        </div>

        {publicaciones.length === 0 ? (
          <p style={{ color: "#b0b8d0", fontSize: 13, fontFamily: "Outfit, sans-serif" }}>Sin actividad reciente.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {publicaciones.slice(0, 3).map((p) => (
              <div key={p.id} style={{ background: "white", borderRadius: 16, padding: "14px 16px", boxShadow: "0 1px 8px rgba(30,42,74,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: p.tipo === "compartir" ? "#f0f1f9" : "#fff0f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 9h13M4 9l3-3M4 9l3 3M20 15H7M20 15l-3-3M20 15l-3 3"
                        stroke={p.tipo === "compartir" ? "#7890D0" : "#EC6765"}
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>{p.nombre_insumo}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#b0b8d0", fontFamily: "Outfit, sans-serif" }}>
                      {p.tipo === "compartir" ? "Compartiendo" : "Solicitando"} · hace poco
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: 18, color: "#b0b8d0" }}>›</span>
              </div>
            ))}
          </div>
        )}

        {urgentes.length > 0 && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#EC6765" strokeWidth="1.5"/>
                  <line x1="12" y1="9" x2="12" y2="13" stroke="#EC6765" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="#EC6765" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1e2a4a", margin: 0, fontFamily: "Outfit, sans-serif" }}>Urgencias cerca de ti</h3>
              </div>
              <span style={{ fontSize: 13, color: "#7b80a0", fontFamily: "Outfit, sans-serif" }}>Ver todas &gt;</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {urgentes.map((p) => (
                <div key={p.id} style={{ background: "white", borderRadius: 16, padding: "14px 16px", border: "1.5px solid #ffe0e4", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "#fff0f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#EC6765" strokeWidth="1.5"/>
                        <line x1="12" y1="9" x2="12" y2="13" stroke="#EC6765" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="12" y1="17" x2="12.01" y2="17" stroke="#EC6765" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ margin: "0 0 2px", fontSize: 11, color: "#EC6765", fontWeight: 600, fontFamily: "Outfit, sans-serif" }}>Urgente</p>
                      <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>{p.nombre_insumo}</p>
                      <p style={{ margin: 0, fontSize: 11, color: "#b0b8d0", fontFamily: "Outfit, sans-serif" }}>📍 {p.latitud ? "Cerca de ti" : "Sin ubicación"}</p>
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

function TabPerfil({ user, onSignOut }) {
  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const email = user?.email || "";
  const dc = user?.user_metadata?.dc || 240;
  const rut = user?.user_metadata?.rut || "";

  return (
    <div style={{ padding: "52px 24px 100px", fontFamily: "Outfit, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <img src="/logo_rescat.png" alt="RESCAT+" style={{ height: 100, width: "auto", marginBottom: 24 }} />
      <div style={{ background: "#1e2a4a", borderRadius: 20, padding: 24, color: "white", marginBottom: 16, textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="3.5" stroke="white" strokeWidth="1.5"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h3 style={{ margin: "0 0 4px", fontSize: 17, fontFamily: "Outfit, sans-serif" }}>{nombre}</h3>
        <p style={{ margin: "0 0 14px", opacity: 0.7, fontSize: 13 }}>{email}</p>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "8px 20px", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <IconoDC />
          <span style={{ fontWeight: 700, fontSize: 17 }}>{dc}</span>
          <span style={{ opacity: 0.8, fontSize: 13 }}>DiabetCoins</span>
        </div>
      </div>
      {rut && (
        <div style={{ background: "white", borderRadius: 14, padding: 16, marginBottom: 12 }}>
          <p style={{ margin: "0 0 4px", fontSize: 11, color: "#b0b8d0" }}>RUT</p>
          <p style={{ margin: 0, fontWeight: 600, color: "#1e2a4a" }}>{rut}</p>
        </div>
      )}
      <button onClick={onSignOut} style={{ marginTop: 20, width: "100%", padding: 16, background: "transparent", border: "1.5px solid #dde0ea", borderRadius: 50, color: "#7b80a0", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "Outfit, sans-serif" }}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default function Home({ user, onSignOut }) {
  const [activeTab, setActiveTab] = useState("inicio");
  const [showHistorial, setShowHistorial] = useState(false);

  const renderContent = () => {
    if (showHistorial) {
      return <TabHistorial user={user} onBack={() => setShowHistorial(false)} />;
    }
    switch (activeTab) {
      case "inicio":
        return <TabInicio user={user} onVerTodas={() => setShowHistorial(true)} />;
      case "canjes":
        return <TabHistorial user={user} onBack={() => setActiveTab("inicio")} />;
      case "perfil":
        return <TabPerfil user={user} onSignOut={onSignOut} />;
      default:
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh", color: "#b0b8d0", gap: 12, fontFamily: "Outfit, sans-serif" }}>
            <span style={{ fontSize: 48 }}>🚧</span>
            <p style={{ margin: 0, fontSize: 15 }}>Próximamente</p>
          </div>
        );
    }
  };

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f0f0f5", fontFamily: "Outfit, sans-serif" }}>
      {renderContent()}
      <BottomNav
        activeTab={showHistorial ? "canjes" : activeTab}
        onTabChange={(tab) => {
          setShowHistorial(false);
          if (tab === "publicar") window.dispatchEvent(new CustomEvent("openPublicar"));
          else if (tab === "buscar") window.dispatchEvent(new CustomEvent("openMapa"));
          else setActiveTab(tab);
        }}
      />
    </div>
  );
}
