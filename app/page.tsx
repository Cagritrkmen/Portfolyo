

import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Skills } from "@/components/organisms/Skills";
import { Timeline } from "@/components/organisms/Timeline";
import { Projects } from "@/components/organisms/Projects";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

