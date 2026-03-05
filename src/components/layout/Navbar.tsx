"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/groups", label: "GROUPS" },
  { href: "/schedule", label: "SCHEDULE" },
  { href: "/points-table", label: "POINTS TABLE" },
  { href: "/ranking", label: "RANKING" },
  { href: "/knockouts", label: "KNOCKOUTS" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center gap-2 py-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href}>
            <motion.div
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white text-neutral-800 shadow-md"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}
