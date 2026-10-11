import { site } from "@/data/site";
import { label } from "@/lib/ui";

export default function Hero() {
  return (
    <section className="border-t border-[#111111]">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-[3fr_7fr] md:gap-10 md:py-28">
        <p className={label}>{site.title}</p>
        <div>
          <h1 className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[48px]">
            {site.name}
          </h1>
          <p className="mt-4 text-[#666666]">{site.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
