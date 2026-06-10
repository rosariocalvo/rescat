import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import Logo from "../components/Logo";

// Íconos extraídos exactamente del diseño Figma

const IconoCompartir = () => (
  <svg viewBox="48 152 58 58" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M77.2915 152.967C92.962 152.967 105.666 165.671 105.666 181.341C105.666 197.012 92.962 209.715 77.2915 209.715C61.621 209.715 48.9175 197.012 48.9175 181.341C48.9175 165.671 61.621 152.967 77.2915 152.967Z" stroke="#7890D0"/>
    <path d="M77.292 157.295C90.5723 157.295 101.338 168.061 101.338 181.342C101.338 194.622 90.5722 205.387 77.292 205.388C64.0116 205.388 53.2453 194.622 53.2451 181.342C53.2451 168.061 64.0115 157.295 77.292 157.295Z" stroke="#7890D0"/>
    <path d="M70.4849 173.969C70.4079 173.593 70.442 172.428 70.4405 171.987C70.4327 169.786 70.2979 168.198 71.57 166.254C72.5094 164.836 74.1311 163.621 75.8168 163.3C77.9237 162.899 79.9079 163.149 81.6621 164.361C84.373 166.235 84.8684 168.968 84.7271 172.052C84.7004 172.634 84.7479 173.271 84.7066 173.873C85.5737 173.861 86.4409 173.857 87.3081 173.86C88.63 173.859 89.487 173.833 90.7544 174.299C95.6634 176.102 96.7104 183.062 93.1802 186.615C91.7222 188.083 90.1418 188.644 88.1027 188.665L85.8719 188.666C85.5842 188.666 84.9322 188.68 84.6869 188.648C84.8557 191.686 84.7967 195.349 82.4622 197.586C79.5837 200.344 75.0018 200.179 72.3003 197.294C70.3095 195.167 70.3246 191.108 70.4483 188.358L70.4579 188.276C70.176 188.174 69.3781 188.27 69.0624 188.27C68.4875 188.269 67.8882 188.243 67.3154 188.2C65.1378 188.037 63.2703 187.788 61.6071 186.221C60.3097 184.998 59.3472 183.027 59.3213 181.245C59.3452 179.361 60.02 177.532 61.3105 176.152C63.288 174.039 66.2514 174.039 68.9288 173.937C69.4484 173.917 69.9701 173.982 70.4849 173.969ZM70.4655 174.972C68.3074 174.808 65.3788 174.966 63.4019 175.897C61.7212 176.689 60.5624 178.77 60.4251 180.591C60.2928 182.206 60.8213 183.805 61.8898 185.023C63.0911 186.415 64.824 187.017 66.6225 187.145C67.4152 187.203 68.2097 187.23 69.0045 187.227C69.4876 187.223 70.0027 187.185 70.4744 187.188C70.4274 186.881 70.4406 186.031 70.4407 185.697L70.4429 182.962L70.441 178.025C70.4408 177.042 70.4203 175.947 70.4655 174.972ZM83.6397 188.644C83.1623 188.688 82.2832 188.664 81.7719 188.664L78.2864 188.665L73.9253 188.665C73.1877 188.665 72.2073 188.691 71.4845 188.647C71.2546 189.726 71.5687 193.237 71.8708 194.329C72.0291 194.915 72.2787 195.473 72.6102 195.981C74.3126 198.615 78.2596 199.334 80.7875 197.552C82.2239 196.539 83.1271 195.278 83.4176 193.517C83.6729 192.096 83.7511 190.084 83.6397 188.644ZM71.4219 187.69C77.056 187.592 82.8057 187.719 88.455 187.67C90.0532 187.587 91.5535 186.874 92.6269 185.687C94.9255 183.101 94.7687 178.595 92.0905 176.304C90.3069 174.779 88.59 174.756 86.3847 174.827C85.5558 174.846 84.6103 174.791 83.7947 174.849C83.7563 174.852 83.718 174.856 83.6798 174.86C83.6698 173.784 83.6691 172.707 83.6777 171.63C83.6834 169.291 83.6543 167.617 81.8103 165.828C80.6632 164.711 79.1191 164.096 77.5182 164.119C77.4368 164.12 77.3553 164.124 77.274 164.128C76.0923 164.24 75.1456 164.476 74.1586 165.132C72.4386 166.276 71.4829 168.13 71.4447 170.18C71.4355 170.675 71.4291 171.176 71.4296 171.678L71.4336 174.591L71.4314 183.141C71.431 184.574 71.4743 186.288 71.4219 187.69Z" fill="#7890D0"/>
  </svg>
);

