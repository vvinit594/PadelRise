export interface KnockoutMatch {
  id: string;
  stage: "round16" | "quarterFinals" | "semiFinals" | "finals";
  court: string;
  group: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  winner: "team1" | "team2";
  time: string;
  format: string;
}

export const knockoutStages = [
  { id: "round16", title: "Round of 16" },
  { id: "quarterFinals", title: "Quarter Finals" },
  { id: "semiFinals", title: "Semi Finals" },
  { id: "finals", title: "Finals" },
] as const;

export const knockoutData: KnockoutMatch[] = [
  // Round of 16
  {
    id: "r16-1",
    stage: "round16",
    court: "COURT 1",
    group: "GROUP A",
    team1: "Shaun / Rajesh",
    team2: "Rohan / Siddharth",
    score1: 8,
    score2: 3,
    winner: "team1",
    time: "09:00 AM - 09:40 AM",
    format: "RACE TO 8",
  },
  {
    id: "r16-2",
    stage: "round16",
    court: "COURT 2",
    group: "GROUP B",
    team1: "Aarav / Kunal",
    team2: "Arjun / Kabir",
    score1: 6,
    score2: 4,
    winner: "team1",
    time: "09:00 AM - 09:40 AM",
    format: "RACE TO 8",
  },
  {
    id: "r16-3",
    stage: "round16",
    court: "COURT 1",
    group: "GROUP C",
    team1: "Shaun / Rajesh",
    team2: "Arjun / Kabir",
    score1: 8,
    score2: 5,
    winner: "team1",
    time: "09:50 AM - 10:30 AM",
    format: "RACE TO 8",
  },
  {
    id: "r16-4",
    stage: "round16",
    court: "COURT 2",
    group: "GROUP D",
    team1: "Rohan / Siddharth",
    team2: "Aarav / Kunal",
    score1: 7,
    score2: 6,
    winner: "team1",
    time: "09:50 AM - 10:30 AM",
    format: "RACE TO 8",
  },
  // Quarter Finals
  {
    id: "qf-1",
    stage: "quarterFinals",
    court: "COURT 1",
    group: "GROUP A",
    team1: "Shaun / Rajesh",
    team2: "Arjun / Kabir",
    score1: 8,
    score2: 4,
    winner: "team1",
    time: "11:00 AM - 11:40 AM",
    format: "RACE TO 8",
  },
  {
    id: "qf-2",
    stage: "quarterFinals",
    court: "COURT 2",
    group: "GROUP B",
    team1: "Rohan / Siddharth",
    team2: "Aarav / Kunal",
    score1: 6,
    score2: 8,
    winner: "team2",
    time: "11:00 AM - 11:40 AM",
    format: "RACE TO 8",
  },
  // Semi Finals
  {
    id: "sf-1",
    stage: "semiFinals",
    court: "COURT 1",
    group: "GROUP A",
    team1: "Shaun / Rajesh",
    team2: "Aarav / Kunal",
    score1: 8,
    score2: 5,
    winner: "team1",
    time: "01:00 PM - 01:40 PM",
    format: "RACE TO 8",
  },
  // Finals
  {
    id: "f-1",
    stage: "finals",
    court: "COURT 1",
    group: "GROUP A",
    team1: "Shaun / Rajesh",
    team2: "Rohan / Siddharth",
    score1: 8,
    score2: 6,
    winner: "team1",
    time: "03:00 PM - 03:40 PM",
    format: "RACE TO 8",
  },
];
