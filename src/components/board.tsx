import List from "@/components/list";
import { useStore } from "@/lib/store";

interface IBoardParams {
  title: string;
}
export default function Board({ title }: IBoardParams) {
  const getSelectedBoard = useStore((store) => store.getBoard);
  const board = getSelectedBoard(title);

  return (
    <div className="mb-2 border-2 border-gray-200 rounded-xl p-4">
      <h1 className="bg-amber-600 rounded-md py-1 text-amber-50">{board.title}</h1>
      <ul>
        {board.lists.map((list) => (
          <List list={list} />
        ))}
      </ul>
    </div>
  );
}
