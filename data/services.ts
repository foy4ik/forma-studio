import { localImage } from "@/lib/images";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    shortDescription:
      "Full interior schemes for homes — from spatial planning to the last cushion.",
    image: localImage("1618220179428-22790b461013"),
    description: [
      "We design interiors the way an architect designs a building: starting from how a space is actually used, not from a mood board. Every project begins with the plan — how you move through the home, where light falls across the day, what each room needs to hold — before a single material or finish is chosen.",
      "From there we develop a complete scheme: joinery, lighting, furniture, textiles, and art, specified down to the last detail and delivered as a package your contractor can build from with confidence.",
    ],
    benefits: [
      "Bespoke spatial planning tailored to how you actually live",
      "A cohesive material and colour palette across the entire home",
      "Custom joinery and furniture specification",
      "Lighting design integrated from the earliest sketches",
      "A single point of contact from concept to installation",
    ],
    process: [
      {
        title: "Brief & site survey",
        description:
          "We walk the space with you, measure everything precisely, and talk through how you want to live in it.",
      },
      {
        title: "Concept development",
        description:
          "Spatial plans, mood direction, and material studies presented as a coherent first proposal.",
      },
      {
        title: "Detailed design",
        description:
          "Every finish, fixture, and piece of furniture specified and drawn for construction and procurement.",
      },
      {
        title: "Site delivery",
        description:
          "Regular site visits and contractor coordination through to the final styling day.",
      },
    ],
  },
  {
    slug: "architecture",
    title: "Architecture",
    shortDescription:
      "Structural and spatial redesign — extensions, reconfigurations, and new builds.",
    image: localImage("1497366754035-f200968a6e72"),
    description: [
      "Some projects need more than a new interior — they need the walls to move. Our architecture practice handles everything from opening up a single room to full new-build houses, always working in step with our interiors team so the structural decisions and the finished feel of the space are considered together from day one.",
      "We manage the technical side in full: drawings, structural coordination, planning submissions, and building regulations, so the creative vision survives contact with the building process intact.",
    ],
    benefits: [
      "Integrated structural and interior thinking from the first sketch",
      "Planning application and building regulations management",
      "Structural engineer and contractor coordination",
      "Feasibility studies before you commit to a full project",
      "Extensions, reconfigurations, and ground-up new builds",
    ],
    process: [
      {
        title: "Feasibility",
        description:
          "An honest assessment of what's structurally and financially possible before design begins.",
      },
      {
        title: "Concept & planning",
        description:
          "Spatial concepts developed alongside the drawings needed for planning submission.",
      },
      {
        title: "Technical design",
        description:
          "Full construction drawings, specifications, and structural coordination.",
      },
      {
        title: "Construction support",
        description:
          "On-site oversight to keep the build faithful to the design intent.",
      },
    ],
  },
  {
    slug: "author-supervision",
    title: "Author Supervision",
    shortDescription:
      "On-site presence through construction, so the design is built exactly as intended.",
    image: localImage("1600880292203-757bb62b4baf"),
    description: [
      "A beautiful set of drawings is only as good as its execution. Author supervision keeps our team on site through the build — checking setting-out, materials, and finishes against the original design intent, and making the hundreds of small calls that inevitably come up once construction is underway.",
      "This service is typically paired with our interior design or architecture packages, but is also available independently for projects designed by other studios or architects.",
    ],
    benefits: [
      "Regular site visits through every phase of construction",
      "Direct coordination with contractors and trades",
      "Quality control on materials, finishes, and installation",
      "Fast resolution of on-site design questions",
      "Protection of the original design intent through to handover",
    ],
    process: [
      {
        title: "Handover briefing",
        description:
          "We brief the contractor on the design intent and the standards we'll be checking against.",
      },
      {
        title: "Milestone visits",
        description:
          "Scheduled site visits at each key stage — setting-out, first fix, finishes, installation.",
      },
      {
        title: "Snagging",
        description:
          "A detailed walk-through before handover, with a documented list resolved before sign-off.",
      },
      {
        title: "Final sign-off",
        description:
          "A last review to confirm the finished space matches the approved design.",
      },
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    shortDescription:
      "A focused session for a single room, a second opinion, or a project just getting started.",
    image: localImage("1497366412874-3415097a27e7"),
    description: [
      "Not every project needs a full design package. Our consultation service is a focused, paid session — in person or remote — for clients who want expert direction on a specific question: a single room, a layout decision, a material choice, or a general steer before committing to a larger renovation.",
      "You leave with clear, actionable recommendations, and the option to bring us on for further phases if the project grows.",
    ],
    benefits: [
      "Expert direction without committing to a full project",
      "Clear, written recommendations after every session",
      "Available in person or remotely",
      "A practical first step before a larger renovation",
      "Fees credited toward a future full engagement",
    ],
    process: [
      {
        title: "Discovery call",
        description:
          "A short call to understand the question you need help answering.",
      },
      {
        title: "Working session",
        description:
          "A focused 90-minute session — in person or on video — covering your space and options.",
      },
      {
        title: "Written summary",
        description:
          "A concise follow-up document with our recommendations and next steps.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
