"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Play } from "lucide-react";
import { FaCarAlt } from "react-icons/fa";
import { TbBrandCtemplar } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import Link from "next/link";

const slides = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
];

export default function HeroSlider() {
  return (
    <section className="relative overflow-hidden  max-w-384 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="heroSwiper max-w-8xl mx-auto"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-140 w-full flex justify-end">
              <div className="relative h-full w-[70%]">
                <Image
                  src={image}
                  alt="Luxury Car"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#020617]/95 via-transparent to-transparent" />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#020617]/95 via-[#020617]/70 to-transparent" />

              {/* Left Content */}
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute left-0 top-0 z-20 flex h-full items-center pt-16 pb-10">
          <div className="mx-auto max-w-7xl w-full px-6">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-primary">
              DRIVE THE FUTURE —
            </p>

            <h1 className="max-w-2xl font-microgramma text-5xl font-black leading-tight text-white tracking-wider">
              EXPERIENCE
              <br />
              SPEED &<span className="text-primary"> LUXURY</span>
            </h1>

            <p className="mt-6 max-w-lg text-slate-300">
              Zelonix brings you the World&apos;s finest luxury and performance
              cars, offering an unparalleled driving experience. Explore our
              exclusive collection and elevate your journey with us.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/inventory"
                className="rounded-lg bg-primary px-8 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Explore Inventory
              </Link>

              <button className="rounded-lg border border-slate-500 pl-6.5 pr-8 py-4 text-white transition hover:border-white flex items-center gap-2">
                <Play />
                Watch Showreel
              </button>
            </div>
            <div className="mt-10 flex gap-5 text-muted">
              <div className="flex gap-4 items-center justify-center  py-2 ">
                <FaCarAlt size={28} />
                <div>
                  <h3 className="text-white font-bold">100+</h3>
                  <p className="text-xs">Cars Available</p>
                </div>
              </div>
              <div className="border-r-2 border-border"></div>
              <div className="flex gap-4 items-center justify-center  py-2 ">
                <TbBrandCtemplar size={28} />
                <div>
                  <h3 className="text-white font-bold">50+</h3>
                  <p className="text-xs">Premium Brands</p>
                </div>
              </div>
              <div className="border-r-2 border-border"></div>
              <div className="flex gap-4 items-center justify-center   py-2 ">
                <GiSelfLove size={28} />
                <div>
                  <h3 className="text-white font-bold">10k</h3>
                  <p className="text-xs">Cars Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
