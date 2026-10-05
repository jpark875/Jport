import type { ResearchStatus } from "@/lib/research";

export default function Status({ status }: { status: ResearchStatus }) {
  const done = status === "completed";
  return (
    <span className="flex items-center gap-2 text-[#94A3B8]">
      <span aria-hidden className={`h-1.5 w-1.5 ${done ? "bg-[#38BDF8]" : "border border-[#94A3B8]"}`} />
      {done ? "Completed" : "In progress"}
    </span>
  );
}
