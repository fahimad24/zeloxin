"use client";

import React, { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How can I book a test drive?",
      answer:
        "You can easily book a test drive online by selecting your preferred vehicle from our inventory page and clicking the 'Book Test Drive' button, or by calling our support team directly.",
    },
    {
      id: 2,
      question: "Do you offer financing options?",
      answer:
        "Yes, we partner with top-tier financial institutions to offer flexible, low-interest financing plans tailored to your budget. Pre-approval can be done online in minutes.",
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer:
        "We offer a 7-day or 500-mile satisfaction guarantee. If you are not completely satisfied with your luxury vehicle, you can return or exchange it hassle-free.",
    },
    {
      id: 4,
      question: "What documents are required?",
      answer:
        "To finalize your purchase, you will need a valid driver's license, proof of auto insurance, and your preferred method of payment or pre-approved financing documents.",
    },
    {
      id: 5,
      question: "Do you offer delivery?",
      answer:
        "Yes, we provide premium enclosed home delivery services nationwide. Your vehicle will arrive in pristine condition, fully detailed and ready to drive.",
    },
    {
      id: 6,
      question: "How can I contact support?",
      answer:
        "Our dedicated concierge support team is available 24/7. You can reach us via live chat on our website, email at support@zelonixmotors.com, or phone.",
    },
  ];

  const leftColumnFaqs = faqs.slice(0, 3);
  const rightColumnFaqs = faqs.slice(3, 6);

  return (
    <section className="w-full bg-background py-12 px-6">
      <div className="max-w-384 mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-[4px] text-muted block mb-1">
              FAQS
            </span>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Frequently Asked<span className="text-primary"> Questions</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-xs sm:text-sm text-white hover:text-primary flex items-center gap-1.5 transition font-medium group"
          >
            View All FAQs
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 w-full h-full aspect-16/8 relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800/40">
            <Image
              src="/images/banner-3.png"
              alt="Luxury Sports Car"
              fill
              sizes=""
              className="object-top object-cover brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-[#0b0f19]/80 hidden lg:block" />
          </div>

          <div className="lg:col-span-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <div className="flex flex-col gap-4">
              {leftColumnFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card border border-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-primary/60"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-white"
                  >
                    <span className="text-[13px] font-semibold tracking-wide text-gray-200">
                      {faq.question}
                    </span>
                    <span className="text-gray-400 shrink-0 ml-4">
                      {openId === faq.id ? (
                        <Minus className="w-4 h-4 text-primary" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openId === faq.id
                        ? "max-h-40 border-t border-gray-800/40"
                        : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-[13px] text-gray-400 leading-relaxed bg-[#0b0f19]/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {rightColumnFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card border border-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-primary/60"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-white"
                  >
                    <span className="text-[13px] font-semibold tracking-wide text-muted">
                      {faq.question}
                    </span>
                    <span className="text-gray-400 shrink-0 ml-4">
                      {openId === faq.id ? (
                        <Minus className="w-4 h-4 text-primary" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openId === faq.id
                        ? "max-h-40 border-t border-gray-800/40"
                        : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-[13px] text-gray-400 leading-relaxed bg-surface">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
