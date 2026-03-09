import { Factory, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";

export default function FactorySection() {
  return (
    <section className="relative py-16 md:py-[100px] bg-linear-to-b from-neutral-950 to-neutral-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/2 rounded-full" />
      </div>

      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Factory size={14} className="text-primary" />
            <span className="text-primary font-heading font-semibold text-xs tracking-wider uppercase">
              Our Factories
            </span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-white mb-4">
            Factory Locations
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            আমারা ঢাকা ও চিটাগং শহরের মানসম্মত সিমেন্ট ফ্যাক্টরি থেকে বিশেষভাবে অর্ডার করে প্যাকেটজাতকরে বাজারজাত করা হয়।
          </p>
        </div>

        {/* Factory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Cement Factory */}
          <div className="group relative bg-white/4 backdrop-blur-sm border border-white/8 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/15 rounded-full mb-5">
                <Star size={12} className="text-primary fill-primary" />
                <span className="text-primary text-[11px] font-bold tracking-wider uppercase">Cement</span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-4">
                Cement Factory
              </h3>

              <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-5">
                We specially order cement from reputable factories in Dhaka and Chittagong, package it, and distribute it in the market.
              </p>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Dhaka &amp; Chittagong Based Factories
                </p>
              </div>
            </div>
          </div>

          {/* Admixture & Paint Factory */}
          <div className="group relative bg-white/4 backdrop-blur-sm border border-white/8 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/15 rounded-full mb-5">
                <Star size={12} className="text-primary fill-primary" />
                <span className="text-primary text-[11px] font-bold tracking-wider uppercase">Admixture &amp; Paint</span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-4">
                Admixture &amp; Paint Factory
              </h3>

              <div className="space-y-4 mb-5">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Salna, Gazipur, Dhaka, Bangladesh
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    AlgiBazar, Haimchar, Chandpur, Chittagong, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <Phone size={16} className="text-primary shrink-0" />
                <div className="text-white/70 text-xs sm:text-sm">
                  <span className="text-white/40 text-[11px] uppercase tracking-wider font-semibold mr-2">Factory Contact:</span>
                  <Link href="tel:+8801785666746" className="hover:text-primary transition-colors">
                    +880 1785-666746
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
