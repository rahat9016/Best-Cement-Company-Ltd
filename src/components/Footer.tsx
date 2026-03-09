import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-dark pt-12 md:pt-[70px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 md:pb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-5">
              <Image
                src="/images/best-cement-logo.png"
                alt="Best Cement Company Ltd"
                width={160}
                height={50}
                className="h-[40px] sm:h-[45px] w-auto object-contain"
              />
            </div>
            <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 md:mb-5">
              Building your vision with precision and excellence since 1998.
              Trusted by hundreds of clients across the country.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook key="fb" size={16} />, href: "https://www.facebook.com/VIPCementAdmixer" },
                { icon: <Facebook key="fb2" size={16} />, href: "https://www.facebook.com/yeasinmizigroup" },
                { icon: <Twitter key="tw" size={16} />, href: "#" },
                { icon: <Instagram key="ig" size={16} />, href: "#" },
                { icon: <Linkedin key="li" size={16} />, href: "#" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : undefined}
                  rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-lg flex items-center justify-center text-primary hover:text-primary-dark transition-all duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 md:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "About Us", "Services", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-white text-xs sm:text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 md:mb-5">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Commercial Construction",
                "Residential Builds",
                "Renovations",
                "Project Planning",
                "Interior Design",
                "Maintenance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-white text-xs sm:text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 md:mb-5">
              Contact Info
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 shrink-0 text-white" size={16} />
                <div className="text-white text-xs sm:text-sm space-y-1">
                  <p className="text-white font-semibold text-sm sm:text-base uppercase tracking-wider">E-mail:</p>
                  <Link href="mailto:bestcementbd@gmail.com" className="block hover:text-white transition-colors">bestcementbd@gmail.com</Link>
                  <Link href="mailto:yeasin045@gmail.com" className="block hover:text-white transition-colors">yeasin045@gmail.com</Link>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="shrink-0 text-white" size={16} />
                <Link href="https://www.facebook.com/VIPCementAdmixer" target="_blank" rel="noopener noreferrer" className="text-white text-xs sm:text-sm hover:text-white transition-colors">
                  V.I.P Cement &amp; Admixture
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="shrink-0 text-white" size={16} />
                <Link href="https://www.facebook.com/yeasinmizigroup" target="_blank" rel="noopener noreferrer" className="text-white text-xs sm:text-sm hover:text-white transition-colors">
                  A sister concern of Yeasin Mizi Group
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="shrink-0 text-white" size={16} />
                <Link href="https://www.bestcementbd.com" target="_blank" rel="noopener noreferrer" className="text-white text-xs sm:text-sm hover:text-white transition-colors">
                  www.bestcementbd.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 shrink-0 text-white" size={16} />
                <div className="text-white text-xs sm:text-sm space-y-1">
                  <p className="font-bold">Helpline: <Link href="tel:+8809639246276" className="hover:text-white transition-colors font-normal">+8809639246276</Link></p>
                  <p>Cont. <Link href="tel:+8801611005047" className="hover:text-white transition-colors">+8801611005047</Link></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-white" size={16} />
                <div className="text-white text-xs sm:text-sm space-y-2">
                  <p><span className="text-white font-semibold text-sm sm:text-base uppercase tracking-wider">Register Office:</span><br />Mansion-De-Ayesha, Level 06, Subahanbag, Mirpur Road, Dhanmondi, Dhaka</p>
                  <p><span className="text-white font-semibold text-sm sm:text-base uppercase tracking-wider">Corporate Office:</span><br />29, Rajuk Avenue, Motijheel C/A, Dhaka</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/50 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-white/90 text-[10px] sm:text-xs">
            © 2026 Best Cement Company Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-white/90 text-[10px] sm:text-xs hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
