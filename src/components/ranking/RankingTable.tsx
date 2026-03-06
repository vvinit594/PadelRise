"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { rankingData } from "@/data/rankingData";

export function RankingTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-16 flex w-[90%] max-w-[500px] justify-center sm:w-full"
    >
      <div className="w-full overflow-hidden rounded-xl bg-gray-200 shadow-md">
        {/* Table header - bright pink bar */}
        <div
          className="flex items-center justify-between px-6 py-3 text-white"
          style={{ backgroundColor: "#ff0066" }}
        >
          <span className="font-bold uppercase">Ranking</span>
          <span className="font-bold uppercase">Teams</span>
        </div>

        {/* Table body */}
        <div className="divide-y divide-gray-300">
          {rankingData.map((entry) => (
            <div
              key={entry.rank}
              className="flex items-center justify-between py-3 px-6"
            >
              <span className="font-medium text-neutral-800">{entry.rank}</span>
              <div className="flex items-center gap-2">
                {entry.team && (
                  <>
                    <span className="font-medium text-neutral-800">
                      {entry.team}
                    </span>
                    {entry.qualified && (
                      <Check
                        className="h-[18px] w-[18px] shrink-0 text-green-500"
                        strokeWidth={2.5}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
