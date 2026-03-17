import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import WebsiteTypesSection from "@/components/sections/WebsiteTypesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar onScrollTo={scrollTo} />

      {/* 1. Hero */}
      <HeroSection onScrollTo={scrollTo} />

      {/* 2. Portfolio */}
      <PortfolioSection />

      {/* 3. Services */}
      <ServicesSection onScrollTo={scrollTo} />

      {/* 4. Why choose me */}
      <WhyUsSection />

      {/* 5. How I work */}
      <HowItWorksSection />

      {/* 6. Common problems */}
      <ProblemsSection onScrollTo={scrollTo} />

      {/* 7. Pricing */}
      <PricingSection onScrollTo={scrollTo} />

      {/* 8. About */}
      <AboutSection />

      {/* 9. What kind of websites I build — SEO section */}
      <WebsiteTypesSection />

      {/* 10. FAQ — SEO section */}
      <FAQSection />

      {/* 11. Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground text-sm">
        <p>© 2025 Вебожитель — Разработка сайтов и автоматизация бизнеса</p>
      </footer>
    </div>
  );
}
