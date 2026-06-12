import { useEffect } from "react";

export default function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      maxWidth: 430, margin: "0 auto",
      height: "100vh", overflow: "hidden",
      position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Fondo degradado exacto del Figma */}
      <img
        src="/splash_bg.png"
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/* Logo centrado — tamaño grande */}
      <img
        src="/logo_rescat.png"
        alt="RESCAT+"
        style={{ position: "relative", zIndex: 1, width: 200, height: "auto" }}
      />
    </div>
  );
}
