import { Droplets, Facebook, Hammer, Package, Paintbrush, ShoppingBag } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Package size={30} className="text-primary" />,
    title: "Cement",
    highlight: "VIP Specialised Cement",
    category: "CEM II A-M",
    details: ["50 KG Bag"],
    facebookUrl: "https://www.facebook.com/yeasinmizigroup",
  },
  {
    icon: <Droplets size={30} className="text-primary" />,
    title: "Admixture (Construction chemical)",
    highlight: null,
    category: null,
    details: [
      "VIP Specialised Admixture",
      "VIP Ultra-Strong Admixture",
      "Container: 5L, 10L, 20L",
    ],
    facebookUrl: "https://www.facebook.com/yeasinmizigroup",
  },
  {
    icon: <Paintbrush size={30} className="text-primary" />,
    title: "Paint",
    highlight: "V.I.P Premium Paint",
    category: null,
    details: [
      "Interior Water Silar",
      "Exterior Water Silar",
      "Weathercoat",
      "Distemper",
      "Container: 25L",
    ],
    facebookUrl: "https://www.facebook.com/yeasinmizigroup",
  },
  {
    icon: <Hammer size={30} className="text-primary" />,
    title: "Steel (Rod)",
    highlight: "We sale and serve different kind of Rod from different factories and mills all over the country & our available product size:",
    category: null,
    details: ["8mm", "10mm", "12mm", "16mm", "20mm"],
    facebookUrl: "https://www.facebook.com/VIPCementAdmixer",
  },
  {
    icon: <ShoppingBag size={30} className="text-primary" />,
    title: "Shop System",
    highlight: null,
    category: null,
    details: [
      "Corporate Sales",
      "Distributorship Sales",
      "Joint Venture System",
    ],
    facebookUrl: "https://www.facebook.com/yeasinmizigroup",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white pt-16 pb-14 md:pt-[90px] md:pb-[80px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text">
            Products &amp; Services
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Delivering quality construction materials and flexible business solutions across Bangladesh.
          </p>
        </div>

        {/* Top Row — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom Row — 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="bg-light rounded-xl p-6 sm:p-7 group hover:bg-dark hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
          {service.icon}
        </div>
        <div>
          <h3 className="font-heading font-bold text-base sm:text-lg text-text group-hover:text-white transition-colors">
            {service.title}
          </h3>
          {service.category && (
            <span className="text-xs text-primary font-semibold">
              {service.category}
            </span>
          )}
        </div>
      </div>

      {/* Highlight */}
      {service.highlight && (
        <p className="text-primary font-heading font-semibold text-sm mb-3 group-hover:text-primary transition-colors">
          ★ {service.highlight}
        </p>
      )}

      {/* Details */}
      <ul className="space-y-1.5">
        {service.details.map((item) => (
          <li
            key={item}
            className="text-text-muted text-xs sm:text-sm leading-relaxed group-hover:text-white/60 transition-colors flex items-start gap-2"
          >
            <span className="text-primary mt-0.5 text-[10px] shrink-0">●</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Facebook Link */}
      <Link
        href={service.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#1877F2] font-semibold hover:underline group-hover:text-[#90CAF9] transition-colors"
      >
        <Facebook size={15} fill="currentColor" />
        Follow on Facebook
      </Link>
    </div>
  );
}
