import { useState } from "react";
import Logo from "../components/Logo";

const slides = [
  {
    step: 1,
    title: "ENCUENTRA INSUMOS",
    bold: "CERCA DE TI",
    desc: "Busca insulina, sensores, tiritas y otros insumos disponibles en tu zona.",
    img: "/onboarding1.png",
  },
  {
    step: 2,
    title: "RESERVA Y",
    bold: "COORDINA",
    desc: "Contacta a otros miembros y coordina intercambios de forma rápida y segura.",
    img: "/onboarding2.png",
  },
  {
    step: 3,
    title: "AYUDA Y",
    bold: "RECIBE AYUDA",
    desc: "Gana diabecoins al compartir insumos y utilízalas cuando necesites apoyo de la comunidad.",
    img: "/onboarding3.png",
  },
];

export default function Onboarding({ onDone }) {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const handleTap = (e) => {
    const x = e.clientX;
    const width = e.currentTarget.offsetWidth;
    if (x > width / 2) {
      if (current < slides.length - 1) setCurrent(current + 1);
      else onDone();
    } else {
      if (current > 0) setCurrent(current - 1);
    }
  };

  return (
    <div
      onClick={handleTap}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f0f0f5",
        fontFamily: "'Outfit', sans-serif",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap');`}</style>

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "52px 24px 0" }}>
        <button
          onClick={(e) => { e.stopPropagation(); onDone(); }}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#7b7fd4", fontSize: 15, fontFamily: "inherit" }}
        >
          Omitir
        </button>
      </div>

      {/* Logo */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
        <Logo size={40} />
      </div>

      {/* Illustration sin fondo */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, padding: "16px 32px 0" }}>
        <img
          key={slide.img}
          src={slide.img}
          alt={slide.bold}
          style={{
            width: "100%",
            maxWidth: 300,
            height: "auto",
            objectFit: "contain",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "0 32px 40px", textAlign: "center" }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: "#1e2a4a", color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 600,
          margin: "16px auto 16px",
        }}>
          {slide.step}
        </div>

        <div style={{ fontSize: 16, fontWeight: 400, letterSpacing: "0.08em", color: "#1e2a4a", marginBottom: 2 }}>
          {slide.title}
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.08em", color: "#1e2a4a", marginBottom: 12 }}>
          {slide.bold}
        </div>
        <div style={{ fontSize: 14, color: "#7b7fd4", lineHeight: 1.6, marginBottom: 24 }}>
          {slide.desc}
        </div>

        {/* Dots horizontales */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              style={{
                width: 10, height: 10, borderRadius: "50%",
                background: i === current ? "#1e2a4a" : "#c0c0d8",
                transition: "background 0.3s",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
