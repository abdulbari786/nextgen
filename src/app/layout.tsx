import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { site, SITE_URL } from "@/content/site";
import { nextgenPage } from "@/content/nextgen-page";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: nextgenPage.title, template: `%s | ${site.name}` },
  description: nextgenPage.description,
  applicationName: site.name,
  icons: { icon: "/photos/nextgen-logo.png", apple: "/photos/nextgen-logo.png" },
  openGraph: {
    title: site.name, description: nextgenPage.description, url: "/",
    type: "website", locale: "en_IN", siteName: site.name,
    images: [{ url: nextgenPage.heroShot.src, width: nextgenPage.heroShot.w, height: nextgenPage.heroShot.h, alt: nextgenPage.heroShot.alt }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: nextgenPage.description, images: [nextgenPage.heroShot.src] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

const schema = {
  "@context": "https://schema.org", "@type": "EducationalOrganization",
  name: site.name, url: SITE_URL, sameAs: [site.instagram], telephone: site.phone.tel,
  address: { "@type": "PostalAddress", streetAddress: `${site.address.line1}, ${site.address.line2}`, addressLocality: "New Malakpet, Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={schibsted.variable}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></body></html>;
}
