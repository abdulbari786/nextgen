import { useState } from "react";

export default function CurriculumAccordion({ modules }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="curriculum">
      {modules.map((m, i) => (
        <div key={i} className={`module ${openIdx === i ? "open" : ""}`}>
          <button className="module-head" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            aria-expanded={openIdx === i}>
            <span className="module-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="mtitle">
              <h4>{m.title}</h4>
              <div className="msub">{m.subtitle}</div>
            </span>
            <span className="mcount">{m.count}</span>
            <span className="chev">{openIdx === i ? "▲" : "▼"}</span>
          </button>
          <div className="module-body">
            <div className="module-body-inner">
              <ul>{m.left.map((t, j) => <li key={j}>{t}</li>)}</ul>
              <ul>{m.right.map((t, j) => <li key={j}>{t}</li>)}</ul>
            </div>
            {m.project && <div className="module-project">🏆 {m.project}</div>}
            <div style={{ height: 20 }} />
          </div>
        </div>
      ))}
    </div>
  );
}
