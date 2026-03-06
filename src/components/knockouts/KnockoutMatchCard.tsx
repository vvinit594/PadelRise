"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { KnockoutMatch } from "@/data/knockoutData";

interface KnockoutMatchCardProps {
  match: KnockoutMatch;
  index?: number;
}

export function KnockoutMatchCard({ match, index = 0 }: KnockoutMatchCardProps) {
  const isWinner1 = match.winner === "team1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="relative flex overflow-hidden rounded-lg bg-white shadow-md"
    >
      {/* Left accent strip */}
      <div className="w-2 shrink-0 bg-pink-500" />

      <div className="flex-1 p-4">
        {/* Match header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-neutral-800">{match.court}</p>
            <p className="text-xs font-medium text-neutral-600">{match.group}</p>
          </div>
          <p className="text-xs font-medium text-neutral-600">GROUP STAGE</p>
        </div>

        {/* Teams and scores */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${
                  isWinner1 ? "font-bold" : "font-medium text-neutral-600"
                }`}
              >
                {match.team1}
              </span>
              {isWinner1 && (
                <Check className="h-5 w-5 text-green-600" strokeWidth={2.5} />
              )}
            </div>
            <span
              className={`text-lg font-bold ${
                isWinner1 ? "text-neutral-900" : "text-neutral-500"
              }`}
            >
              {match.score1}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${
                  !isWinner1 ? "font-bold" : "font-medium text-neutral-600"
                }`}
              >
                {match.team2}
              </span>
              {!isWinner1 && (
                <Check className="h-5 w-5 text-green-600" strokeWidth={2.5} />
              )}
            </div>
            <span
              className={`text-lg font-bold ${
                !isWinner1 ? "text-neutral-900" : "text-neutral-500"
              }`}
            >
              {match.score2}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4 text-xs text-neutral-600">
          <span>{match.time}</span>
          <span className="font-medium">FORMAT: {match.format}</span>
        </div>
      </div>
    </motion.div>
  );
}
