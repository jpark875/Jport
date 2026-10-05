import Link from "next/link";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { label, link } from "@/lib/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="border-t border-[#111111]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-[3fr_7fr] md:gap-10">
          <p className={label}>404</p>
          <div>
            <h1 className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[48px]">
              Nothing at this address.
            </h1>
            <Link href="/" className={`mt-8 inline-block ${link}`}>
              &larr; Back home
            </Link>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
