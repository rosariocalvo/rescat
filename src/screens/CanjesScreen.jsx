import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabase";

const IconoDC = () => (
  <svg viewBox="252 89 21 21" width="18" height="18" fill="none">
    <path d="M271.931 100.156C271.931 105.219 267.827 109.323 262.764 109.323C257.702 109.323 253.598 105.219 253.598 100.156C253.598 95.0933 257.702 90.9893 262.764 90.9893C267.827 90.9893 271.931 95.0933 271.931 100.156Z" fill="#7890D0"/>
    <path d="M270.557 100.156C270.557 104.46 267.068 107.949 262.764 107.949C258.461 107.949 254.972 104.46 254.972 100.156C254.972 95.8521 258.461 92.3632 262.764 92.3632C267.068 92.3632 270.557 95.8521 270.557 100.156Z" fill="#B7C3E3"/>
    <path d="M260.603 97.8155C260.579 97.6961 260.59 97.3262 260.589 97.1863C260.587 96.4875 260.544 95.9835 260.948 95.3663C261.246 94.9161 261.761 94.5303 262.296 94.4284C262.965 94.301 263.595 94.3804 264.152 94.7652C265.012 95.36 265.17 96.2277 265.125 97.2068C265.116 97.3917 265.131 97.5939 265.118 97.7851C265.393 97.7813 265.669 97.7798 265.944 97.7807C266.364 97.7807 266.636 97.7723 267.038 97.9201C268.597 98.4927 268.929 100.702 267.808 101.83C267.345 102.296 266.844 102.474 266.196 102.481L265.488 102.481C265.397 102.481 265.19 102.486 265.112 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.037 106.136 261.18 105.22C260.548 104.545 260.552 103.257 260.592 102.384L260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.126C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155ZM260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.585 101.915 260.589 101.645 260.589 101.539L260.59 100.671L260.589 99.1033C260.589 98.7909 260.583 98.4434 260.597 98.1338ZM264.779 102.475C264.628 102.488 264.349 102.481 264.187 102.481L263.08 102.481L261.695 102.481C261.461 102.481 261.15 102.489 260.921 102.475C260.848 102.818 260.947 103.933 261.043 104.279C261.093 104.465 261.173 104.642 261.278 104.804C261.818 105.64 263.071 105.868 263.874 105.302C264.33 104.981 264.617 104.58 264.709 104.022C264.79 103.57 264.815 102.931 264.779 102.475ZM260.901 102.171C262.689 102.141 264.515 102.181 266.308 102.165C266.816 102.139 267.292 101.912 267.633 101.536C268.362 100.715 268.313 99.2839 267.462 98.5568C266.896 98.0726 266.351 98.0653 265.651 98.0879C265.388 98.094 265.088 98.0766 264.829 98.095C264.817 98.0959 264.804 98.097 264.792 98.0985C264.789 97.7566 264.789 97.4147 264.792 97.0728C264.793 96.3302 264.784 95.7989 264.199 95.231C263.835 94.8764 263.344 94.6812 262.836 94.6883C262.81 94.6888 262.784 94.6898 262.759 94.6914C262.383 94.7269 262.083 94.8017 261.769 95.01C261.223 95.3731 260.92 95.9617 260.908 96.6126C260.905 96.7697 260.903 96.9287 260.903 97.088L260.904 98.0131L260.904 100.727C260.904 101.182 260.917 101.727 260.901 102.171Z" fill="#252E52"/>
    <path d="M260.592 102.384C260.676 102.39 260.838 102.395 260.907 102.44L260.921 102.475C260.848 102.818 260.948 103.933 261.044 104.279C261.094 104.465 261.173 104.642 261.279 104.804C261.819 105.64 263.072 105.868 263.875 105.302C264.331 104.981 264.617 104.58 264.71 104.022C264.791 103.57 264.815 102.931 264.78 102.475C264.791 102.371 264.991 102.384 265.069 102.395C265.111 102.426 265.098 102.415 265.113 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.038 106.136 261.18 105.22C260.548 104.545 260.553 103.257 260.592 102.384Z" fill="#252E52"/>
    <path d="M260.603 97.8155C260.621 97.8499 260.613 98.0938 260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.609 102.096 260.638 102.288 260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.125C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155Z" fill="#252E52"/>
    <path d="M33.6054 171.573V157.573H35.9654V163.523H42.0754V157.573H44.4354V171.573H42.0754V165.563H35.9654V171.573H33.6054ZM49.2283 164.573C49.2283 167.493 51.4483 169.743 54.2683 169.743C57.0883 169.743 59.3183 167.493 59.3183 164.573C59.3183 161.663 57.0883 159.403 54.2683 159.403C51.4483 159.403 49.2283 161.663 49.2283 164.573ZM46.8383 164.573C46.8383 160.493 50.0683 157.333 54.2683 157.333C58.4683 157.333 61.7083 160.493 61.7083 164.573C61.7083 168.653 58.4683 171.813 54.2683 171.813C50.0683 171.813 46.8383 168.653 46.8383 164.573ZM64.0937 171.573V157.573H66.4537V169.533H72.4237V171.573H64.0937ZM78.3757 157.573H80.9957L86.1357 171.573H83.6057L82.4357 168.193H76.9257L75.7557 171.573H73.2257L78.3757 157.573ZM77.5757 166.223H81.7957L79.6857 160.133L77.5757 166.223ZM88.0566 170.243C88.0566 169.583 88.6466 168.903 89.5466 168.903C90.3766 168.903 91.0066 169.513 91.0066 170.553C91.0066 172.223 90.0766 173.653 88.1466 174.493L87.5166 173.693C89.0966 172.603 89.1066 172.053 88.3166 170.983C88.1666 170.783 88.0566 170.523 88.0566 170.243ZM100.09 171.573V157.573H108.59V159.603H102.45V163.533H108.09V165.543H102.45V169.553H108.77V171.573H100.09ZM111.457 157.573H116.167C119.147 157.573 121.017 159.333 121.017 162.013C121.017 164.183 119.787 165.733 117.727 166.233L121.317 171.573H118.727L115.307 166.443H113.807V171.573H111.457V157.573ZM116.027 159.563H113.807V164.493H116.027C117.697 164.493 118.647 163.513 118.647 162.033C118.647 160.533 117.697 159.563 116.027 159.563ZM123.746 157.573H126.106V171.573H123.746V157.573ZM140.615 166.973L142.045 168.013C140.635 170.553 138.565 171.813 135.715 171.813C131.745 171.813 128.655 168.743 128.655 164.573C128.655 160.413 131.745 157.333 135.715 157.333C139.065 157.333 141.495 159.253 142.235 162.363H139.765C139.185 160.433 137.575 159.403 135.745 159.403C133.235 159.403 131.045 161.403 131.045 164.573C131.045 167.753 133.285 169.743 135.835 169.743C137.935 169.743 139.535 168.703 140.615 166.973ZM148.278 157.573H150.898L156.038 171.573H153.508L152.338 168.193H146.828L145.658 171.573H143.128L148.278 157.573ZM147.478 166.223H151.698L149.588 160.133L147.478 166.223ZM168.392 172.973H188.392V152.973H168.392V172.973Z" fill="#252E52"/>
  </svg>
);

