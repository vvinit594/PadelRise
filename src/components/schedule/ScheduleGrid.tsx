"use client";

import { motion } from "framer-motion";
import { MatchCard } from "./MatchCard";
import { scheduleData } from "@/data/scheduleData";

export function ScheduleGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-6 px-4 pb-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      {scheduleData.map((match, index) => (
        <MatchCard key={match.id} match={match} index={index} />
      ))}
    </motion.div>
  );
}
