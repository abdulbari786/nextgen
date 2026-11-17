"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  Calendar03Icon,
  InformationCircleIcon,
  Location01Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { SectionHead } from "@/components/ui/SectionHead";
import { employerLogos, jobs, jobsChannel, onlineJobs, type Job, type OnlineJob } from "@/content/jobs";
import styles from "./Jobs.module.css";

function JobList({ items, showContacts = false }: { items: readonly (Job | OnlineJob)[]; showContacts?: boolean }) {
  return (
    <ul className={styles.list} role="list">
      {items.map((job) => {
        const online = "applyUrl" in job;
        return (
          <li className={styles.card} key={`${job.company}-${job.role}`}>
            <div className={styles.employer}>
              <span className={styles.logo}>
                <Image
                  src={`/jobs/logos/${employerLogos[job.company]}.webp`}
                  alt=""
                  width={84}
                  height={30}
                  unoptimized
                />
              </span>
              <span>{job.company}</span>
            </div>
            <h4>{job.role}</h4>
            <div className={styles.meta}>
              {!online && (
                <p className={styles.schedule}><Icon icon={Calendar03Icon} size={17} />{job.schedule}</p>
              )}
              <p><Icon icon={Location01Icon} size={17} />{online ? job.location : job.venue}</p>
            </div>
            <p className={styles.eligibility}>{job.eligibility}</p>
            {online && (
              <a
                className={`btn btn--primary ${styles.apply}`}
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apply to this job: ${job.role} at ${job.company}`}
              >
                Apply to this job <Icon icon={ArrowUpRight01Icon} size={18} />
              </a>
            )}
            {!online && showContacts && job.email && (
              <a
                className={styles.contact}
                href={`mailto:${job.email}`}
                aria-label={`Contact ${job.company} about ${job.role}`}
              >
                <Icon icon={Mail01Icon} size={17} /> Contact employer
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Jobs({ renderedAt }: { renderedAt: number }) {
  const [now, setNow] = useState(renderedAt);

  useEffect(() => {
    const updateTime = () => setNow(Date.now());
    updateTime();
    const timer = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const scheduled: Job[] = [];
  const past: Job[] = [];
  for (const job of jobs) {
    if (job.endsAt && Date.parse(job.endsAt) <= now) {
      past.push(job);
    } else {
      scheduled.push(job);
    }
  }

  return (
    <section className={`section section--tint ${styles.section}`} id="jobs" aria-labelledby="jobs-title">
      <div className="wrap">
        <div className={styles.header}>
          <SectionHead
            id="jobs-title"
            align="left"
            title="Apply to jobs"
            lede="Explore fresher jobs in Hyderabad and apply directly with the employer."
          />
          <a className="btn btn--secondary" href={jobsChannel} target="_blank" rel="noopener noreferrer">
            <Icon icon={WhatsappIcon} size={20} /> Follow job alerts on WhatsApp
          </a>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupHeading}>Apply online</h3>
          <JobList items={onlineJobs} />
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupHeading}>Walk-in interviews</h3>
          <p className={styles.note}>
            <Icon icon={InformationCircleIcon} size={18} />
            <span>Confirm the schedule, venue and eligibility with the employer before visiting. All times are IST.</span>
          </p>
          {scheduled.length > 0 && <JobList items={scheduled} showContacts />}
        </div>
        {past.length > 0 && (
          <details className={styles.archive}>
            <summary>
              Past walk-ins ({past.length}) <Icon icon={ArrowDown01Icon} size={18} />
            </summary>
            <JobList items={past} />
          </details>
        )}
      </div>
    </section>
  );
}
