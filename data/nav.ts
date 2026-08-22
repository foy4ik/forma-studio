export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: "Telegram", href: "https://t.me/foy4ik" },
  { label: "Kwork", href: "https://kwork.ru/user/dimfilhf" },
];

/** Plain-text authorship credit — deliberately not a link. */
export const AUTHOR_CREDIT = "by foy4ik";

export const STUDIO_ADDRESS = {
  line1: "Via Solferino 14",
  line2: "20121 Milan, Italy",
  email: "studio@formastudio.example",
  phone: "+39 02 1234 5678",
};
