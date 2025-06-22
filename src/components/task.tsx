import { Checkbox } from "@/components/ui/checkbox";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ITask } from "@/lib/types";
import TaskCard from "@/components/ui/task-card";
import { formatDate } from "@/lib/utils";

interface ITaskParams {
  task: ITask;
  listId: string;
}
export default function Task({ task }: ITaskParams) {
  return (
    <TaskCard>
      <CardTitle className="flex justify-between items-center">
        <div className="flex items-center">
          <Checkbox
            id={task.title}
            checked={task.done}
            className="mr-2 dark:data-[state=checked]:text-purple-200 dark:data-[state=checked]:bg-purple-400 "
          />
          <p className="text-sm text-foreground/80 font-normal">{task.title}</p>
        </div>
        <span className="text-xs font-light text-muted-foreground/45">
          {formatDate(task.dueDate)}
        </span>
      </CardTitle>
      {task.description && (
        <CardDescription className="text-xs mt-2 font-light">
          {task.description}
        </CardDescription>
      )}
    </TaskCard>
  );
}
