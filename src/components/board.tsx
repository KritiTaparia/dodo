import List from "@/components/list";
import { useStore } from "@/lib/store";
import TaskCard from "./ui/task-card";
import { PlusIcon } from "lucide-react";

interface IBoardParams {
  title: string;
}
export default function Board({ title }: IBoardParams) {
  const getSelectedBoard = useStore((store) => store.getBoard);
  const board = getSelectedBoard(title);

  return (
    <div className="flex-1 flex flex-col">
      <h1 className="py-4 px-6">{board.title}</h1>
      <div className="h-full px-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory lg:snap-none flex justify-start align-top gap-4">
        {board.lists.map((list) => (
          <List key={list.title} list={list} />
        ))}
        {board.lists.map((list) => (
          <List key={list.title} list={list} />
        ))}
        {board.lists.map((list) => (
          <List key={list.title} list={list} />
        ))}
        {board.lists.map((list) => (
          <List key={list.title} list={list} />
        ))}
        <div>
          <TaskCard className="snap-center border-0 w-88 bg-zinc-900">
            <div className="flex flex-start gap-2 items-center">
              <PlusIcon className="text-purple-400 size-4" />
              <p className="text-foreground/40 text-sm font-normal">
                Add a new list
              </p>
            </div>
          </TaskCard>
        </div>
      </div>
    </div>
  );
}
