import { PlusIcon } from "lucide-react";

import Task from "@/components/task";
import { IList } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TaskCard from "@/components/ui/task-card";
import { ScrollArea } from "./ui/scroll-area";

interface IListParams {
  list: IList;
}
export default function List({ list }: IListParams) {
  return (
    <Card className="w-88 h-full">
      <CardHeader>
        <CardTitle>{list.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="flex flex-col max-h-[70vh]">
          {list.tasks.map((task) => (
            <Task key={task.title + " " + task.description} task={task} />
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <TaskCard className="border-0 bg-state-900 hover:bg-slate-800">
          <div className="flex flex-start gap-2">
            <PlusIcon />
            <p>Add a new task...</p>
          </div>
        </TaskCard>
      </CardFooter>
    </Card>
  );
}
