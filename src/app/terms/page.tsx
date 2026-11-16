import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Header } from "@/components/Header";

export const metadata: Metadata = { title: "Website information", description: "About the course information on the NextGen website.", alternates: { canonical: "/terms" } };

export default function Page() {
  return <><a className="skip" href="#content">Skip to content</a><Header /><main className="doc-page" id="content"><div className="doc-head"><div className="wrap"><a className="doc-back" href="/">Back to NextGen</a><h1>Website information</h1><p className="lede">About the course information on the NextGen website.</p></div></div><Reveal className="wrap"><div className="doc">
          <p>Contact NextGen to confirm the current syllabus, fees, duration and batch timings before joining a course. An enquiry through this website does not enrol you.</p>
          <p>The hackathon section documents a completed event. Its date and results describe that event; they do not announce a new registration period.</p>
          <p>Links to WhatsApp, Instagram and Google Maps take you to services operated by others. Product names and logos belong to their respective owners.</p>
  </div></Reveal></main></>;
}
