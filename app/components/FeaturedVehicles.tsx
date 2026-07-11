import React from "react";
import { Heart, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const FeaturedVehicles = () => {
  // আপনার রিকোয়ারমেন্ট অনুযায়ী কোনো ডামি বা placeholder টেক্সট ছাড়া আসল ডেটা
  const cars = [
    {
      id: 1,
      title: "BMW M4 Competition",
      year: "2024",
      engine: "3.0L",
      power: "510 HP",
      location: "New York, USA",
      rating: "4.8",
      reviews: "120",
      price: "$79,900",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop", // BMW ব্ল্যাক কার রিপ্রেজেন্টেটিভ ইমেজ
    },
    {
      id: 2,
      title: "Porsche 911 Carrera S",
      year: "2024",
      engine: "3.0L",
      power: "450 HP",
      location: "Miami, USA",
      rating: "4.7",
      reviews: "98",
      price: "$128,500",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop", // Porsche রেড কার রিপ্রেজেন্টেটিভ ইমেজ
    },
    {
      id: 3,
      title: "Mercedes-AMG GT R",
      year: "2024",
      engine: "4.0L",
      power: "577 HP",
      location: "Chicago, USA",
      rating: "4.9",
      reviews: "110",
      price: "$147,000",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop", // Mercedes ব্ল্যাক কার রিপ্রেজেন্টেটিভ ইমেজ
    },
    {
      id: 4,
      title: "Audi R8 V10 Performance",
      year: "2024",
      engine: "5.2L",
      power: "602 HP",
      location: "Los Angeles, USA",
      rating: "4.6",
      reviews: "85",
      price: "$162,900",
      image:
        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=600&auto=format&fit=crop", // Audi হোয়াইট কার রিপ্রেজেন্টেটিভ ইমেজ
    },
  ];

  return (
    <section className="w-full py-12 px-6 bg-[#060B15]">
      <div className="max-w-384 mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs uppercase tracking-[4px] text-muted block mb-1">
              Featured Vehicles
            </span>
            <h2 className="text-[#f8fafc] text-2xl md:text-4xl font-extrabold tracking-tight">
              Explore Our <span className="text-[#dc2626]">Top Picks</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#f8fafc] hover:text-[#ef4444] text-sm font-medium transition-colors group">
            View All Vehicles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Core Listing Grid (Desktop view: 4 cards per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#111827]">
                <Image
                  src={car.image}
                  alt={car.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 rounded-full bg-[#0b1220]/60 border border-[#263245] text-[#cbd5e1] hover:text-[#dc2626] hover:bg-[#0b1220] transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex flex-col grow">
                {/* Title */}
                <h3 className="text-[#f8fafc] font-bold text-base tracking-wide line-clamp-1 mb-2">
                  {car.title}
                </h3>

                {/* Specs / Short Description */}
                <div className="flex items-center gap-2 text-[#94a3b8] text-xs mb-1">
                  <span>{car.year}</span>
                  <span>•</span>
                  <span>{car.engine}</span>
                  <span>•</span>
                  <span>{car.power}</span>
                </div>

                {/* Location Meta */}
                <p className="text-[#cbd5e1] text-xs mb-4">{car.location}</p>

                {/* Rating & Price Row */}
                <div className="flex justify-between items-center mt-auto mb-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="text-[#f8fafc] text-xs font-bold">
                      {car.rating}
                    </span>
                    <span className="text-[#94a3b8] text-xs">
                      ({car.reviews})
                    </span>
                  </div>
                  {/* Price */}
                  <span className="text-[#dc2626] font-bold text-base">
                    {car.price}
                  </span>
                </div>

                {/* View Details Button */}
                <button className="w-full py-2.5 rounded-lg border border-[#263245] bg-transparent text-[#f8fafc] hover:bg-[#dc2626] hover:border-[#dc2626] text-xs font-semibold tracking-wider transition-all duration-300 uppercase">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
