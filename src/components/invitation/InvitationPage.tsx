"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FloatingDecor } from "./FloatingDecor";
import { ReceptionCard } from "./ReceptionCard";
import { WeddingCard } from "./WeddingCard";
import { WelcomeHero } from "./WelcomeHero";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-emerald-400 via-rose-500 to-amber-400"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-1/4 top-0 h-[55vh] w-[75vw] rounded-full bg-rose-200/45 blur-[110px]" />
      <div className="absolute -right-1/4 top-1/4 h-[50vh] w-[65vw] rounded-full bg-fuchsia-200/40 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 h-[45vh] w-[55vw] rounded-full bg-amber-200/38 blur-[110px]" />
      <div className="absolute bottom-1/3 right-1/4 h-[35vh] w-[45vw] rounded-full bg-emerald-200/32 blur-[90px]" />
    </div>
  );
}

export function InvitationPage() {
  return (
    <>
      <ScrollProgress />
      <AmbientGlow />
      <FloatingDecor />
      <header className="fixed left-0 right-0 top-3 z-40 flex justify-center px-4">
        <nav className="flex flex-wrap justify-center gap-1 rounded-full border border-rose-200/45 bg-white/85 px-2 py-1.5 text-xs font-medium shadow-md shadow-rose-200/25 backdrop-blur-md sm:text-sm">
          <a
            href="#welcome"
            className="rounded-full px-3 py-1.5 text-[#4a3728] transition-colors hover:bg-emerald-500/15 hover:text-emerald-800"
          >
            Welcome
          </a>
          <a
            href="#wedding"
            className="rounded-full px-3 py-1.5 text-[#4a3728] transition-colors hover:bg-rose-500/15 hover:text-rose-700"
          >
            Wedding
          </a>
          <a
            href="#reception"
            className="rounded-full px-3 py-1.5 text-[#4a3728] transition-colors hover:bg-amber-500/20 hover:text-amber-900"
          >
            Reception
          </a>
        </nav>
      </header>
      <main className="relative">
        <WelcomeHero />
        <div className="mx-auto flex max-w-lg justify-center px-4 py-10">
          <motion.div
            className="h-20 w-px bg-gradient-to-b from-rose-400 via-amber-400 to-emerald-400"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />
        </div>
        <WeddingCard />
        <div className="mx-auto flex max-w-lg justify-center px-4 pb-8">
          <div className="h-16 w-px bg-gradient-to-b from-amber-400 via-rose-400/70 to-transparent" />
        </div>
        <ReceptionCard />
      </main>
      <footer className="pb-10 pt-4 text-center text-xs text-[#5c4033]/80">
        Hasham &amp; Sana · April 2026
      </footer>
    </>
  );
}
