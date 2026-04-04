"use client";

import { motion } from "framer-motion";
import { useId, useMemo } from "react";

const COLORS = ["#e91e63", "#ffd54f", "#26a69a", "#ab47bc", "#ec407a", "#ffb74d"];

type Piece = { id: string; angle: number; distance: number; color: string; size: number; delay: number };

export function MiniConfetti({ burstKey }: { burstKey: number }) {
  const baseId = useId();
  const pieces = useMemo(() => {
    const count = 28;
    const out: Piece[] = [];
    for (let i = 0; i < count; i++) {
      out.push({
        id: `${baseId}-${i}`,
        angle: (i / count) * Math.PI * 2 + Math.random() * 0.4,
        distance: 120 + Math.random() * 140,
        color: COLORS[i % COLORS.length]!,
        size: 6 + Math.random() * 6,
        delay: Math.random() * 0.08,
      });
    }
    return out;
  }, [baseId, burstKey]);

  if (burstKey === 0) return null;

  return (
    <div
      key={burstKey}
      className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center"
      aria-hidden
    >
      {pieces.map((p) => {
        const tx = Math.cos(p.angle) * p.distance;
        const ty = Math.sin(p.angle) * p.distance;
        return (
          <motion.span
            key={p.id}
            className="absolute rounded-sm shadow-sm"
            style={{
              width: p.size,
              height: p.size * 0.55,
              backgroundColor: p.color,
              left: "50%",
              top: "45%",
              marginLeft: -p.size / 2,
              marginTop: -p.size / 4,
            }}
            initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: tx,
              y: ty,
              rotate: 360 + Math.random() * 180,
              scale: 0.2,
            }}
            transition={{ duration: 0.95, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
          />
        );
      })}
    </div>
  );
}
