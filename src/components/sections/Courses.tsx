"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight01Icon, ArtificialIntelligence04Icon, SmartPhone01Icon, CloudServerIcon, Database01Icon, CheckmarkBadge01Icon, RulerIcon, BubbleChatIcon, Calendar03Icon } from "@hugeicons/core-free-icons";
import { nextgenCourseGroups, nextgenPage } from "@/content/nextgen-page";
import { whatsappLink } from "@/content/site";
import { asset } from "@/lib/asset";
import { Icon } from "@/components/ui/Icon";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Courses.module.css";

const labels = ["AI & development", "Programming & cloud", "Business software", "Civil engineering", "English"];
const logos: Record<string, string> = { Python: "python", Java: "java", AWS: "aws", SAP: "sap", "Full Stack Web Development": "html" };
const icons = { "Data Science, Gen AI and Agentic AI": ArtificialIntelligence04Icon, "Full Stack App Development": SmartPhone01Icon, "Backend AI": Database01Icon, DevOps: CloudServerIcon, "Quality Assurance (QA)": CheckmarkBadge01Icon, "Quality Control (QC)": CheckmarkBadge01Icon, Primavera: Calendar03Icon, "Quantity Surveying": RulerIcon, "Professional English": BubbleChatIcon };


export function Courses() {
  const [selected, setSelected] = useState(0);
  function choose(index: number) { setSelected(index); }

  return (
    <section className={`section ${styles.section}`} id="courses" aria-labelledby="courses-title">
      <div className="wrap">
        <Reveal>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>Explore our courses</p>
            <h2 id="courses-title">{nextgenPage.coursesHeading}</h2>
            <p>Choose a subject. Find the course that fits your next step.</p>
          </header>
        </Reveal>
        <div className={styles.directory}>
          <div className={styles.subjects}>
            <p className={styles.menuLabel}>Subjects</p>
            <nav className={styles.menu} aria-label="Course subjects">
              {nextgenCourseGroups.map((item, index) => <button type="button" key={item.title} aria-pressed={selected === index} aria-controls={`course-panel-${index}`} onClick={() => choose(index)}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span>{labels[index]}</span><span className={styles.count}>{item.courses.length}</span>
              </button>)}
            </nav>
            <div className={styles.mobileSubject}>
              <label htmlFor="course-subject">Choose a subject</label>
              <select id="course-subject" value={selected} onChange={(event) => choose(Number(event.target.value))}>
                {nextgenCourseGroups.map((item, index) => <option value={index} key={item.title}>{labels[index]} ({item.courses.length})</option>)}
              </select>
            </div>
          </div>
          <div className={styles.panels}>
            {nextgenCourseGroups.map((group, index) => (
          <div className={styles.catalog} id={`course-panel-${index}`} key={group.title} data-active={selected === index} aria-hidden={selected !== index} inert={selected !== index} role="region" aria-labelledby={`course-heading-${index}`}>

            <div className={styles.listHeading}><h3 id={`course-heading-${index}`}>{group.title}</h3><span>{group.courses.length} courses</span></div>
            <div key={group.title} className={styles.list}>
              {group.courses.map((course) => <article className={styles.row} key={course.label}>
                <details className={styles.details}>
                  <summary>
                    <span className={styles.logo}>
                      {logos[course.label] ? <Image src={asset(`/tech/${logos[course.label]}.svg`)} alt="" width={36} height={36} /> : course.label === "AutoCAD 2D + 3D" ? <BrandIcon name="autocad" size={34} /> : <Icon icon={icons[course.label as keyof typeof icons] || ArtificialIntelligence04Icon} size={32} />}
                    </span>
                    <span className={styles.copy}><h4>{course.label}</h4><span>{course.detail}</span></span>
                    <span className={styles.expand} aria-hidden="true" />
                  </summary>
                  <div className={styles.topics}>
                    <p>Course focus</p>
                    <ul>{course.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                  </div>
                </details>
                <a className={styles.enquire} href={whatsappLink(nextgenPage.courseMessage(course.label))} aria-label={`Enquire about ${course.label}`} title={`Enquire about ${course.label}`}><Icon icon={ArrowRight01Icon} size={20} /></a>
              </article>)}
            </div>
            <p className={styles.note}>Select a course to see its focus areas. Use the arrow to enquire about syllabus, fees and timings.</p>
          </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
