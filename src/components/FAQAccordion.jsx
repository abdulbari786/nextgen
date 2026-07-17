import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? "open" : ""}`}>
          <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            aria-expanded={openIdx === i}>
            <span>{item.q}</span>
            <span className="icon">{openIdx === i ? "−" : "+"}</span>
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
