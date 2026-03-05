export interface Group {
  id: string;
  name: string;
  teams: string[];
  startTime?: string;
  court?: string;
}

export const groupsData: Group[] = [
  {
    id: "A",
    name: "GROUP A",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "1:30 PM",
    court: "COURT 1",
  },
  {
    id: "B",
    name: "GROUP B",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "2:30 PM",
    court: "COURT 2 & 3",
  },
  {
    id: "C",
    name: "GROUP C",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "1:30 PM",
    court: "COURT 1",
  },
  {
    id: "D",
    name: "GROUP D",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "2:30 PM",
    court: "COURT 2 & 3",
  },
  {
    id: "E",
    name: "GROUP E",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "1:30 PM",
    court: "COURT 1",
  },
  {
    id: "F",
    name: "GROUP F",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "2:30 PM",
    court: "COURT 2 & 3",
  },
  {
    id: "G",
    name: "GROUP G",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "1:30 PM",
    court: "COURT 1",
  },
  {
    id: "H",
    name: "GROUP H",
    teams: ["Shaun / Rajesh", "Aarav / Kunal", "Rohan / Siddharth", "Arjun / Kabir"],
    startTime: "2:30 PM",
    court: "COURT 2 & 3",
  },
];
