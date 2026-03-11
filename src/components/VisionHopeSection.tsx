import { Eye, Heart, Star, Target } from "lucide-react";

export default function VisionHopeSection() {
  return (
    <section className="bg-light py-16 md:py-[90px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            What Drives Us
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text">
            Our Vision &amp; Our Hope
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Our Vision */}
          <div className="bg-white border border-primary/10 rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Eye size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text">
                Our Vision
              </h3>
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              Our vision is to serve high-quality products and ensure user
              satisfaction. V.I.P Construction Chemical operates from two
              factories — in <strong>Gazipur</strong> and{" "}
              <strong>Chandpur</strong>.
            </p>
            <ul className="space-y-2">
              {[
                "Deliver premium construction materials",
                "Expand manufacturing across Bangladesh",
                "Set new industry quality standards",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-text text-sm"
                >
                  <Target size={14} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Hope */}
          <div className="bg-white border border-primary/10 rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text">
                Our Hope
              </h3>
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              Our product will protect your dream investment and enhance your
              building quality, grow your self-confidence and trust, and make a
              meaningful contribution for the people as well as for the nation.
            </p>
            <ul className="space-y-2">
              {[
                "Protect your investment with lasting quality",
                "Create employment for the youth of Bangladesh",
                "Contribute to national development",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-text text-sm"
                >
                  <Star size={14} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
