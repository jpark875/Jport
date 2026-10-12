import { meta } from "@/lib/ui";

export default function Stats({ items, label }: { items: { value: string; label: string }[]; label: string }) {
  return (
    <dl aria-label={label} className="grid grid-cols-1 border-t border-neutral-200 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="border-b border-neutral-200 py-3 sm:border-b-0 sm:py-4 sm:pr-6">
          <dd className="text-[22px] font-medium sm:text-[26px] leading-[1.1] tracking-[-0.02em] tabular-nums">{item.value}</dd>
          <dt className={`mt-2 ${meta}`}>{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}
