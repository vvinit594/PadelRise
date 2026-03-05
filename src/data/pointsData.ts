export interface TeamStanding {
  team: string;
  matchesPlayed: number;
  matchesWon: number;
  matchesLost: number;
  gamesWon: number;
  gamesLost: number;
  gameDifference: number;
  points: number;
  isTopTeam?: boolean;
}

export interface PointsGroup {
  groupName: string;
  teams: TeamStanding[];
}

export const pointsData: PointsGroup[] = [
  {
    groupName: "GROUP A",
    teams: [
      { team: "Shaun/Rajesh", matchesPlayed: 3, matchesWon: 3, matchesLost: 0, gamesWon: 24, gamesLost: 12, gameDifference: 12, points: 9, isTopTeam: true },
      { team: "Rohan/Siddharth", matchesPlayed: 3, matchesWon: 2, matchesLost: 1, gamesWon: 18, gamesLost: 17, gameDifference: 1, points: 6, isTopTeam: true },
      { team: "Aarav/Kunal", matchesPlayed: 3, matchesWon: 1, matchesLost: 2, gamesWon: 16, gamesLost: 19, gameDifference: -3, points: 3, isTopTeam: false },
      { team: "Arjun/Kabir", matchesPlayed: 3, matchesWon: 0, matchesLost: 3, gamesWon: 14, gamesLost: 24, gameDifference: -10, points: 0, isTopTeam: false },
    ],
  },
  {
    groupName: "GROUP B",
    teams: [
      { team: "Shaun/Rajesh", matchesPlayed: 3, matchesWon: 3, matchesLost: 0, gamesWon: 24, gamesLost: 14, gameDifference: 10, points: 9, isTopTeam: true },
      { team: "Aarav/Kunal", matchesPlayed: 3, matchesWon: 2, matchesLost: 1, gamesWon: 19, gamesLost: 18, gameDifference: 1, points: 6, isTopTeam: true },
      { team: "Rohan/Siddharth", matchesPlayed: 3, matchesWon: 1, matchesLost: 2, gamesWon: 17, gamesLost: 20, gameDifference: -3, points: 3, isTopTeam: false },
      { team: "Arjun/Kabir", matchesPlayed: 3, matchesWon: 0, matchesLost: 3, gamesWon: 15, gamesLost: 23, gameDifference: -8, points: 0, isTopTeam: false },
    ],
  },
  {
    groupName: "GROUP C",
    teams: [
      { team: "Shaun/Rajesh", matchesPlayed: 3, matchesWon: 3, matchesLost: 0, gamesWon: 24, gamesLost: 12, gameDifference: 12, points: 9, isTopTeam: true },
      { team: "Arjun/Kabir", matchesPlayed: 3, matchesWon: 2, matchesLost: 1, gamesWon: 20, gamesLost: 17, gameDifference: 3, points: 6, isTopTeam: true },
      { team: "Aarav/Kunal", matchesPlayed: 3, matchesWon: 1, matchesLost: 2, gamesWon: 16, gamesLost: 19, gameDifference: -3, points: 3, isTopTeam: false },
      { team: "Rohan/Siddharth", matchesPlayed: 3, matchesWon: 0, matchesLost: 3, gamesWon: 13, gamesLost: 25, gameDifference: -12, points: 0, isTopTeam: false },
    ],
  },
  {
    groupName: "GROUP D",
    teams: [
      { team: "Rohan/Siddharth", matchesPlayed: 3, matchesWon: 3, matchesLost: 0, gamesWon: 24, gamesLost: 15, gameDifference: 9, points: 9, isTopTeam: true },
      { team: "Arjun/Kabir", matchesPlayed: 3, matchesWon: 2, matchesLost: 1, gamesWon: 21, gamesLost: 18, gameDifference: 3, points: 6, isTopTeam: true },
      { team: "Shaun/Rajesh", matchesPlayed: 3, matchesWon: 1, matchesLost: 2, gamesWon: 17, gamesLost: 20, gameDifference: -3, points: 3, isTopTeam: false },
      { team: "Aarav/Kunal", matchesPlayed: 3, matchesWon: 0, matchesLost: 3, gamesWon: 14, gamesLost: 23, gameDifference: -9, points: 0, isTopTeam: false },
    ],
  },
];
