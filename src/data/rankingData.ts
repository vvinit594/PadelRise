export interface RankingEntry {
  rank: number;
  team: string;
  qualified: boolean;
}

export const rankingData: RankingEntry[] = [
  { rank: 1, team: "Shaun/Rajesh", qualified: true },
  { rank: 2, team: "Shaun/Rajesh", qualified: true },
  { rank: 3, team: "Shaun/Rajesh", qualified: false },
  { rank: 4, team: "Shaun/Rajesh", qualified: false },
  { rank: 5, team: "", qualified: false },
  { rank: 6, team: "", qualified: false },
  { rank: 7, team: "", qualified: false },
  { rank: 8, team: "", qualified: false },
];
