import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function BlogSection() {
  const posts = [
    {
      image: "/images/blog-1.png",
      date: "Feb 28, 2026",
      category: "Tips",
      title: "10 Things to Know Before Starting a Commercial Build",
      excerpt:
        "Planning a commercial construction project? Here are essential insights to help your project succeed.",
    },
    {
      image: "/images/blog-2.png",
      date: "Feb 20, 2026",
      category: "Technology",
      title: "How Modern Surveying Equipment Saves Time",
      excerpt:
        "Discover the latest construction technology transforming accuracy and efficiency on job sites.",
    },
    {
      image: "/images/blog-3.png",
      date: "Feb 14, 2026",
      category: "Materials",
      title: "Choosing the Right Foundation Materials",
      excerpt:
        "A contractor's guide to selecting the best foundation materials for long-lasting structures.",
    },
  ];

  return (
    <section id="blog" className="bg-dark pt-16 pb-14 md:pt-[90px] md:pb-[80px]">
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-3">
            Our Blog
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-white">
            Construction Tips, Trends<br />& Insights
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-dark-card rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-white/5"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-white px-3 py-1 rounded text-xs font-heading font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-white/40 text-xs mb-2 sm:mb-3">{post.date}</p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary text-sm font-heading font-semibold group-hover:gap-2 transition-all"
                >
                  Read More
                  <ChevronRight className="ml-1" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
