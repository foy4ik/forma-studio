export interface Value {
  title: string;
  description: string;
}

export const VALUES: Value[] = [
  {
    title: "Restraint",
    description:
      "We add what a space needs and remove what it doesn't. The best room is rarely the busiest one.",
  },
  {
    title: "Craft",
    description:
      "We work closely with makers and artisans, and specify materials that are built to be lived with for decades.",
  },
  {
    title: "Context",
    description:
      "Every building has a history and a place. Good design responds to both instead of ignoring them.",
  },
  {
    title: "Follow-through",
    description:
      "A drawing is a promise. We stay on site through construction to make sure it's kept.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "12", label: "Years in practice" },
  { value: "86", label: "Projects completed" },
  { value: "9", label: "Countries worked in" },
  { value: "14", label: "Studio members" },
];

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2013",
    title: "Studio founded",
    description:
      "Elena Marchetti opens Forma Studio in Milan with a single residential commission and a two-person team.",
  },
  {
    year: "2016",
    title: "Architecture practice added",
    description:
      "Jonas Reiter joins as Principal Architect, extending the studio's work into structural renovation and new builds.",
  },
  {
    year: "2019",
    title: "First international projects",
    description:
      "Commissions in Portugal and Denmark mark the studio's first work outside Italy and Germany.",
  },
  {
    year: "2022",
    title: "Workplace design division",
    description:
      "A growing number of office commissions leads to a dedicated workplace design offering alongside residential work.",
  },
  {
    year: "2024",
    title: "86th project completed",
    description:
      "The studio settles at fourteen members, working across nine countries on residential and commercial interiors.",
  },
];

export const STUDIO_HISTORY: string[] = [
  "Forma Studio was founded in Milan in 2013 on a simple premise: that the buildings we live and work in should be considered as carefully as the objects inside them. What began as a one-room residential practice has grown into a studio of fourteen architects and designers, working on homes, offices, and the occasional building from the ground up.",
  "We've never chased a signature look. Every project starts from the site, the light, and the people who'll use the space — which is why a Forma Studio project in a Berlin loft looks nothing like one in a Mallorca farmhouse, even though both are unmistakably ours in the way they're resolved.",
  "Today the studio splits its time between interior design, architecture, and author supervision on site — three disciplines we've always believed work better held together than handed off between separate firms.",
];
