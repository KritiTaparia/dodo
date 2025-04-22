import { Card, CardHeader } from "@/components/ui/card";

interface ITaskCardParams {
  className?: string;
  children: React.ReactNode;
}
export default function TaskCard({ className, children }: ITaskCardParams) {
  return (
    <Card
      className={
        "w-full mb-3 border-0 bg-zinc-900 hover:bg-transparent rounded-lg px-4 py-3 " +
        className
      }
    >
      <CardHeader className="p-0 gap-0">{children}</CardHeader>
    </Card>
  );
}
