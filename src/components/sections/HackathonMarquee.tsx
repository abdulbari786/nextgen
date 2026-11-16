import { PhotoMarquee } from "@/components/ui/PhotoMarquee";
import { hackathonPhotos } from "@/content/hackathon";
export function HackathonMarquee() {
  return <PhotoMarquee label="NextGen hackathon photographs" photos={hackathonPhotos.map((photo) => ({ src: `/photos/nextgen-instagram/${photo.file}`, alt: photo.alt, width: 1440, height: 1440 }))} />;
}
