import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Testimonial } from "../Testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative rounded-xl border flex flex-col border-white/10 bg-card p-4">
      <Quote className="absolute right-5 top-5 h-6 w-6 fill-red-600 text-red-600" />
      <div className="flex items-start gap-2 flex-1">
        <div className="relative h-11 w-11 shrink-0">
          <Image
            src={t.avatar}
            alt={t.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <p className="pr-6 text-sm leading-relaxed text-gray-300 line-clamp-3">
          {t.quote}
        </p>
      </div>
      <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between my-auto">
        <div>
          <p className="text-sm font-semibold text-white">— {t.name}</p>
          <p className="mt-0.5 text-xs text-gray-500">{t.location}</p>
        </div>

        <div className="mt-2 flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
