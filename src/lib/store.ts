import { create } from 'zustand';
import { DEFAULT_STATE } from './constants';
import { IStore } from './types';

export const useStore = create<IStore>((_set, get) => ({
    boards: DEFAULT_STATE,
    selectedBoard: DEFAULT_STATE[0].title,

    getBoard: (title) => {
        const boards = get().boards;

        for (const board of boards) {
            if (board.title === title) return board;
        }
        throw new Error(`No board found with the given: ${title}`)
    }
}))
