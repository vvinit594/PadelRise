"use client";

import { motion } from "framer-motion";
import type { Group } from "@/data/groupsData";

interface GroupCardProps {
  group: Group;
  index?: number;
}

export function GroupCard({ group, index = 0 }: GroupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="w-full min-w-0"
    >
      <div className="overflow-hidden rounded-xl bg-[#E5E5E5] p-6 shadow-md">
        {/* 1. Header Section */}
        <div className="text-center">
          {group.startTime && (
            <p className="text-sm font-medium text-neutral-600">
              Starts {group.startTime}
            </p>
          )}
          <p className="text-lg font-bold tracking-wide text-neutral-800">
            {group.name}
          </p>
          <div className="mx-auto mt-3 h-px w-full bg-gray-300" aria-hidden />
        </div>

        {/* 2. Team Table Section — rows with horizontal separators */}
        <div className="mt-0">
          {group.teams.map((team, i) => (
            <div
              key={`${team}-${i}`}
              className={`flex items-center justify-center py-3 ${
                i < group.teams.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <span className="text-center text-sm font-medium text-neutral-700">
                {team}
              </span>
            </div>
          ))}
        </div>

        {/* 3. Footer Section — darker background, top border, extends to card edges */}
        {group.court && (
          <div className="-mx-6 -mb-6 mt-0 border-t border-gray-400 bg-gray-300 px-6 py-4">
            <p className="text-center text-sm font-semibold text-neutral-700">
              {group.court}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
