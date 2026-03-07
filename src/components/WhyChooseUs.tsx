import { Check } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Team",
      description:
        "Our skilled professionals bring decades of combined experience to every project.",
    },
    {
      title: "Quality Materials",
      description:
        "We source premium-grade materials for lasting strength and durability.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Our proven project management ensures every build stays on schedule.",
    },
    {
      title: "Client Satisfaction",
      description:
        "Over 95% of our clients would recommend us. Your satisfaction is our priority.",
    },
  ];

  return (
    <section className="bg-light pt-16 pb-14 md:pt-[90px] md:pb-[80px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text mb-4 md:mb-6">
              Built On Trust, Driven<br />By Results
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
              We combine modern construction techniques with old-fashioned
              craftsmanship. Our commitment to quality, safety, and customer
              satisfaction sets us apart from the competition.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="text-primary" strokeWidth={3} />
                    </div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-text">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-text-muted text-[10px] sm:text-xs leading-relaxed pl-9 sm:pl-11">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about.png"
                alt="Construction team at work"
                width={560}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats badge */}
            <div className="absolute -bottom-4 -left-4 bg-dark text-white px-6 py-4 rounded-lg shadow-lg">
              <p className="font-heading font-extrabold text-2xl text-primary">
                98%
              </p>
              <p className="text-white/60 text-xs">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
