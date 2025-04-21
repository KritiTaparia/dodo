import { IBoard } from "./types";

export const DEFAULT_STATE: IBoard[] = [
  {
    title: "Board 1",
    lists: [
      {
        title: "List 1",
        tasks: [
          {
            done: true,
            title: "Today",
            description: "List of tasks for today",
            dueDate: new Date(),
          },
          {
            done: true,
            title: "Tomorrow",
            description: "List of tasks for tomorrow",
            dueDate: new Date(),
          },
        ],
      },
      {
        title: "List 2",
        tasks: [
          {
            done: true,
            title: "Play",
            description: "",
            dueDate: new Date(),
          },
        ],
      },
    ],
  },
];
