import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-w-0 overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