const IcoInicio   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={a?"white":"#b0b8d0"}/></svg>;
const IcoPublicar = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.5" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5"/><path d="M12 8v8M8 12h8" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IcoBuscar   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7.5" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5"/><path d="M16.5 16.5L21 21" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IcoCanjes   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 9h13M4 9l3-3M4 9l3 3" stroke={a?"white":"#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 15H7M20 15l-3-3M20 15l-3 3" stroke={a?"white":"#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IcoPerfil   = ({a}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={a?"white":"#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/></svg>;

function BottomNav({ onNav }) {
  return (
    <nav style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:430, background:"white", borderRadius:"20px 20px 0 0", boxShadow:"0 -2px 20px rgba(30,42,74,0.08)", display:"flex", alignItems:"center", height:72, zIndex:100 }}>
      {[
        { id:"inicio", label:"Inicio", Ico:IcoInicio },
        { id:"publicar", label:"Publicar", Ico:IcoPublicar },
        { id:"buscar", label:"Buscar", Ico:IcoBuscar },
        { id:"canjes", label:"Canjes", Ico:IcoCanjes, active:true },
        { id:"perfil", label:"Perfil", Ico:IcoPerfil },
      ].map(({ id, label, Ico, active }) => (
        <button key={id} onClick={() => onNav(id)} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4, border:"none", background:"transparent", cursor:"pointer", padding:"6px 4px" }}>
          <div style={{ width:44, height:44, borderRadius:14, background:active?"#1e2a4a":"transparent", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <Ico a={!!active} />
          </div>
          <span style={{ fontSize:10, fontWeight:active?700:400, color:active?"#1e2a4a":"#b0b8d0", fontFamily:"Outfit, sans-serif" }}>{label}</span>
        </button>
      ))}
    </nav>
  );
}

