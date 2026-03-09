import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "US Bangla Engineering",
    logo: "/images/us-bangla-engineering-logo.png",
    facebookUrl:
      "https://www.facebook.com/profile.php?id=61583210939375",
  },
];

export default function BusinessPartnerSection() {
  return (
    <section className="bg-light py-14 md:py-[80px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            Trusted Collaboration
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text">
            Our Business Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center w-full max-w-xs"
            >
              <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full bg-white flex items-center justify-center mb-5 overflow-hidden">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-text mb-4">
                {partner.name}
              </h3>
              <Link
                href={partner.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1877F2] text-white font-heading font-semibold text-sm rounded-full hover:bg-[#1565C0] transition-colors duration-300"
              >
                <Facebook size={16} fill="white" />
                Visit on Facebook
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
