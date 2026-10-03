export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#1E293B]">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-12 text-sm md:grid-cols-[3fr_2fr]">
        <p className="text-[#94A3B8]">
          Find the code on{" "}
          <a
            href="https://github.com/jpark875"
            className="text-[#38BDF8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
          >
            GitHub
          </a>
          .
        </p>
        <p className="text-[#94A3B8] md:text-right">&copy; {new Date().getFullYear()} Jason Park</p>
      </div>
    </footer>
  );
}
