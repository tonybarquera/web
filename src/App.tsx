import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Header />
      {/* Hero */}
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      {/* Footer */}
    </>
  )
}

export default App
