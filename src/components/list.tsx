import { PlusIcon } from "lucide-react";

import Task from "@/components/task";
import { IList } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TaskCard from "@/components/ui/task-card";
import { ScrollArea } from "./ui/scroll-area";

interface IListParams {
  list: IList;
}
export default function List({ list }: IListParams) {
  return (
    <Card className="border-0 w-88 h-full bg-zinc-950/60">
      <CardHeader>
        <CardTitle>{list.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <TaskCard className="border-0 bg-zinc-950/60 hover:bg-zinc-900">
          <div className="flex flex-start gap-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 text-transparent bg-clip-text">
              <PlusIcon className="text-purple-400" />
            </span>
            <p>Add a new task...</p>
          </div>
        </TaskCard>
        <ScrollArea className="flex flex-col max-h-[60vh] sm:max-h-48 md:max-h-[50vh] lg:max-h-[60vh]">
          {list.tasks.map((task) => (
            <Task key={task.title + " " + task.description} task={task} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
