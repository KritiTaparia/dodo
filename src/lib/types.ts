export interface ITask {
    done: boolean,
    title: string,
    description: string,
    dueDate: Date,
}

export interface IList {
    title: string,
    tasks: ITask[]
}

export interface IBoard {
    title: string,
    lists: IList[],
}

export interface IStore {
    selectedBoard: string,
    boards: IBoard[],

    getBoard: (name: string) => IBoard,
}
