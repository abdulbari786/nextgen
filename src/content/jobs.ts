export const employerLogos = {
  Argano: "argano",
  BeaconBold: "beaconbold",
  Cognizant: "cognizant",
  Concentrix: "concentrix",
  "CyberGate Way Inc": "cybergate",
  Firstsource: "firstsource",
  Genpact: "genpact",
  HCLTech: "hcltech",
  "Infosys BPM": "infosys-bpm",
  IntouchCX: "intouchcx",
  RMSI: "rmsi",
  "Suja Associates": "suja",
  "Tech Mahindra": "tech-mahindra",
  Wipro: "wipro",
} as const;

type Listing = {
  company: keyof typeof employerLogos;
  role: string;
  eligibility: string;
};

export type Job = Listing & {
  schedule: string;
  endsAt?: string;
  venue: string;
  email?: string;
};

export type OnlineJob = Listing & {
  location: string;
  applyUrl: string;
};

export const jobsChannel = "https://whatsapp.com/channel/0029VbCqeOSJUM2fa2SDNt0y";

// These came from LinkedIn Jobs. Each link goes to the employer's specific requisition.
export const onlineJobs: readonly OnlineJob[] = [
  {
    company: "Firstsource",
    role: "Customer Support Executive",
    location: "Hyderabad · On-site",
    eligibility: "12th pass, graduates and postgraduates with 0–3 years of experience. Good English and basic MS Office skills. Rotating shifts.",
    applyUrl: "https://careers.firstsource.com/job/Hyderabad-Senior-CSA/60696644/",
  },
  {
    company: "Concentrix",
    role: "Customer Service Representative",
    location: "Hyderabad",
    eligibility: "Undergraduates and graduates with 0–3 years of experience. English communication and basic computer skills.",
    applyUrl: "https://jobs.concentrix.com/job/?id=R1727862",
  },
  {
    company: "Argano",
    role: "Associate Consultant – Cloud Testing",
    location: "Hyderabad · Hybrid",
    eligibility: "B.Tech, BCA, BBA, MCA or MBA with 0–1 year of experience. Familiarity with ERP or supply-chain concepts.",
    applyUrl: "https://fa-eyau-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/2020/apply/email",
  },
];

