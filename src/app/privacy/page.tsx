import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Header } from "@/components/Header";

export const metadata: Metadata = { title: "Privacy", description: "How the NextGen website handles information.", alternates: { canonical: "/privacy" } };

export default function Page() {
  return <><a className="skip" href="#content">Skip to content</a><Header /><main className="doc-page" id="content"><div className="doc-head"><div className="wrap"><a className="doc-back" href="/">Back to NextGen</a><h1>Privacy</h1><p className="lede">How the NextGen website handles information.</p></div></div><Reveal className="wrap"><div className="doc">
          <p>This website has no enquiry forms, analytics or advertising trackers. Course enquiries open WhatsApp or your phone app; messages are handled by those services.</p>
          <p>This website includes classroom and event photographs. Hackathon links open the original Instagram posts. Contact us on WhatsApp if you have a question about a photograph or would like to request its removal.</p>
  </div></Reveal></main></>;
}