const IconoAyudar = () => (
  <svg viewBox="46 149 58 58" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M75.0439 150.372C90.7145 150.372 103.418 163.076 103.418 178.746C103.418 194.417 90.7145 207.12 75.0439 207.12C59.3734 207.12 46.6699 194.417 46.6699 178.746C46.6699 163.076 59.3734 150.372 75.0439 150.372Z" stroke="#EC6765"/>
    <path d="M75.0444 154.7C88.3247 154.7 99.0903 165.466 99.0903 178.746C99.0901 192.027 88.3246 202.792 75.0444 202.792C61.7641 202.792 50.9978 192.027 50.9976 178.746C50.9976 165.466 61.7639 154.7 75.0444 154.7Z" stroke="#EC6765"/>
    <path d="M81.9126 185.584L81.9399 186.08C82.0239 187.591 82.0485 189.218 81.7739 190.733C81.4999 192.244 80.9347 193.609 79.8687 194.63C77.1938 197.193 72.9311 197.042 70.4175 194.357C69.5261 193.404 69.0528 191.98 68.8286 190.395C68.6746 189.306 68.6435 188.174 68.6587 187.127C68.6585 187.166 68.6576 187.205 68.6577 187.243C68.6596 187.756 68.6875 188.343 68.7319 188.926C68.8195 190.075 68.9755 191.265 69.1401 191.863V191.864C69.2907 192.421 69.5175 192.954 69.813 193.449L69.9438 193.659C71.8035 196.534 76.072 197.307 78.8276 195.365C80.3546 194.289 81.345 192.918 81.6616 191.01L81.6626 191.011C81.9262 189.544 82.0054 187.488 81.8911 186.011L81.8579 185.584C81.8761 185.584 81.8944 185.584 81.9126 185.584ZM68.7476 185.948C68.6992 186.174 68.675 186.471 68.6646 186.799C68.6728 186.452 68.6854 186.117 68.6997 185.797L68.7065 185.74L68.7222 185.602L68.8208 185.601L68.7476 185.948ZM70.6372 185.575C73.2257 185.547 75.8243 185.557 78.4263 185.57L76.0386 185.571L71.6782 185.57C71.3538 185.569 70.9956 185.573 70.6372 185.575ZM64.6802 185.071C65.3723 185.113 66.0658 185.135 66.7593 185.132H66.7612C67.0117 185.13 67.2702 185.119 67.5151 185.11C67.7637 185.1 68.0006 185.092 68.2241 185.093L68.6733 185.095L68.6646 185.314L68.3804 185.21C68.2349 185.158 68.0682 185.143 67.9399 185.137C67.7996 185.131 67.6469 185.134 67.5044 185.14C67.1865 185.153 66.965 185.175 66.8159 185.175C66.2551 185.174 65.6675 185.149 65.105 185.107C64.9613 185.096 64.8199 185.082 64.6802 185.071ZM86.98 171.834C87.408 171.89 87.835 171.99 88.3345 172.173C90.5899 173.002 91.9828 175.022 92.3921 177.294C92.8022 179.571 92.2093 182.025 90.5776 183.667C89.498 184.754 88.3575 185.304 86.9614 185.492C88.4146 185.253 89.7531 184.53 90.7505 183.427L90.7534 183.424C93.226 180.642 93.0716 175.813 90.1675 173.329C89.1108 172.426 88.0682 172.013 86.98 171.834ZM64.3364 171.959C63.121 172.107 61.9267 172.386 60.9409 172.85C59.0619 173.735 57.8277 176 57.6792 177.955C57.536 179.703 58.1077 181.434 59.2632 182.753V182.754C60.2467 183.894 61.5445 184.536 62.9214 184.844C61.7256 184.61 60.677 184.18 59.7026 183.262C58.567 182.192 57.7105 180.501 57.5884 178.95L57.5737 178.643C57.5993 176.877 58.2331 175.176 59.4282 173.899C60.3251 172.94 61.4544 172.448 62.7124 172.185C63.2407 172.074 63.7842 172.006 64.3364 171.959ZM68.6938 182.013C68.6997 182.694 68.7032 183.387 68.6968 184.046C68.6955 183.985 68.6925 183.92 68.6919 183.853C68.6894 183.562 68.6928 183.278 68.6929 183.102L68.6938 182.013ZM68.6851 171.909L68.2554 171.878C68.2285 171.876 68.2015 171.874 68.1743 171.872C68.1994 171.872 68.2244 171.874 68.2495 171.873L68.6851 171.863V171.909ZM76.0425 161.06C77.141 161.162 78.1742 161.516 79.1304 162.177C81.6273 163.903 82.1184 166.411 81.98 169.434C81.9658 169.743 81.9718 170.064 81.9751 170.365C81.9785 170.673 81.9796 170.965 81.9604 171.244L81.9292 171.696C81.927 171.347 81.9245 170.998 81.9243 170.65L81.9302 169.038V169.035C81.933 167.877 81.9295 166.81 81.6743 165.804C81.4132 164.775 80.8951 163.829 79.9106 162.874H79.9116C78.8567 161.847 77.4917 161.213 76.0425 161.06ZM74.9263 161.04C73.719 161.159 72.6977 161.413 71.6343 162.12C69.7699 163.36 68.7379 165.371 68.6968 167.575C68.6922 167.821 68.6926 168.069 68.6899 168.318C68.6855 166.66 68.7645 165.425 69.7407 163.933L69.7397 163.932C70.6178 162.608 72.1314 161.487 73.6626 161.196C74.0915 161.114 74.5131 161.062 74.9263 161.04Z" stroke="#EC6765"/>
  </svg>
);

