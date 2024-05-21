import Header from "./components/Header"
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Header />
      {/* Hero */}
      <AboutMe />
      <Projects />
      <Contact />
      {/* Footer */}
    </>
  )
}

export default App
