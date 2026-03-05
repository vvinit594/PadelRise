"use client";

import { motion } from "framer-motion";
import { GroupCard } from "./GroupCard";
import { groupsData } from "@/data/groupsData";

export function GroupsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-8 px-4 pb-12 sm:grid-cols-2 lg:grid-cols-4"
    >
      {groupsData.map((group, index) => (
        <GroupCard key={group.id} group={group} index={index} />
      ))}
    </motion.div>
  );
}
