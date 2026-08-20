import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Forma Studio — Interior Architecture & Design",
  description:
    "Interior architecture and design for homes that feel truly yours. View our recent projects across apartments, houses, and offices.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <ProcessSteps />
      <AboutTeaser />
      <Testimonials />
      <CtaSection />
    </>
  );
}
