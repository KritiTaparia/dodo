import { create } from "zustand";
import { DEFAULT_STATE } from "./constants";
import { IBoard, IList, IStore, ITask } from "./types";
// import { produce } from "immer";

export const useStore = create<IStore>((set, get) => ({
  boards: DEFAULT_STATE,
  selectedBoard: DEFAULT_STATE[0].title,

  addTask: (listTitle: string, task: ITask) => {
    set((state) => {
      const boardIndex = state.boards.findIndex(
        (board) => board.title === state.selectedBoard
      );

      if (boardIndex === -1) {
        console.error(
          "No board found with the selected title:",
          state.selectedBoard
        );
        return {};
      }

      const board = state.boards[boardIndex];

      const listIndex = board.lists.findIndex(
        (list) => list.title === listTitle
      );

      if (listIndex === -1) {
        console.error("No list found with the title:", listTitle);
        return {};
      }

      const updatedList = {
        ...board.lists[listIndex],
        tasks: [...board.lists[listIndex].tasks, task],
      };

      const updatedLists = [...board.lists];
      updatedLists[listIndex] = updatedList;

      const updatedBoard = {
        ...board,
        lists: updatedLists,
      };

      const updatedBoards = [...state.boards];
      updatedBoards[boardIndex] = updatedBoard;

      return { boards: updatedBoards };
    });
  },
}));

export const useBoard = (boardTitle: string) => {
  return useStore((state) =>
    state.boards.find((board: IBoard) => board.title === boardTitle)
  );
};

export const useSelectedBoard = () => {
  useStore((state) =>
    state.boards.find((board) => board.title === state.selectedBoard)
  );
};

export const useList = (listTitle: string) => {
  return useStore((state) => {
    return state.boards
      .find((board) => board.title === state.selectedBoard)
      ?.lists.find((list: IList) => list.title === listTitle);
  });
};
