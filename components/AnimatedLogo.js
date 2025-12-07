// components/AnimatedLogo.js

export default function AnimatedLogo() {
  return (
    <div className="logo" aria-label="Ghumoo With Us">
      <span className="logo-main">Ghumoo</span>
      <span className="logo-sub">With Us</span>
      <span className="logo-plane" aria-hidden="true">
        ✈
      </span>
    </div>
  );
}
