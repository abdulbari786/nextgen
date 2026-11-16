"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/Icon";
import { site, whatsappLink } from "@/content/site";
import { asset, route } from "@/lib/asset";

/*
  Written as full paths, not bare fragments. This header renders on the legal
  pages and the 404 as well, where "#results" would scroll a page that has no
  results section instead of going home to it. On the home page the browser
  still treats these as fragments, because the path already matches.
*/
const LINKS = [
  { href: route("/#courses"), label: "Courses" },
  { href: route("/#skills"), label: "30-day programme" },
  { href: route("/#hackathon"), label: "Events" },
  { href: route("/#faculty"), label: "Faculty" },
  { href: route("/#campus"), label: "Our classrooms" },
];

const BOOK = whatsappLink("Hello, I'd like to know about courses at NextGen AI Training Institute.");

export function Header({
  links = LINKS,
  action = { href: BOOK, label: "Enquire on WhatsApp", mobileLabel: "Enquire on WhatsApp" },
}: {
  links?: readonly { href: string; label: string }[];
  action?: { href: string; label: string; mobileLabel: string };
}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  // Close on Escape, and whenever the viewport grows past the breakpoint, so
  // the drawer can never be left open behind a desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 981px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  // While it is open the page behind must not scroll under it, and focus must
  // not be left on a control the reader can no longer see. preventScroll
  // because the panel is still off screen at the moment it takes focus, and
  // without it the browser scrolls the page to chase it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    const inertStates = background.map((element) => ({ element, inert: element.inert }));
    background.forEach((element) => { element.inert = true; });
    // Two frames, and both are load-bearing. The drawer carries visibility in
    // its transition, and an element that is visibility:hidden as far as style
    // is concerned cannot take focus. At the moment this effect runs the
    // transition is still at progress zero, where visibility computes as
    // hidden, so focus() here is silently refused and the reader is left on
    // the button behind the scrim. Forcing a layout read does not help, nor
    // does a single rAF, which runs before the recalc rather than after it.
    // One full frame later the open state has painted and the focus lands.
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => panel.current?.focus({ preventScroll: true }));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
      document.body.style.overflow = previous;
      inertStates.forEach(({ element, inert }) => { element.inert = inert; });
      // Only if the toggle is still rendered. When the drawer closes because
      // the viewport grew past 980px, the toggle is display:none by then and
      // focus() is a silent no-op, so focus would sit on a drawer that is also
      // gone and fall to <body>. offsetParent is null for a display:none
      // element, which is the cheap way to ask.
      if (toggle.current?.offsetParent) toggle.current.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header className="hdr">
        <div className="wrap">
          <div className="mast">
            <a className="mark" href={route("/")} aria-label={`${site.name}, home`}>
              <Image src={asset("/photos/nextgen-logo.png")} alt="" width={500} height={500} priority /><span className="brand-name">NextGen<span>AI Training Institute</span></span>
            </a>

            <nav className="nav" aria-label="Primary">
              {links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mast-end">
              <a className="btn btn--primary btn--sm" href={action.href}>
                {action.label}
              </a>
              <button
                type="button"
                className="nav-toggle"
                ref={toggle}
                aria-expanded={open}
                aria-controls="nav-panel"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                <Icon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className="nav-scrim"
        data-open={open}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/*
        No aria-hidden when closed: the drawer is visibility:hidden then, which
        already takes it out of the accessibility tree and out of the tab
        order, and aria-hidden on an element that is about to hold focus is the
        contradiction screen readers complain about.
      */}
      <nav
        className="nav-panel"
        id="nav-panel"
        data-open={open}
        ref={panel}
        tabIndex={-1}
        aria-label="Primary"
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-panel-cta">
          <a className="btn btn--primary btn--block" href={action.href} onClick={() => setOpen(false)}>
            {action.mobileLabel}
          </a>
        </div>
      </nav>
    </>
  );
}
