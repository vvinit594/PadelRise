"use client";

import { PointsTableGroup } from "./PointsTableGroup";
import { pointsData } from "@/data/pointsData";

export function PointsTableCard() {
  return (
    <div className="flex flex-col gap-12 px-4 pb-12">
      {pointsData.map((group, index) => (
        <PointsTableGroup key={group.groupName} group={group} index={index} />
      ))}
    </div>
  );
}
