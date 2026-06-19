import { useState, useEffect } from "react";
import { supabase } from "../supabase";

const IconoDC = () => (
  <svg viewBox="252 89 21 21" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M271.931 100.156C271.931 105.219 267.827 109.323 262.764 109.323C257.702 109.323 253.598 105.219 253.598 100.156C253.598 95.0933 257.702 90.9893 262.764 90.9893C267.827 90.9893 271.931 95.0933 271.931 100.156Z" fill="#7890D0"/>
    <path d="M270.557 100.156C270.557 104.46 267.068 107.949 262.764 107.949C258.461 107.949 254.972 104.46 254.972 100.156C254.972 95.8521 258.461 92.3632 262.764 92.3632C267.068 92.3632 270.557 95.8521 270.557 100.156Z" fill="#B7C3E3"/>
    <path d="M260.603 97.8155C260.579 97.6961 260.59 97.3262 260.589 97.1863C260.587 96.4875 260.544 95.9835 260.948 95.3663C261.246 94.9161 261.761 94.5303 262.296 94.4284C262.965 94.301 263.595 94.3804 264.152 94.7652C265.012 95.36 265.17 96.2277 265.125 97.2068C265.116 97.3917 265.131 97.5939 265.118 97.7851C265.393 97.7813 265.669 97.7798 265.944 97.7807C266.364 97.7807 266.636 97.7723 267.038 97.9201C268.597 98.4927 268.929 100.702 267.808 101.83C267.345 102.296 266.844 102.474 266.196 102.481L265.488 102.481C265.397 102.481 265.19 102.486 265.112 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.037 106.136 261.18 105.22C260.548 104.545 260.552 103.257 260.592 102.384L260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.126C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155ZM260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.585 101.915 260.589 101.645 260.589 101.539L260.59 100.671L260.589 99.1033C260.589 98.7909 260.583 98.4434 260.597 98.1338ZM264.779 102.475C264.628 102.488 264.349 102.481 264.187 102.481L263.08 102.481L261.695 102.481C261.461 102.481 261.15 102.489 260.921 102.475C260.848 102.818 260.947 103.933 261.043 104.279C261.093 104.465 261.173 104.642 261.278 104.804C261.818 105.64 263.071 105.868 263.874 105.302C264.33 104.981 264.617 104.58 264.709 104.022C264.79 103.57 264.815 102.931 264.779 102.475ZM260.901 102.171C262.689 102.141 264.515 102.181 266.308 102.165C266.816 102.139 267.292 101.912 267.633 101.536C268.362 100.715 268.313 99.2839 267.462 98.5568C266.896 98.0726 266.351 98.0653 265.651 98.0879C265.388 98.094 265.088 98.0766 264.829 98.095C264.817 98.0959 264.804 98.097 264.792 98.0985C264.789 97.7566 264.789 97.4147 264.792 97.0728C264.793 96.3302 264.784 95.7989 264.199 95.231C263.835 94.8764 263.344 94.6812 262.836 94.6883C262.81 94.6888 262.784 94.6898 262.759 94.6914C262.383 94.7269 262.083 94.8017 261.769 95.01C261.223 95.3731 260.92 95.9617 260.908 96.6126C260.905 96.7697 260.903 96.9287 260.903 97.088L260.904 98.0131L260.904 100.727C260.904 101.182 260.917 101.727 260.901 102.171Z" fill="#252E52"/>
    <path d="M260.592 102.384C260.676 102.39 260.838 102.395 260.907 102.44L260.921 102.475C260.848 102.818 260.948 103.933 261.044 104.279C261.094 104.465 261.173 104.642 261.279 104.804C261.819 105.64 263.072 105.868 263.875 105.302C264.331 104.981 264.617 104.58 264.71 104.022C264.791 103.57 264.815 102.931 264.78 102.475C264.791 102.371 264.991 102.384 265.069 102.395C265.111 102.426 265.098 102.415 265.113 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.038 106.136 261.18 105.22C260.548 104.545 260.553 103.257 260.592 102.384Z" fill="#252E52"/>
    <path d="M260.603 97.8155C260.621 97.8499 260.613 98.0938 260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.609 102.096 260.638 102.288 260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.125C257.067 99.5272 157.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155Z" fill="#252E52"/>
  </svg>
);

