"use client";

import Image from "next/image";
import { type CSSProperties, type FormEvent, useMemo, useState } from "react";

type IconName = "phone" | "whatsapp" | "linkedin" | "instagram" | "tiktok" | "facebook" | "map" | "globe";

type Palette = {
  id: string;
  name: string;
  need: string;
  accent: string;
  accentSoft: string;
  accentDark: string;
  surface: string;
  ink: string;
  gradient: string;
};

function makeCustomPalette(accent: string): Palette {
  return {
    id: `custom-${accent}`,
    name: "Custom brand color",
    need: "any exact color you need",
    accent,
    accentSoft: "#fff7ed",
    accentDark: "#431407",
    surface: "#fffaf5",
    ink: "#1c130d",
    gradient: `linear-gradient(135deg,#431407 0%,${accent} 48%,#fed7aa 100%)`,
  };
}

function SocialIcon({ name }: { name: IconName }) {
  const className = "size-5";

  if (name === "phone") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 4.5 8.2 3l3 5.7-2.3 1.7c.9 1.9 2.4 3.4 4.7 4.8l1.8-2.2 5.6 3.2-1.5 3.1c-.4.8-1.2 1.2-2.1 1.1C9.4 19.7 3.9 14.2 3.2 6.4c-.1-.8.3-1.6 1.1-1.9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.7 19.5 6 16.2A8.2 8.2 0 1 1 9 19l-4.3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9.2 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.8 1.4 1.8 2.3 3.2 2.9l.6-.7c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.6 0 1-.8 1.8-1.9 1.8-2.6 0-7.8-3.9-7.8-7 0-.6.2-1.1.7-1.7Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.7 8.9H3.8v10.3h2.9V8.9ZM5.2 4.1a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm14.9 9.4c0-3.1-1.7-4.9-4.2-4.9-1.8 0-2.7 1-3.1 1.7V8.9H9.9v10.3h2.9v-5.5c0-1.5.8-2.5 2.1-2.5 1.2 0 2 1 2 2.5v5.5h3.2v-5.7Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.8 3.7c.3 2.4 1.7 3.8 4.1 4v3c-1.5 0-2.8-.4-4.1-1.2v5.7c0 3-2.1 5.3-5.1 5.3-2.9 0-5-2-5-4.7 0-3.2 3-5.5 6.2-4.7v3.2c-1.4-.5-3 .2-3 1.6 0 1 .8 1.7 1.8 1.7 1.2 0 2-1 2-2.3V3.7h3.1Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8h2.2V4.8c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.1 1.9-5.1 5.3V13H4.7v3.6H8v3.9h4v-3.9h3.3l.5-3.6H12v-2.7c0-1 .3-2.3 2-2.3Z" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s7-5.5 7-11.4A7 7 0 0 0 5 9.6C5 15.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <circle cx="12" cy="9.8" r="2.4" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12h16M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5s-1 6.1-3.2 8.5C9.8 18.1 8.8 15.3 8.8 12S9.8 5.9 12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

const palettes: Palette[] = [
  {
    id: "future",
    name: "Deep Orange Trust",
    need: "tech, finance, agencies",
    accent: "#c2410c",
    accentSoft: "#ffedd5",
    accentDark: "#7c2d12",
    surface: "#fff7ed",
    ink: "#20130b",
    gradient: "linear-gradient(135deg,#7c2d12 0%,#c2410c 46%,#fb923c 100%)",
  },
  {
    id: "wellness",
    name: "Habesha Orange",
    need: "coffee, food, culture",
    accent: "#ea580c",
    accentSoft: "#fed7aa",
    accentDark: "#9a3412",
    surface: "#fff4e8",
    ink: "#24150c",
    gradient: "linear-gradient(135deg,#ea580c 0%,#f59e0b 56%,#24150c 100%)",
  },
  {
    id: "luxury",
    name: "Golden Merkato",
    need: "retail, import, trade",
    accent: "#b9380a",
    accentSoft: "#ffedd5",
    accentDark: "#7f1d1d",
    surface: "#fff7ed",
    ink: "#21130a",
    gradient: "linear-gradient(135deg,#21130a 0%,#b9380a 48%,#f59e0b 100%)",
  },
  {
    id: "creator",
    name: "Sheger Flame",
    need: "beauty, fashion, media",
    accent: "#dd4b0b",
    accentSoft: "#ffedd5",
    accentDark: "#9a3412",
    surface: "#fff7ed",
    ink: "#25130b",
    gradient: "linear-gradient(135deg,#dd4b0b 0%,#fb923c 52%,#25130b 100%)",
  },
  {
    id: "emerald",
    name: "Emerald Growth",
    need: "agriculture, wellness, eco",
    accent: "#059669",
    accentSoft: "#d1fae5",
    accentDark: "#064e3b",
    surface: "#f0fdf4",
    ink: "#102019",
    gradient: "linear-gradient(135deg,#064e3b 0%,#059669 52%,#facc15 100%)",
  },
  {
    id: "blue",
    name: "Blue Professional",
    need: "consulting, education, SaaS",
    accent: "#2563eb",
    accentSoft: "#dbeafe",
    accentDark: "#1e3a8a",
    surface: "#f8fbff",
    ink: "#101828",
    gradient: "linear-gradient(135deg,#1e3a8a 0%,#2563eb 55%,#93c5fd 100%)",
  },
  {
    id: "navy",
    name: "Navy Executive",
    need: "law, finance, corporate",
    accent: "#1e40af",
    accentSoft: "#dbeafe",
    accentDark: "#172554",
    surface: "#f8fafc",
    ink: "#0f172a",
    gradient: "linear-gradient(135deg,#0f172a 0%,#1e40af 52%,#dbeafe 100%)",
  },
  {
    id: "sky",
    name: "Sky Service",
    need: "travel, transport, delivery",
    accent: "#0284c7",
    accentSoft: "#e0f2fe",
    accentDark: "#075985",
    surface: "#f0f9ff",
    ink: "#0c1b24",
    gradient: "linear-gradient(135deg,#075985 0%,#0284c7 50%,#bae6fd 100%)",
  },
  {
    id: "purple",
    name: "Royal Purple",
    need: "events, beauty, creators",
    accent: "#7c3aed",
    accentSoft: "#ede9fe",
    accentDark: "#4c1d95",
    surface: "#fbfaff",
    ink: "#1b102c",
    gradient: "linear-gradient(135deg,#4c1d95 0%,#7c3aed 50%,#f0abfc 100%)",
  },
  {
    id: "rose",
    name: "Rose Boutique",
    need: "fashion, salon, cosmetics",
    accent: "#e11d48",
    accentSoft: "#ffe4e6",
    accentDark: "#881337",
    surface: "#fff7f8",
    ink: "#251017",
    gradient: "linear-gradient(135deg,#881337 0%,#e11d48 48%,#fb7185 100%)",
  },
  {
    id: "pink",
    name: "Pink Creator",
    need: "influencers, media, retail",
    accent: "#db2777",
    accentSoft: "#fce7f3",
    accentDark: "#831843",
    surface: "#fff8fb",
    ink: "#24111b",
    gradient: "linear-gradient(135deg,#831843 0%,#db2777 48%,#f9a8d4 100%)",
  },
  {
    id: "red",
    name: "Bold Red",
    need: "restaurants, campaigns, sport",
    accent: "#dc2626",
    accentSoft: "#fee2e2",
    accentDark: "#7f1d1d",
    surface: "#fff7f7",
    ink: "#241010",
    gradient: "linear-gradient(135deg,#7f1d1d 0%,#dc2626 52%,#fca5a5 100%)",
  },
  {
    id: "yellow",
    name: "Sunlit Yellow",
    need: "coffee, food, cheerful brands",
    accent: "#ca8a04",
    accentSoft: "#fef9c3",
    accentDark: "#713f12",
    surface: "#fffde8",
    ink: "#211a07",
    gradient: "linear-gradient(135deg,#713f12 0%,#ca8a04 50%,#fde047 100%)",
  },
  {
    id: "lime",
    name: "Fresh Lime",
    need: "organic, fitness, youth",
    accent: "#65a30d",
    accentSoft: "#ecfccb",
    accentDark: "#365314",
    surface: "#fbfff2",
    ink: "#18200c",
    gradient: "linear-gradient(135deg,#365314 0%,#65a30d 50%,#bef264 100%)",
  },
  {
    id: "teal",
    name: "Teal Modern",
    need: "clinics, tech, wellness",
    accent: "#0d9488",
    accentSoft: "#ccfbf1",
    accentDark: "#134e4a",
    surface: "#f0fdfa",
    ink: "#0f211f",
    gradient: "linear-gradient(135deg,#134e4a 0%,#0d9488 52%,#99f6e4 100%)",
  },
  {
    id: "cyan",
    name: "Cyan Fresh",
    need: "apps, delivery, innovation",
    accent: "#0891b2",
    accentSoft: "#cffafe",
    accentDark: "#164e63",
    surface: "#ecfeff",
    ink: "#0e1f25",
    gradient: "linear-gradient(135deg,#164e63 0%,#0891b2 48%,#a5f3fc 100%)",
  },
  {
    id: "indigo",
    name: "Indigo Studio",
    need: "design, education, services",
    accent: "#4f46e5",
    accentSoft: "#e0e7ff",
    accentDark: "#312e81",
    surface: "#f8f8ff",
    ink: "#15142a",
    gradient: "linear-gradient(135deg,#312e81 0%,#4f46e5 50%,#a5b4fc 100%)",
  },
  {
    id: "slate",
    name: "Slate Minimal",
    need: "premium, serious, simple",
    accent: "#475569",
    accentSoft: "#e2e8f0",
    accentDark: "#1e293b",
    surface: "#f8fafc",
    ink: "#0f172a",
    gradient: "linear-gradient(135deg,#0f172a 0%,#475569 54%,#cbd5e1 100%)",
  },
  {
    id: "black",
    name: "Black Gold",
    need: "luxury, VIP, premium retail",
    accent: "#111827",
    accentSoft: "#fef3c7",
    accentDark: "#030712",
    surface: "#fffbeb",
    ink: "#0b0b0d",
    gradient: "linear-gradient(135deg,#030712 0%,#111827 48%,#f59e0b 100%)",
  },
  {
    id: "brown",
    name: "Coffee Brown",
    need: "coffee, restaurants, crafts",
    accent: "#92400e",
    accentSoft: "#fef3c7",
    accentDark: "#451a03",
    surface: "#fff8ed",
    ink: "#201409",
    gradient: "linear-gradient(135deg,#451a03 0%,#92400e 50%,#fbbf24 100%)",
  },
  {
    id: "sand",
    name: "Warm Sand",
    need: "hospitality, real estate, spa",
    accent: "#a16207",
    accentSoft: "#fef3c7",
    accentDark: "#713f12",
    surface: "#fffaf0",
    ink: "#21180b",
    gradient: "linear-gradient(135deg,#713f12 0%,#a16207 50%,#fcd34d 100%)",
  },
  {
    id: "mint",
    name: "Mint Clean",
    need: "health, dental, pharmacy",
    accent: "#10b981",
    accentSoft: "#d1fae5",
    accentDark: "#047857",
    surface: "#f0fdf4",
    ink: "#102018",
    gradient: "linear-gradient(135deg,#047857 0%,#10b981 50%,#a7f3d0 100%)",
  },
  {
    id: "magenta",
    name: "Magenta Pop",
    need: "music, events, entertainment",
    accent: "#c026d3",
    accentSoft: "#fae8ff",
    accentDark: "#86198f",
    surface: "#fff7ff",
    ink: "#241026",
    gradient: "linear-gradient(135deg,#86198f 0%,#c026d3 52%,#f0abfc 100%)",
  },
];

const features = [
  "One-tap contact saving",
  "WhatsApp catalog discovery",
  "Social profile shortcuts",
  "Map and visit directions",
];

const quickStats = [
  ["8+", "Contact actions"],
  ["20+", "Color moods"],
  ["60s", "Fast preview"],
];

const journey = [
  {
    title: "Choose a mood",
    text: "Select a color system that matches the brand goal for this year.",
  },
  {
    title: "Add real links",
    text: "Phone, WhatsApp catalog, socials, website, and map all become direct actions.",
  },
  {
    title: "Share everywhere",
    text: "Use the card on profiles, packaging, campaigns, invoices, and QR codes.",
  },
];

const heroImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 640'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23dff7ec'/%3E%3Cstop offset='.55' stop-color='%23fff3c4'/%3E%3Cstop offset='1' stop-color='%23ffd6a5'/%3E%3C/linearGradient%3E%3ClinearGradient id='road' x1='0' x2='1'%3E%3Cstop stop-color='%2310201d'/%3E%3Cstop offset='1' stop-color='%230f766e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='640' fill='url(%23sky)'/%3E%3Ccircle cx='705' cy='120' r='72' fill='%23f5c542' opacity='.95'/%3E%3Cpath d='M0 450 C170 395 270 425 410 380 C575 326 695 360 900 292 L900 640 L0 640 Z' fill='%23ffffff' opacity='.62'/%3E%3Cpath d='M0 492 C170 450 310 470 455 430 C640 378 755 404 900 356 L900 640 L0 640 Z' fill='%230f766e' opacity='.16'/%3E%3Crect x='80' y='255' width='105' height='185' rx='10' fill='%2310201d' opacity='.9'/%3E%3Crect x='213' y='205' width='80' height='235' rx='10' fill='%2310201d' opacity='.82'/%3E%3Crect x='322' y='278' width='125' height='162' rx='10' fill='%2310201d' opacity='.88'/%3E%3Crect x='482' y='232' width='92' height='208' rx='10' fill='%2310201d' opacity='.78'/%3E%3Crect x='616' y='268' width='138' height='172' rx='10' fill='%2310201d' opacity='.86'/%3E%3Cpath d='M165 440 L230 330 L295 440 Z' fill='%23f5c542'/%3E%3Cpath d='M178 440 L230 352 L282 440 Z' fill='%23ef4444' opacity='.86'/%3E%3Cg fill='%23f8fbff' opacity='.72'%3E%3Crect x='103' y='286' width='20' height='28' rx='3'/%3E%3Crect x='142' y='286' width='20' height='28' rx='3'/%3E%3Crect x='236' y='235' width='18' height='26' rx='3'/%3E%3Crect x='523' y='262' width='18' height='26' rx='3'/%3E%3Crect x='654' y='300' width='20' height='26' rx='3'/%3E%3Crect x='700' y='300' width='20' height='26' rx='3'/%3E%3C/g%3E%3Cpath d='M0 505 H900 V640 H0 Z' fill='url(%23road)'/%3E%3Cpath d='M90 555 C230 528 378 530 520 555 C650 578 758 579 850 560' stroke='%23f5c542' stroke-width='12' stroke-linecap='round' fill='none' opacity='.9'/%3E%3Crect x='570' y='380' width='230' height='142' rx='26' fill='%23ffffff'/%3E%3Crect x='595' y='405' width='68' height='68' rx='18' fill='%230f766e'/%3E%3Crect x='685' y='413' width='88' height='12' rx='6' fill='%2310201d' opacity='.85'/%3E%3Crect x='685' y='440' width='62' height='10' rx='5' fill='%230f766e' opacity='.55'/%3E%3Crect x='595' y='492' width='178' height='10' rx='5' fill='%23f5c542' opacity='.8'/%3E%3C/svg%3E";

const profile = {
  name: "Selam Tesfaye",
  role: "Ethiopian Business Consultant",
  company: "UNIQUE",
  initials: "ST",
  phone: "+251 911 234 567",
  email: "hello@uniquevcard.com",
  website: "https://uniquevcard.com",
  location: "Bole, Addis Ababa, Ethiopia",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Bole%2C%20Addis%20Ababa%2C%20Ethiopia",
  whatsappCatalog: "https://wa.me/251911234567?text=Selam%2C%20I%20want%20to%20find%20your%20catalog.",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  facebook: "https://www.facebook.com/",
};

const contactLinks: Array<{
  label: string;
  value: string;
  href: string;
  short: string;
  icon: IconName;
}> = [
  { label: "Phone number", value: profile.phone, href: `tel:${profile.phone}`, short: "Call", icon: "phone" },
  { label: "Find Catalog on WhatsApp", value: "Open product catalog", href: profile.whatsappCatalog, short: "WhatsApp", icon: "whatsapp" },
  { label: "LinkedIn", value: "Professional profile", href: profile.linkedin, short: "LinkedIn", icon: "linkedin" },
  { label: "Instagram", value: "Visual portfolio", href: profile.instagram, short: "Instagram", icon: "instagram" },
  { label: "TikTok", value: "Short-form updates", href: profile.tiktok, short: "TikTok", icon: "tiktok" },
  { label: "Facebook", value: "Community page", href: profile.facebook, short: "Facebook", icon: "facebook" },
  { label: "Google Map", value: profile.location, href: profile.mapUrl, short: "Map", icon: "map" },
  { label: "Website", value: profile.website.replace("https://", ""), href: profile.website, short: "Website", icon: "globe" },
];

export default function Home() {
  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);
  const [customAccent, setCustomAccent] = useState("#c2410c");
  const [formStatus, setFormStatus] = useState("");

  const vcardHref = useMemo(() => {
    const card = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${profile.name}`,
      `ORG:${profile.company}`,
      `TITLE:${profile.role}`,
      `TEL:${profile.phone}`,
      `EMAIL:${profile.email}`,
      `URL:${profile.website}`,
      `ADR:;;${profile.location};;;;`,
      `X-SOCIALPROFILE;TYPE=linkedin:${profile.linkedin}`,
      `X-SOCIALPROFILE;TYPE=instagram:${profile.instagram}`,
      `X-SOCIALPROFILE;TYPE=tiktok:${profile.tiktok}`,
      `X-SOCIALPROFILE;TYPE=facebook:${profile.facebook}`,
      `NOTE:Generated with ${profile.company}. WhatsApp catalog: ${profile.whatsappCatalog}`,
      "END:VCARD",
    ].join("\n");

    return `data:text/vcard;charset=utf-8,${encodeURIComponent(card)}`;
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("Your card request is ready for backend delivery.");
    event.currentTarget.reset();
  }

  function handleCustomAccentChange(color: string) {
    setCustomAccent(color);
    setSelectedPalette(makeCustomPalette(color));
  }

  return (
    <main
      className="min-h-screen bg-[#f6f8fb] text-[var(--ink)]"
      style={
        {
          "--accent": selectedPalette.accent,
          "--accent-soft": selectedPalette.accentSoft,
          "--accent-dark": selectedPalette.accentDark,
          "--surface": selectedPalette.surface,
          "--ink": selectedPalette.ink,
        } as CSSProperties
      }
    >
      <header className="sticky top-0 z-30 border-b border-orange-950/10 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3 font-black">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[var(--accent)] text-lg text-white shadow-lg shadow-orange-900/20">U</span>
            <span className="leading-tight">
              <span className="block truncate text-xl tracking-wide">UNIQUE</span>
              <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-orange-900/55 sm:block">
                Ethiopian digital cards
              </span>
            </span>
          </a>
          <div className="hidden items-center rounded-lg border border-orange-950/10 bg-orange-50/70 p-1 text-sm font-black text-orange-950/65 shadow-sm md:flex">
            <a className="rounded-md px-4 py-2 transition hover:bg-white hover:text-[var(--accent)]" href="#top">Home</a>
            <a className="rounded-md px-4 py-2 transition hover:bg-white hover:text-[var(--accent)]" href="#builder">Colors</a>
            <a className="rounded-md px-4 py-2 transition hover:bg-white hover:text-[var(--accent)]" href="#links">Socials</a>
            <a className="rounded-md px-4 py-2 transition hover:bg-white hover:text-[var(--accent)]" href="#contact">Generate</a>
          </div>
          <a
            href={vcardHref}
            download="unique-contact.vcf"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-black text-white shadow-lg shadow-orange-900/20 transition hover:bg-[var(--accent-dark)]"
          >
            Save Contact
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-4 w-fit rounded-lg bg-[var(--accent-soft)] px-3 py-2 text-sm font-black uppercase tracking-[0.18em] text-[var(--accent-dark)]">
            Built for Ethiopian businesses
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal md:text-7xl">
            UNIQUE helps Ethiopian brands get discovered faster.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            A polished digital card for Addis Ababa shops, consultants, creators, restaurants, clinics, and service
            brands. Customers can call, save your details, open your WhatsApp catalog, follow your socials, or find
            your location without confusion.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#builder"
              className="rounded-lg bg-[var(--accent)] px-6 py-4 text-center font-black text-white shadow-[0_18px_40px_rgba(16,24,40,0.18)] transition brightness-95 hover:brightness-100"
            >
              Choose Brand Color
            </a>
            <a
              href={profile.whatsappCatalog}
              className="rounded-lg border border-black/10 bg-white px-6 py-4 text-center font-black transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Find Catalog on WhatsApp
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-4">
            {features.map((item) => (
              <div key={item} className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-bold">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 grid max-w-xl grid-cols-3 gap-3">
            {quickStats.map(([value, label]) => (
              <div key={label} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-black/5">
                <strong className="block text-2xl font-black text-[var(--accent)]">{value}</strong>
                <span className="text-xs font-bold text-black/55">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="relative">
          <div className="hero-card-float relative overflow-hidden rounded-lg border border-black/10 bg-white shadow-2xl shadow-slate-950/10">
            <div className="relative h-60 overflow-hidden">
              <Image
                src={heroImage}
                alt="Stylized Addis Ababa business district with a digital contact card"
                fill
                priority
                unoptimized
                className="hero-image-pan h-full w-full object-cover"
              />
              <div className="hero-sun-pulse absolute right-20 top-12 size-20 rounded-full bg-yellow-300/35 blur-md" aria-hidden="true" />
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 900 360"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="hero-route-line"
                  d="M92 304 C205 258 323 275 445 244 C575 211 665 230 790 188"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray="16 22"
                />
                {[
                  [182, 278],
                  [446, 244],
                  [680, 221],
                ].map(([cx, cy], index) => (
                  <g key={`${cx}-${cy}`} className="hero-signal-dot" style={{ animationDelay: `${index * 0.55}s` }}>
                    <circle cx={cx} cy={cy} r="18" fill="var(--accent)" opacity=".18" />
                    <circle cx={cx} cy={cy} r="7" fill="var(--accent)" />
                  </g>
                ))}
              </svg>
              <div className="hero-mini-card absolute right-5 top-20 hidden w-48 rounded-lg border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur sm:block" aria-hidden="true">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-lg bg-[var(--accent)] text-sm font-black text-white">
                    U
                  </span>
                  <span className="min-w-0">
                    <span className="block h-2.5 w-24 rounded-full bg-black/75" />
                    <span className="mt-2 block h-2 w-16 rounded-full bg-[var(--accent)]/45" />
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {contactLinks.slice(0, 3).map((link) => (
                    <span key={link.short} className="grid size-9 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-dark)]">
                      <SocialIcon name={link.icon} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-2 text-sm font-black text-[var(--accent-dark)] shadow-sm">
                Addis Ababa ready
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="h-3" style={{ background: selectedPalette.gradient }} />
            <div className="px-6 pb-6">
              <div className="-mt-14 flex items-end justify-between gap-4">
                <div className="grid size-28 place-items-center rounded-lg border-4 border-white bg-[var(--ink)] text-4xl font-black text-white">
                  {profile.initials}
                </div>
                <span className="mb-3 rounded-lg bg-[var(--accent-soft)] px-3 py-2 text-sm font-black text-[var(--accent-dark)]">
                  {selectedPalette.name}
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-black">{profile.name}</h2>
                <p className="mt-1 font-bold text-[var(--accent)]">{profile.role}</p>
                <p className="mt-4 leading-7 text-black/60">
                  Helping Ethiopian businesses turn introductions into phone calls, catalog views, follows, visits, and saved contacts.
                </p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {contactLinks.slice(0, 6).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex min-h-20 items-center gap-3 rounded-lg border border-black/10 bg-[var(--surface)] px-4 py-3 transition hover:border-[var(--accent)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[var(--accent)] text-white">
                      <SocialIcon name={link.icon} />
                    </span>
                    <span className="min-w-0">
                      <strong className="block text-sm">{link.label}</strong>
                      <span className="block truncate text-xs text-black/55">{link.value}</span>
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-black/10 bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <span>
                    <strong className="block text-sm">Live card preview</strong>
                    <span className="text-xs text-black/55">Palette updates instantly</span>
                  </span>
                  <span className="rounded-lg bg-[var(--accent)] px-3 py-2 text-xs font-black text-white">Ready</span>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {contactLinks.slice(0, 4).map((link) => (
                    <span key={link.short} className="grid min-h-12 place-items-center rounded-lg bg-[var(--accent-soft)] px-2 py-3 text-[var(--accent-dark)]">
                      <SocialIcon name={link.icon} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {journey.map((item, index) => (
            <article key={item.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5">
              <span className="grid size-10 place-items-center rounded-lg bg-[var(--accent)] font-black text-white">
                {index + 1}
              </span>
              <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-black/60">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="builder" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.18em] text-[var(--accent)]">Brand color options</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-normal md:text-5xl">
                Pick from many colors, or choose any exact brand color.
              </h2>
            </div>
            <a
              href={vcardHref}
              download="unique-contact.vcf"
              className="w-fit rounded-lg border border-black/10 px-5 py-3 font-black transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Download Generated Card
            </a>
          </div>

          <div className="mt-10 rounded-lg border border-black/10 bg-[var(--surface)] p-5">
            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <h3 className="text-2xl font-black">Custom color picker</h3>
                <p className="mt-2 leading-7 text-black/60">
                  Use this when the client already has a logo color, company color, or exact hex code.
                </p>
              </div>
              <label className="flex flex-col gap-3 rounded-lg bg-white p-4 font-bold ring-1 ring-black/10 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  Exact color
                  <span className="mt-1 block text-sm font-medium text-black/55">{customAccent}</span>
                </span>
                <span className="flex items-center gap-3">
                  <input
                    type="color"
                    value={customAccent}
                    onChange={(event) => handleCustomAccentChange(event.target.value)}
                    className="h-12 w-20 cursor-pointer rounded-lg border border-black/10 bg-white p-1"
                    aria-label="Choose custom brand color"
                  />
                  <button
                    type="button"
                    onClick={() => handleCustomAccentChange(customAccent)}
                    className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-black text-white"
                  >
                    Apply
                  </button>
                </span>
              </label>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {palettes.map((palette) => (
              <button
                key={palette.id}
                onClick={() => setSelectedPalette(palette)}
                className={`rounded-lg border p-4 text-left transition ${
                  selectedPalette.id === palette.id ? "border-[var(--accent)] bg-[var(--surface)] shadow-lg" : "border-black/10 bg-white hover:border-black/30"
                }`}
              >
                <span className="flex gap-2">
                  {[palette.accent, palette.accentDark, palette.accentSoft].map((color) => (
                    <span key={color} className="size-9 rounded-lg border border-black/10" style={{ backgroundColor: color }} />
                  ))}
                </span>
                <strong className="mt-5 block text-lg">{palette.name}</strong>
                <span className="mt-2 block text-sm leading-6 text-black/60">{palette.need}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="links" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-[var(--accent)]">Contact channels</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">The generated card includes the links people expect.</h2>
            <p className="mt-5 leading-8 text-black/60">
              Phone, WhatsApp catalog, social profiles, map location, website, and email are presented as direct actions
              so the card works as a lead hub, not only a profile page.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex min-h-24 items-center justify-between gap-4 rounded-lg border border-black/10 bg-white p-4 transition hover:border-[var(--accent)] hover:shadow-lg"
              >
                <span>
                  <strong className="block">{link.label}</strong>
                  <span className="mt-1 block break-words text-sm text-black/55">{link.value}</span>
                </span>
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-dark)]">
                  <SocialIcon name={link.icon} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-[var(--accent)]">Generate card</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal md:text-5xl">Request a card with your own details.</h2>
            <p className="mt-5 max-w-xl leading-8 text-black/60">
              Pick a brand mood that suits the Ethiopian market, add the channels your customers already use, and turn
              one link into a mini-hub for calls, catalog views, follows, directions, and saved contacts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-lg bg-[var(--accent)] px-5 py-3 font-black text-white" href={`tel:${profile.phone}`}>
                Call Now
              </a>
              <a className="rounded-lg border border-black/10 px-5 py-3 font-black" href={profile.mapUrl}>
                Open Google Map
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-black/10 bg-[var(--surface)] p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Name
                <input required className="rounded-lg border border-black/10 bg-white px-4 py-3 font-medium outline-none transition focus:border-[var(--accent)]" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Phone number
                <input required type="tel" className="rounded-lg border border-black/10 bg-white px-4 py-3 font-medium outline-none transition focus:border-[var(--accent)]" placeholder="+251 9xx xxx xxx" />
              </label>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Business type
                <select className="rounded-lg border border-black/10 bg-white px-4 py-3 font-medium outline-none transition focus:border-[var(--accent)]">
                  {palettes.map((palette) => (
                    <option key={palette.id}>{palette.need}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Priority link
                <select className="rounded-lg border border-black/10 bg-white px-4 py-3 font-medium outline-none transition focus:border-[var(--accent)]">
                  <option>Find Catalog on WhatsApp</option>
                  <option>Phone number</option>
                  <option>LinkedIn</option>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Facebook</option>
                  <option>Google Map</option>
                </select>
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold">
              Social links and map
              <textarea required rows={5} className="resize-none rounded-lg border border-black/10 bg-white px-4 py-3 font-medium outline-none transition focus:border-[var(--accent)]" placeholder="Paste WhatsApp catalog, LinkedIn, Instagram, TikTok, Facebook, Google Map, website..." />
            </label>
            <button className="mt-5 w-full rounded-lg bg-[var(--ink)] px-6 py-4 font-black text-white transition hover:bg-[var(--accent)]">
              Generate My Card
            </button>
            {formStatus && <p className="mt-4 rounded-lg bg-[#ecfdf3] px-4 py-3 text-sm font-bold text-[#067647]">{formStatus}</p>}
          </form>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#101820] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <a href="#top" className="flex w-fit items-center gap-3 font-black">
              <span className="grid size-10 place-items-center rounded-lg bg-[var(--accent)]">U</span>
              <span>UNIQUE</span>
            </a>
            <p className="mt-4 max-w-md leading-7 text-white/65">
              Deep-orange digital vCards tailored for Ethiopian professionals, shops, service providers, creators, and growing local brands.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white/45">Explore</h2>
            <div className="mt-4 grid gap-3 text-sm font-bold text-white/70">
              <a className="hover:text-white" href="#builder">Brand colors</a>
              <a className="hover:text-white" href="#links">Contact links</a>
              <a className="hover:text-white" href="#contact">Generate card</a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white/45">Contact</h2>
            <div className="mt-4 flex gap-2">
              {contactLinks.slice(0, 6).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="grid size-10 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-[var(--accent)]"
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/55">Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/45">
          (c) 2026 UNIQUE. Built for modern Ethiopian business cards.
        </div>
      </footer>
    </main>
  );
}
