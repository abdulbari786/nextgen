import { Link } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";
import LeadForm from "../components/LeadForm";
import FAQAccordion from "../components/FAQAccordion";

const generalFaqs = [
  { q: "How do I choose the right course?", a: "Book a free demo class or fill out the form below — a counsellor will help you map your background and goals to the right track." },
  { q: "Are classes online, offline, or both?", a: "Both. Every course runs in a hybrid online + offline format, with weekday and weekend batch options." },
  { q: "Do you offer EMI payment options?", a: "Yes — 0%-interest EMI over 3, 6 or 12 months through our banking partners." },
  { q: "Is placement support really included?", a: "Yes, in every course — resume building, mock interviews and hiring drives are part of the program, not a paid add-on." },
];

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Contact</span></div>
          <span className="eyebrow" style={{ marginTop: 18 }}>GET IN TOUCH</span>
          <h1>Let's map out your next step.</h1>
          <p>Have a question about a course, batch timing, or fees? Reach out — our counsellors reply fast.</p>
        </div>
        <TraceDivider dark />
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">REACH US DIRECTLY</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,32px)", marginTop: 14 }}>Contact details</h2>
            <div className="info-grid" style={{ gridTemplateColumns: "1fr", gap: 14, marginTop: 24 }}>
              <div className="info-card">
                <div className="glyph">📞</div>
                <h4>Call or WhatsApp</h4>
                <p><a href="tel:+919876543210">+91 98765 43210</a> — 9 AM to 9 PM, every day</p>
              </div>
              <div className="info-card">
                <div className="glyph">✉️</div>
                <h4>Email</h4>
                <p><a href="mailto:hello@nextgenai.training">hello@nextgenai.training</a></p>
              </div>
              <div className="info-card">
                <div className="glyph">📍</div>
                <h4>Visit our campus</h4>
                <p>3rd Floor, Sindhura Chambers, Ameerpet, Hyderabad, Telangana 500038</p>
              </div>
              <div className="info-card">
                <div className="glyph">🕒</div>
                <h4>Counsellor hours</h4>
                <p>Monday – Sunday, 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="chip-card">
            <span className="chip-pins"><span /><span /><span /><span /></span>
            <span className="eyebrow" style={{ marginBottom: 16, display: "inline-flex" }}>Send us a message</span>
            <LeadForm compact />
          </div>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="container">
          <div style={{
            height: 320, border: "1px solid var(--line)", borderRadius: "var(--radius)",
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
            background: "var(--paper)", gap: 8
          }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--slate)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Campus location</span>
            <span style={{ fontFamily: "var(--display)", fontSize: 20 }}>Ameerpet, Hyderabad</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--slate)" }}>Map preview — open in Google Maps for directions</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <FAQAccordion items={generalFaqs} />
        </div>
      </section>
    </>
  );
}
