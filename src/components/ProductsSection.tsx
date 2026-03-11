"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const products = [
  
  {
    name: "V.I.P Cement",
    type: "Specialized Cement",
    spec: "More Durable • Stronger than Strong",
    weight: "50 kg",
    image: "/images/product-cement-promo-1.jpg",
  },
  {
    name: "V.I.P Cement",
    type: "Portland Composite Cement",
    spec: "High Quality • Made in Bangladesh",
    weight: "50 kg",
    image: "/images/product-cement-promo-2.jpg",
  },

  {
    name: "V.I.P Admixture",
    type: "Construction Chemical",
    spec: "Strong & Long-Lasting • bestcementbd.com",
    weight: "5L / 10L / 20L",
    image: "/images/img2.png",
  },
  {
    name: "V.I.P Admixture & Paint",
    type: "Construction Chemical & Building Materials",
    spec: "American Technology • Premium Quality",
    weight: "5L / 10L / 20L / 25L",
    image: "/images/img3.png",
  },
  {
    name: "V.I.P Cement",
    type: "Portland Composite Cement",
    spec: "Trusted Nationwide • Eco-Friendly",
    weight: "50 kg",
    image: "/images/img4.png",
  },
  {
    name: "V.I.P Admixture",
    type: "Construction Chemical",
    spec: "Strong & Long-Lasting • bestcementbd.com",
    weight: "5L / 10L / 20L",
    image: "/images/admixture-overview.jpg",
  },
];

export default function ProductsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Determine how many cards are visible based on screen width
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 768) setVisibleCount(2);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(next, 3500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };
  const resumeAutoPlay = () => {
    autoPlayRef.current = setInterval(next, 3500);
  };

  const cardGap = 24;
  const cardWidthPercent = 100 / visibleCount;

  return (
    <section id="products" className="products-section">
      <style>{`
        .products-section {
          padding: 80px 0 60px;
          background: linear-gradient(180deg, var(--background) 0%, var(--light-blue) 50%, var(--background) 100%);
          overflow: hidden;
        }
        .products-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .products-badge {
          display: inline-block;
          padding: 6px 20px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primary);
          border: 1.5px solid var(--primary);
          border-radius: 50px;
          margin-bottom: 16px;
        }
        .products-title {
          font-family: var(--font-heading);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: var(--foreground);
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .products-title span { color: var(--primary); }
        .products-subtitle {
          font-size: clamp(14px, 1.5vw, 16px);
          color: var(--muted-foreground);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Carousel */
        .products-carousel {
          position: relative;
        }
        .products-carousel__viewport {
          overflow: hidden;
          margin: 0;
        }
        .products-carousel__track {
          display: flex;
          gap: ${cardGap}px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .products-carousel__card {
          flex: 0 0 calc(${cardWidthPercent}% - ${(cardGap * (visibleCount - 1)) / visibleCount}px);
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(0,157,171,0.12);
          border-radius: 16px;
          padding: 24px 18px 20px;
          text-align: center;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          cursor: default;
        }
        .products-carousel__card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,157,171,0.15);
          border-color: var(--primary);
        }
        .products-carousel__card-img {
          width: 100%;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 10px;
          overflow: hidden;
        }
        .products-carousel__card-img img {
          max-width: 100%;
          max-height: 100%;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s ease;
        }
        .products-carousel__card:hover .products-carousel__card-img img {
          transform: scale(1.06);
        }
        .products-carousel__card h3 {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 4px;
        }
        .products-carousel__card .card-type {
          font-size: 12px;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .products-carousel__card .card-spec {
          font-size: 11px;
          color: var(--muted-foreground);
          line-height: 1.4;
          margin-bottom: 8px;
        }
        .products-carousel__card .card-weight {
          display: inline-block;
          padding: 4px 14px;
          font-size: 11px;
          font-weight: 600;
          color: var(--primary);
          background: rgba(0,157,171,0.08);
          border-radius: 50px;
        }

        /* Arrows */
        .products-carousel__arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--primary);
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .products-carousel__arrow:hover {
          background: var(--primary);
          color: white;
          box-shadow: 0 8px 24px rgba(0,157,171,0.3);
        }
        .products-carousel__arrow--prev { left: -22px; }
        .products-carousel__arrow--next { right: -22px; }

        /* Dots */
        .products-carousel__dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }
        .products-carousel__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: var(--border);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .products-carousel__dot--active {
          background: var(--primary);
          width: 28px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .products-section { padding: 50px 0 40px; }
          .products-header { margin-bottom: 32px; }
          .products-carousel__card-img { height: 180px; }
          .products-carousel__arrow { width: 36px; height: 36px; }
          .products-carousel__arrow--prev { left: -8px; }
          .products-carousel__arrow--next { right: -8px; }
        }
        @media (max-width: 480px) {
          .products-carousel__arrow--prev { left: 4px; }
          .products-carousel__arrow--next { right: 4px; }
        }
      `}</style>

      {/* Header */}
      <div className="container products-header">
        <span className="products-badge">Our Products</span>
        <h2 className="products-title">
          Premium Cement for <span>Every Project</span>
        </h2>
        <p className="products-subtitle">
          V.I.P Portland Composite Cement — Made in Bangladesh, trusted
          nationwide for superior quality and durability.
        </p>
      </div>

      {/* Carousel */}
      <div className="container">
        <div
          className="products-carousel"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Prev Arrow */}
          <button
            className="products-carousel__arrow products-carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous products"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Viewport */}
          <div className="products-carousel__viewport">
            <div
              ref={trackRef}
              className="products-carousel__track"
              style={{
                transform: `translateX(calc(-${currentIndex} * (${cardWidthPercent}% + ${cardGap * (visibleCount - 1) / visibleCount - cardGap}px + ${cardGap}px)))`,
              }}
            >
              {products.map((product, i) => (
                <div key={i} className="products-carousel__card">
                  <div className="products-carousel__card-img">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={220}
                      height={280}
                    />
                  </div>
                  <h3>{product.name}</h3>
                  <p className="card-type">{product.type}</p>
                  <p className="card-spec">{product.spec}</p>
                  <span className="card-weight">{product.weight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            className="products-carousel__arrow products-carousel__arrow--next"
            onClick={next}
            aria-label="Next products"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="products-carousel__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`products-carousel__dot ${i === currentIndex ? "products-carousel__dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
