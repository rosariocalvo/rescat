export default function Welcome({ onSignUp, onSignIn }) {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(180deg, #f8f8fc 0%, #f0f0f5 55%, #c0c0e0 100%)",
      fontFamily: "'Outfit', sans-serif",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap');`}</style>

      {/* Logo top */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 60 }}>
        <img src="/logo_rescat.png" alt="RESCAT+" style={{ width: 160, height: "auto" }} />
      </div>

      {/* Main text */}
      <div style={{ flex: 1, padding: "48px 32px 0" }}>
        <h1 style={{
          fontSize: 38,
          lineHeight: 1.15,
          color: "#1e2a4a",
          fontWeight: 300,
          letterSpacing: "0.04em",
          margin: 0,
        }}>
          LA <strong style={{ fontWeight: 700 }}>RED DE<br />APOYO</strong> PARA<br />
          PERSONAS<br />CON DIABETES<br />TIPO 1.
        </h1>

        <p style={{
          marginTop: 28,
          fontSize: 15,
          color: "#7b7fd4",
          lineHeight: 1.65,
          fontWeight: 400,
        }}>
          Accede a una comunidad confiable para encontrar insumos cuando más los necesites.
        </p>
      </div>

      {/* Buttons */}
      <div style={{ padding: "0 24px 48px" }}>
        <button
          onClick={onSignUp}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: 50,
            border: "none",
            background: "white",
            color: "#1e2a4a",
            fontSize: 16,
            fontWeight: 500,
            fontFamily: "inherit",
            cursor: "pointer",
            marginBottom: 20,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        >
          Crear cuenta
        </button>

        <div style={{ textAlign: "center", fontSize: 14, color: "#888" }}>
          ¿Ya tienes una cuenta?{" "}
          <button
            onClick={onSignIn}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontWeight: 600, fontSize: 14, fontFamily: "inherit" }}
          >
            Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
}
