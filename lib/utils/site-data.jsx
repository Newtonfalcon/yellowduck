/**
 * site-data.js
 * ─────────────────────────────────────────────────────────────
 * Central data file for the YellowDuck landing page.
 * Edit anything here — no need to touch component files.
 * ─────────────────────────────────────────────────────────────
 */

// ── Company Meta ─────────────────────────────────────────────
export const COMPANY = {
  name: "YellowDuck",
  tagline: "Ship Smarter. Deliver Faster.",
  description:
    "Enterprise-grade logistics built for scale. Air, ocean, express, and last-mile delivery — all in one intelligent platform.",
  email: "hello@yellowduck.io",
  phone: "+1 (800) 925-3825",
  address: "142 Harbor Boulevard, Lagos, NG 100001",
  founded: "2019",
};

// ── Hero Section ─────────────────────────────────────────────
export const HERO = {
  headline: "Ship Smarter.\nDeliver Faster.",
  subheadline:
    "End-to-end logistics for enterprises. Track, manage, and optimize your supply chain from a single intelligent platform.",
  ctaPrimary: { label: "Track Shipment", href: "/tracking" },
  ctaSecondary: { label: "Get a Quote", href: "/pricing" },
  badge: "Trusted by 50,000+ businesses worldwide",
};

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { value: "50K+", label: "Deliveries Completed" },
  { value: "120+", label: "Countries Served" },
  { value: "99.2%", label: "On-Time Success Rate" },
  { value: "24/7", label: "Live Support" },
];

// ── Services ─────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "air-freight",
    icon: "Plane",
    title: "Air Freight",
    description:
      "Priority air cargo with door-to-door tracking and customs pre-clearance on all major routes.",
  },
  {
    id: "ocean-freight",
    icon: "Ship",
    title: "Ocean Freight",
    description:
      "FCL and LCL container services across 300+ global ports with real-time vessel tracking.",
  },
  {
    id: "express-delivery",
    icon: "Zap",
    title: "Express Delivery",
    description:
      "Same-day and next-day delivery for time-critical shipments across metropolitan areas.",
  },
  {
    id: "warehousing",
    icon: "Warehouse",
    title: "Warehousing",
    description:
      "Smart fulfilment centres with automated inventory management and pick-and-pack services.",
  },
  {
    id: "customs",
    icon: "CheckSquare",
    title: "Customs Clearance",
    description:
      "End-to-end customs brokerage with automated duty calculation and compliance management.",
  },
  {
    id: "fleet",
    icon: "Truck",
    title: "Fleet Management",
    description:
      "Dedicated fleet services for high-volume shippers with route optimisation and live dispatch.",
  },
];

// ── Live Tracking Timeline ────────────────────────────────────
export const TRACKING_DEMO = {
  trackingId: "YD-2024-887321",
  origin: "Shanghai, CN",
  destination: "Lagos, NG",
  estimatedDelivery: "Dec 14, 2024",
  steps: [
    {
      status: "Shipment Created",
      location: "Shanghai Warehouse",
      time: "Dec 07 · 09:14",
      done: true,
    },
    {
      status: "In Transit",
      location: "Pudong Int'l Airport",
      time: "Dec 08 · 14:35",
      done: true,
    },
    {
      status: "Distribution Center",
      location: "Dubai Hub",
      time: "Dec 10 · 03:20",
      done: true,
    },
    {
      status: "Out for Delivery",
      location: "Lagos Sorting Center",
      time: "Dec 13 · 07:51",
      done: false,
      active: true,
    },
    {
      status: "Delivered",
      location: "142 Harbor Blvd, Lagos",
      time: "Estimated: Dec 14",
      done: false,
    },
  ],
};

// ── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Amara Okafor",
    role: "Head of Ops",
    company: "Konga Commerce",
    avatar: "AO",
    rating: 5,
    quote:
      "YellowDuck cut our average delivery time by 40%. The tracking dashboard is something our ops team lives in every day.",
  },
  {
    id: 2,
    name: "James Lim",
    role: "Supply Chain Director",
    company: "TechNova Asia",
    avatar: "JL",
    rating: 5,
    quote:
      "The customs clearance automation alone saves us 3 days per shipment. Best logistics API we've ever integrated.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Founder",
    company: "DesignCraft Studios",
    avatar: "PS",
    rating: 5,
    quote:
      "Finally a logistics company that feels like a tech company. The UI is clean, the support is fast, and packages arrive on time.",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Logistics Manager",
    company: "Porto Exports Ltd",
    avatar: "CM",
    rating: 4,
    quote:
      "Ocean freight has never been this transparent. Real-time vessel location and proactive delay alerts changed our planning.",
  },
];

// ── Footer Links ──────────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Partners", href: "/partners" },
  ],
  services: [
    { label: "Air Freight", href: "/services#air" },
    { label: "Ocean Freight", href: "/services#ocean" },
    { label: "Express Delivery", href: "/services#express" },
    { label: "Warehousing", href: "/services#warehousing" },
    { label: "Customs Clearance", href: "/services#customs" },
  ],
  support: [
    { label: "Track Shipment", href: "/tracking" },
    { label: "Help Center", href: "/help" },
    { label: "API Docs", href: "/developers" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export const SOCIAL_LINKS = [
  { platform: "Twitter", href: "https://twitter.com/yellowduck", icon: "Twitter" },
  { platform: "LinkedIn", href: "https://linkedin.com/company/yellowduck", icon: "Linkedin" },
  { platform: "Instagram", href: "https://instagram.com/yellowduck", icon: "Instagram" },
  { platform: "GitHub", href: "https://github.com/yellowduck", icon: "Github" },
];