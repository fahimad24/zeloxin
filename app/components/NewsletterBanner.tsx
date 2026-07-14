"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-background py-12 px-6">
      <div className="max-w-384 mx-auto">
        <div className="relative w-full rounded-xl overflow-hidden border border-red-950/40 bg-linear-to-r from-primary/25 via-[#0f0a12] to-[#0a0505] min-h-65 md:min-h-55 flex items-center shadow-2xl">
          <div className="absolute inset-0 h-full w-full select-none pointer-events-none mix-blend-lighten md:mix-blend-normal">
            <div className="absolute inset-0 bg-linear-to-r from-[#120707] via-[#120707]/60 to-transparent z-10 hidden md:block" />
            <div className="absolute inset-0 bg-linear-to-l from-primary-30 via-transparent to-transparent z-10 block md:hidden" />
            <Image
              src="/images/banner-4.png"
              alt="Luxury Sports Car Background"
              fill
              className="object-cover object-bottom-10"
            />
          </div>

          <div className="relative z-20 w-full md:w-2/3 lg:w-3/5 p-6 sm:p-10 md:pr-4 flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-red-600 font-extrabold block mb-2">
              Newsletter
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
              Stay Updated with Zelonix Motors
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm max-w-md md:max-w-xl leading-relaxed mb-6">
              Subscribe to get the latest updates on new arrivals, exclusive
              offers and more.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md sm:max-w-lg mb-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-[#141a29]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 w-full focus:outline-none focus:border-red-700/60 transition duration-200"
                required
              />
              <button
                type="submit"
                className="bg-[#dc2626] hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap tracking-wide"
              >
                Subscribe
              </button>
            </form>

            <span className="text-[10px] sm:text-[11px] text-gray-600 font-medium tracking-wide">
              We respect your privacy. Unsubscribe at any time.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
