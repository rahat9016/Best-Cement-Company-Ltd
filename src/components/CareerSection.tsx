import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

const CAREER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdM-my40xqphjPSfZuk1LhQ-v_rsZUWCQ4TwmOQbO5ZKF4vCA/viewform";

const positions = [
  {
    title: "Sales Executive",
    location: "Multiple Zones",
    type: "Full Time",
  },
  {
    title: "Marketing Officer",
    location: "Multiple Zones",
    type: "Full Time",
  },
  {
    title: "Regional Sales Manager",
    location: "Multiple Zones",
    type: "Full Time",
  },
  {
    title: "Area Manager",
    location: "Multiple Zones",
    type: "Full Time",
  },
  {
    title: "Thana Executive Engineer",
    location: "Multiple Zones",
    type: "Full Time",
  },
];

export default function CareerSection() {
  return (
    <section id="career" className="bg-gray-50 pt-16 pb-14 md:pt-[90px] md:pb-[80px]">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            Join Our Team
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text mb-4 md:mb-6">
            Build Your Career With Us
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Welcome to the official recruitment portal of Best Cement Company Ltd.,
            a leading and fast-growing name in Bangladesh&apos;s cement industry,
            dedicated to delivering <strong>&ldquo;Quality That Lasts.&rdquo;</strong> We are currently
            hiring skilled, passionate, and self-motivated professionals.
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10 md:mb-14">
          {positions.map((pos) => (
            <div
              key={pos.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-text mb-2">
                {pos.title}
              </h3>
              <div className="flex items-center gap-1.5 text-text-muted text-xs sm:text-sm mb-1">
                <MapPin size={14} className="shrink-0" />
                {pos.location}
              </div>
              <span className="inline-block mt-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {pos.type}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-text-muted text-sm sm:text-base mb-5">
            Positions are open for <strong>multiple zones</strong> across the country.
            Ready to join Bangladesh&apos;s leading cement company?
          </p>
          <Link
            href={CAREER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-white font-heading font-bold text-sm sm:text-base rounded-md hover:bg-primary-dark transition-colors duration-300 shadow-lg shadow-primary/25"
          >
            Apply Now
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
