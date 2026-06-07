import { supabase } from "../supabase";
import Logo from "../components/Logo";

export default function Home({ user, onSignOut }) {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    onSignOut();
  };

  const nombre = user?.user_metadata?.nombre_completo || user?.email || "Usuario";

  return (
    <div style={{ minHeight: "100vh", background: "#f0f0f5", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ background: "white", padding: "52px 24px 20px", borderBottom: "0.5px solid #e0e0f0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo size={36} />
          <button onClick={handleSignOut} style={{ background: "none", border: "1px solid #e0e0f0", borderRadius: 20, padding: "6px 14px", fontSize: 13, color: "#7b7fd4", cursor: "pointer", fontFamily: "inherit" }}>
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "32px 24px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", marginBottom: 4 }}>
          Hola, {nombre.split(" ")[0]} 👋
        </h2>
        <p style={{ fontSize: 14, color: "#7b7fd4", marginBottom: 32 }}>Bienvenido a la red RESCAT</p>

        {/* Cards placeholder */}
        {["Encuentra insumos cerca de ti", "Reserva y coordina", "Ayuda y recibe ayuda"].map((item, i) => (
          <div key={i} style={{ background: "white", borderRadius: 16, padding: "20px", marginBottom: 12, border: "0.5px solid #e8e8f5" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#eeeeff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#7b7fd4", fontWeight: 700 }}>
                {i + 1}
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#1e2a4a", margin: 0 }}>{item}</p>
                <p style={{ fontSize: 12, color: "#aaa", margin: "2px 0 0" }}>Próximamente</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
