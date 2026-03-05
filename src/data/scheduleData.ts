export interface Match {
  id: string;
  court: string;
  group: string;
  stage: string;
  teams: string[];
  scores: number[];
  winner: string;
  time: string;
  format: string;
}

export const scheduleData: Match[] = [
  {
    id: "1",
    court: "COURT 1",
    group: "GROUP A",
    stage: "GROUP STAGE",
    teams: ["Shaun / Rajesh", "Rohan / Siddharth"],
    scores: [8, 3],
    winner: "Shaun / Rajesh",
    time: "09:00 AM - 09:40 AM",
    format: "RACE TO 8",
  },
  {
    id: "2",
    court: "COURT 2",
    group: "GROUP A",
    stage: "GROUP STAGE",
    teams: ["Aarav / Kunal", "Arjun / Kabir"],
    scores: [6, 4],
    winner: "Aarav / Kunal",
    time: "09:00 AM - 09:40 AM",
    format: "RACE TO 8",
  },
  {
    id: "3",
    court: "COURT 1",
    group: "GROUP B",
    stage: "GROUP STAGE",
    teams: ["Shaun / Rajesh", "Arjun / Kabir"],
    scores: [8, 5],
    winner: "Shaun / Rajesh",
    time: "09:50 AM - 10:30 AM",
    format: "RACE TO 8",
  },
  {
    id: "4",
    court: "COURT 2",
    group: "GROUP B",
    stage: "GROUP STAGE",
    teams: ["Rohan / Siddharth", "Aarav / Kunal"],
    scores: [7, 6],
    winner: "Rohan / Siddharth",
    time: "09:50 AM - 10:30 AM",
    format: "RACE TO 8",
  },
  {
    id: "5",
    court: "COURT 1",
    group: "GROUP C",
    stage: "GROUP STAGE",
    teams: ["Shaun / Rajesh", "Aarav / Kunal"],
    scores: [8, 2],
    winner: "Shaun / Rajesh",
    time: "10:40 AM - 11:20 AM",
    format: "RACE TO 8",
  },
  {
    id: "6",
    court: "COURT 2",
    group: "GROUP C",
    stage: "GROUP STAGE",
    teams: ["Rohan / Siddharth", "Arjun / Kabir"],
    scores: [5, 8],
    winner: "Arjun / Kabir",
    time: "10:40 AM - 11:20 AM",
    format: "RACE TO 8",
  },
  {
    id: "7",
    court: "COURT 1",
    group: "GROUP A",
    stage: "GROUP STAGE",
    teams: ["Shaun / Rajesh", "Aarav / Kunal"],
    scores: [8, 4],
    winner: "Shaun / Rajesh",
    time: "11:30 AM - 12:10 PM",
    format: "RACE TO 8",
  },
  {
    id: "8",
    court: "COURT 2",
    group: "GROUP A",
    stage: "GROUP STAGE",
    teams: ["Rohan / Siddharth", "Arjun / Kabir"],
    scores: [6, 8],
    winner: "Arjun / Kabir",
    time: "11:30 AM - 12:10 PM",
    format: "RACE TO 8",
  },
  {
    id: "9",
    court: "COURT 1",
    group: "GROUP B",
    stage: "GROUP STAGE",
    teams: ["Shaun / Rajesh", "Rohan / Siddharth"],
    scores: [8, 6],
    winner: "Shaun / Rajesh",
    time: "12:20 PM - 1:00 PM",
    format: "RACE TO 8",
  },
];