const IconoCaja = () => (
  <svg viewBox="55 420 85 80" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M96.7164 424.849C96.7703 424.826 96.7709 424.822 96.8393 424.813C97.263 424.763 127.152 436.602 129.96 437.836C130.563 438.101 131.125 438.372 131.643 438.786C131.729 440.313 131.674 442.389 131.674 443.941L131.671 453.392L131.678 467.87C131.679 470.117 131.822 474.972 131.467 477.316C131.407 477.716 128.982 478.633 128.337 478.926L121.586 481.955L97.0726 492.993C96.7918 493.029 65.3628 478.96 62.2889 477.49C62.115 476.07 62.2123 472.078 62.2123 470.496L62.2121 456.732L62.2076 445.266C62.2029 443.77 62.1054 440.07 62.3306 438.752C63.1776 437.912 73.5127 434.047 75.275 433.344C82.39 430.432 89.5376 427.6 96.7164 424.849Z" fill="#7890D0"/>
  </svg>
);

const IconoCorazon = () => (
  <svg viewBox="55 660 85 68" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="96.7029" cy="693.697" r="54.1658" fill="#EC6765" fillOpacity="0.2"/>
    <path d="M90.4882 672.052C94.4543 668.33 98.4628 666.545 103.988 666.851C111.972 667.292 118.909 673.788 119.334 681.829C119.37 682.503 119.641 684.285 119.108 684.706C118.567 684.825 117.832 684.895 117.758 684.214C117.674 683.449 117.574 682.654 117.502 681.888C116.447 670.672 102.934 664.763 94.0497 671.657C93.3007 671.99 91.0635 675.01 90.2545 674.312C87.1144 671.603 84.6861 669.249 80.2137 668.877C67.4961 667.82 60.5562 679.514 65.0856 690.727C66.132 693.376 70.0172 696.833 72.1146 698.936L81.8586 708.622L87.0026 713.727C87.7753 714.495 89.7343 716.55 90.5613 717.01C91.6501 716.815 94.9966 712.237 96.7251 711.444C97.1976 711.605 97.6206 711.704 97.9089 712.106C97.9989 712.767 96.9795 713.701 96.509 714.175C94.8253 715.871 93.1597 717.622 91.375 719.209C90.8964 719.635 90.3103 719.653 89.8452 719.241C87.0595 716.774 84.5487 714.017 81.8836 711.422L70.9369 700.604C68.7337 698.405 66.3702 696.405 64.6241 693.847C62.7717 691.133 62.131 688.659 61.8468 685.413C61.4486 680.865 62.5624 676.393 65.5817 672.892C68.9809 668.951 72.5704 667.258 77.706 666.802C82.174 666.484 87.5669 668.637 90.4882 672.052Z" fill="#EC6765"/>
    <path d="M108.43 686.742C110.05 686.644 119.798 686.467 120.591 686.963C120.928 687.788 120.941 695.597 120.951 697.125C122.979 697.08 125.008 697.076 127.036 697.113C128.403 697.128 130.06 697.091 131.384 697.331C131.591 698.769 131.862 709.085 131.314 709.861C129.352 710.168 127.797 710.065 126.355 710.07C124.589 710.076 122.713 710.195 120.96 710.006C120.857 713.167 121.027 716.349 120.896 719.507C119.827 720.59 119.149 720.599 118.265 720.6C116.651 720.592 115.037 720.598 113.423 720.616C112.196 720.576 109.459 720.744 108.534 720.409C107.884 719.569 108.176 711.734 108.084 709.996C106.693 710.116 98.9794 710.216 97.8082 709.953C97.0905 709.291 97.3713 698.825 97.5293 697.286C98.9547 697.017 101.339 697.116 102.865 697.131C104.626 697.149 106.388 697.13 108.148 697.072C108.139 694.661 107.857 688.599 108.43 686.742Z" fill="#EC6765"/>
  </svg>
);

