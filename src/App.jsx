import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import Splash from "./screens/Splash";
import Onboarding from "./screens/Onboarding";
import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";

export default function App() {
  const [screen, setScreen] = useState("splash");
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        setScreen("home");
      }
      setChecking(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        setScreen("home");
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (checking) return null;

  const navigate = (to) => setScreen(to);

  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", background: "#e8e8f0" }}>
      <div style={{ width: "100%", maxWidth: 390, minHeight: "100vh", position: "relative", overflow: "hidden", background: "#f0f0f5" }}>
        {screen === "splash" && <Splash onDone={() => navigate("onboarding")} />}
        {screen === "onboarding" && <Onboarding onDone={() => navigate("welcome")} />}
        {screen === "welcome" && (
          <Welcome onSignUp={() => navigate("signup")} onSignIn={() => navigate("signin")} />
        )}
        {screen === "signin" && (
          <SignIn
            onBack={() => navigate("welcome")}
            onSignUp={() => navigate("signup")}
            onSuccess={() => navigate("home")}
          />
        )}
        {screen === "signup" && (
          <SignUp
            onBack={() => navigate("welcome")}
            onSignIn={() => navigate("signin")}
          />
        )}
        {screen === "home" && (
          <Home user={user} onSignOut={() => { setUser(null); navigate("welcome"); }} />
        )}
      </div>
    </div>
  );
}
