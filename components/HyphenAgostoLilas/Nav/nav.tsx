import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export function AgostoNav() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#150A20]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          <FiArrowLeft className="text-base transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span className="font-mono tracking-tight">hyphen community</span>
        </Link>

        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A6F5]/30 bg-[#C9A6F5]/10 px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.14em] text-[#D9C2FA] lowercase">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-[#C9A6F5] shadow-[0_0_10px_2px_rgba(201,166,245,0.6)]"
          />
          agosto lilás
        </span>
      </div>
    </header>
  );
}

export default AgostoNav;
