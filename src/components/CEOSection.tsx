import { Quote } from "lucide-react";
import Image from "next/image";

export default function CEOSection() {
  return (
    <section className="bg-white py-16 md:py-[90px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            Leadership
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text">
            Message from the CEO
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          {/* CEO Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-[240px] h-[300px] sm:w-[280px] sm:h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-primary/10">
                <Image
                  src="/images/ceo-yeasin-mizi.jpg"
                  alt="Md. Yeasin Mizi — Managing Director & CEO"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Name Card */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-5 py-3 rounded-lg shadow-lg text-center whitespace-nowrap">
                <p className="font-heading font-bold text-sm sm:text-base">Md. Yeasin Mizi</p>
                <p className="text-[10px] sm:text-xs font-medium opacity-90">Managing Director &amp; CEO</p>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="lg:col-span-3 pt-4 lg:pt-0">
            <Quote size={40} className="text-primary/20 mb-4 rotate-180" />
            <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
              <p>
                I am deeply honoured to lead <strong>Best Cement Company Ltd.</strong> — a company built on the foundation of quality, trust, management, and service. Our journey has been driven by building materials such as <strong>Cement, Construction Chemicals, Paint &amp; Steel</strong> that truly stand the test of time.
              </p>
              <p>
                It goes without saying that this journey was never easy. At every step, we faced immense challenges and difficult experiences. However, despite all the obstacles, we never sat idle. Instead, we tried more and more, approaching every problem creatively until we found alternative solutions — time and again. Today, we proudly offer three product brands: <strong>★ V.I.P Specialized Cement</strong>, <strong>★ V.I.P Admixture</strong>, and <strong>★ V.I.P Premium Paint</strong>. Additionally, by sourcing from various renowned companies, we distribute different kinds of steel across the entire country.
              </p>
              <p>
                We do not strive to become the biggest or the No. 1 brand in the market. Our aim is to <strong>survive in the market</strong> and create a workspace for the unemployed young generation in our country to the best of our ability — and to contribute meaningfully to our nation.
              </p>
              <p>
                Finally, I want to extend my heartfelt thanks to all of my beloved colleagues, business partners, customers, retailers, distributors, and well-wishers. Your support has been invaluable, and I congratulate each one of you with great warmth!
              </p>
              <p className="font-heading font-semibold text-text text-base sm:text-lg italic">
                &ldquo;We don&apos;t want to be No. 1 — we want to be Unique. Quality, trust, and service are our promise.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="font-heading font-bold text-text text-base">Md. Yeasin Mizi</p>
              <p className="text-text-muted text-sm">Managing Director &amp; CEO, Best Cement Company Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
