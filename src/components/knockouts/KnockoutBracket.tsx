"use client";

import { motion } from "framer-motion";
import { KnockoutMatchCard } from "./KnockoutMatchCard";
import {
  knockoutData,
  knockoutStages,
  type KnockoutMatch,
} from "@/data/knockoutData";

function getMatchesByStage(stage: string): KnockoutMatch[] {
  return knockoutData.filter((m) => m.stage === stage);
}

export function KnockoutBracket() {
  return (
    <div className="mt-16 overflow-x-auto px-4 pb-12">
      <div className="flex min-w-max justify-center gap-12 py-4 lg:gap-16">
        {knockoutStages.map((stage, stageIndex) => {
          const matches = getMatchesByStage(stage.id);
          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: stageIndex * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Stage header - pink gradient card with white lines */}
              <div className="mb-4 flex flex-col items-center">
                <div className="flex h-16 w-32 flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600">
                  <div className="h-0.5 w-12 bg-white/80" />
                  <div className="h-0.5 w-12 bg-white/80" />
                </div>
                <p className="mt-3 text-center text-base font-bold uppercase tracking-wide text-white">
                  {stage.title}
                </p>
              </div>

              {/* Match cards stack */}
              <div className="flex w-72 flex-col gap-6">
                {matches.length > 0 ? (
                  matches.map((match, i) => (
                    <KnockoutMatchCard
                      key={match.id}
                      match={match}
                      index={i}
                    />
                  ))
                ) : (
                  <div className="min-h-[120px] w-full rounded-lg border-2 border-dashed border-white/20" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
