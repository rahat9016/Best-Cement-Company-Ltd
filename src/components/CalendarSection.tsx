import { CalendarDays } from "lucide-react";
import Image from "next/image";

export default function CalendarSection() {
  return (
    <section className="bg-white py-16 md:py-[90px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <CalendarDays size={20} />
            <p className="font-heading font-semibold text-sm tracking-wider uppercase">
              Calendar 2026
            </p>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-text mb-4">
            V.I.P Calendar 2026
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto">
            Happy New Year! Wishing everyone a prosperous and successful year
            ahead.
          </p>
        </div>

        {/* Calendar Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/pdf.png"
              alt="V.I.P Admixture & Paint — Calendar 2026"
              width={800}
              height={1100}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/pdf2.png"
              alt="V.I.P Cement — Calendar 2026"
              width={800}
              height={1100}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
