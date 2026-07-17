import { Link } from "react-router-dom";
import TraceDivider from "../components/TraceDivider";

const posts = [
  { tag: "Careers", title: "Full Stack Python vs MERN: which should you learn first?", date: "Jul 2, 2026", desc: "A practical breakdown of both stacks, who hires for each, and how to pick based on your goals." },
  { tag: "AI & ML", title: "What 'Generative AI Engineer' actually means in 2026", desc: "The role is new and the job descriptions are messy — here's what companies are really hiring for.", date: "Jun 24, 2026" },
  { tag: "Interview Prep", title: "5 mock-interview mistakes we see every batch", desc: "The most common (and fixable) mistakes students make in technical mock interviews.", date: "Jun 15, 2026" },
  { tag: "Cloud", title: "AWS or Azure — does it matter which you learn first?", desc: "Why we teach both, and how to decide where to specialise once you're hired.", date: "Jun 5, 2026" },
  { tag: "Cybersecurity", title: "SOC analyst vs penetration tester: choosing your path", desc: "Two very different day-to-day jobs inside cybersecurity — here's how to pick.", date: "May 27, 2026" },
  { tag: "Data", title: "Power BI or Tableau? What Hyderabad companies actually use", desc: "A look at real job postings to see which BI tool is worth learning first.", date: "May 18, 2026" },
];

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Blog</span></div>
          <span className="eyebrow" style={{ marginTop: 18 }}>NEXTGEN AI BLOG</span>
          <h1>Notes on careers, code and the job market.</h1>
          <p>Practical, no-fluff writing from our mentors — on the tech, the tools, and the job hunt.</p>
        </div>
        <TraceDivider dark />
      </section>

      <section className="section">
        <div className="container">
          <div className="course-grid">
            {posts.map((p, i) => (
              <article className="course-card" key={i}>
                <div className="course-card-top">
                  <span className="badge">{p.tag}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--slate)" }}>{p.date}</span>
                </div>
                <div className="course-card-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="cta-row">
                    <span className="arrow-link">Read article →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