const IconInicio = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={active ? "white" : "#b0b8d0"}/>
  </svg>
);
const IconPublicar = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M12 8v8M8 12h8" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconBuscar = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M16.5 16.5L21 21" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCanjes = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 9h13M4 9l3-3M4 9l3 3" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 15H7M20 15l-3-3M20 15l-3 3" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPerfil = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: "inicio", label: "Inicio", Icon: IconInicio },
    { id: "publicar", label: "Publicar", Icon: IconPublicar },
    { id: "buscar", label: "Buscar", Icon: IconBuscar },
    { id: "canjes", label: "Canjes", Icon: IconCanjes },
    { id: "perfil", label: "Perfil", Icon: IconPerfil },
  ];
  return (
    <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "white", borderRadius: "20px 20px 0 0", boxShadow: "0 -2px 20px rgba(30,42,74,0.08)", display: "flex", alignItems: "center", height: 72, zIndex: 100 }}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = activeTab === id;
        return (
          <button key={id} onClick={() => onTabChange(id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, border: "none", background: "transparent", cursor: "pointer", padding: "6px 4px" }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: isActive ? "#1e2a4a" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon active={isActive} />
            </div>
            <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 400, color: isActive ? "#1e2a4a" : "#b0b8d0", fontFamily: "Outfit, sans-serif" }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function PublicarMenu({ user, onSelectCompartir, onSelectAyudar }) {
  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;
  const firstName = nombre.split(" ")[0].toUpperCase();

  return (
    <div style={{ paddingBottom: 90 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ padding: "52px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <img src="/logo_rescat.png" alt="RESCAT+" style={{ height: 100, width: "auto", objectFit: "contain" }} />
        <div style={{ textAlign: "right" }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>HOLA, {firstName}</p>
          <div style={{ background: "white", borderRadius: 50, padding: "6px 14px", display: "inline-flex", alignItems: "center", gap: 6, boxShadow: "0 1px 8px rgba(30,42,74,0.10)" }}>
            <IconoDC />
            <span style={{ fontWeight: 700, fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>{dc} DC</span>
          </div>
        </div>
      </div>
      <div style={{ padding: "32px 24px 0" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#1e2a4a", margin: "0 0 8px", fontFamily: "Outfit, sans-serif" }}>¿Qué quieres hacer?</h2>
        <p style={{ fontSize: 15, fontWeight: 600, color: "#7890D0", margin: "0 0 36px", fontFamily: "Outfit, sans-serif", lineHeight: 1.4 }}>
          Elige la opción que mejor se adapte a lo que necesitas.
        </p>
        <div onClick={onSelectCompartir} style={{ background: "white", border: "1.5px solid #7890D0", borderRadius: 20, padding: "24px 20px", marginBottom: 20, cursor: "pointer", display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 90, height: 90, borderRadius: 20, background: "rgba(120,144,208,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconoCaja />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Compartir insumo</h3>
            <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", lineHeight: 1.5, fontFamily: "Outfit, sans-serif" }}>Tengo insumos disponibles para ayudar a otro miembro.</p>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1.5px solid #7890D0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#7890D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <div onClick={onSelectAyudar} style={{ background: "#fff4f4", border: "1.5px solid #EC6765", borderRadius: 20, padding: "24px 20px", marginBottom: 20, cursor: "pointer", display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 90, height: 90, borderRadius: 20, background: "rgba(236,103,101,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconoCorazon />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Solicitar ayuda</h3>
            <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", lineHeight: 1.5, fontFamily: "Outfit, sans-serif" }}>Necesito conseguir un insumo con urgencia.</p>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1.5px solid #EC6765", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#EC6765" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <div style={{ background: "white", borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 1px 6px rgba(30,42,74,0.06)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="9.5" stroke="#7890D0" strokeWidth="1.5"/>
            <path d="M12 8v4M12 16h.01" stroke="#7890D0" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p style={{ margin: 0, fontSize: 12, color: "#7b80a0", fontFamily: "Outfit, sans-serif", lineHeight: 1.4 }}>
            Todas las publicaciones son revisadas para mantener nuestra comunidad segura.
          </p>
        </div>
      </div>
    </div>
  );
}

function FormCompartir({ user, onBack, onSuccess }) {
  const [tipoInsumo, setTipoInsumo] = useState("");
  const [tipoCustom, setTipoCustom] = useState("");
  const [estado, setEstado] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fechaVenc, setFechaVenc] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [fotoPreview, setFotoPreview] = useState(null);
  const [fotoFile, setFotoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const dc = user?.user_metadata?.dc || 240;
  const fileInputRef = { current: null };

  const dcPorTipo = { "Insulina": 80, "Sensor CGM": 120, "Bomba de insulina": 200, "Tiras reactivas": 30, "Lancetas": 15, "Glucómetro": 60, "Otro": 25 };
  const valorDC = dcPorTipo[tipoInsumo] || 0;
  const nombreFinal = tipoInsumo === "Otro" ? tipoCustom : tipoInsumo;

  function handleFoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    setFotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setFotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let lat = null, lng = null, fotoUrl = null;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej, { timeout: 8000 }));
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
    } catch {}
    if (fotoFile) {
      const ext = fotoFile.name.split(".").pop();
      const path = `insumos/${user.id}_${Date.now()}.${ext}`;
      const { data } = await supabase.storage.from("fotos").upload(path, fotoFile, { upsert: true });
      if (data) {
        const { data: urlData } = supabase.storage.from("fotos").getPublicUrl(path);
        fotoUrl = urlData?.publicUrl || null;
      }
    }
    const { error } = await supabase.from("publicaciones").insert({
      user_id: user.id,
      tipo: "compartir",
      nombre_insumo: nombreFinal,
      cantidad: cantidad || null,
      fecha_vencimiento: fechaVenc || null,
      latitud: lat,
      longitud: lng,
      estado: "activa",
      foto_url: fotoUrl || null,
    });
    setLoading(false);
    if (error) { alert("Error: " + error.message); return; }
    onSuccess();
  }

  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 14, border: "1.5px solid #e0e2ec", background: "white", fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif", outline: "none", boxSizing: "border-box", WebkitAppearance: "none", MozAppearance: "none", appearance: "none" };
  const labelStyle = { fontSize: 12, fontWeight: 600, color: "#7b80a0", marginBottom: 8, display: "block", fontFamily: "Outfit, sans-serif" };

  return (
    <div style={{ paddingBottom: 100, fontFamily: "Outfit, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ padding: "52px 24px 24px", display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={onBack} style={{ background: "white", border: "none", borderRadius: 14, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 6px rgba(30,42,74,0.10)", flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1e2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Compartir insumo</h2>
      </div>
      <div style={{ padding: "0 24px" }}>
        {tipoInsumo && (
          <div style={{ background: "#f0f1f9", border: "1.5px solid #c8cce8", borderRadius: 18, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(120,144,208,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <IconoDC />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 600, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Valor estimado</p>
              <p style={{ margin: "0 0 4px", fontSize: 11, color: "#7b80a0", fontFamily: "Outfit, sans-serif" }}>Basado en publicaciones similares</p>
              <span style={{ fontSize: 22, fontWeight: 700, color: "#7890D0", fontFamily: "Outfit, sans-serif" }}>{valorDC} DC</span>
            </div>
            <div style={{ background: "white", borderRadius: 50, padding: "6px 14px", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 1px 6px rgba(30,42,74,0.08)" }}>
              <IconoDC />
              <span style={{ fontWeight: 700, fontSize: 13, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>{dc} DC</span>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Foto del insumo</label>
            <input type="file" accept="image/*" style={{ display: "none" }} ref={el => fileInputRef.current = el} onChange={handleFoto} />
            <div onClick={() => fileInputRef.current?.click()} style={{ border: "2px dashed #c8cce8", borderRadius: 16, padding: fotoPreview ? "8px" : "28px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "#f5f6fc", cursor: "pointer", overflow: "hidden" }}>
              {fotoPreview ? (
                <img src={fotoPreview} alt="preview" style={{ width: "100%", maxHeight: 180, objectFit: "cover", borderRadius: 12 }} />
              ) : (
                <>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#7890D0" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="13" r="4" stroke="#7890D0" strokeWidth="1.5"/></svg>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#7890D0", fontFamily: "Outfit, sans-serif" }}>Subir foto</span>
                  <span style={{ fontSize: 12, color: "#b0b8d0", fontFamily: "Outfit, sans-serif" }}>JPG, PNG (máx. 5MB)</span>
                </>
              )}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Tipo de insumo</label>
            <div style={{ position: "relative" }}>
              <select value={tipoInsumo} onChange={e => setTipoInsumo(e.target.value)} required style={{ ...inputStyle, paddingRight: 40 }}>
                <option value="">Seleccionar...</option>
                <option>Insulina</option>
                <option>Sensor CGM</option>
                <option>Bomba de insulina</option>
                <option>Tiras reactivas</option>
                <option>Lancetas</option>
                <option>Glucómetro</option>
                <option>Otro</option>
              </select>
              <svg style={{ position:"absolute", right:16, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }} width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#7b80a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            {tipoInsumo === "Otro" && (
              <input style={{ ...inputStyle, marginTop: 10 }} value={tipoCustom} onChange={e => setTipoCustom(e.target.value)} placeholder="Describe el insumo..." required />
            )}
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Estado del producto</label>
              <div style={{ position: "relative" }}>
                <select value={estado} onChange={e => setEstado(e.target.value)} style={{ ...inputStyle, paddingRight: 36 }}>
                  <option value="">Seleccionar...</option>
                  <option>Sellado</option>
                  <option>Abierto</option>
                  <option>Por vencer</option>
                </select>
                <svg style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }} width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#7b80a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Cantidad disponible</label>
              <input style={inputStyle} value={cantidad} onChange={e => setCantidad(e.target.value)} placeholder="Ej: 3 cajas" />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Fecha de vencimiento</label>
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <span style={{ position:"absolute", left:16, zIndex:1, pointerEvents:"none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#7b80a0" strokeWidth="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#7b80a0" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <input type="date" value={fechaVenc} onChange={e => setFechaVenc(e.target.value)} style={{ ...inputStyle, paddingLeft: 44, minHeight: 52, display: "block", maxWidth: "100%" }} />
            </div>
          </div>
          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle}>Ubicación</label>
            <div style={{ position: "relative" }}>
              <span style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#7b80a0"/></svg>
              </span>
              <input style={{ ...inputStyle, paddingLeft: 44, paddingRight: 44 }} value={ubicacion} onChange={e => setUbicacion(e.target.value)} placeholder="Las Condes, Santiago" />
              <span style={{ position:"absolute", right:16, top:"50%", transform:"translateY(-50%)", cursor:"pointer" }}
                onClick={async () => {
                  try {
                    const pos = await new Promise((res,rej) => navigator.geolocation.getCurrentPosition(res,rej));
                    setUbicacion(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
                  } catch {}
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#7890D0" strokeWidth="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#7890D0" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
            </div>
          </div>
          <button type="submit" disabled={loading} style={{ width:"100%", padding:18, background:"#1e2a4a", color:"white", border:"none", borderRadius:50, fontWeight:700, fontSize:16, cursor:"pointer", fontFamily:"Outfit, sans-serif" }}>
            {loading ? "Publicando..." : "Publicar insumo"}
          </button>
        </form>
      </div>
    </div>
  );
}

function FormAyudar({ user, onBack, onSuccess }) {
  const [tipoInsumo, setTipoInsumo] = useState("");
  const [tipoCustom, setTipoCustom] = useState("");
  const [urgente, setUrgente] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [anonimo, setAnonimo] = useState(false);
  const [loading, setLoading] = useState(false);
  const dc = user?.user_metadata?.dc || 240;

  const dcPorTipo = { "Insulina": 80, "Sensor CGM": 120, "Bomba de insulina": 200, "Tiras reactivas": 30, "Lancetas": 15, "Glucómetro": 60, "Otro": 25 };
  const valorDC = dcPorTipo[tipoInsumo] || 0;
  const nombreFinal = tipoInsumo === "Otro" ? tipoCustom : tipoInsumo;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let lat = null, lng = null;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej, { timeout: 8000 }));
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
    } catch {}
    const { error } = await supabase.from("publicaciones").insert({
      user_id: user.id,
      tipo: "solicitar",
      nombre_insumo: nombreFinal,
      urgente: urgente,
      anonimo: anonimo,
      mensaje: mensaje || null,
      latitud: lat,
      longitud: lng,
      estado: "activa",
    });
    setLoading(false);
    if (error) { alert("Error: " + error.message); return; }
    onSuccess();
  }

  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 14, border: "1.5px solid #e0e2ec", background: "white", fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif", outline: "none", boxSizing: "border-box", WebkitAppearance: "none", MozAppearance: "none", appearance: "none" };
  const labelStyle = { fontSize: 13, fontWeight: 600, color: "#1e2a4a", marginBottom: 8, display: "block", fontFamily: "Outfit, sans-serif" };

  return (
    <div style={{ paddingBottom: 100, fontFamily: "Outfit, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ padding: "52px 24px 24px", display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={onBack} style={{ background: "white", border: "none", borderRadius: 14, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 6px rgba(30,42,74,0.10)", flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1e2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Solicitar ayuda</h2>
      </div>
      <div style={{ padding: "0 24px" }}>
        {tipoInsumo && (
          <div style={{ background: "#fff4f4", border: "1.5px solid #f0c0be", borderRadius: 18, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(236,103,101,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="252 89 21 21" width="24" height="24" fill="none"><path d="M271.931 100.156C271.931 105.219 267.827 109.323 262.764 109.323C257.702 109.323 253.598 105.219 253.598 100.156C253.598 95.0933 257.702 90.9893 262.764 90.9893C267.827 90.9893 271.931 95.0933 271.931 100.156Z" fill="#EC6765"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 600, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Valor estimado</p>
              <p style={{ margin: "0 0 4px", fontSize: 11, color: "#7b80a0", fontFamily: "Outfit, sans-serif" }}>Basado en publicaciones similares</p>
              <span style={{ fontSize: 22, fontWeight: 700, color: "#EC6765", fontFamily: "Outfit, sans-serif" }}>{valorDC} DC</span>
            </div>
            <div style={{ background: "white", borderRadius: 50, padding: "6px 14px", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 1px 6px rgba(30,42,74,0.08)" }}>
              <IconoDC />
              <span style={{ fontWeight: 700, fontSize: 13, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>{dc} DC</span>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>¿Qué insumo necesitas?</label>
            <div style={{ position: "relative" }}>
              <select value={tipoInsumo} onChange={e => setTipoInsumo(e.target.value)} required style={{ ...inputStyle, paddingRight: 40 }}>
                <option value="">Seleccionar...</option>
                <option>Insulina</option>
                <option>Sensor CGM</option>
                <option>Bomba de insulina</option>
                <option>Tiras reactivas</option>
                <option>Lancetas</option>
                <option>Glucómetro</option>
                <option>Otro</option>
              </select>
              <svg style={{ position:"absolute", right:16, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }} width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#7b80a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            {tipoInsumo === "Otro" && (
              <input style={{ ...inputStyle, marginTop: 10 }} value={tipoCustom} onChange={e => setTipoCustom(e.target.value)} placeholder="Describe el insumo..." required />
            )}
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Urgencia</label>
            <div style={{ display: "flex", gap: 12 }}>
              <button type="button" onClick={() => setUrgente(false)} style={{ flex:1, padding:"14px 16px", borderRadius:14, cursor:"pointer", fontFamily:"Outfit, sans-serif", fontWeight:600, fontSize:14, border:`1.5px solid ${!urgente?"#7890D0":"#e0e2ec"}`, background:!urgente?"#f0f1f9":"white", color:!urgente?"#1e2a4a":"#7b80a0", display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:12, height:12, borderRadius:"50%", background:!urgente?"#7890D0":"#e0e2ec", flexShrink:0 }}/>Normal
              </button>
              <button type="button" onClick={() => setUrgente(true)} style={{ flex:1, padding:"14px 16px", borderRadius:14, cursor:"pointer", fontFamily:"Outfit, sans-serif", fontWeight:600, fontSize:14, border:`1.5px solid ${urgente?"#EC6765":"#e0e2ec"}`, background:urgente?"#fff4f4":"white", color:urgente?"#EC6765":"#7b80a0", display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:12, height:12, borderRadius:"50%", background:urgente?"#EC6765":"#e0e2ec", flexShrink:0 }}/>Urgente
              </button>
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Mensaje opcional</label>
            <div style={{ position: "relative" }}>
              <textarea value={mensaje} onChange={e => setMensaje(e.target.value.slice(0, 150))} placeholder="Mi sensor se despegó hoy y necesito uno lo antes posible." style={{ ...inputStyle, height:110, resize:"none", paddingBottom:28 }} />
              <span style={{ position:"absolute", bottom:12, right:16, fontSize:11, color:"#b0b8d0", fontFamily:"Outfit, sans-serif" }}>{mensaje.length} / 150</span>
            </div>
          </div>
          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle}>¿Cómo quieres publicar esta solicitud?</label>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <div onClick={() => setAnonimo(false)} style={{ background:"white", borderRadius:14, padding:"14px 16px", display:"flex", alignItems:"center", gap:14, cursor:"pointer", border:`1.5px solid ${!anonimo?"#7890D0":"#e0e2ec"}` }}>
                <div style={{ width:22, height:22, borderRadius:6, border:`2px solid ${!anonimo?"#7890D0":"#e0e2ec"}`, background:!anonimo?"#7890D0":"white", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  {!anonimo && <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span style={{ fontSize:14, fontWeight:500, color:"#1e2a4a", fontFamily:"Outfit, sans-serif" }}>Mostrar mi perfil</span>
              </div>
              <div onClick={() => setAnonimo(true)} style={{ background:"white", borderRadius:14, padding:"14px 16px", display:"flex", alignItems:"center", gap:14, cursor:"pointer", border:`1.5px solid ${anonimo?"#7890D0":"#e0e2ec"}` }}>
                <div style={{ width:22, height:22, borderRadius:6, border:`2px solid ${anonimo?"#7890D0":"#e0e2ec"}`, background:anonimo?"#7890D0":"white", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  {anonimo && <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span style={{ fontSize:14, fontWeight:500, color:"#1e2a4a", fontFamily:"Outfit, sans-serif" }}>Solicitar de forma anónima</span>
              </div>
            </div>
            {anonimo && <p style={{ margin:"10px 0 0", fontSize:12, color:"#7b80a0", fontFamily:"Outfit, sans-serif", lineHeight:1.4 }}>Tu identidad permanecerá oculta hasta que un miembro acepte ayudarte.</p>}
          </div>
          <button type="submit" disabled={loading} style={{ width:"100%", padding:18, background:"#EC6765", color:"white", border:"none", borderRadius:50, fontWeight:700, fontSize:16, cursor:"pointer", fontFamily:"Outfit, sans-serif" }}>
            {loading ? "Publicando..." : "Solicitar ayuda"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Confirmacion({ tipo, onNuevo, onInicio }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"70vh", padding:"0 24px", fontFamily:"Outfit, sans-serif" }}>
      <div style={{ fontSize:64, marginBottom:16 }}>{tipo==="compartir"?"✅":"🙏"}</div>
      <h3 style={{ fontSize:22, fontWeight:700, color:"#1e2a4a", margin:"0 0 8px" }}>¡Publicado!</h3>
      <p style={{ color:"#7b80a0", textAlign:"center", marginBottom:32 }}>{tipo==="compartir"?"Tu insumo ya está visible en el mapa.":"Tu comunidad verá tu pedido en el mapa."}</p>
      <button onClick={onNuevo} style={{ width:"100%", padding:16, background:"#1e2a4a", color:"white", border:"none", borderRadius:50, fontWeight:700, fontSize:15, cursor:"pointer", marginBottom:12, fontFamily:"Outfit, sans-serif" }}>Publicar otro</button>
      <button onClick={onInicio} style={{ width:"100%", padding:16, background:"transparent", border:"1.5px solid #dde0ea", borderRadius:50, color:"#7b80a0", fontSize:15, fontWeight:500, cursor:"pointer", fontFamily:"Outfit, sans-serif" }}>Volver al inicio</button>
    </div>
  );
}

export default function PublicarScreen({ user, onBack }) {
  const [view, setView] = useState("menu");
  return (
    <div style={{ maxWidth:430, margin:"0 auto", minHeight:"100vh", background:"#f0f0f5" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      {view==="menu" && <PublicarMenu user={user} onSelectCompartir={()=>setView("compartir")} onSelectAyudar={()=>setView("ayudar")}/>}
      {view==="compartir" && <FormCompartir user={user} onBack={()=>setView("menu")} onSuccess={()=>setView("ok_compartir")}/>}
      {view==="ayudar" && <FormAyudar user={user} onBack={()=>setView("menu")} onSuccess={()=>setView("ok_ayudar")}/>}
      {view==="ok_compartir" && <Confirmacion tipo="compartir" onNuevo={()=>setView("menu")} onInicio={onBack}/>}
      {view==="ok_ayudar" && <Confirmacion tipo="ayudar" onNuevo={()=>setView("menu")} onInicio={onBack}/>}
      <BottomNav activeTab="publicar" onTabChange={(tab)=>{
        if (tab === "buscar") window.dispatchEvent(new CustomEvent("openMapa"));
        else if (tab === "canjes") window.dispatchEvent(new CustomEvent("openCanjes"));
        else if (tab === "perfil") window.dispatchEvent(new CustomEvent("openPerfil"));
        else if (tab === "inicio") onBack();
        else onBack();
      }}/>
    </div>
  );
}
