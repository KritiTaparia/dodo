import List from "@/components/list";
import { useStore } from "@/lib/store";

interface IBoardParams {
  title: string;
}
export default function Board({ title }: IBoardParams) {
  const getSelectedBoard = useStore((store) => store.getBoard);
  const board = getSelectedBoard(title);

  return (
    <div className="py-4 pt-[4.5rem] px-8 w-fit min-w-full">
      <h1 className="mb-6">{board.title}</h1>
      <div className="snap-x snap-mandatory md:snap-none lg:snap-none flex justify-start align-top gap-4">
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
        {board.lists.map((list) => (
          <List key={list.title} list={list} />
        ))}
      </div>
    </div>
  );
}
