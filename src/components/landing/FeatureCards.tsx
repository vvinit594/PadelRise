"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Calendar, Table, Trophy, GitBranch } from "lucide-react";

const features = [
  { href: "/groups", label: "Groups", icon: Users },
  { href: "/schedule", label: "Schedule", icon: Calendar },
  { href: "/points-table", label: "Points Table", icon: Table },
  { href: "/ranking", label: "Ranking", icon: Trophy },
  { href: "/knockouts", label: "Knockouts", icon: GitBranch },
];

export function FeatureCards() {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            >
              <Link href={feature.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer rounded-xl bg-gray-200 p-6 text-center shadow-md"
                >
                  <feature.icon
                    className="mx-auto mb-4 text-neutral-700"
                    size={32}
                  />
                  <p className="font-semibold text-neutral-800">{feature.label}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
