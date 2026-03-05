"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Match } from "@/data/scheduleData";

interface MatchCardProps {
  match: Match;
  index?: number;
}

export function MatchCard({ match, index = 0 }: MatchCardProps) {
  const [team1, team2] = match.teams;
  const [score1, score2] = match.scores;
  const isWinner1 = match.winner === team1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-xl bg-neutral-100/95 text-neutral-800 shadow-lg"
    >
      {/* Left accent bar - pink/magenta */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-pink-500" />

      <div className="pl-5 pr-6 py-5">
        {/* Match header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-neutral-800">{match.court}</p>
            <p className="text-xs font-medium text-neutral-600">{match.group}</p>
          </div>
          <p className="text-xs font-medium text-neutral-600">{match.stage}</p>
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
                {team1}
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
              {score1}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${
                  !isWinner1 ? "font-bold" : "font-medium text-neutral-600"
                }`}
              >
                {team2}
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
              {score2}
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
