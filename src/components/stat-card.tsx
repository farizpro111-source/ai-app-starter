import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  note,
  inverse = false,
}: {
  label: string;
  value: string;
  delta: number;
  note: string;
  inverse?: boolean;
}) {
  const positive = inverse ? delta < 0 : delta >= 0;

  return (
    <div className="panel rounded-[22px] p-5">
      <div className="text-xs font-medium text-black/42">{label}</div>
      <div className="metric mt-4 text-[30px] font-semibold">{value}</div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className={cn("flex items-center gap-1 text-xs font-medium", positive ? "text-[#47745f]" : "text-[#a65c50]")}>
          {delta >= 0 ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}
          {Math.abs(delta)}%
        </div>
        <div className="truncate text-[11px] text-black/35">{note}</div>
      </div>
    </div>
  );
}
