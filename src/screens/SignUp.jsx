import { useState } from "react";
import { supabase } from "../supabase";

export default function SignUp({ onBack, onSignIn, onSuccess }) {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    marginBottom: 24,
  };

  const handleSubmit = async () => {
    setError("");
    if (!nombre || !rut || !email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    setLoading(true);
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { nombre_completo: nombre, rut } },
    });
    if (!authError && authData?.user) {
      await supabase.from("perfiles").upsert({ user_id: authData.user.id, nombre }, { onConflict: "user_id" });
    }
    setLoading(false);
    if (authError) {
      setError(authError.message === "User already registered"
        ? "Este correo ya tiene una cuenta. Intenta iniciar sesión."
        : authError.message);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div style={{ minHeight: "100vh", background: "#f0f0f5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", fontFamily: "'Outfit', sans-serif" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", marginBottom: 12, textAlign: "center" }}>¡Cuenta creada!</h2>
        <p style={{ fontSize: 14, color: "#7b7fd4", textAlign: "center", lineHeight: 1.6 }}>
          Te enviamos un correo de confirmación a <strong>{email}</strong>.<br />Revisa tu bandeja de entrada para activar tu cuenta.
        </p>
        <button onClick={onSignIn} style={{ marginTop: 32, width: "100%", padding: "18px", borderRadius: 50, border: "none", background: "white", color: "#1e2a4a", fontSize: 16, fontWeight: 500, fontFamily: "inherit", cursor: "pointer" }}>
          Ir a iniciar sesión
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f0f0f5", fontFamily: "'Outfit', sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap'); input::placeholder { color: #c0c0d8; }`}</style>

      <div style={{ padding: "60px 32px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <img src="/logo_rescat.png" alt="RESCAT+" style={{ width: 160, height: "auto" }} />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", textAlign: "center", marginBottom: 8 }}>Crea tu cuenta</h2>
        <p style={{ textAlign: "center", color: "#7b7fd4", fontSize: 14, lineHeight: 1.6, marginBottom: 40 }}>
          Validamos la identidad de cada miembro para proteger la comunidad y fomentar intercambios seguros.
        </p>

        {error && (
          <div style={{ background: "#fff0f0", border: "1px solid #ffcccc", borderRadius: 8, padding: "10px 14px", marginBottom: 20, fontSize: 13, color: "#c0392b" }}>
            {error}
          </div>
        )}

        <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>Nombre completo</label>
        <input type="text" placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} style={inputStyle} />

        <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>RUT</label>
        <input type="text" placeholder="12.345.678-9" value={rut} onChange={e => setRut(e.target.value)} style={inputStyle} />

        <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>Mail</label>
        <input type="email" placeholder="tucorreo@gmail.com" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />

        <label style={{ fontSize: 13, fontWeight: 600, color: "#1e2a4a" }}>Contraseña</label>
        <input type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ width: "100%", padding: "18px", borderRadius: 50, border: "none", background: loading ? "#e0e0f0" : "white", color: loading ? "#aaa" : "#7b7fd4", fontSize: 16, fontWeight: 500, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer", marginBottom: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
        >
          {loading ? "Creando cuenta..." : "Crear cuenta"}
        </button>

        <div style={{ textAlign: "center", paddingBottom: 40, fontSize: 14, color: "#888" }}>
          ¿Ya tienes cuenta?{" "}
          <button onClick={onSignIn} style={{ background: "none", border: "none", cursor: "pointer", color: "#1e2a4a", fontWeight: 600, fontSize: 14, fontFamily: "inherit" }}>Inicia sesión</button>
        </div>
      </div>
    </div>
  );
}
