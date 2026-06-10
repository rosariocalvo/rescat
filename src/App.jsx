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

export default function App() {
  const [screen, setScreen] = useState("splash");
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

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
    setSession(null);
    setScreen("welcome");
  }

  if (checkingSession) return null;

  if (session) {
    if (screen === "mapa") return <MapScreen user={session.user} onBack={() => setScreen("home")} />;
    if (screen === "publicar") return <PublicarScreen user={session.user} onBack={() => setScreen("home")} />;
    return <Home user={session.user} onSignOut={handleSignOut} />;
  }

  if (screen === "splash") return <Splash onDone={() => setScreen("onboarding")} />;
  if (screen === "onboarding") return <Onboarding onDone={() => setScreen("welcome")} />;
  if (screen === "welcome") return <Welcome onSignUp={() => setScreen("signup")} onSignIn={() => setScreen("signin")} />;
  if (screen === "signin") return <SignIn onBack={() => setScreen("welcome")} onSignUp={() => setScreen("signup")} onSuccess={() => setScreen("home")} />;
  if (screen === "signup") return <SignUp onBack={() => setScreen("welcome")} onSignIn={() => setScreen("signin")} onSuccess={() => setScreen("signin")} />;
  return null;
}
