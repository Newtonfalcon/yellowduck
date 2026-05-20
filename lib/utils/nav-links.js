/**
 * nav-links.js
 * ─────────────────────────────────────────────
 * Edit this file to update navbar links globally.
 * Each entry supports an optional `children` array
 * for dropdown sub-menus (future use).
 */

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Tracking",
    href: "/tracking",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const AUTH_LINKS = {
  login: {
    label: "Login",
    href: "/login",
  },
  cta: {
    label: "Create Shipment",
    href: "/dashboard/shipments/new",
  },
};