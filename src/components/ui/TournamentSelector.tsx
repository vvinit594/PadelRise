"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tournaments = [
  { value: "open-beginners", label: "OPEN BEGINNERS" },
  { value: "open-intermediate", label: "OPEN INTERMEDIATE" },
  { value: "open-advanced", label: "OPEN ADVANCED" },
];

export function TournamentSelector() {
  return (
    <Select defaultValue="open-beginners">
      <SelectTrigger className="w-[220px] bg-white/95 text-neutral-800 border-0 shadow-md hover:bg-white">
        <SelectValue placeholder="Select tournament" />
      </SelectTrigger>
      <SelectContent>
        {tournaments.map((t) => (
          <SelectItem key={t.value} value={t.value}>
            {t.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
