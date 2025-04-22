import { PlusIcon } from "lucide-react";

import Task from "@/components/task";
import { IList } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TaskCard from "@/components/ui/task-card";

interface IListParams {
  list: IList;
}
export default function List({ list }: IListParams) {
  return (
    <div className="">
      <Card className="shrink-0 flex-nowrap snap-center border-0 w-88 bg-[#0f0f13]">
        <CardHeader>
          <CardTitle className="text-foreground/90">{list.title}</CardTitle>
        </CardHeader>
        <CardContent className="px-3">
          <TaskCard className="border-0 bg-transparent hover:bg-zinc-900">
            <div className="flex flex-start gap-2 items-center">
              <PlusIcon className="text-purple-400 size-4" />
              <p className="text-foreground/40 text-sm font-normal">
                Add a new task
              </p>
            </div>
          </TaskCard>
          <div className="max-h-[62vh] md:max-h-[60vh] overflow-y-auto flex flex-col">
            {list.tasks.map((task) => (
              <Task key={task.title + " " + task.description} task={task} />
            ))}
            {list.tasks.map((task) => (
              <Task key={task.title + " " + task.description} task={task} />
            ))}
            {list.tasks.map((task) => (
              <Task key={task.title + " " + task.description} task={task} />
            ))}
            {list.tasks.map((task) => (
              <Task key={task.title + " " + task.description} task={task} />
            ))}
            {list.tasks.map((task) => (
              <Task key={task.title + " " + task.description} task={task} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
