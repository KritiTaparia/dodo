import { Checkbox } from "@/components/ui/checkbox";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ITask } from "@/lib/types";
import TaskCard from "@/components/ui/task-card";
import { formatDate } from "@/lib/utils";

interface ITaskParams {
  task: ITask;
}
export default function Task({ task }: ITaskParams) {
  return (
    <TaskCard>
      <CardTitle className="flex justify-between">
        <div className="flex items-center">
          <Checkbox
            id={task.title}
            checked={task.done}
            className="mr-2 dark:data-[state=checked]:text-purple-200 dark:data-[state=checked]:bg-purple-400"
          />
          <p className="text-sm text-foreground/80">{task.title}</p>
        </div>
        <span className="text-xs font-thin text-muted-foreground">
          {formatDate(task.dueDate)}
        </span>
      </CardTitle>
      {task.description && (
        <CardDescription className="text-xs mt-1">
          {task.description}
        </CardDescription>
      )}
    </TaskCard>
  );
}
