import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import Splash from "./screens/Splash";
import Onboarding from "./screens/Onboarding";
import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import PublicarScreen from "./screens/PublicarScreen";
import CanjesScreen from "./screens/CanjesScreen";
import PerfilScreen from "./screens/PerfilScreen";

export default function App() {
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [screen, setScreen] = useState("splash");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCheckingSession(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) setScreen("home");
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const go = (s) => () => setScreen(s);
    const goMapa    = go("mapa");
    const goPublicar= go("publicar");
    const goCanjes  = go("canjes");
    const goPerfil  = go("perfil");
    window.addEventListener("openMapa",     goMapa);
    window.addEventListener("openPublicar", goPublicar);
    window.addEventListener("openCanjes",   goCanjes);
    window.addEventListener("openPerfil",   goPerfil);
    return () => {
      window.removeEventListener("openMapa",     goMapa);
      window.removeEventListener("openPublicar", goPublicar);
      window.removeEventListener("openCanjes",   goCanjes);
      window.removeEventListener("openPerfil",   goPerfil);
    };
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setScreen("welcome");
  }

  if (checkingSession) return null;

  if (session) {
    if (screen === "mapa")     return <MapScreen     user={session.user} onBack={() => setScreen("home")} />;
    if (screen === "publicar") return <PublicarScreen user={session.user} onBack={() => setScreen("home")} />;
    if (screen === "canjes")   return <CanjesScreen   user={session.user} onBack={() => setScreen("home")} />;
    if (screen === "perfil")   return <PerfilScreen   user={session.user} onSignOut={handleSignOut} onBack={() => setScreen("home")} />;
    return <Home user={session.user} onSignOut={handleSignOut} />;
  }

  if (screen === "splash")    return <Splash    onDone={() => setScreen("onboarding")} />;
  if (screen === "onboarding")return <Onboarding onDone={() => setScreen("welcome")} />;
  if (screen === "welcome")   return <Welcome   onSignUp={() => setScreen("signup")} onSignIn={() => setScreen("signin")} />;
  if (screen === "signin")    return <SignIn    onBack={() => setScreen("welcome")} onSignUp={() => setScreen("signup")} onSuccess={() => setScreen("home")} />;
  if (screen === "signup")    return <SignUp    onBack={() => setScreen("welcome")} onSignIn={() => setScreen("signin")} onSuccess={() => setScreen("signin")} />;
  return null;
}
