import { localImage } from "@/lib/images";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Elena Marchetti",
    role: "Founder & Principal Designer",
    bio: "Trained as an architect in Milan, Elena founded Forma Studio in 2013 after a decade designing hospitality interiors across Europe.",
    photo: localImage("1544005313-94ddf0286df2"),
  },
  {
    name: "Jonas Reiter",
    role: "Principal Architect",
    bio: "Jonas leads the studio's architecture practice, with a particular focus on structural renovation of older and listed buildings.",
    photo: localImage("1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Priya Nandakumar",
    role: "Senior Interior Designer",
    bio: "Priya specialises in material and lighting design, and oversees the studio's furniture and joinery specification.",
    photo: localImage("1573496359142-b8d87734a5a2"),
  },
  {
    name: "Marco Silva",
    role: "Project Director",
    bio: "Marco manages delivery across the studio's live projects, keeping every build on schedule and true to the original design.",
    photo: localImage("1519085360753-af0119f7cbe7"),
  },
];
