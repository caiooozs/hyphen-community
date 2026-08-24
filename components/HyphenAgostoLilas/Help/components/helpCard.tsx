import { FiExternalLink } from "react-icons/fi";

import type { HelpChannel } from "../../types";

export function HelpCard({ tag, label, description, href }: HelpChannel) {
  const content = (
    <>
      <span className="font-mono text-[0.7rem] tracking-[0.14em] text-[#C9A6F5] lowercase">
        {tag}
      </span>

      <span className="flex items-center gap-3">
        <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {label}
        </span>
        {href ? (
          <FiExternalLink
            aria-hidden
            className="text-base text-white/40 transition-all duration-300 group-hover/help:translate-x-0.5 group-hover/help:text-white"
          />
        ) : null}
      </span>

      <span className="text-sm leading-relaxed text-white/60">
        {description}
      </span>
    </>
  );

  const className =
    "group/help flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#C9A6F5]/40 md:p-7";

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${className} hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none`}
    >
      {content}
    </a>
  );
}
