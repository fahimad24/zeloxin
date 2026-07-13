import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

interface BlogItem {
  id: number;
  title: string;
  desc: string;
  date: string;
  image: string;
  slug: string;
}

const BlogSection: React.FC = () => {
  const blogs: BlogItem[] = [
    {
      id: 1,
      title: "Top 10 Supercars of 2026",
      desc: "Discover the most powerful and stylish supercars dominating the roads this year.",
      date: "May 10, 2026",
      image:
        "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=600&auto=format&fit=crop",
      slug: "top-10-supercars-2026",
    },
    {
      id: 2,
      title: "How to Maintain Your Luxury Car",
      desc: "Essential tips to keep your luxury car in perfect condition for years to come.",
      date: "May 15, 2026",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
      slug: "maintain-luxury-car",
    },
    {
      id: 3,
      title: "The Future of Electric Performance",
      desc: "Exploring the future of electric vehicles and high-performance technology.",
      date: "May 20, 2026",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
      slug: "future-electric-performance",
    },
  ];

  return (
    <div className="bg-background h-full">
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-muted text-xs uppercase tracking-[4px] block mb-1">
            Latest From Blog
          </span>
          <h2 className="text-[#f8fafc] text-2xl md:text-3xl font-extrabold tracking-tight">
            News & <span className="text-primary">Insights</span>
          </h2>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-[#f8fafc] hover:text-primary text-sm font-medium transition-colors group"
        >
          View All Posts
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full hover:border-primary/40 transition-all duration-300 group"
          >
            <div className="relative aspect-16/10 w-full overflow-hidden bg-[#111827]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#0b1220]/80 backdrop-blur-sm border border-[#263245] rounded px-2.5 py-1 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-primary" />
                <span className="text-[#f8fafc] text-[10px] font-semibold tracking-wide">
                  {blog.date}
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col grow">
              <h3 className="text-[#f8fafc] font-bold text-base tracking-wide mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-[#94a3b8] text-xs leading-relaxed mb-4">
                {blog.desc}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-auto flex items-center gap-1.5 text-primary hover:text-[#ef4444] text-xs font-bold uppercase tracking-wider group/link"
              >
                Read More
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
