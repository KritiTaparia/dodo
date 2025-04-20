import { ITask } from "@/lib/types";

interface ITaskParams {
    task: ITask
}
export default function Task({ task }: ITaskParams) {
    return (
        <li>{task.title}</li>
    );
}