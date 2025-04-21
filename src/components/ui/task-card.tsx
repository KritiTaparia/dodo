import { Card, CardHeader } from "@/components/ui/card";

interface ITaskCardParams {
  className?: string;
  children: React.ReactNode;
}
export default function TaskCard({ className, children }: ITaskCardParams) {
  return (
    <Card
      className={
        "w-full mb-3 py-3 px-0 bg-slate-800 hover:bg-slate-900 " + className
      }
    >
      <CardHeader>{children}</CardHeader>
    </Card>
  );
}
