import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const TypingLoader = ({ onComplete }: {onComplete: () => void}) => {
  const [typedText, setTypedText] = useState("");

 useEffect(() => {
   const text = "cbbhere";
   let index = 0;

   const interval = setInterval(() => {
     if (index < text.length) {
       setTypedText((prev) => prev + text.charAt(index));
       index++;
     }

     if (index === text.length) {
       clearInterval(interval);
       setTimeout(onComplete, 1000);
     }
   }, 500);

   return () => clearInterval(interval);
 }, [onComplete]);


  return (
    <div className="flex items-center font-mono justify-center h-screen w-full bg-black text-white text-4xl tracking-widest">
      {typedText}
      <span className="animate-blink ml-1">_</span>
    </div>
  );
};

const style = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .animate-blink {
    animation: blink 1s infinite;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <style>{style}</style>

      {isLoading ? (
        <TypingLoader onComplete={() => setIsLoading(false)} />
      ) : (
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
      )}
    </>
  );
}

export default App;
