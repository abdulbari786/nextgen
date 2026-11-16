"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft01Icon, ArrowRight01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { SectionHead } from "@/components/ui/SectionHead";
import { nextgenSocial as copy } from "@/content/nextgen-page";
import posts from "@/content/nextgen-instagram.json";
import { asset } from "@/lib/asset";
import styles from "./NextGenInstagram.module.css";

type Category = (typeof copy.categories)[number];
type Post = (typeof posts)[number];
const PAGE_SIZE = 9;

export function NextGenInstagram() {
  const [category, setCategory] = useState<Category>("All");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<Post | null>(null);
  const [slide, setSlide] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered = posts.filter((post) => category === "All" || post.category === category);
  const media = selected?.media[slide];

  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [selected]);

  function openPost(post: Post) {
    setSelected(post);
    setSlide(0);
    dialog.current?.showModal();
  }

  return (
    <section className={`section ${styles.section}`} id="instagram" aria-labelledby="instagram-title">
      <div className="wrap">
        <SectionHead id="instagram-title" title={copy.galleryHeading} lede={copy.galleryIntro} />
        <div className={styles.filter} role="group" aria-label={copy.filterLabel}>
          {copy.categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} onClick={() => { setCategory(item); setLimit(PAGE_SIZE); }}>
              {item}<span>{item === "All" ? posts.length : posts.filter((post) => post.category === item).length}</span>
            </button>
          ))}
        </div>
        <p className={styles.archiveNote}>{copy.galleryNotice}</p>
        <p className={styles.count} role="status">{Math.min(limit, filtered.length)} {copy.of} {filtered.length} {copy.resultNoun}</p>
        <div className={styles.grid}>
          {filtered.slice(0, limit).map((post) => (
            <article className={styles.card} key={post.id}>
              <button type="button" className={styles.preview} onClick={() => openPost(post)} aria-label={`${copy.view}: ${post.title}`}>
                <Image src={asset(post.preview)} alt={post.title} width={post.media[0].width} height={post.media[0].height} sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw" />
                <span className={styles.kind}>{post.kind === "reel" ? copy.reel : copy.post}{post.media.length > 1 ? ` / ${post.media.length}` : ""}</span>
              </button>
              <div className={styles.cardBody}>
                <p className={styles.category}>{post.category}{post.pastAnnouncement ? ` / ${copy.past}` : ""}</p>
                <h3><button type="button" onClick={() => openPost(post)}>{post.title}</button></h3>
                <p className={styles.description}>{post.description}</p>
                <a href={post.href} target="_blank" rel="noopener noreferrer">{post.kind === "reel" ? copy.watchReel : copy.openPost}<Icon icon={ArrowRight01Icon} size={16} /></a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.more}>
          {limit < filtered.length ? (
            <button type="button" className="btn btn--secondary" onClick={() => setLimit((value) => value + PAGE_SIZE)}>{copy.showMore}</button>
          ) : limit > PAGE_SIZE ? (
            <button type="button" className="btn btn--secondary" onClick={() => { setLimit(PAGE_SIZE); document.getElementById("instagram")?.scrollIntoView(); }}>{copy.showLess}</button>
          ) : null}
          <a href={copy.instagram} target="_blank" rel="noopener noreferrer">{copy.handle}</a>
        </div>
      </div>

      <dialog
        className={styles.dialog}
        ref={dialog}
        aria-labelledby="instagram-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
        }}
        onKeyDown={(event) => {
          if (!selected || selected.media.length < 2) return;
          if (event.key === "ArrowRight") { event.preventDefault(); setSlide((value) => Math.min(value + 1, selected.media.length - 1)); }
          if (event.key === "ArrowLeft") { event.preventDefault(); setSlide((value) => Math.max(value - 1, 0)); }
        }}
      >
        <div className={styles.dialogHeader}>
          <h2 id="instagram-dialog-title">{selected?.title}</h2>
          <button type="button" className={styles.iconButton} aria-label={copy.close} onClick={() => dialog.current?.close()} autoFocus><Icon icon={Cancel01Icon} size={22} /></button>
        </div>
        {selected && media && (
          <>
            <div className={styles.fullImage}>
              <Image src={asset(media.src)} alt={`${selected.title}. ${copy.image} ${slide + 1} ${copy.of} ${selected.media.length}.`} width={media.width} height={media.height} sizes="(max-width: 980px) 100vw, 900px" />
            </div>
            {selected.media.length > 1 && (
              <div className={styles.carouselControls}>
                <button className={styles.iconButton} type="button" aria-label={copy.previous} disabled={slide === 0} onClick={() => setSlide((value) => value - 1)}><Icon icon={ArrowLeft01Icon} size={20} /></button>
                <span role="status">{copy.image} {slide + 1} {copy.of} {selected.media.length}</span>
                <button className={styles.iconButton} type="button" aria-label={copy.next} disabled={slide === selected.media.length - 1} onClick={() => setSlide((value) => value + 1)}><Icon icon={ArrowRight01Icon} size={20} /></button>
              </div>
            )}
            <div className={styles.dialogBody}>
              {selected.pastAnnouncement && <p className={styles.past}>{copy.past}</p>}
              <p>{selected.description}</p>
              <details><summary>{copy.caption}</summary><p className={styles.caption}>{selected.caption}</p></details>
              <div className={styles.dialogLinks}>
                <a className="btn btn--primary" href={selected.href} target="_blank" rel="noopener noreferrer">{selected.kind === "reel" ? copy.watchReel : copy.openPost}</a>
                <a href={asset(media.src)} target="_blank" rel="noopener noreferrer">{copy.fullSize}</a>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
