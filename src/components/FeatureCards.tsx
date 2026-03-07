import { Clock, Shield, Star } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: <Shield size={28} className="text-white" />,
      title: "Safety First",
      description:
        "Every project follows strict safety protocols and industry standards to protect our workers and clients.",
    },
    {
      icon: <Star size={28} className="text-white" />,
      title: "Honest & Transparent",
      description:
        "We believe in clear communication, fair pricing, and complete transparency throughout every project.",
    },
    {
      icon: <Clock size={28} className="text-white" />,
      title: "On-Time Delivery",
      description:
        "We deliver projects on schedule without compromising quality. Deadlines are commitments we honor.",
    },
  ];

  return (
    <section className="bg-light pt-[90px] pb-[80px]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            Our Core Values
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
            Safety, Honest, and<br />Safety-First
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-primary rounded-lg p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