// Deduplicated from the NextGen WhatsApp alerts of 11, 12, 14 and 16 November 2026.
export const jobs: readonly Job[] = [
  {
    company: "Suja Associates",
    role: "Junior AI Application Developer",
    schedule: "12–20 Nov 2026 · Weekdays, noon–4 pm",
    endsAt: "2026-11-20T16:00:00+05:30",
    venue: "NSL Arena, Building 1, 6th Floor, Wing B, IDA Uppal",
    eligibility: "Graduates and freshers (computer science preferred). Python and basic AI development required.",
    email: "hr@sujahealthtech.com",
  },
  {
    company: "Wipro",
    role: "Mapping / GIS Associate",
    schedule: "16–20 Nov 2026 · 9:30 am–12:30 pm",
    endsAt: "2026-11-20T12:30:00+05:30",
    venue: "Wipro Campus, Vendor Gate, ISB Road, Financial District, Nanakramguda",
    eligibility: "Graduates and B.Tech freshers with completed degrees. Original PAN and academic documents required.",
  },
  {
    company: "IntouchCX",
    role: "International Customer Support",
    schedule: "11–21 Nov 2026 · 11 am–5:30 pm",
    endsAt: "2026-11-21T17:30:00+05:30",
    venue: "B16 Building, 5th Floor, Raheja Mindspace, Madhapur",
    eligibility: "Graduates and freshers with good English. Reconfirm the previously advertised HR contact.",
    email: "shaheen.sultana@intouchcx.com",
  },
  {
    company: "Tech Mahindra",
    role: "Customer Support Executive",
    schedule: "11–18 Nov 2026 · 9:30 am–1:30 pm",
    endsAt: "2026-11-18T13:30:00+05:30",
    venue: "Pranava One, Somajiguda, near Raj Bhavan",
    eligibility: "Undergraduates, graduates and freshers with English and regional-language communication skills.",
  },
  {
    company: "Firstsource",
    role: "International Chat Support",
    schedule: "16–18 Nov 2026 · 10 am–1 pm",
    endsAt: "2026-11-18T13:00:00+05:30",
    venue: "BSR Builders LLP IT SEZ, Block 1, 5th Floor, Nanakramguda",
    eligibility: "12th pass, undergraduates and graduates. Good written English and basic computer skills required.",
  },
  {
    company: "Concentrix",
    role: "International Customer Support",
    schedule: "Weekdays · 10:30 am–2 pm (confirm before visiting)",
    venue: "Maximus Towers, Building 2A, 6th Floor, Raheja Mindspace, HITEC City",
    eligibility: "12th pass, graduates and freshers. Advanced English required.",
  },
  {
    company: "Tech Mahindra",
    role: "Content Moderator",
    schedule: "16–17 Nov 2026 · 10 am–noon",
    endsAt: "2026-11-17T12:00:00+05:30",
    venue: "Survey No. 62/1A, Bahadurpally, Qutubullapur",
    eligibility: "Fresh graduates with a completed degree.",
  },
  {
    company: "Infosys BPM",
    role: "IT Service Desk Executive",
    schedule: "14 Nov 2026 · 10 am–noon",
    endsAt: "2026-11-14T12:00:00+05:30",
    venue: "Infosys STP, Gate 2, Building B2, Ground Floor, Gachibowli",
    eligibility: "IT and non-IT graduates and freshers. SHL/AMCAT assessment and 15-digit ID required. Postgraduates excluded.",
  },
  {
    company: "HCLTech",
    role: "Voice Process Associate",
    schedule: "14 Nov 2026 · 11 am–3 pm",
    endsAt: "2026-11-14T15:00:00+05:30",
    venue: "Commerzone (KRC), Hetero Wing, 5th Floor, Raidurg",
    eligibility: "BA, B.Com, BBA, B.Sc and B.Pharma freshers. B.Tech, BE, BCA and MCA excluded.",
  },
  {
    company: "RMSI",
    role: "GIS Engineer",
    schedule: "14 Nov 2026 · 9:30 am–3 pm",
    endsAt: "2026-11-14T15:00:00+05:30",
    venue: "Ascendas IT Park, Vega, The V, 11th Floor, Madhapur",
    eligibility: "BA, B.Com, B.Sc or diploma (2022–2025), with at least 60% throughout. B.Tech and BE excluded.",
  },
  {
    company: "CyberGate Way Inc",
    role: "OPT Recruiter",
    schedule: "14 Nov 2026 · 8:30 am–1:30 pm",
    endsAt: "2026-11-14T13:30:00+05:30",
    venue: "TR Square Building, 4th Floor, Jaihind Enclave, Madhapur",
    eligibility: "Freshers and candidates with up to 3 years’ experience. Employer confirmation was pending.",
  },
  {
    company: "BeaconBold",
    role: "OPT Recruiter",
    schedule: "14 Nov 2026 · 6 am–noon",
    endsAt: "2026-11-14T12:00:00+05:30",
    venue: "Jai Hind Enclave, 2nd Floor, Madhapur",
    eligibility: "Freshers. Degree eligibility, exact venue and employer confirmation were pending.",
  },
  {
    company: "Cognizant",
    role: "Digital Marketing Agent",
    schedule: "13 Nov 2026 · 11 am–12:30 pm",
    endsAt: "2026-11-13T12:30:00+05:30",
    venue: "Building 12A, 1st Floor, Raheja Mindspace, Madhapur",
    eligibility: "BCA, B.Com, BA, B.Sc and other eligible graduates with digital marketing experience. B.Tech and BE eligibility was unconfirmed.",
  },
  {
    company: "Wipro",
    role: "Risk & Fraud Analyst (Non-Voice)",
    schedule: "12–13 Nov 2026 · 10 am–12:30 pm",
    endsAt: "2026-11-13T12:30:00+05:30",
    venue: "Wipro SEZ Campus, Gopanpally",
    eligibility: "Fresh graduates, including B.Tech. Candidates must have completed their degree.",
  },
  {
    company: "Tech Mahindra",
    role: "GIS / Mapping Associate",
    schedule: "11–12 Nov 2026 · 9:30 am–noon",
    endsAt: "2026-11-12T12:00:00+05:30",
    venue: "Tech Mahindra SEZ Tower 2, Infocity SEZ, HITEC City, Madhapur",
    eligibility: "Graduates and freshers. B.Tech eligibility was unconfirmed.",
  },
  {
    company: "Genpact",
    role: "Customer Service Executive",
    schedule: "11 Nov 2026 · 12:30–2 pm",
    endsAt: "2026-11-11T14:00:00+05:30",
    venue: "Genpact, Hafeezpet Road, Vinayaka Nagar, Hafeezpet",
    eligibility: "Graduates and freshers.",
  },
];
