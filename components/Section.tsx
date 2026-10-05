import { label } from "@/lib/ui";

// 30/70 split: section label on the left, content on the right; stacked on small screens.
export default function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-[#111111]">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-[3fr_7fr] md:gap-10 md:py-20">
        <div>
          <h2 id={`${id}-title`} className={label}>
            {title}
          </h2>
          {aside ? <div className="mt-3 text-[14px] leading-[1.6] text-[#666666]">{aside}</div> : null}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
