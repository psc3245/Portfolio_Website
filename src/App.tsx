import Header from "./Components/Header";
import Projects from './Components/Projects';
import Welcome from "./Components/Welcome";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section id="welcome">
        <Welcome />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
export default App
