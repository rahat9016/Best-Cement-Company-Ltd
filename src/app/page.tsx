import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import BusinessPartnerSection from "@/components/BusinessPartnerSection";
import CalendarSection from "@/components/CalendarSection";
import CareerSection from "@/components/CareerSection";
import CEOSection from "@/components/CEOSection";
import CTASection from "@/components/CTASection";
import FactorySection from "@/components/FactorySection";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import VisionHopeSection from "@/components/VisionHopeSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeatureCards />
        <AboutSection />
        <VisionHopeSection />
        <CareerSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyChooseUs />
        <CTASection />
        <CEOSection />
        <Testimonials />
        <BlogSection />
      </main>
      <FactorySection />
      <BusinessPartnerSection />
      <CalendarSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
