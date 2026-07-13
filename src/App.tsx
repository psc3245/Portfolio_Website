import { useState } from 'react'
import Header from "./Components/Header";
import Projects from './Components/Projects';
import Welcome from "./Components/Welcome";
import './App.css'

function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section id="welcome">
        <Welcome />
      </section>
      {/* <section id="about">
        <About />
      </section> */}
      <section id="projects">
        <Projects />
      </section>
      {/* 
      <section id="contact">
        <Contact />
      </section> */}
    </>
  );
}
export default App
