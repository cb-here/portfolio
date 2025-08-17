import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";

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
        <Router>
          <div className="flex justify-center min-h-screen w-full overflow-hidden relative bg-black text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;