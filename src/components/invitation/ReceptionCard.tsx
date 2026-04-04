"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapActionButtons } from "./MapActionButtons";
import { receptionDirectionsUrl, receptionSearchUrl } from "./mapLinks";
import { OrnateFrame } from "./OrnateFrame";
import { MotionBlock, MotionScale } from "./MotionSection";

export function ReceptionCard() {
  return (
    <section
      id="reception"
      className="relative flex min-h-[100dvh] items-center justify-center px-4 py-16 sm:px-6"
    >
      <div className="w-full max-w-2xl">
        <MotionScale>
          <OrnateFrame>
            <div className="text-center">
              <MotionBlock index={0}>
                <div className="relative mx-auto mb-8 grid grid-cols-2 gap-2 sm:gap-3">
                  <motion.div
                    className="relative h-28 overflow-hidden rounded-xl sm:h-36"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80&auto=format&fit=crop"
                      alt="Celebration lights"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 20rem"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/25 to-transparent" />
                  </motion.div>
                  <motion.div
                    className="relative h-28 overflow-hidden rounded-xl sm:h-36"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80&auto=format&fit=crop"
                      alt="Wedding celebration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 20rem"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-rose-600/22 to-transparent" />
                  </motion.div>
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8b6914]">Reception</p>
                <h2 className="mt-4 bg-gradient-to-r from-[#c2185b] via-amber-700 to-emerald-700 bg-clip-text font-[family-name:var(--font-serif)] text-3xl font-bold text-transparent sm:text-4xl">
                  Celebrate with us
                </h2>
                <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
              </MotionBlock>

              <MotionBlock index={1} className="mt-10">
                <p className="font-[family-name:var(--font-body)] text-lg text-[#3d2914] md:text-xl">
                  <span className="font-semibold text-violet-800">Tuesday</span>{" "}
                  <span className="text-amber-800">28 April 2026</span>
                </p>
                <motion.p
                  className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[#c2185b] md:text-3xl"
                  whileInView={{ scale: [1, 1.04, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  at 1:30 p.m.
                </motion.p>
              </MotionBlock>

              <MotionBlock index={2} className="mt-10">
                <motion.div
                  className="rounded-2xl border border-[#c2185b]/25 bg-gradient-to-br from-[#fff8fb] to-[#faf6f0] px-5 py-6 text-left shadow-sm ring-1 ring-emerald-200/25"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <p className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[#c2185b]">Venue</p>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-[0.95rem] leading-relaxed text-[#3d2914]">
                    Amar Function Hall
                    <br />
                    Shaikh Colony, Indi
                  </p>
                  <MapActionButtons viewUrl={receptionSearchUrl} directionsUrl={receptionDirectionsUrl} accent="rose" />
                </motion.div>
              </MotionBlock>

              <MotionBlock index={3} className="mt-12 border-t border-[#3d2914]/10 pt-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b6914]">
                  With best compliments from
                </p>
                <ul className="mt-4 space-y-2 font-[family-name:var(--font-body)] text-sm text-[#3d2914] sm:text-base">
                  <li>
                    <motion.span
                      className="inline-block font-semibold text-[#c2185b]"
                      whileHover={{ x: 4 }}
                    >
                      Kazi Post Master Group
                    </motion.span>
                  </li>
                  <li>
                    <motion.span
                      className="inline-block font-semibold text-[#c2185b]"
                      whileHover={{ x: 4 }}
                    >
                      Apsara Group
                    </motion.span>
                  </li>
                  <li>
                    <motion.span className="inline-block" whileHover={{ x: 4 }}>
                      Kazi Relatives &amp; Friends
                    </motion.span>
                  </li>
                </ul>
              </MotionBlock>

              <MotionBlock index={4} className="mt-10 text-center">
                <p className="font-[family-name:var(--font-script)] text-2xl text-transparent bg-gradient-to-r from-rose-700 via-amber-700 to-emerald-700 bg-clip-text md:text-3xl">
                  We look forward to your gracious presence
                </p>
              </MotionBlock>
            </div>
          </OrnateFrame>
        </MotionScale>
      </div>
    </section>
  );
}
