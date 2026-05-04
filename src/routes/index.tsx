import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/nova/Navbar";
import ScrollProgressBar from "@/components/nova/ScrollProgressBar";
import HeroSection from "@/components/nova/HeroSection";
import StatsBar from "@/components/nova/StatsBar";
import ClientLogoBar from "@/components/nova/ClientLogoBar";
import ServicesSection from "@/components/nova/ServicesSection";
import AcademySection from "@/components/nova/AcademySection";
import PlatformSection from "@/components/nova/PlatformSection";
import HowItWorksSection from "@/components/nova/HowItWorksSection";
import AboutSection from "@/components/nova/AboutSection";
import TestimonialsSection from "@/components/nova/TestimonialsSection";
import PricingSection from "@/components/nova/PricingSection";
import FAQSection from "@/components/nova/FAQSection";
import ContactSection from "@/components/nova/ContactSection";
import Footer from "@/components/nova/Footer";
import WhatsAppFloat from "@/components/nova/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")(  {
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
      <ScrollProgressBar />
      <Navbar />
      <main id="main">
        <HeroSection />
        <StatsBar />
        <ClientLogoBar />
        <ServicesSection />
        <AcademySection />
        <PlatformSection />
        <HowItWorksSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster position="top-right" richColors />
    </div>
  );
}
