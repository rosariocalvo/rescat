export default function Logo({ size = 52 }) {
  return (
    <img
      src="/logo_rescat.png"
      alt="RESCAT+"
      style={{
        height: size,
        width: "auto",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}
