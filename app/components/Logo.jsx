export function Logo({ className = "logo" }) {
  return (
    <a className={className} href="/" aria-label="Evolutiva Tech, página inicial">
      <img
        src="/logo.webp"
        alt=""
        width="960"
        height="256"
      />
    </a>
  );
}
