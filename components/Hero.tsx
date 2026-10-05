import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="border-t border-[#111111]">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-[3fr_7fr] md:gap-10 md:py-28">
        <div aria-hidden />
        <div>
          <h1 className="max-w-3xl text-[32px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[48px]">
            {site.statement}
          </h1>
          <p className="mt-6 max-w-2xl text-[#666666]">{site.description}</p>
        </div>
      </div>
    </section>
  );
}
