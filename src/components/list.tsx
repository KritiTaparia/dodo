import { PlusIcon } from "lucide-react";

import Task from "@/components/task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TaskCard from "@/components/ui/task-card";
import { useStore, useList } from "../lib/store";
import { DEFAULT_TASK } from "@/lib/constants";

interface IListParams {
  title: string;
}
export default function List({ title }: IListParams) {
  const list = useList(title);
  const addTask = useStore((store) => store.addTask);
  return (
    <div>
      <Card className="snap-center border-0 w-88 bg-[#0f0f13]">
        <CardHeader>
          <CardTitle className="text-foreground/90">{list?.title}</CardTitle>
        </CardHeader>
        <CardContent className="px-3">
          <TaskCard className="border-0 bg-transparent hover:bg-zinc-900">
            <div className="flex flex-start gap-2 items-center">
              <PlusIcon className="text-purple-400 size-4" />
              <button
                className="text-foreground/40 text-sm font-normal"
                onClick={() => {
                  list ? addTask(list.title, DEFAULT_TASK) : "";
                }}
              >
                Add a new task
              </button>
            </div>
          </TaskCard>
          <div className="max-h-[50vh] md:max-h-[65vh] overflow-y-auto flex flex-col">
            {list?.tasks.map((task) => (
              <Task
                key={task.title + " " + task.description}
                task={task}
                listId={list.title}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
