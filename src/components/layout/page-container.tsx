import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function PageContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
        "p-6 md:p-8 flex flex-col items-center",
        className
      )}
      {...props}
    />
  );
}