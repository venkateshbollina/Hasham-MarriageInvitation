"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function Corner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 4h20c8 0 14 6 14 14v8c0 6 4 10 10 10h8c8 0 14 6 14 14v20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 28c6-2 10-8 10-14M28 8c-2 6-8 10-14 10M52 72c2-6 8-10 14-10M72 52c6 2 10 8 10 14"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="4" cy="4" r="2" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function OrnateFrame({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="rounded-2xl bg-gradient-to-br from-rose-400 via-amber-300 to-emerald-400 p-[2px] shadow-[0_25px_80px_-20px_rgba(190,24,93,0.28)]"
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              boxShadow: "0 32px 90px -24px rgba(225,29,72,0.35)",
            }
      }
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="relative overflow-hidden rounded-[14px] bg-[#fffefb]/95 backdrop-blur-sm">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d2914' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <Corner className="absolute left-2 top-2 h-14 w-14 text-rose-600/75 md:h-20 md:w-20" />
        <Corner className="absolute right-2 top-2 h-14 w-14 rotate-90 text-amber-600/75 md:h-20 md:w-20" />
        <Corner className="absolute bottom-2 left-2 h-14 w-14 -rotate-90 text-emerald-600/70 md:h-20 md:w-20" />
        <Corner className="absolute bottom-2 right-2 h-14 w-14 rotate-180 text-fuchsia-600/60 md:h-20 md:w-20" />
        <div className="relative z-10 px-5 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16">{children}</div>
      </div>
    </motion.div>
  );
}
