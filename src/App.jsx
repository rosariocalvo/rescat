import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import PublicarScreen from "./screens/PublicarScreen";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// ─── Pantallas de Auth ─────────────────────────────────────────────────────

function SignIn({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn() {
    setError("");
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) setError("Correo o contraseña incorrectos.");
  }

  return (
    <div style={authStyles.screen}>
      <div style={authStyles.card}>
        <h1 style={authStyles.title}>RESCAT</h1>
        <p style={authStyles.subtitle}>Inicia sesión para continuar</p>

        {error && <p style={authStyles.error}>{error}</p>}

        <label style={authStyles.label}>Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          style={authStyles.input}
        />

        <label style={authStyles.label}>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          style={authStyles.input}
          onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
        />

        <button
          onClick={handleSignIn}
          disabled={loading}
          style={{ ...authStyles.btn, background: loading ? "#9CA3AF" : "#252E52" }}
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <p style={authStyles.switchText}>
          ¿No tienes cuenta?{" "}
          <span onClick={onSwitch} style={authStyles.link}>Regístrate</span>
        </p>
      </div>
    </div>
  );
}

function SignUp({ onSwitch }) {
  const [form, setForm] = useState({ nombre: "", rut: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);

  async function handleSignUp() {
    setError("");
    if (!form.nombre.trim() || !form.email.trim() || !form.password.trim()) {
      setError("Completa todos los campos obligatorios.");
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { nombre: form.nombre, rut: form.rut, dc: 240 },
      },
    });
    setLoading(false);
    if (err) setError(err.message);
    else setExito(true);
  }

  if (exito) {
    return (
      <div style={authStyles.screen}>
        <div style={authStyles.card}>
          <div style={{ fontSize: 64, textAlign: "center", marginBottom: 16 }}>✅</div>
          <h2 style={{ ...authStyles.title, fontSize: 22 }}>¡Cuenta creada!</h2>
          <p style={{ color: "#6B7280", textAlign: "center", marginBottom: 24 }}>
            Ya puedes iniciar sesión con tu correo y contraseña.
          </p>
          <button onClick={onSwitch} style={authStyles.btn}>Iniciar sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div style={authStyles.screen}>
      <div style={authStyles.card}>
        <h1 style={authStyles.title}>RESCAT</h1>
        <p style={authStyles.subtitle}>Crea tu cuenta</p>

        {error && <p style={authStyles.error}>{error}</p>}

        <label style={authStyles.label}>Nombre *</label>
        <input
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          placeholder="Tu nombre"
          style={authStyles.input}
        />

        <label style={authStyles.label}>RUT</label>
        <input
          value={form.rut}
          onChange={(e) => setForm({ ...form, rut: e.target.value })}
          placeholder="12.345.678-9"
          style={authStyles.input}
        />

        <label style={authStyles.label}>Correo *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="tu@correo.com"
          style={authStyles.input}
        />

        <label style={authStyles.label}>Contraseña *</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Mínimo 6 caracteres"
          style={authStyles.input}
        />

        <button
          onClick={handleSignUp}
          disabled={loading}
          style={{ ...authStyles.btn, background: loading ? "#9CA3AF" : "#252E52" }}
        >
          {loading ? "Creando cuenta..." : "Crear cuenta"}
        </button>

        <p style={authStyles.switchText}>
          ¿Ya tienes cuenta?{" "}
          <span onClick={onSwitch} style={authStyles.link}>Inicia sesión</span>
        </p>
      </div>
    </div>
  );
}

// ─── App principal ─────────────────────────────────────────────────────────

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState("signin"); // "signin" | "signup"
  const [screen, setScreen] = useState("home");       // "home" | "mapa" | "publicar"

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Escuchar eventos del BottomNav en Home
  useEffect(() => {
    const openMapa = () => setScreen("mapa");
    const openPublicar = () => setScreen("publicar");

    window.addEventListener("openMapa", openMapa);
    window.addEventListener("openPublicar", openPublicar);

    return () => {
      window.removeEventListener("openMapa", openMapa);
      window.removeEventListener("openPublicar", openPublicar);
    };
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setScreen("home");
  }

  if (loading) {
    return (
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        minHeight: "100vh", background: "#252E52",
      }}>
        <div style={{ color: "white", fontSize: 32, fontWeight: 700, letterSpacing: 2 }}>
          RESCAT
        </div>
      </div>
    );
  }

  if (!session) {
    return authMode === "signin"
      ? <SignIn onSwitch={() => setAuthMode("signup")} />
      : <SignUp onSwitch={() => setAuthMode("signin")} />;
  }

  if (screen === "mapa") {
    return (
      <MapScreen
        user={session.user}
        onBack={() => setScreen("home")}
      />
    );
  }

  if (screen === "publicar") {
    return (
      <PublicarScreen
        user={session.user}
        onBack={() => setScreen("home")}
      />
    );
  }

  return (
    <Home
      user={session.user}
      onSignOut={handleSignOut}
    />
  );
}

// ─── Estilos Auth ──────────────────────────────────────────────────────────

const authStyles = {
  screen: {
    maxWidth: 430, margin: "0 auto",
    minHeight: "100vh", background: "#F5F6FA",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
    padding: "0 20px",
  },
  card: {
    width: "100%", background: "white",
    borderRadius: 24, padding: 28,
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: 28, fontWeight: 800, color: "#252E52",
    textAlign: "center", margin: "0 0 4px",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14, color: "#9CA3AF",
    textAlign: "center", margin: "0 0 24px",
  },
  label: {
    display: "block", fontSize: 13, fontWeight: 600,
    color: "#252E52", marginBottom: 6,
  },
  input: {
    width: "100%", padding: "12px 14px",
    borderRadius: 12, border: "1.5px solid #E5E7EB",
    fontSize: 14, color: "#252E52",
    background: "white", marginBottom: 14,
    boxSizing: "border-box", outline: "none",
  },
  btn: {
    width: "100%", padding: 14,
    background: "#252E52", color: "white",
    border: "none", borderRadius: 14,
    fontWeight: 700, fontSize: 15, cursor: "pointer",
    marginTop: 4,
  },
  error: {
    background: "#FEF2F2", border: "1px solid #FCA5A5",
    borderRadius: 10, padding: "10px 14px",
    color: "#DC2626", fontSize: 13, marginBottom: 14,
  },
  switchText: {
    textAlign: "center", fontSize: 13, color: "#9CA3AF", marginTop: 16,
  },
  link: {
    color: "#252E52", fontWeight: 700, cursor: "pointer",
  },
};
