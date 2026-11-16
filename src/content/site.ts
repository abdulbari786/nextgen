import { nextgen } from "./nextgen";

export const site = {
  name: nextgen.name,
  instagram: "https://www.instagram.com/nextgenaitraininginstitute/",
  whatsappNumber: "918978676960",
  phone: nextgen.phone,
  address: {
    line1: "16-8-726, Opposite Noor Masjid",
    line2: "Near Akbar Towers, Nawab Shah Alam Khan College",
    line3: "New Malakpet, Hyderabad, Telangana",
  },
  maps: "https://www.google.com/maps?cid=7144328381311400583",
} as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3401";

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
