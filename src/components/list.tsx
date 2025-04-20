import Task from "@/components/task";
import { IList } from "@/lib/types";

interface IListParams {
  list: IList;
}
export default function List({ list }: IListParams) {
  return (
    <div className="mb-8">
      <h1>{list.title}</h1>
      <ul>
        {list.tasks.map((task) => (
          <Task task={task} />
        ))}
      </ul>
    </div>
  );
}
