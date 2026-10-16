import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./Pages/AboutMe";
import TechSkills from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <TechSkills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
