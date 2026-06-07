"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

interface OrbitBadgeProps {
  brand: string;
  label: string;
}

// Merkezdeki marka kartının etrafında, kesik çizgili halkalar üzerinde
// dönen (orbit eden) turkuaz noktalar. Hareket framer-motion ile sağlanır.
export function OrbitBadge({ brand, label }: OrbitBadgeProps) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]">
      {/* yumuşak turkuaz parıltı */}
      <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(19,214,197,0.18),transparent_60%)]" />

      {/* kesik çizgili eş merkezli halkalar */}
      <div className="absolute inset-0 rounded-full border border-dashed border-dark/12" />
      <div className="absolute inset-[15%] rounded-full border border-dashed border-dark/12" />

      {/* dış halka üzerinde orbit eden noktalar */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise shadow-[0_0_0_5px_rgba(19,214,197,0.16)]" />
        <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-turquoise/70" />
      </motion.div>

      {/* iç halka üzerinde, ters yönde orbit eden noktalar */}
      <motion.div
        className="absolute inset-[15%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise" />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-turquoise/60" />
      </motion.div>

      {/* merkezdeki koyu marka kartı */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex aspect-square w-[48%] flex-col items-center justify-center rounded-3xl bg-dark text-white shadow-[var(--shadow-elevated)]">
          <Handshake size={30} className="mb-3 text-turquoise" />
          <strong className="text-3xl font-black tracking-tight text-turquoise">
            {brand}
          </strong>
          <small className="mt-1 text-[11px] font-bold text-white/60">
            {label}
          </small>
        </div>
      </div>
    </div>
  );
}
