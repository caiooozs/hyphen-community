import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ── Hyphen Card System ──────────────────────────────────────────────────────
 * A single glass surface shared by every card on the site (ecossistema, canais,
 * equipe). Sections keep their own background; the card stays translucent so it
 * reads consistently over any of them.
 *
 * Accent tokens are exposed as CSS variables (--surface-from/--surface-to) so
 * children like <SurfaceIcon> inherit the card's color without extra props.
 */

export type SurfaceAccent =
  | "cyan"
  | "blue"
  | "indigo"
  | "violet"
  | "pink"
  | "green";

const ACCENTS: Record<SurfaceAccent, { from: string; to: string }> = {
  cyan: { from: "#22d3ee", to: "#3b82f6" },
  blue: { from: "#60a5fa", to: "#2563eb" },
  indigo: { from: "#818cf8", to: "#7c3aed" },
  violet: { from: "#c084fc", to: "#6366f1" },
  pink: { from: "#f472b6", to: "#c026d3" },
  green: { from: "#4ade80", to: "#14b8a6" },
};

const PADDING = {
  sm: "p-4",
  md: "p-6",
  lg: "p-6 md:p-7",
} as const;

type SurfaceCardProps = React.ComponentProps<"div"> & {
  accent?: SurfaceAccent;
  padding?: keyof typeof PADDING;
  interactive?: boolean;
};

export function SurfaceCard({
  accent = "cyan",
  padding = "md",
  interactive = true,
  className,
  style,
  children,
  ...props
}: SurfaceCardProps) {
  const { from, to } = ACCENTS[accent];

  return (
    <div
      data-slot="surface-card"
      style={
        {
          "--surface-from": from,
          "--surface-to": to,
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "group/surface relative isolate flex flex-col overflow-hidden rounded-2xl",
        "border border-white/10 bg-white/[0.035] backdrop-blur-xl",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_18px_40px_-24px_rgba(2,6,23,0.9)]",
        "transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        interactive &&
          "hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_28px_60px_-28px_rgba(2,6,23,1)]",
        PADDING[padding],
        className,
      )}
      {...props}
    >
      {/* accent hairline */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-50 transition-opacity duration-500 group-hover/surface:opacity-100"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent, ${from}, ${to}, transparent)`,
        }}
      />
      {/* ambient corner glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover/surface:opacity-40"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      />
      {/* top sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent"
      />

      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}

/** Icon chip. Inherits the parent card's accent through CSS variables. */
export function SurfaceIcon({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="surface-icon"
      className={cn(
        "relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl",
        "border border-white/10 bg-white/[0.06] text-white",
        "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/surface:scale-105",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover/surface:opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--surface-from), var(--surface-to))",
        }}
      />
      <span className="relative flex items-center justify-center">
        {children}
      </span>
    </span>
  );
}

/** Small uppercase label used above a card title. */
export function SurfaceEyebrow({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="surface-eyebrow"
      className={cn(
        "text-[0.65rem] font-semibold tracking-[0.18em] text-white/40 uppercase",
        className,
      )}
      {...props}
    />
  );
}

/** Hairline divider tuned for the glass surface. */
export function SurfaceDivider({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden
      data-slot="surface-divider"
      className={cn("h-px w-full bg-white/10", className)}
      {...props}
    />
  );
}
