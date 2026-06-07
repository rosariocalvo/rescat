import { useEffect } from "react";
import Logo from "../components/Logo";

export default function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(180deg, #f8f8fc 0%, #f0f0f5 60%, #c8c8e8 100%)",
      animation: "fadeIn 0.8s ease",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Outfit', sans-serif; }
      `}</style>
      <div style={{ animation: "pulse 2s ease-in-out infinite" }}>
        <Logo size={80} />
      </div>
    </div>
  );
}
