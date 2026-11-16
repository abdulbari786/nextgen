export type Mark =
  | {
      src: string;
      alt: string;
      w: number;
      h: number;
      tall?: boolean;
      wide?: boolean;
      /**
       * The file has an opaque ground rather than a transparent one, so it
       * shows as a pale rectangle on anything that is not white. It states a
       * fact about the asset; each place that shows the mark decides what to
       * do about it, the way the footer and the hero already wrap theirs.
       */
      ground?: boolean;
    }
  | { text: string; alt: string };

export const marks = {
  nextgen: {
    src: "/photos/nextgen-logo.png",
    alt: "NextGen AI Training Institute",
    w: 150,
    h: 150,
    ground: true,
  },
  google: { src: "/logos/google.svg", alt: "Google", w: 272, h: 92, wide: true },
  techmahindra: { src: "/logos/techmahindra.svg", alt: "Tech Mahindra", w: 200, h: 50, wide: true },
  gate: { src: "/logos/gate.png", alt: "GATE, Graduate Aptitude Test in Engineering", w: 125, h: 128 },
  tsche: { src: "/logos/tsche.png", alt: "Telangana State Council of Higher Education", w: 128, h: 128 },
  office: { src: "/tech/office.svg", alt: "Microsoft 365", w: 40, h: 44 },
  excel: { src: "/tech/excel.svg", alt: "Microsoft Excel", w: 2290, h: 2130 },
  tally: { src: "/tech/tally.png", alt: "Tally", w: 160, h: 64 },
  canva: { src: "/tech/canva.svg", alt: "Canva", w: 24, h: 24 },
  instagram: { src: "/tech/instagram.svg", alt: "Instagram", w: 24, h: 24 },
} as const satisfies Record<string, Mark>;

export type MarkKey = keyof typeof marks;
