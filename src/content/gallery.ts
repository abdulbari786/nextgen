export type Shot = { src: string; alt: string; w: number; h: number; people?: boolean };

export const gallery: Shot[] = [
  {
    src: "/photos/gallery/ai-lab.jpg",
    alt: "The NextGen computer lab, laptops set out at desks before a batch",
    w: 1280,
    h: 960,
  },
  {
    src: "/photos/gallery/nextgen-class.jpg",
    alt: "A NextGen session under way, learners at laptops facing the trainer and the screen",
    w: 1280,
    h: 960,
    people: true,
  },
];
