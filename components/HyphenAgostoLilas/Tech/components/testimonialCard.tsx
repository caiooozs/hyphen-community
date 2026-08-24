import { FaQuoteLeft } from "react-icons/fa";

import type { Testimonial } from "../../types";

export function TestimonialCard({ quote, author, role }: Testimonial) {
  return (
    <figure className="relative flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A6F5]/40">
      <FaQuoteLeft aria-hidden className="text-lg text-[#C9A6F5]/50" />

      <blockquote className="flex-1 text-sm leading-relaxed text-white/70">
        {quote}
      </blockquote>

      <figcaption className="border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-white">{author}</p>
        {role ? <p className="mt-0.5 text-xs text-white/45">{role}</p> : null}
      </figcaption>
    </figure>
  );
}
