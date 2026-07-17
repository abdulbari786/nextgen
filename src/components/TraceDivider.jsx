export default function TraceDivider({ dark = false }) {
  const line = dark ? "rgba(245,242,234,0.18)" : "rgba(11,18,32,0.16)";
  const dot = dark ? "#FFB020" : "#FFB020";
  return (
    <div className="trace-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 26" preserveAspectRatio="none">
        <line x1="0" y1="13" x2="1200" y2="13" stroke={line} strokeWidth="1" strokeDasharray="1 7" />
        {[60, 260, 460, 660, 860, 1060].map((x, i) => (
          <circle key={i} cx={x} cy="13" r={i % 2 === 0 ? 3 : 2} fill={i % 3 === 0 ? dot : line} />
        ))}
      </svg>
    </div>
  );
}
