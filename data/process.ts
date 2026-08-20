export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We visit the site, survey the space, and spend time understanding how you live and what the project needs to solve.",
  },
  {
    index: "02",
    title: "Concept",
    description:
      "A spatial plan and material direction come together into a single proposal — the foundation everything else builds on.",
  },
  {
    index: "03",
    title: "Development",
    description:
      "Every detail is drawn, specified, and priced: joinery, lighting, finishes, and furniture, ready for construction.",
  },
  {
    index: "04",
    title: "Realization",
    description:
      "We stay on site through the build, coordinating trades and protecting the design intent through to handover.",
  },
];
