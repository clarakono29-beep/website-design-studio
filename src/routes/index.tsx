import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/nova/Navbar";
import HeroSection from "@/components/nova/HeroSection";
import StatsBar from "@/components/nova/StatsBar";
import ServicesSection from "@/components/nova/ServicesSection";
import AcademySection from "@/components/nova/AcademySection";
import PlatformSection from "@/components/nova/PlatformSection";
import AboutSection from "@/components/nova/AboutSection";
import PricingSection from "@/components/nova/PricingSection";
import ContactSection from "@/components/nova/ContactSection";
import Footer from "@/components/nova/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nova Rise — Zimbabwe's Premier Cleaning, Academy & Placement Company" },
      {
        name: "description",
        content:
          "Professional deep cleaning, a certified Maid Training Academy, and Zimbabwe's first digital domestic worker placement platform. Raising standards. Transforming lives.",
      },
      { property: "og:title", content: "Nova Rise — Raising Standards. Transforming Lives." },
      {
        property: "og:description",
        content:
          "Hospital-grade cleaning, a vocational Maid Training Academy, and a nationwide digital placement platform — built for Zimbabwe.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <AcademySection />
        <PlatformSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
