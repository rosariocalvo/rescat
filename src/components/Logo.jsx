export default function Logo({ size = 64 }) {
  return (
    <img
      src="/logo-vector.svg"
      alt="RESCAT"
      style={{
        width: size * 3,
        height: "auto",
      }}
    />
  );
}
