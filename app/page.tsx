import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import ResearchList from "@/components/ResearchList";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ResearchList />
        <ProjectList />
        <Experience />
        <Background />
      </main>
      <Contact />
    </>
  );
}
