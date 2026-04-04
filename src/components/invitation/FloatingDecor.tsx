"use client";

import { motion, useReducedMotion } from "framer-motion";

const BLOBS = [
  { className: "left-[5%] top-[12%] h-32 w-32 bg-rose-300/38 blur-2xl", delay: 0 },
  { className: "right-[8%] top-[22%] h-40 w-40 bg-amber-300/32 blur-3xl", delay: 0.4 },
  { className: "left-[20%] bottom-[18%] h-36 w-36 bg-emerald-300/28 blur-2xl", delay: 0.8 },
  { className: "right-[15%] bottom-[10%] h-28 w-28 bg-fuchsia-300/22 blur-2xl", delay: 1.2 },
];

const PETALS = [
  { left: "8%", top: "20%", rotate: -12, duration: 14 },
  { left: "88%", top: "35%", rotate: 20, duration: 18 },
  { left: "12%", top: "70%", rotate: 8, duration: 16 },
  { left: "78%", top: "65%", rotate: -25, duration: 20 },
  { left: "45%", top: "8%", rotate: 5, duration: 22 },
];

function Petal({ left, top, rotate, duration }: (typeof PETALS)[number]) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="pointer-events-none absolute text-2xl text-rose-400/45 md:text-3xl"
      style={{ left, top, rotate }}
      animate={
        reduce
          ? undefined
          : {
              y: [0, -18, 0],
              x: [0, 10, 0],
              rotate: [rotate, rotate + 8, rotate],
              opacity: [0.32, 0.58, 0.32],
            }
      }
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      ✿
    </motion.span>
  );
}

export function FloatingDecor() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden" aria-hidden>
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${b.className}`}
          animate={
            reduce
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.48, 0.82, 0.48],
                }
          }
          transition={{
            duration: 8 + i * 2,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {PETALS.map((p, i) => (
        <Petal key={i} {...p} />
      ))}
    </div>
  );
}
