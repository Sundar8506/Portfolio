import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Exp from "./components/Exp";

function App() {
  return (
    <>
      <Header />
      <div className="App pt-0">
        <Hero />
        <About />
        <Exp />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
