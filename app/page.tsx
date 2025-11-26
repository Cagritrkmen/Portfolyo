
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Skills } from "@/components/organisms/Skills";
import { Timeline } from "@/components/organisms/Timeline";
import { Projects } from "@/components/organisms/Projects";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";
import { ScrollProgress } from "@/components/molecules/ScrollProgress";
import { BackToTop } from "@/components/molecules/BackToTop";
import { Particles } from "@/components/molecules/Particles";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Particles />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}

