import { useState, useRef } from "react";

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
  const startX = useRef(null);

  function handleTouchStart(e) {
    startX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    startX.current = null;
    if (Math.abs(diff) < 40) return; // demasiado corto, ignorar
    if (diff > 0) {
      // swipe izquierda → siguiente
      if (idx < slides.length - 1) setIdx(i => i + 1);
      else onDone();
    } else {
      // swipe derecha → anterior
      if (idx > 0) setIdx(i => i - 1);
    }
  }

  const slide = slides[idx];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        maxWidth: 430, margin: "0 auto", height: "100vh",
        background: "#f0f0f5", display: "flex", flexDirection: "column",
        fontFamily: "Outfit, sans-serif", position: "relative",
        overflow: "hidden", touchAction: "pan-y",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');`}</style>

      {/* Omitir — zona de toque propia, no interfiere con swipe */}
      <div
        onTouchEnd={e => { e.stopPropagation(); onDone(); }}
        onClick={onDone}
        style={{
          position: "absolute", top: 44, right: 0,
          padding: "12px 24px", zIndex: 20, cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 15, color: "#7890D0", fontWeight: 600, fontFamily: "Outfit, sans-serif" }}>
          Omitir
        </span>
      </div>

      {/* Logo */}
      <div style={{ padding: "52px 24px 0", zIndex: 10, pointerEvents: "none" }}>
        <img src="/logo_rescat.png" alt="RESCAT+" style={{ width: 160, height: "auto" }} />
      </div>

      {/* Ilustración */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 32px 0", pointerEvents: "none" }}>
        <img
          src={slide.img}
          alt=""
          style={{ width: "100%", maxWidth: 320, height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Contenido inferior */}
      <div style={{ padding: "0 32px 56px", textAlign: "center", pointerEvents: "none" }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%", background: "#1e2a4a",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px", fontSize: 16, fontWeight: 700, color: "white",
        }}>
          {slide.num}
        </div>

        <p style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 400, color: "#1e2a4a", letterSpacing: 1, textTransform: "uppercase" }}>
          {slide.title}
        </p>
        <p style={{ margin: "0 0 16px", fontSize: 18, fontWeight: 800, color: "#1e2a4a", letterSpacing: 1, textTransform: "uppercase" }}>
          {slide.titleBold}
        </p>
        <p style={{ margin: "0 0 28px", fontSize: 14, color: "#7890D0", lineHeight: 1.6, fontWeight: 500 }}>
          {slide.desc}
        </p>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {slides.map((_, i) => (
            <div key={i} style={{
              width: i === idx ? 20 : 8, height: 8, borderRadius: 4,
              background: i === idx ? "#1e2a4a" : "#c8cce8",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
