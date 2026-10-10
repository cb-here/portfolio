import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
