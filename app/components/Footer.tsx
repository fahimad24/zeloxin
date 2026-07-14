"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    "Home",
    "Inventory",
    "Brands",
    "Services",
    "About Us",
    "Blog",
    "Contact",
  ];
  const inventoryLinks = [
    "Sports Cars",
    "Sedans",
    "SUVs",
    "Luxury Cars",
    "Electric Cars",
    "Convertibles",
  ];
  const supportLinks = [
    "FAQ",
    "Shipping & Delivery",
    "Returns",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <footer className="w-full bg-[#0b0f19] border-t border-border text-gray-400 font-sans">
      <div className="max-w-384 mx-auto px-6 pt-16 pb-8">
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-gray-900">
          {/* Brand Column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight flex items-center">
                ZELONI<span className="text-red-600">X</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-gray-400 font-bold -mt-1 pl-0.5">
                Motors
              </span>
            </div>

            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-500 max-w-xs">
              Zelonix Motors is your ultimate destination for luxury,
              performance, and innovation. Drive the future, today.
            </p>

            <div className="flex items-center gap-2.5 mt-2">
              {[
                { icon: FaFacebook, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaYoutube, href: "#" },
                { icon: FaTwitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200"
                >
                  <social.icon className="w-3.5 h-3.5 fill-current" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 md:pl-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Inventory Column */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Inventory
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {inventoryLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Support
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-xs sm:text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span className="leading-relaxed text-gray-400">
                  123 Luxury Drive,
                  <br />
                  New York, NY 10001, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-gray-400">info@zelonixmotors.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <div className="text-gray-400 leading-relaxed">
                  <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
                  <span className="block mt-0.5 text-gray-500">
                    Sunday: Closed
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-gray-500 tracking-wide text-center sm:text-left">
            &copy; 2026 Zelonix Motors. All Rights Reserved.
          </p>

          {/* Payment Badges Container */}
          <div className="flex items-center gap-2 h-7 select-none">
            {/* Visa */}
            <div className="bg-[#0e172a] border border-gray-800 rounded px-2.5 py-1 flex items-center justify-center h-full">
              <span className="text-blue-500 font-extrabold italic text-[11px] tracking-tight">
                VISA
              </span>
            </div>
            {/* Mastercard */}
            <div className="bg-[#0e172a] border border-gray-800 rounded px-2.5 py-1 flex items-center justify-center h-full gap-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-90" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 opacity-90 -ml-1.5 mix-blend-screen" />
            </div>
            {/* PayPal */}
            <div className="bg-[#0e172a] border border-gray-800 rounded px-2.5 py-1 flex items-center justify-center h-full">
              <span className="text-blue-600 font-black italic text-[10px] tracking-tighter">
                Pay<span className="text-cyan-500">Pal</span>
              </span>
            </div>
            {/* Amex */}
            <div className="bg-[#0e172a] border border-gray-800 rounded px-2 py-1 flex items-center justify-center h-full">
              <span className="text-sky-400 font-bold text-[8px] tracking-widest">
                AMEX
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
