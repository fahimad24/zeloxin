"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CarFront,
  Trophy,
  PhoneCall,
  Users,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Sports Cars",
    count: "120+ Cars",
    image: "/images/Sports_Cars.jpg",
  },
  {
    id: 2,
    title: "Sedans",
    count: "150+ Cars",
    image: "/images/Sedans.jpg",
  },
  {
    id: 3,
    title: "SUVs",
    count: "180+ Cars",
    image: "/images/SUVs.jpg",
  },
  {
    id: 4,
    title: "Luxury Cars",
    count: "90+ Cars",
    image: "/images/Luxury_Cars.jpg",
  },
  {
    id: 5,
    title: "Electric Cars",
    count: "60+ Cars",
    image: "/images/Electric_Cars.jpg",
  },
  {
    id: 6,
    title: "Convertibles",
    count: "70+ Cars",
    image: "/images/Convertibles.jpg",
  },
];

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    icon: CarFront,
    value: "500+",
    label: "Luxury Cars",
  },
  {
    icon: Trophy,
    value: "50+",
    label: "Top Brands",
  },
  {
    icon: PhoneCall,
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Customer Satisfaction",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-[#060B15] py-24">
      <div className="mx-auto max-w-384 px-5">
        {/* Heading */}

        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[4px] text-gray-500">
              Browse By Category
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              Find Your <span className="text-red-600">Perfect Ride</span>
            </h2>
          </div>

          <Link
            href="/categories"
            className="flex items-center gap-2 text-sm text-white hover:text-red-500 transition"
          >
            View All Categories
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Category Grid */}

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group rounded-md border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-red-600 h-50 overflow-hidden"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">{item.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Promo Section */}

        <div className="mt-10 flex  border border-border bg-card md:flex-row flex-col rounded-md">
          {/* Left Promo Card */}

          <div className="relative overflow-hidden w-[35%] border-r ">
            <Image
              src="/images/bannar-2.png"
              alt="Luxury Car"
              fill
              className="object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-linear-to-r from-[#0B1220] via-[#0B1220]/35 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-center p-4">
              <h3 className="text-2xl font-bold leading-tight text-white">
                Performance, Power,
                <br />
                Pure <span className="text-red-600">Excellence.</span>
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-7 text-slate-400">
                Every car in our collection is hand-picked to deliver unmatched
                performance and premium driving experience.
              </p>

              <Link
                href="/about"
                className="mt-3 inline-flex w-fit items-center rounded-lg border border-slate-700 px-6 py-2 text-sm font-medium text-white transition hover:border-red-600 hover:bg-red-600"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-2  rounded-2xl md:grid-cols-3 xl:grid-cols-5 flex-1 divide-border divide-y md:divide-y-0 md:divide-x">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="mb-5 rounded-full border border-red-600/30 bg-red-600/10 p-3">
                    <Icon size={24} className="text-red-600" />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
