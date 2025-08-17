import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full max-w-3xl min-h-screen mx-4">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;