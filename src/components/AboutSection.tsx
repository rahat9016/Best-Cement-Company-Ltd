import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white pt-16 pb-14 md:pt-[90px] md:pb-[80px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about.png"
                alt="Construction site with workers"
                width={560}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 md:right-6 bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg">
              <p className="font-heading font-extrabold text-2xl sm:text-3xl">25+</p>
              <p className="font-heading font-semibold text-[10px] sm:text-xs">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              About Us
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text mb-4 md:mb-6">
              Experts in Company With Over a Decade of Proven Results
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4 md:mb-6">
              With over two decades of experience, Best Cement Company Ltd has evolved from
              a small local contractor to a full-service construction company.
              We specialize in both residential and commercial projects,
              delivering exceptional craftsmanship and attention to detail on
              every build.
            </p>
            <ul className="space-y-3 mb-6 md:mb-8">
              {[
                "Licensed & insured professionals",
                "Transparent pricing with no hidden fees",
                "Premium materials and modern techniques",
                "24/7 project management support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text text-sm">
                  <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white font-heading font-bold text-sm rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
