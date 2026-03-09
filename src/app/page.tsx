import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import CareerSection from "@/components/CareerSection";
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
        <CareerSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyChooseUs />
        <CTASection />
        <Testimonials />
        <BlogSection />
      </main>
      <FactorySection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
