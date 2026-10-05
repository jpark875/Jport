import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#38BDF8]">404</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-[#E2E8F0]">
            Nothing at this address.
          </h1>
          <Link
            href="/"
            className="mt-8 inline-block text-sm text-[#38BDF8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
          >
            &larr; Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
