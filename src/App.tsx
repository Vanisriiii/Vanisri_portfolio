import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="overflow-x-hidden bg-[#050505]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience/>
        <Certifications/>
        <Contact/>

        {/* Future Sections */}
        {/* <Projects /> */}
        {/* <Experience /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;