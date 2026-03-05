"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import type { PointsGroup } from "@/data/pointsData";

interface PointsTableGroupProps {
  group: PointsGroup;
  index?: number;
}

export function PointsTableGroup({ group, index = 0 }: PointsTableGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full max-w-4xl mx-auto"
    >
      <h2 className="mb-4 text-center text-xl font-bold text-white">
        {group.groupName}
      </h2>
      <Card className="overflow-hidden bg-neutral-100/95 text-neutral-800 shadow-lg border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-0 bg-pink-500 hover:bg-pink-500">
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Teams
                </TableHead>
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Matches Played
                </TableHead>
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Matches Won
                </TableHead>
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Matches Lost
                </TableHead>
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Games Won
                </TableHead>
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Games Lost
                </TableHead>
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Game Difference
                </TableHead>
                <TableHead className="h-12 px-4 text-xs font-bold uppercase text-white">
                  Points
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.teams.map((team, i) => (
                <TableRow
                  key={team.team}
                  className="border-neutral-200 hover:bg-neutral-200/50"
                >
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {team.isTopTeam && (
                        <Check
                          className="h-4 w-4 shrink-0 text-green-600"
                          strokeWidth={2.5}
                        />
                      )}
                      <span
                        className={
                          team.isTopTeam ? "font-bold" : "font-normal"
                        }
                      >
                        {team.team}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {team.isTopTeam && (
                        <Check
                          className="h-4 w-4 shrink-0 text-green-600"
                          strokeWidth={2.5}
                        />
                      )}
                      <span
                        className={
                          team.isTopTeam ? "font-bold" : "font-normal"
                        }
                      >
                        {team.matchesPlayed}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell
                    className={`px-4 py-3 ${
                      team.isTopTeam ? "font-bold" : "font-normal"
                    }`}
                  >
                    {team.matchesWon}
                  </TableCell>
                  <TableCell
                    className={`px-4 py-3 ${
                      team.isTopTeam ? "font-bold" : "font-normal"
                    }`}
                  >
                    {team.matchesLost}
                  </TableCell>
                  <TableCell
                    className={`px-4 py-3 ${
                      team.isTopTeam ? "font-bold" : "font-normal"
                    }`}
                  >
                    {team.gamesWon}
                  </TableCell>
                  <TableCell
                    className={`px-4 py-3 ${
                      team.isTopTeam ? "font-bold" : "font-normal"
                    }`}
                  >
                    {team.gamesLost}
                  </TableCell>
                  <TableCell
                    className={`px-4 py-3 ${
                      team.isTopTeam ? "font-bold" : "font-normal"
                    }`}
                  >
                    {team.gameDifference >= 0
                      ? `+${team.gameDifference}`
                      : team.gameDifference}
                  </TableCell>
                  <TableCell
                    className={`px-4 py-3 ${
                      team.isTopTeam ? "font-bold" : "font-normal"
                    }`}
                  >
                    +{team.points}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}
