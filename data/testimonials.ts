export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Forma Studio understood what we wanted before we could fully articulate it ourselves. Every decision, down to the door handles, felt considered.",
    name: "Sofia Bergström",
    role: "Linden Loft, Berlin",
  },
  {
    quote:
      "They managed a genuinely difficult renovation — a collapsing farmhouse on three terraces — with a calm that kept the whole project grounded.",
    name: "Marco Fontana",
    role: "Stone Ridge Residence, Lake Como",
  },
  {
    quote:
      "Our office doesn't look like anyone else's, and every person who works here notices the difference. Worth every conversation it took to get there.",
    name: "Renske de Vries",
    role: "Aster & Co. Studio, Amsterdam",
  },
];
