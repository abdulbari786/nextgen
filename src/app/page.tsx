import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Header } from "@/components/Header";
import { HackathonMarquee } from "@/components/sections/HackathonMarquee";
import { Faculty } from "@/components/sections/Faculty";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Mark } from "@/components/ui/Mark";
import { PhotoMarquee } from "@/components/ui/PhotoMarquee";
import { Courses } from "@/components/sections/Courses";
import { gallery } from "@/content/gallery";
import { SectionHead } from "@/components/ui/SectionHead";
import { nextgen, skillsProgramme } from "@/content/nextgen";
import { nextgenPage as copy, nextgenSocial as social } from "@/content/nextgen-page";
import { site, whatsappLink } from "@/content/site";
import { asset, route } from "@/lib/asset";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  keywords: ["AI training Hyderabad", "NextGen AI Training Institute", "data science New Malakpet", "full stack development Hyderabad"],
  alternates: { canonical: "/" },
  openGraph: {
    title: nextgen.name,
    description: copy.description,
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: copy.heroShot.src, width: copy.heroShot.w, height: copy.heroShot.h, alt: copy.heroShot.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: nextgen.name,
    description: copy.description,
    images: [copy.heroShot.src],
  },
};

const ENQUIRE = whatsappLink(copy.message);

export default function NextGenPage() {
  return (
    <div className={styles.page} id="top">
      <a className="skip" href="#courses">{copy.skip}</a>
      <Header links={copy.nav} action={{ href: ENQUIRE, label: copy.enquire, mobileLabel: copy.enquire }} />

      <main>
        <section className={styles.hero} aria-labelledby="nextgen-title">
          <Reveal className="wrap" stagger>
            <div className={styles.identity}>
              <Mark k="nextgen" />
              <div>
                <p className={styles.name}>{nextgen.name}</p>
                <p>{copy.location}</p>
              </div>
            </div>
            <h1 id="nextgen-title">{copy.heading}</h1>
            <p className={styles.introduction}>{copy.introduction}</p>
            <div className={styles.actions}>
              <a className="btn btn--primary" href="#courses">{copy.browse}<Icon icon={ArrowRight01Icon} size={18} /></a>
              <a className="btn btn--secondary" href={`tel:${nextgen.phone.tel}`}>{copy.contact}</a>
            </div>

          </Reveal>
          <div className={styles.heroMarquee}><PhotoMarquee label="NextGen classrooms" priority photos={[gallery[1], gallery[0], { src: "/photos/gallery/ai-lab-desks.jpg", alt: "Desks and seating in the NextGen training room", w: 1280, h: 960 }].map((photo) => ({ src: photo.src, alt: photo.alt, width: photo.w, height: photo.h }))} /></div>
        </section>

        <Courses />

        <section className={styles.skills} id="skills" aria-labelledby="skills-title">
          <Reveal className="wrap" stagger>
            <SectionHead id="skills-title" title={copy.skillsHeading} lede={copy.skillsIntro} />
            <div className={styles.skillsLayout}>
              <div className={styles.offer}>
                <p className={styles.offerLabel}>{skillsProgramme.title}</p>
                <p className={styles.price}>{skillsProgramme.price}</p>
                <p className={styles.fee}>{copy.skillsCaption} <s>{skillsProgramme.wasPrice}</s></p>
                <dl className={styles.facts}>
                  <div><dt>{copy.startsLabel}</dt><dd>{skillsProgramme.startsOn}</dd></div>
                  <div><dt>{copy.durationLabel}</dt><dd>{skillsProgramme.duration}</dd></div>
                </dl>
                <a className="btn btn--white" href={whatsappLink(copy.courseMessage(skillsProgramme.title))}>{copy.skillsAction}</a>
              </div>
              <div className={styles.skillsBody}>
                <ul className={styles.skillList}>
                  {skillsProgramme.skills.map((skill) => (
                    <li key={skill.label}>
                      {skill.mark ? <Mark k={skill.mark} /> : <span className={styles.skillDot} aria-hidden="true" />}
                      {skill.label}
                    </li>
                  ))}
                </ul>
                <h3 className={styles.includesHeading}>{copy.skillsIncludes}</h3>
                <ul className={styles.includes}>
                  {skillsProgramme.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        <section className={styles.hackathon} id="hackathon" aria-labelledby="hackathon-title">
          <Reveal className={`wrap ${styles.eventLayout}`} stagger>
            <div className={styles.eventCopy}>
              <p className={styles.eventStatus}>{social.hackathonStatus} / {social.hackathonDate}</p>
              <h2 id="hackathon-title">{social.hackathonName}</h2>
              <p className={styles.eventLead}>{social.hackathonHeading}</p>
              <p>{social.hackathonIntro}</p>
              <dl className={styles.eventFacts}>
                {social.hackathonFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
              </dl>
              <a className="btn btn--primary" href={social.hackathonSource} target="_blank" rel="noopener noreferrer">{social.hackathonHighlight}<Icon icon={ArrowRight01Icon} size={18} /></a>
              <a className={styles.textLink} href={whatsappLink(social.hackathonMessage)}>{social.hackathonNext}</a>
            </div>
          </Reveal>
          <HackathonMarquee />
        </section>

        <div className={styles.faculty}><Faculty /></div>

        <section className={styles.lab} id="campus" aria-labelledby="lab-title">
          <Reveal className={`wrap ${styles.labLayout}`} stagger>
            <div className={styles.labCopy}>
              <h2 id="lab-title">{copy.labHeading}</h2>
              <p>{copy.labIntro}</p>
              <a className={styles.textLink} href={site.maps} target="_blank" rel="noopener noreferrer">{copy.directions}<Icon icon={ArrowRight01Icon} size={18} /></a>
            </div>
            <figure className={styles.labFigure}>
              <Image src={asset(copy.labShot.src)} alt={copy.labShot.alt} width={copy.labShot.w} height={copy.labShot.h} sizes="(max-width: 767px) 100vw, 50vw" />
              <figcaption>{copy.labCaption}</figcaption>
            </figure>
          </Reveal>
        </section>

        <section className={styles.visit} id="enquire" aria-labelledby="visit-title">
          <Reveal className={`wrap ${styles.visitLayout}`} stagger>
            <div>
              <h2 id="visit-title">{copy.visitHeading}</h2>
              <p className={styles.visitIntro}>{copy.visitIntro}</p>
              <div className={styles.actions}>
                <a className="btn btn--white" href={ENQUIRE}>{copy.enquire}<Icon icon={ArrowRight01Icon} size={18} /></a>
                <a className={styles.lightLink} href={`tel:${nextgen.phone.tel}`}>{nextgen.phone.display}</a>
              </div>
            </div>
            <div className={styles.address}>
              <h3>{copy.addressLabel}</h3>
              <address>{site.address.line1}<br />{site.address.line2}<br />{site.address.line3}</address>
              <a className={styles.lightLink} href={site.maps} target="_blank" rel="noopener noreferrer">{copy.directions}<Icon icon={ArrowRight01Icon} size={18} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`wrap ${styles.footerInner}`}>
          <a className={styles.parentBrand} href={route("/")} aria-label={`${site.name}, home`}>
            <Image src={asset("/photos/nextgen-logo.png")} alt={site.name} width={500} height={500} />
          </a>
          <p>{site.name}<br />{copy.location}</p>
          <nav aria-label="Footer">
            <a href={route("/privacy")}>{copy.privacy}</a>
            <a href={route("/terms")}>{copy.terms}</a>
            <a href="#top">{copy.backToTop}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
