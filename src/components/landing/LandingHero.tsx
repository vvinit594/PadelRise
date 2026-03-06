"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TournamentSelector } from "@/components/ui/TournamentSelector";

export function LandingHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16"
    >
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/header_logo.svg"
          alt="Padel Rise 8.0"
          width={280}
          height={120}
          priority
          className="h-auto w-auto max-w-[280px] object-contain sm:max-w-[320px]"
        />
      </div>

      {/* Title */}
      <h1 className="text-center text-3xl font-semibold text-white">
        PadelRise Tournament Platform
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-2 max-w-xl text-center text-gray-200">
        Live Tournament Results, Groups, Rankings and Knockout Brackets
      </p>

      {/* Tournament Selector */}
      <div className="mt-6 flex justify-center">
        <TournamentSelector triggerClassName="w-64" />
      </div>

      {/* Enter Tournament Button */}
      <Link href="/groups" className="mt-6">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl bg-pink-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-pink-700"
        >
          ENTER TOURNAMENT
        </motion.button>
      </Link>
    </motion.section>
  );
}
