import { Consistency, Frequency } from "@/constants";

export interface Habit {
  id: string;
  title: string;
  goal: number;
  unit: string;
  frequency?: Frequency;
  consistency: Consistency;
  createdAt: Date;
}

export const mockHabits: Habit[] = [
  {
    id: "habit-1",
    title: "Drink Water",
    goal: 8,
    unit: "1 glass",
    frequency: Frequency.DAILY,
    consistency: Consistency.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "habit-2",
    title: "Play Guitar",
    goal: 5,
    unit: "5 minutes",
    frequency: Frequency.DAILY,
    consistency: Consistency.HIGH,
    createdAt: new Date(),
  },
  {
    id: "habit-3",
    title: "Run 3 Miles",
    goal: 3,
    unit: "1 run",
    frequency: Frequency.WEEKLY,
    consistency: Consistency.HIGH,
    createdAt: new Date(),
  },
  {
    id: "habit-4",
    title: "Read",
    goal: 10,
    unit: "10 minutes",
    frequency: Frequency.DAILY,
    consistency: Consistency.LOW,
    createdAt: new Date(),
  },
  {
    id: "habit-5",
    title: "20 Pushups",
    goal: 5,
    unit: "10x",
    frequency: Frequency.DAILY,
    consistency: Consistency.UNDEFINED,
    createdAt: new Date(),
  },
];
