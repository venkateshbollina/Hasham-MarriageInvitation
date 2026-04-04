"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { MiniConfetti } from "./MiniConfetti";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WelcomeHero() {
  const reduce = useReducedMotion();
  const [burstKey, setBurstKey] = useState(0);

  const goToWedding = useCallback(() => {
    setBurstKey((k) => k + 1);
    document.getElementById("wedding")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="welcome"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-28 sm:px-6"
    >
      <MiniConfetti burstKey={burstKey} />

      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/86 via-fuchsia-950/72 to-emerald-950/78" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,200,200,0.22),transparent)]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-amber-200/10 via-transparent to-transparent"
          animate={reduce ? undefined : { opacity: [0.4, 0.68, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl text-center"
      >
        <motion.p
          variants={item}
          className="font-[family-name:var(--font-script)] text-xl text-amber-100/95 sm:text-2xl md:text-3xl"
        >
          Assalamu Alaikum
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 bg-gradient-to-r from-amber-200 via-rose-100 to-emerald-200 bg-clip-text font-[family-name:var(--font-serif)] text-4xl font-bold tracking-tight text-transparent drop-shadow-sm sm:text-5xl md:text-6xl"
        >
          Welcome
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-md font-[family-name:var(--font-body)] text-lg leading-relaxed text-white/92 sm:text-xl"
        >
          <span className="font-semibold text-amber-50">Dear Guest,</span> we are delighted to share our joy with you.
        </motion.p>

        <motion.div variants={item} className="mt-10 space-y-2">
          <p className="font-[family-name:var(--font-script)] text-3xl text-rose-100 sm:text-4xl md:text-5xl">Sayyed Hasham</p>
          <p className="font-[family-name:var(--font-script)] text-2xl text-white/88 sm:text-3xl">&amp;</p>
          <p className="font-[family-name:var(--font-script)] text-3xl text-emerald-100 sm:text-4xl md:text-5xl">Sana</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/90">Wedding invitation</p>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.button
            type="button"
            onClick={goToWedding}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-gradient-to-b from-[#722f37] to-[#4a1520] px-10 py-4 font-[family-name:var(--font-serif)] text-lg font-semibold text-[#fdf6e3] shadow-[0_12px_40px_-8px_rgba(74,21,32,0.75)] ring-2 ring-[#c6a664]/55 ring-offset-2 ring-offset-rose-950/80 transition-shadow hover:shadow-[0_16px_48px_-8px_rgba(198,166,100,0.35)]"
          >
            Open our invitation
          </motion.button>
          <motion.a
            href="#reception"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border-2 border-white/45 bg-white/12 px-8 py-3.5 font-[family-name:var(--font-body)] text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/22"
          >
            Jump to reception
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/72"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
}
