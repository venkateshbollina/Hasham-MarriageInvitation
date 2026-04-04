"use client";

import { motion } from "framer-motion";
import { IconExternal, IconMapPin, IconNavigation } from "./icons";

type Props = {
  viewUrl: string;
  directionsUrl: string;
  accent: "burgundy" | "navy" | "rose";
};

export function MapActionButtons({ viewUrl, directionsUrl, accent }: Props) {
  const baseBtn =
    accent === "rose"
      ? "border-[#c2185b]/30 bg-white/70 text-[#3d2914] hover:border-[#c2185b]/55 hover:bg-[#fff5f8]"
      : accent === "navy"
        ? "border-[#1e2a4a]/35 bg-[#1e2a4a]/[0.06] text-[#1e2a4a] hover:border-[#b8860b]/60 hover:bg-[#fffdf5]"
        : "border-[#722f37]/35 bg-[#722f37]/[0.06] text-[#4a1520] hover:border-[#b8860b]/60 hover:bg-[#fffdf5]";

  const iconTone = accent === "rose" ? "text-[#c2185b]" : "text-[#b8860b]";

  return (
    <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center">
      <motion.a
        href={viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm transition-colors ${baseBtn}`}
      >
        <IconMapPin className={`h-5 w-5 shrink-0 ${iconTone}`} aria-hidden />
        <span>Open map</span>
        <IconExternal className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
      </motion.a>
      <motion.a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm transition-colors ${baseBtn}`}
      >
        <IconNavigation className={`h-5 w-5 shrink-0 ${iconTone}`} aria-hidden />
        <span>Directions</span>
        <IconExternal className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
      </motion.a>
    </div>
  );
}
