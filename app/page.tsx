import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Research />
      </main>
      <Footer />
    </>
  );
}
