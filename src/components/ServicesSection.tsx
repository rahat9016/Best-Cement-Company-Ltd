import { Building2, Clock, FileText, LayoutDashboard } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <LayoutDashboard size={32} className="text-primary" />,
      title: "Business Construction",
      description:
        "Full-scale commercial building construction for offices, retail spaces, and industrial facilities.",
    },
    {
      icon: <Building2 size={32} className="text-primary" />,
      title: "Residential Builds",
      description:
        "Custom home construction and renovations tailored to your lifestyle and design preferences.",
    },
    {
      icon: <FileText size={32} className="text-primary" />,
      title: "Political Plans",
      description:
        "Architectural planning and regulatory compliance services for public infrastructure projects.",
    },
    {
      icon: <Clock size={32} className="text-primary" />,
      title: "Political Focus",
      description:
        "Government and public works projects built to strict regulatory and safety standards.",
    },
  ];

  return (
    <section id="services" className="bg-white pt-[90px] pb-[80px]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight text-text">
            Built For Strength,<br />
            Crafted With Precision
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-light rounded-lg p-7 group hover:bg-dark hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-text group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
