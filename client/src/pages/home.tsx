import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import AboutSolutionsSection from "@/components/home/AboutSolutionsSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CallToAction from "@/components/home/CallToAction";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TechStackSection from "@/components/home/TechStackSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ContactInfoSection from "@/components/home/ContactInfoSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zaalima Development | Innovative SaaS Solutions</title>
        <meta name="description" content="Empowering businesses with innovative SaaS solutions. Secure, scalable, and efficient software for the modern enterprise." />
      </Helmet>

      <section id="home">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About / Who We Are */}
        <AboutSolutionsSection />

        {/* 3. Products / Services Offered */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* 4. Why Choose Us / Unique Selling Points */}
        <WhyChooseUsSection />

        {/* 5. Industries / Use Cases */}
        <IndustriesSection />

        {/* 6. Client Testimonials / Success Stories */}
        <TestimonialsSection />

        {/* 7. Demo / Call-to-Action */}
        <CallToAction />

        {/* 8. Portfolio or Past Work */}
        <PortfolioSection />

        {/* 9. Tech Stack / Tools Used */}
        <TechStackSection />

        {/* 10. Blog / Resources Preview */}
        {/* <BlogPreviewSection />
         */}
        {/* 11. Partners / Clients Logos */}
        <TrustedBySection />

        {/* 12. Newsletter Signup */}
        <NewsletterSection />



        {/* 14. Footer - (Already in the layout) */}

        {/* Team Section */}
        <TeamSection />

        {/* FAQ Section */}
        <FaqSection />
        {/* 13. Contact Information / Quick Links */}
        <ContactInfoSection />
      </section>
    </>
  );
}
