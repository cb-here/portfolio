import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center min-h-screen w-full overflow-hidden relative bg-black text-white">
      <div className="w-full max-w-3xl min-h-screen mx-4">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
