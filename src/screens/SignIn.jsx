import { useState } from "react";
import { supabase } from "../supabase";

export default function SignIn({ onBack, onSignUp, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: "100%",
    border: "none",
    borderBottom: "1.5px solid #b8b8e8",
    background: "transparent",
    padding: "8px 0",
    fontSize: 15,
    color: "#1e2a4a",
    fontFamily: "'Outfit', sans-serif",
    outline: "none",
    marginBottom: 28,
  };

  const handleSubmit = async () => {
    setError("");
    if (!email || !password) {
      setError("Por favor ingresa tu correo y contraseña.");
      return;
    }
    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError("Correo o contraseña incorrectos. Intenta de nuevo.");
    } else {
      onSuccess && onSuccess();
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0f0f5", fontFamily: "'Outfit', sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap'); input::placeholder { color: #c0c0d8; }`}</style>

      <div style={{ padding: "60px 32px 0" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", textAlign: "center", marginBottom: 8 }}>Inicio de sesión</h2>
        <p style={{ textAlign: "center", color: "#7b7fd4", fontSize: 14, lineHeight: 1.6, marginBottom: 48 }}>
          Qué bueno verte de nuevo!<br />Accede a tu cuenta para continuar.
        </p>

        {error && (
          <div style={{ background: "#fff0f0", border: "1px solid #ffcccc", borderRadius: 8, padding: "10px 14px", marginBottom: 20, fontSize: 13, color: "#c0392b" }}>
            {error}
          </div>
        )}

        <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>Mail</label>
        <input type="email" placeholder="tucorreo@gmail.com" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />

        <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>Contraseña</label>
        <input type="password" placeholder="••••••••••" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ width: "100%", padding: "18px", borderRadius: 50, border: "none", background: loading ? "#e0e0f0" : "white", color: loading ? "#aaa" : "#7b7fd4", fontSize: 16, fontWeight: 500, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer", marginBottom: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontWeight: 600, fontSize: 14, fontFamily: "inherit" }}>¿Olvidaste tu contraseña?</button>
        </div>

        <div style={{ textAlign: "center", fontSize: 14, color: "#888" }}>
          ¿No tienes cuenta?{" "}
          <button onClick={onSignUp} style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontWeight: 600, fontSize: 14, fontFamily: "inherit" }}>Crear cuenta</button>
        </div>
      </div>
    </div>
  );
}
