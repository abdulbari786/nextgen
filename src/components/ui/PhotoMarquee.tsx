"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import styles from "./PhotoMarquee.module.css";

type Photo = { src: string; alt: string; width: number; height: number };
export function PhotoMarquee({ photos, label, priority = false }: { photos: readonly Photo[]; label: string; priority?: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let inView = false;
    const update = () => setRunning(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); });
    if (viewport.current) observer.observe(viewport.current);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);

  return (
    <div ref={viewport} className={styles.marquee} data-running={running} role="region" aria-label={label} tabIndex={0}>
      <div className={styles.track}>
        {[false, true].map((duplicate) => (
          <div className={styles.group} key={String(duplicate)} aria-hidden={duplicate || undefined}>
            {(photos.length < 4 ? [...photos, ...photos] : photos).map((photo, index) => (
              <figure className={styles.photo} key={`${photo.src}-${index}`}>
                <Image src={asset(photo.src)} alt={duplicate ? "" : photo.alt} width={photo.width} height={photo.height} priority={priority && !duplicate && index === 0} sizes="(max-width: 767px) 340px, 520px" />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