// ─── BottomNav ─────────────────────────────────────────────────────────────
const IconInicio = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconPublicar = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconBuscar = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconCanjes = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 22l-4-4 1.4-1.425 1.6 1.575V13h2v5.15l1.6-1.575L16 18l-4 4zM12 2l4 4-1.4 1.425-1.6-1.575V11h-2V5.85L9.4 7.425 8 6l4-4z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);
const IconPerfil = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill={active ? "#1e2a4a" : "#b0b8d0"}/>
  </svg>
);

function BottomNav({ onTabChange }) {
  const tabs = [
    { id: "inicio", label: "Inicio", Icon: IconInicio },
    { id: "publicar", label: "Publicar", Icon: IconPublicar, active: true },
    { id: "buscar", label: "Buscar", Icon: IconBuscar },
    { id: "canjes", label: "Canjes", Icon: IconCanjes },
    { id: "perfil", label: "Perfil", Icon: IconPerfil },
  ];
  return (
    <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "white", borderRadius: "20px 20px 0 0", boxShadow: "0 -2px 20px rgba(30,42,74,0.08)", display: "flex", alignItems: "center", height: 72, zIndex: 100 }}>
      {tabs.map(({ id, label, Icon, active }) => (
        <button key={id} onClick={() => onTabChange(id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, border: "none", background: "transparent", cursor: "pointer", padding: "6px 4px" }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: active ? "#e8eaf0" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon active={active} />
          </div>
          <span style={{ fontSize: 10, fontWeight: active ? 700 : 400, color: active ? "#1e2a4a" : "#b0b8d0", fontFamily: "\'Outfit\', sans-serif" }}>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default function PublicarScreen({ user, onBack }) {
  const [subscreen, setSubscreen] = useState("menu");

  // Formulario compartir
  const [nombreInsumo, setNombreInsumo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fechaVenc, setFechaVenc] = useState("");
  const [ubicacionManual, setUbicacionManual] = useState("");
  const [loadingComp, setLoadingComp] = useState(false);
  const [okComp, setOkComp] = useState(false);

  // Formulario ayudar
  const [nombreAyuda, setNombreAyuda] = useState("");
  const [urgente, setUrgente] = useState(false);
  const [anonimo, setAnonimo] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [loadingAyuda, setLoadingAyuda] = useState(false);
  const [okAyuda, setOkAyuda] = useState(false);

  async function handleCompartir(e) {
    e.preventDefault();
    setLoadingComp(true);
    let lat = null, lng = null;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
    } catch {}
    await supabase.from("publicaciones").insert({
      user_id: user.id,
      tipo: "compartir",
      nombre_insumo: nombreInsumo,
      cantidad: parseInt(cantidad) || null,
      fecha_vencimiento: fechaVenc || null,
      latitud: lat,
      longitud: lng,
      estado: "activa",
    });
    setLoadingComp(false);
    setOkComp(true);
  }

  async function handleAyudar(e) {
    e.preventDefault();
    setLoadingAyuda(true);
    let lat = null, lng = null;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
    } catch {}
    await supabase.from("publicaciones").insert({
      user_id: user.id,
      tipo: "solicitar",
      nombre_insumo: nombreAyuda,
      urgente,
      anonimo,
      mensaje,
      latitud: lat,
      longitud: lng,
      estado: "activa",
    });
    setLoadingAyuda(false);
    setOkAyuda(true);
  }

  function handleNavTab(tab) {
    if (tab === "inicio") onBack();
    else if (tab === "buscar") { onBack(); setTimeout(() => window.dispatchEvent(new CustomEvent("openMapa")), 50); }
  }

  const inputStyle = {
    width: "100%", padding: "14px 16px", borderRadius: 14, border: "1.5px solid #e0e2ec",
    background: "white", fontSize: 14, color: "#1e2a4a", fontFamily: "\'Outfit\', sans-serif",
    outline: "none", boxSizing: "border-box",
  };

  const labelStyle = {
    fontSize: 12, fontWeight: 600, color: "#7b80a0", marginBottom: 6, display: "block",
    fontFamily: "\'Outfit\', sans-serif", textTransform: "uppercase", letterSpacing: "0.5px",
  };

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f0f0f5", fontFamily: "\'Outfit\', sans-serif" }}>
      <style>{`@import url(\'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap\');`}</style>

      {/* Header */}
      <div style={{ padding: "52px 24px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        {subscreen !== "menu" && (
          <button onClick={() => { setSubscreen("menu"); setOkComp(false); setOkAyuda(false); }} style={{ background: "transparent", border: "none", cursor: "pointer", padding: 8, borderRadius: 12, background: "white", boxShadow: "0 1px 6px rgba(30,42,74,0.08)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" fill="#1e2a4a"/></svg>
          </button>
        )}
        <Logo size={subscreen === "menu" ? 44 : 32} />
      </div>

      <div style={{ padding: "0 24px 100px" }}>

        {/* ─── Menú principal ─── */}
        {subscreen === "menu" && (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", margin: "0 0 8px", fontFamily: "\'Outfit\', sans-serif" }}>¿Qué quieres hacer?</h2>
            <p style={{ fontSize: 14, color: "#7b80a0", margin: "0 0 28px", fontFamily: "\'Outfit\', sans-serif" }}>Conecta con tu comunidad</p>

            {/* Card Compartir */}
            <div onClick={() => setSubscreen("compartir")} style={{ background: "#f0f1f9", border: "1.5px solid #7890D0", borderRadius: 20, padding: 24, marginBottom: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 80, height: 80, borderRadius: 20, background: "rgba(120,144,208,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ width: 56, height: 56 }}>
                  <IconoCompartir />
                </div>
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700, color: "#1e2a4a", fontFamily: "\'Outfit\', sans-serif" }}>Compartir</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", lineHeight: 1.4, fontFamily: "\'Outfit\', sans-serif" }}>Tengo insumos que me sobran y quiero donarlos o intercambiarlos</p>
              </div>
            </div>

            {/* Card Solicitar */}
            <div onClick={() => setSubscreen("ayudar")} style={{ background: "#fff4f4", border: "1.5px solid #EC6765", borderRadius: 20, padding: 24, cursor: "pointer", display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 80, height: 80, borderRadius: 20, background: "rgba(236,103,101,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ width: 56, height: 56 }}>
                  <IconoAyudar />
                </div>
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700, color: "#1e2a4a", fontFamily: "\'Outfit\', sans-serif" }}>Solicitar ayuda</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", lineHeight: 1.4, fontFamily: "\'Outfit\', sans-serif" }}>Necesito insumos y busco apoyo de la comunidad</p>
              </div>
            </div>
          </>
        )}

        {/* ─── Formulario Compartir ─── */}
        {subscreen === "compartir" && !okComp && (
          <form onSubmit={handleCompartir}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e2a4a", margin: "0 0 4px" }}>Compartir insumo</h2>
            <p style={{ fontSize: 13, color: "#7b80a0", margin: "0 0 24px" }}>Ayuda a alguien de tu comunidad</p>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Nombre del insumo *</label>
              <input style={inputStyle} value={nombreInsumo} onChange={e => setNombreInsumo(e.target.value)} placeholder="Ej: Insulina Glargina 100U" required />
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Cantidad</label>
                <input style={inputStyle} type="number" value={cantidad} onChange={e => setCantidad(e.target.value)} placeholder="1" min="1" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Fecha venc.</label>
                <input style={inputStyle} type="date" value={fechaVenc} onChange={e => setFechaVenc(e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Dirección (opcional)</label>
              <input style={inputStyle} value={ubicacionManual} onChange={e => setUbicacionManual(e.target.value)} placeholder="O usaremos tu ubicación GPS" />
            </div>
            <button type="submit" disabled={loadingComp} style={{ width: "100%", padding: 16, background: "#1e2a4a", color: "white", border: "none", borderRadius: 50, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "\'Outfit\', sans-serif" }}>
              {loadingComp ? "Publicando..." : "Publicar insumo"}
            </button>
          </form>
        )}

        {subscreen === "compartir" && okComp && (
          <div style={{ textAlign: "center", paddingTop: 40 }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1e2a4a", fontFamily: "\'Outfit\', sans-serif" }}>¡Publicado!</h3>
            <p style={{ color: "#7b80a0", fontFamily: "\'Outfit\', sans-serif" }}>Tu insumo ya está visible en el mapa</p>
            <button onClick={() => { setSubscreen("menu"); setOkComp(false); setNombreInsumo(""); setCantidad(""); setFechaVenc(""); }} style={{ marginTop: 24, padding: "14px 32px", background: "#1e2a4a", color: "white", border: "none", borderRadius: 50, fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "\'Outfit\', sans-serif" }}>
              Publicar otro
            </button>
          </div>
        )}

        {/* ─── Formulario Solicitar ─── */}
        {subscreen === "ayudar" && !okAyuda && (
          <form onSubmit={handleAyudar}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e2a4a", margin: "0 0 4px" }}>Solicitar ayuda</h2>
            <p style={{ fontSize: 13, color: "#7b80a0", margin: "0 0 24px" }}>La comunidad está aquí para ayudarte</p>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>¿Qué insumo necesitas? *</label>
              <input style={inputStyle} value={nombreAyuda} onChange={e => setNombreAyuda(e.target.value)} placeholder="Ej: Sensor FreeStyle Libre" required />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Mensaje</label>
              <textarea style={{ ...inputStyle, height: 90, resize: "none" }} value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Cuéntanos tu situación..." />
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              <button type="button" onClick={() => setUrgente(!urgente)} style={{ flex: 1, padding: 14, borderRadius: 14, border: `1.5px solid ${urgente ? "#e05060" : "#e0e2ec"}`, background: urgente ? "#fff0f2" : "white", color: urgente ? "#e05060" : "#7b80a0", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "\'Outfit\', sans-serif" }}>
                {urgente ? "🚨 Urgente" : "⚡ Urgente"}
              </button>
              <button type="button" onClick={() => setAnonimo(!anonimo)} style={{ flex: 1, padding: 14, borderRadius: 14, border: `1.5px solid ${anonimo ? "#7890D0" : "#e0e2ec"}`, background: anonimo ? "#f0f1f9" : "white", color: anonimo ? "#7890D0" : "#7b80a0", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "\'Outfit\', sans-serif" }}>
                {anonimo ? "🙈 Anónimo" : "👤 Con nombre"}
              </button>
            </div>
            <button type="submit" disabled={loadingAyuda} style={{ width: "100%", padding: 16, background: "#e05060", color: "white", border: "none", borderRadius: 50, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "\'Outfit\', sans-serif" }}>
              {loadingAyuda ? "Publicando..." : "Solicitar ayuda"}
            </button>
          </form>
        )}

        {subscreen === "ayudar" && okAyuda && (
          <div style={{ textAlign: "center", paddingTop: 40 }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🙏</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1e2a4a", fontFamily: "\'Outfit\', sans-serif" }}>¡Solicitud enviada!</h3>
            <p style={{ color: "#7b80a0", fontFamily: "\'Outfit\', sans-serif" }}>Tu comunidad verá tu pedido en el mapa</p>
            <button onClick={() => { setSubscreen("menu"); setOkAyuda(false); setNombreAyuda(""); setMensaje(""); }} style={{ marginTop: 24, padding: "14px 32px", background: "#e05060", color: "white", border: "none", borderRadius: 50, fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "\'Outfit\', sans-serif" }}>
              Nueva solicitud
            </button>
          </div>
        )}
      </div>

      <BottomNav onTabChange={handleNavTab} />
    </div>
  );
}
