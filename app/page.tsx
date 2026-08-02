import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { FocusAreas } from "@/components/focus-areas";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectDeck } from "@/components/project-deck";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <About />
        <FocusAreas />
        <ProjectDeck />
        <Research />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
