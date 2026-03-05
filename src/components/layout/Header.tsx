"use client";

import Image from "next/image";
import { TournamentSelector } from "@/components/ui/TournamentSelector";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-6 py-8">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/header_logo.svg"
          alt="Padel Rise 8.0"
          width={400}
          height={140}
          priority
          className="h-auto w-auto max-w-[400px] object-contain sm:max-w-[450px]"
        />
      </div>

      {/* Tournament Selector */}
      <TournamentSelector />
    </header>
  );
}
