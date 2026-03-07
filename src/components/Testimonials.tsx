import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Robert Mitchell",
      role: "Business Owner",
      rating: 5,
      text: "Best Cement Company Ltd transformed our outdated office into a modern workspace. The team was professional, on schedule, and the quality exceeded our expectations.",
    },
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      text: "Building our dream home was stressful until we found Best Cement Company Ltd. They handled everything from permits to finishing with complete transparency.",
    },
    {
      name: "David Chen",
      role: "Property Developer",
      rating: 5,
      text: "I've worked with many contractors, but Best Cement Company Ltd stands out. Their attention to detail and commitment to deadlines is unmatched in the industry.",
    },
  ];

  return (
    <section className="bg-light pt-16 pb-14 md:pt-[90px] md:pb-[80px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
              Testimonials
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text">
              Honest Earnings,<br />Trusted Feedback
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="text-primary fill-primary sm:w-[18px] sm:h-[18px]" />
              ))}
            </div>
            <span className="text-text font-heading font-bold text-xs sm:text-sm ml-1">4.9/5</span>
            <span className="text-text-muted text-[10px] sm:text-xs">(120+ reviews)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary sm:w-4 sm:h-4" />
                ))}
              </div>

              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-xs sm:text-sm text-primary">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-xs sm:text-sm text-text">
                    {testimonial.name}
                  </p>
                  <p className="text-text-muted text-[10px] sm:text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
