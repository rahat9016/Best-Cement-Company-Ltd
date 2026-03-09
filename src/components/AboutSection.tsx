import { Check, Droplets, Eye, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white pt-16 pb-14 md:pt-[90px] md:pb-[80px]">
      <div className="container">
        {/* ── V.I.P Cement ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about.png"
                alt="V.I.P Specialized Cement"
                width={560}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 md:right-6 bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg">
              <p className="font-heading font-extrabold text-2xl sm:text-3xl">CEM II</p>
              <p className="font-heading font-semibold text-[10px] sm:text-xs">A-M, 42.5N</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              About Us
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text mb-4 md:mb-6">
              V.I.P Specialized Cement
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              V.I.P Specialized Cement is one of the most trusted and rapidly growing cement brands in Bangladesh, renowned for its high-quality standards and commitment to customer satisfaction. Quality is the <strong>&ldquo;Slogan&rdquo;</strong> of this cement.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              The cement is manufactured as Portland Composite Cement with <strong>CEM II/A-M, 42.5N</strong> standard, ensuring exceptional strength and durability for all types of construction needs — and it is the only single classic cement.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              With the motto of delivering quality that lasts, V.I.P Cement is marketed by <strong>Best Cement Company Ltd.</strong> and has earned its place as a reliable choice for builders, developers, and customers across the country.
            </p>
            <ul className="space-y-3 mb-6 md:mb-8">
              {[
                "Formulated by special order — durable & environmentally friendly",
                "Available in 50 KG bags with up-to-the-mark quality",
                "Well-established marketing & distribution network",
                "Commitment to sustainability, quality & innovation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text text-sm">
                  <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed italic border-l-4 border-primary pl-4">
              &ldquo;Best Cement Company Ltd. does not want to launch CEM II B-M category cement, because in this era, Bangladeshi people have come to understand there is no alternative to a good product!&rdquo;
            </p>
          </div>
        </div>

        {/* ── Our Mission ── */}
        <div className="bg-light rounded-2xl p-6 sm:p-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-text mb-5">
              Our Mission &amp; Belief
            </h3>
            <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
              <p>
                In the present time, cement business in Bangladesh is becoming risky and difficult, but Best Cement Company keeps hope and trust strong for the nation.
              </p>
              <p>
                Our aim is <strong>not to be famous</strong> in the market — our aim is to <strong>serve the nation and create workplaces</strong>. We want only a slight market share so we can survive and support the unemployed people in the country.
              </p>
              <p>
                V.I.P Cement wants to serve the nation by building ready-mix plants in different places across Bangladesh and contributing to the country by exporting house materials to foreign countries.
              </p>
              <p className="font-heading font-semibold text-text text-base sm:text-lg">
                &ldquo;If you receive a V.I.P bag cement, we hope you won&apos;t lose. We don&apos;t want to be No.1 brand — we want to be Unique.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* ── Admixture Overview ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Content (left) */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-3">
              <Droplets size={20} />
              <p className="font-heading font-semibold text-sm tracking-wider uppercase">
                Overview of Our Admixture
              </p>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] leading-tight text-text mb-4 md:mb-6">
              V.I.P Construction Chemical &amp; Building Materials
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              V.I.P Construction Chemical and Building Materials is one of the Best Cement Company products in Bangladesh. We have two qualities of admixture: <strong>V.I.P Ultra-Strong Chemical</strong> and <strong>V.I.P Specialized Admixture</strong>. We ensure the highest quality and best service.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              V.I.P Admixture keeps contribution in a building like damp proofing, water proofing, water reducing, hair cracks repair, heat proving, making structures stronger and so on.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Available in 5L, 10L & 20L bucket system",
                "Different colours: White, Pink, Orange & more",
                "Manufactured with American technology",
                "Quality ensured with double mixing process",
                "Two factories in Gazipur & Chandpur",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text text-sm">
                  <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision & Hope cards (right) */}
          <div className="space-y-5">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Eye size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text">Our Vision</h3>
              </div>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Our vision is to serve high-quality products and ensure user satisfaction. V.I.P Construction Chemical operates from two factories — in <strong>Gazipur</strong> and <strong>Chandpur</strong>.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Heart size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text">Our Hope</h3>
              </div>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Our product will protect your dream investment and change your house quality, grow your self-confidence and trust, and make a well contribution for the people as well as for the nation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white font-heading font-bold text-sm rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
