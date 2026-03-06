"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const tournaments = [
  { value: "open-beginners", label: "OPEN BEGINNERS" },
  { value: "open-intermediate", label: "OPEN INTERMEDIATE" },
  { value: "open-advanced", label: "OPEN ADVANCED" },
];

interface TournamentSelectorProps {
  triggerClassName?: string;
}

export function TournamentSelector({ triggerClassName }: TournamentSelectorProps = {}) {
  return (
    <Select defaultValue="open-beginners">
      <SelectTrigger className={cn("w-[220px] bg-white/95 text-neutral-800 border-0 shadow-md hover:bg-white", triggerClassName)}>
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
