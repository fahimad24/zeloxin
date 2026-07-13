"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import TestimonialCard from "./ui/TestimonialCard";

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Zelonis Motors provided an exceptional experience! The car quality and customer service are unmatched.",
    name: "James Anderson",
    location: "New York, USA",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    quote:
      "I found my dream car here. The team was professional, and the process was smooth from start to finish.",
    name: "Sophia Martinez",
    location: "Miami, USA",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    quote:
      "Best car buying experience ever! Highly recommend Zelonis Motors for anyone looking for luxury and performance.",
    name: "Daniel Johnson",
    location: "Chicago, USA",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 4,
    quote:
      "Outstanding service from start to finish. The team made the whole process effortless and enjoyable.",
    name: "Emily Clark",
    location: "Los Angeles, USA",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    id: 5,
    quote:
      "Incredible selection and fair pricing. I drove away in my perfect car the same day!",
    name: "Michael Brown",
    location: "Houston, USA",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=60",
  },
  {
    id: 6,
    quote:
      "The staff went above and beyond to find exactly what I was looking for. Truly exceptional.",
    name: "Olivia Davis",
    location: "Seattle, USA",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=44",
  },
];

// chunk into groups of 3
function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
}

const slides = chunkArray(testimonials, 3);

export default function Testimonials() {
  return (
    <div className="bg-background">
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-muted text-xs uppercase tracking-[4px] mb-1 block">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </div>
        <Link
          href="#"
          className=" flex items-center gap-1 text-sm font-medium text-gray-300 transition hover:text-white"
        >
          View All Testimonials
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Swiper — each slide = group of 3 in 2+1 layout */}
      <div className="flex w-full items-center justify-center">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          speed={1000}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".t-pagination",
          }}
          slidesPerView={3}
          spaceBetween={0}
          className="relative"
        >
          {slides.map((group, gi) => (
            <SwiperSlide key={gi}>
              {/* Top row — 2 cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {group[0] && <TestimonialCard t={group[0]} />}
                {group[1] && <TestimonialCard t={group[1]} />}
                {group[2] && <TestimonialCard t={group[2]} />}
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute bottom-[25%] z-20 right-[25%] translate-x-[50%]">
            <div className="t-pagination flex justify-center h-full items-center gap-2 pb-1" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
