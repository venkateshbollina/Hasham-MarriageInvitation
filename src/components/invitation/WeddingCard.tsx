"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapActionButtons } from "./MapActionButtons";
import { marriageDirectionsUrl, marriageMapViewUrl } from "./mapLinks";
import { OrnateFrame } from "./OrnateFrame";
import { MotionBlock, MotionScale } from "./MotionSection";

export function WeddingCard() {
  const reduce = useReducedMotion();
  return (
    <section
      id="wedding"
      className="relative flex min-h-[100dvh] items-center justify-center px-4 py-16 sm:px-6"
    >
      <div className="w-full max-w-2xl">
        <MotionScale>
          <OrnateFrame>
            <div className="text-center">
              <MotionBlock index={0}>
                <p className="font-[family-name:var(--font-script)] text-lg text-[#5c4033] sm:text-xl md:text-2xl">
                  In the name of Allah, the most beneficent &amp; merciful.
                </p>
              </MotionBlock>

              <MotionBlock index={1} className="mt-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700/90">
                  With prayers &amp; blessings
                </p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-lg font-semibold text-[#c2185b] sm:text-xl">
                  Mr &amp; Mrs Sayedmehaboob Mohaddinsaheb Kazi{" "}
                  <span className="font-normal italic text-[#3d2914]">(Advocate)</span>{" "}
                  <span className="text-[#3d2914]">of Indi</span>
                </p>
              </MotionBlock>

              <MotionBlock index={2} className="mx-auto mt-8 max-w-md">
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] italic leading-relaxed text-[#3d2914]/95">
                  Request the honour of your presence at the marriage ceremony of their nephew{" "}
                  <span className="not-italic font-medium text-[#3d2914]">
                    (S/o SayyedMohammadhanif Mohaddinsaheb Kazi of Indi)
                  </span>
                  .
                </p>
              </MotionBlock>

              <MotionBlock index={3} className="mt-12 space-y-3">
                <p className="font-[family-name:var(--font-serif)] text-3xl font-bold tracking-tight text-[#5c1a3d] drop-shadow-[0_1px_0_rgba(255,255,255,0.55)] sm:text-4xl md:text-[2.75rem]">
                  Sayyed Hasham
                </p>
                <motion.p
                  className="font-[family-name:var(--font-script)] text-4xl text-amber-700 md:text-5xl"
                  animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  with
                </motion.p>
                <motion.p
                  className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_auto] bg-clip-text font-[family-name:var(--font-serif)] text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-[2.75rem]"
                  animate={
                    reduce
                      ? undefined
                      : {
                          backgroundPosition: ["100% center", "0% center", "100% center"],
                        }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Sana
                </motion.p>
                <p className="mt-4 font-[family-name:var(--font-body)] text-sm text-[#5c4033]">
                  (D/o Mehboob Khwajameerasab Kazi of Hole Alur)
                </p>
              </MotionBlock>

              <MotionBlock index={4} className="mt-10">
                <p className="font-[family-name:var(--font-serif)] text-xl font-semibold text-[#3d2914] md:text-2xl">
                  Insha Allah Nikah
                </p>
                <motion.div
                  className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-rose-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <p className="mt-5 font-[family-name:var(--font-body)] text-base text-[#3d2914] md:text-lg">
                  <span className="font-semibold text-rose-800">Sunday</span>{" "}
                  <span className="text-amber-800">26 April 2026</span>
                  <br />
                  <span className="text-sm text-[#5c4033]">
                    (8<sup>th</sup> Zulqaidah 1447 Hijri)
                  </span>
                  <br />
                  <span className="mt-1 inline-block font-medium text-emerald-800">at 12:45 p.m.</span>
                </p>
              </MotionBlock>

              <MotionBlock index={5} className="mt-10">
                <motion.div
                  className="rounded-2xl border border-[#c2185b]/25 bg-gradient-to-br from-[#fff5f8] to-[#faf6f0] px-5 py-6 text-left shadow-sm ring-1 ring-amber-200/30"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <p className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[#c2185b]">
                      Place of Marriage
                    </p>
                    <p className="font-mono text-[0.7rem] text-[#6b5b4f] sm:text-xs">15.828594, 75.649368</p>
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-[0.95rem] leading-relaxed text-[#3d2914]">
                    Shiva Parvati Kalyan Mantap, Hole-Alur
                    <br />
                    <span className="text-[#5c4033]">Tq: Ron · Dist: Gadag</span>
                  </p>
                  <MapActionButtons viewUrl={marriageMapViewUrl} directionsUrl={marriageDirectionsUrl} accent="rose" />
                </motion.div>
              </MotionBlock>
            </div>
          </OrnateFrame>
        </MotionScale>
      </div>
    </section>
  );
}
