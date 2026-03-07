import { Phone } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative pt-[100px] pb-[80px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.png"
          alt="Construction site at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      <div className="relative z-10 container text-center">
        <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
          Ready to Build?
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-[44px] leading-tight text-white mb-6 max-w-2xl mx-auto">
          Let&apos;s Get Your Concrete Project Started
        </h2>
        <p className="text-white/60 text-base max-w-lg mx-auto mb-8">
          From concept to completion, our team is ready to bring your vision to
          life. Contact us today for a free consultation and project estimate.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-heading font-bold text-sm rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Start Your Project
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white font-heading font-semibold text-sm rounded-md hover:border-primary hover:text-primary transition-colors duration-300"
          >
            <Phone className="mr-2" size={16} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