// ── Chat ──────────────────────────────────────────────────────────────────
function ChatScreen({ user, publicacion, otroNombre, onBack }) {
  const [mensajes, setMensajes] = useState([]);
  const [texto, setTexto] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    cargarMensajes();
    const ch = supabase.channel("chat-" + publicacion.id)
      .on("postgres_changes", { event:"INSERT", schema:"public", table:"mensajes" }, (payload) => {
        if (payload.new.publicacion_id === publicacion.id) setMensajes(p => [...p, payload.new]);
      }).subscribe();
    return () => supabase.removeChannel(ch);
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [mensajes]);

  async function cargarMensajes() {
    const { data } = await supabase.from("mensajes").select("*")
      .eq("publicacion_id", publicacion.id).order("created_at", { ascending:true });
    if (data) setMensajes(data);
  }

  async function enviar() {
    if (!texto.trim()) return;
    const otroId = publicacion.user_id === user.id ? null : publicacion.user_id;
    await supabase.from("mensajes").insert({
      publicacion_id: publicacion.id,
      remitente_id: user.id,
      destinatario_id: otroId,
      contenido: texto.trim(),
    });
    setTexto("");
  }

  async function completar() {
    await supabase.from("publicaciones").update({ estado:"completada" }).eq("id", publicacion.id);
    onBack();
  }

  const formatHora = (iso) => new Date(iso).toLocaleTimeString("es-CL", { hour:"2-digit", minute:"2-digit" });

  return (
    <div style={{ maxWidth:430, margin:"0 auto", height:"100dvh", background:"#f0f0f5", display:"flex", flexDirection:"column", fontFamily:"Outfit, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div style={{ padding:"52px 24px 16px", background:"white", display:"flex", alignItems:"center", gap:14, boxShadow:"0 1px 8px rgba(30,42,74,0.06)", flexShrink:0 }}>
        <button onClick={onBack} style={{ background:"#f0f0f5", border:"none", borderRadius:12, width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1e2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{ flex:1 }}>
          <p style={{ margin:0, fontSize:17, fontWeight:700, color:"#1e2a4a" }}>{otroNombre}</p>
          <p style={{ margin:0, fontSize:12, color:"#22c55e", fontWeight:600 }}>● Intercambio activo</p>
        </div>
        {publicacion.user_id === user.id && (
          <button onClick={completar} style={{ background:"#1e2a4a", border:"none", borderRadius:50, padding:"8px 14px", color:"white", fontSize:12, fontWeight:700, cursor:"pointer" }}>✓ Completar</button>
        )}
      </div>

      <div style={{ margin:"12px 16px 0", background:"white", borderRadius:16, padding:"12px 16px", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
        <div style={{ width:44, height:44, borderRadius:12, background:"#f0f1f9", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 9h13M4 9l3-3M4 9l3 3M20 15H7M20 15l-3-3M20 15l-3 3" stroke="#7890D0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div>
          <p style={{ margin:0, fontSize:14, fontWeight:700, color:"#1e2a4a" }}>{publicacion.nombre_insumo}</p>
          {publicacion.cantidad && <p style={{ margin:0, fontSize:12, color:"#7b80a0" }}>{publicacion.cantidad}</p>}
        </div>
      </div>

      <div style={{ flex:1, overflowY:"auto", padding:"16px", display:"flex", flexDirection:"column", gap:10 }}>
        {mensajes.length === 0 && (
          <p style={{ textAlign:"center", color:"#b0b8d0", fontSize:13, marginTop:40 }}>Inicia la conversación 👋</p>
        )}
        {mensajes.map((msg) => {
          const esMio = msg.remitente_id === user.id;
          return (
            <div key={msg.id} style={{ display:"flex", justifyContent:esMio?"flex-end":"flex-start" }}>
              <div style={{ maxWidth:"75%", padding:"10px 14px", borderRadius:esMio?"18px 18px 4px 18px":"18px 18px 18px 4px", background:esMio?"#1e2a4a":"white", color:esMio?"white":"#1e2a4a", boxShadow:"0 1px 4px rgba(30,42,74,0.08)" }}>
                <p style={{ margin:"0 0 4px", fontSize:14, lineHeight:1.4 }}>{msg.contenido}</p>
                <p style={{ margin:0, fontSize:10, opacity:0.6, textAlign:"right" }}>{formatHora(msg.created_at)}</p>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <div style={{ padding:"12px 16px 28px", background:"white", display:"flex", gap:10, alignItems:"center", flexShrink:0 }}>
        <input value={texto} onChange={e => setTexto(e.target.value)} onKeyDown={e => e.key==="Enter" && enviar()}
          placeholder="Escribe un mensaje..."
          style={{ flex:1, padding:"12px 16px", borderRadius:50, border:"1.5px solid #e0e2ec", fontSize:14, color:"#1e2a4a", fontFamily:"Outfit, sans-serif", outline:"none", background:"#f5f6fc" }}
        />
        <button onClick={enviar} style={{ width:46, height:46, borderRadius:"50%", background:texto.trim()?"#1e2a4a":"#e0e2ec", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

// ── Lista canjes ──────────────────────────────────────────────────────────
export default function CanjesScreen({ user, onBack }) {
  const [tab, setTab] = useState("activos");
  const [canjes, setCanjes] = useState([]);
  const [chatAbierto, setChatAbierto] = useState(null);

  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;
  const firstName = nombre.split(" ")[0].toUpperCase();

  useEffect(() => { cargar(); }, [tab]);

  async function cargar() {
    const estados = tab === "activos" ? ["activa"] : ["completada", "cancelada"];

    // Mis publicaciones
    const { data: misPubs } = await supabase.from("publicaciones").select("*")
      .eq("user_id", user.id).in("estado", estados).order("created_at", { ascending:false });

    // Publicaciones ajenas donde tengo mensajes (yo contacté a alguien)
    const { data: misMsgs } = await supabase.from("mensajes").select("publicacion_id")
      .eq("remitente_id", user.id);
    const pubIdsAjenas = [...new Set((misMsgs || []).map(m => m.publicacion_id))];

    let pubsAjenas = [];
    if (pubIdsAjenas.length > 0) {
      const { data } = await supabase.from("publicaciones").select("*")
        .in("id", pubIdsAjenas).neq("user_id", user.id).in("estado", estados);
      pubsAjenas = data || [];
    }

    // Publicaciones mías donde alguien me escribió (me contactaron)
    const { data: mensajesRecibidos } = await supabase.from("mensajes").select("publicacion_id")
      .eq("destinatario_id", user.id);
    const pubIdsContactadas = [...new Set((mensajesRecibidos || []).map(m => m.publicacion_id))];
    const misPubsIds = (misPubs || []).map(p => p.id);
    // Agregar las mías que tienen mensajes si no están ya
    const todas = [...(misPubs || []), ...pubsAjenas];
    const idsYa = new Set(todas.map(p => p.id));
    // Marcar las que tienen mensajes nuevos
    setCanjes(todas);
  }

  async function cancelar(pub) {
    const ok = window.confirm("¿Cancelar esta publicación?");
    if (!ok) return;
    const { error } = await supabase.from("publicaciones").update({ estado:"cancelada" }).eq("id", pub.id);
    if (!error) cargar();
  }

  function estadoColor(pub) {
    if (pub.estado === "completada") return "#7890D0";
    if (pub.estado === "cancelada") return "#b0b8d0";
    return pub.tipo === "compartir" ? "#22c55e" : "#f59e0b";
  }

  function estadoLabel(pub) {
    if (pub.estado === "completada") return "Completado";
    if (pub.estado === "cancelada") return "Cancelado";
    return pub.tipo === "compartir" ? "Activo" : "Solicitud enviada";
  }

  function formatFecha(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("es-CL", { day:"numeric", month:"short" });
  }

  if (chatAbierto) {
    return <ChatScreen user={user} publicacion={chatAbierto.pub} otroNombre={chatAbierto.otroNombre} onBack={() => { setChatAbierto(null); cargar(); }} />;
  }

  return (
    <div style={{ maxWidth:430, margin:"0 auto", minHeight:"100dvh", background:"#f0f0f5", fontFamily:"Outfit, sans-serif", paddingBottom:90 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ padding:"52px 24px 0", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <img src="/logo_rescat.png" alt="RESCAT+" style={{ height:100, width:"auto" }} />
        <div style={{ textAlign:"right" }}>
          <p style={{ margin:"0 0 6px", fontSize:13, fontWeight:700, color:"#1e2a4a" }}>HOLA, {firstName}</p>
          <div style={{ background:"white", borderRadius:50, padding:"6px 14px", display:"inline-flex", alignItems:"center", gap:6, boxShadow:"0 1px 8px rgba(30,42,74,0.10)" }}>
            <IconoDC /><span style={{ fontWeight:700, fontSize:14, color:"#1e2a4a" }}>{dc} DC</span>
          </div>
        </div>
      </div>

      <div style={{ padding:"20px 24px 0" }}>
        <h2 style={{ fontSize:26, fontWeight:700, color:"#1e2a4a", margin:"0 0 20px" }}>Canjes</h2>

        {/* Tabs */}
        <div style={{ display:"flex", background:"white", borderRadius:50, padding:4, marginBottom:24, boxShadow:"0 1px 6px rgba(30,42,74,0.06)" }}>
          {["activos","historial"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex:1, padding:"10px", borderRadius:50, border:"none", cursor:"pointer", fontWeight:700, fontSize:13, fontFamily:"Outfit, sans-serif", background:tab===t?"#1e2a4a":"transparent", color:tab===t?"white":"#7b80a0", transition:"all 0.2s" }}>
              {t === "activos" ? "Activos" : "Historial"}
            </button>
          ))}
        </div>

        {canjes.length === 0 ? (
          <p style={{ color:"#b0b8d0", fontSize:14, fontFamily:"Outfit, sans-serif" }}>
            {tab === "activos" ? "No tienes canjes activos aún." : "Sin historial aún."}
          </p>
        ) : (
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {canjes.map((pub) => (
              <div key={pub.id} style={{ background:"white", borderRadius:20, padding:"16px", boxShadow:"0 1px 8px rgba(30,42,74,0.06)" }}>
                {/* Estado + fecha */}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", background:estadoColor(pub) }} />
                    <span style={{ fontSize:12, fontWeight:600, color:estadoColor(pub), fontFamily:"Outfit, sans-serif" }}>{estadoLabel(pub)}</span>
                  </div>
                  <span style={{ fontSize:11, color:"#b0b8d0", fontFamily:"Outfit, sans-serif" }}>{formatFecha(pub.created_at)}</span>
                </div>

                {/* Info */}
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
                  {pub.foto_url ? (
                    <img src={pub.foto_url} style={{ width:60, height:60, borderRadius:14, objectFit:"cover", flexShrink:0 }} alt="" />
                  ) : (
                    <div style={{ width:60, height:60, borderRadius:14, background:pub.tipo==="compartir"?"#f0f1f9":"#fff0f2", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 9h13M4 9l3-3M4 9l3 3M20 15H7M20 15l-3-3M20 15l-3 3" stroke={pub.tipo==="compartir"?"#7890D0":"#EC6765"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  )}
                  <div style={{ flex:1 }}>
                    <p style={{ margin:"0 0 2px", fontSize:15, fontWeight:700, color:"#1e2a4a" }}>{pub.nombre_insumo}</p>
                    {pub.cantidad && <p style={{ margin:"0 0 4px", fontSize:12, color:"#7b80a0" }}>{pub.cantidad}</p>}
                    <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                      <IconoDC />
                      <span style={{ fontSize:13, fontWeight:700, color:"#7890D0" }}>
                        {pub.tipo==="compartir"?"+":"-"}50 DC
                      </span>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#b0b8d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>

                {/* Botones */}
                {tab === "activos" && (
                  <div style={{ display:"flex", gap:8 }}>
                    <button
                      onClick={() => setChatAbierto({ pub, otroNombre:"Miembro RESCAT" })}
                      style={{ flex:1, padding:"11px", background:"#f0f1f9", border:"none", borderRadius:50, fontWeight:600, fontSize:13, color:"#7890D0", cursor:"pointer", fontFamily:"Outfit, sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#7890D0" strokeWidth="1.8" strokeLinejoin="round"/></svg>
                      Abrir chat
                    </button>
                    <button
                      onClick={() => cancelar(pub)}
                      style={{ flex:1, padding:"11px", background:"#fff0f2", border:"1.5px solid #ffd0d4", borderRadius:50, fontWeight:600, fontSize:13, color:"#EC6765", cursor:"pointer", fontFamily:"Outfit, sans-serif" }}>
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav onNav={(t) => {
        if (t === "canjes") return;
        if (t === "publicar") { window.dispatchEvent(new CustomEvent("openPublicar")); return; }
        if (t === "buscar") { window.dispatchEvent(new CustomEvent("openMapa")); return; }
        onBack();
      }} />
    </div>
  );
}
