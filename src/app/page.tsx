import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureCards />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyChooseUs />
        <CTASection />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
