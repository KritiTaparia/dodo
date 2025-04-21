import { Checkbox } from "@/components/ui/checkbox";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ITask } from "@/lib/types";
import TaskCard from "@/components/ui/task-card";

interface ITaskParams {
  task: ITask;
}
export default function Task({ task }: ITaskParams) {
  return (
    <TaskCard>
      <CardTitle>
        <Checkbox id={task.title} checked={task.done} className="mr-2" />
        <label htmlFor={task.title}>{task.title}</label>
      </CardTitle>
      <CardDescription>{task.description}</CardDescription>
    </TaskCard>
  );
}
