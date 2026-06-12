import { useState } from "react";

const slides = [
  {
    img: "/onboarding_1.png",
    num: "1",
    title: "ENCUENTRA INSUMOS",
    titleBold: "CERCA DE TI",
    desc: "Busca insulina, sensores, tiritas y otros insumos disponibles en tu zona.",
  },
  {
    img: "/onboarding_2.png",
    num: "2",
    title: "INTERCAMBIA CON",
    titleBold: "TU COMUNIDAD",
    desc: "Conecta con personas cercanas para compartir o recibir insumos cuando más lo necesitas.",
  },
  {
    img: "/onboarding_3.png",
    num: "3",
    title: "GANA",
    titleBold: "DIABETCOINS",
    desc: "Cada vez que compartes un insumo ganas DiabetCoins para canjear lo que necesites.",
  },
];

export default function Onboarding({ onDone }) {
  const [idx, setIdx] = useState(0);
  const slide = slides[idx];

  function next() {
    if (idx < slides.length - 1) setIdx(idx + 1);
    else onDone();
  }

  return (
    <div style={{
      maxWidth: 430, margin: "0 auto", height: "100vh",
      background: "#f0f0f5", display: "flex", flexDirection: "column",
      fontFamily: "Outfit, sans-serif", position: "relative", overflow: "hidden",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');`}</style>

      {/* Botón Omitir */}
      <button
        onClick={onDone}
        style={{ position: "absolute", top: 52, right: 24, zIndex: 10, background: "transparent", border: "none", fontSize: 15, color: "#7890D0", fontWeight: 600, fontFamily: "Outfit, sans-serif", cursor: "pointer" }}
      >
        Omitir
      </button>

      {/* Logo arriba izquierda */}
      <div style={{ padding: "52px 24px 0", zIndex: 10 }}>
        <img src="/logo_rescat.png" alt="RESCAT+" style={{ width: 160, height: "auto" }} />
      </div>

      {/* Ilustración — ocupa el centro */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 32px 0" }}>
        <img
          src={slide.img}
          alt=""
          style={{ width: "100%", maxWidth: 320, height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Contenido inferior */}
      <div style={{ padding: "0 32px 48px", textAlign: "center" }}>
        {/* Número */}
        <div style={{
          width: 44, height: 44, borderRadius: "50%", background: "#1e2a4a",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px", fontSize: 16, fontWeight: 700, color: "white",
          fontFamily: "Outfit, sans-serif",
        }}>
          {slide.num}
        </div>

        {/* Título */}
        <p style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 400, color: "#1e2a4a", letterSpacing: 1, fontFamily: "Outfit, sans-serif", textTransform: "uppercase" }}>
          {slide.title}
        </p>
        <p style={{ margin: "0 0 16px", fontSize: 18, fontWeight: 800, color: "#1e2a4a", letterSpacing: 1, fontFamily: "Outfit, sans-serif", textTransform: "uppercase" }}>
          {slide.titleBold}
        </p>

        {/* Descripción */}
        <p style={{ margin: "0 0 28px", fontSize: 14, color: "#7890D0", lineHeight: 1.6, fontFamily: "Outfit, sans-serif", fontWeight: 500 }}>
          {slide.desc}
        </p>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28 }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 20 : 8, height: 8, borderRadius: 4,
              background: i === idx ? "#1e2a4a" : "#c8cce8",
              transition: "all 0.3s", cursor: "pointer",
            }} />
          ))}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={next}
          style={{
            width: "100%", padding: "16px", background: "#1e2a4a",
            color: "white", border: "none", borderRadius: 50,
            fontWeight: 700, fontSize: 16, cursor: "pointer",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          {idx < slides.length - 1 ? "Siguiente" : "Comenzar"}
        </button>
      </div>
    </div>
  );
}
