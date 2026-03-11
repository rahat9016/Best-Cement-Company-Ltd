import { Check, Droplets, Paintbrush } from "lucide-react";
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
              V.I.P Construction Chemical
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              V.I.P Construction Chemical is one of the Best Cement Company products in Bangladesh. We have two qualities of admixture: <strong>V.I.P Ultra-Strong Chemical</strong> and <strong>V.I.P Specialized Admixture</strong>. We ensure the highest quality and best service.
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

          {/* Admixture Product Image (right) */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/vip-admixture-flyer.png"
                alt="V.I.P Construction Chemical — Admixture Product Overview"
                width={560}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 md:mb-24 gap-10 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-3">
              <Paintbrush size={20} />
              <p className="font-heading font-semibold text-sm tracking-wider uppercase">
                About Our Paint
              </p>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] leading-tight text-text mb-4 md:mb-6">
              V.I.P Premium Quality Paint
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              <strong>Best Cement Company Ltd.</strong> has launched its own paint product under the name <strong>V.I.P Premium Quality Paint</strong>, manufactured using well-known Indian chemist formulations combined with the expertise of our in-house chemists.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              Our paint is environmentally friendly and maintains up-to-the-mark quality. We hope our product will earn goodwill and build the trust of our customers across the entire country.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 ">
              We want to assure our customers, retailers, and dealers that one day V.I.P Paint will be a well-known and trusted product among all our clients and partners.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Formulated with renowned Indian chemist expertise",
                "Environmentally friendly & premium quality",
                "Designed to earn long-lasting customer trust",
                "Available for residential & commercial use",
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
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/image.png"
                alt="V.I.P Premium Quality Paint"
                width={560}
                height={560}
                className="w-full h-auto object-cover"
              />
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
