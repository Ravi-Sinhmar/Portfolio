import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/AboutSummary";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import About from "./Pages/About";
import Achievements from "./Pages/Achievement";
import Hire from "./Pages/Hire";
import Projects from './Pages/Projects';
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      {/* Header is inside Router so navigation links work */}
      <div className="xl:px-52 lg:px-36 md:px-28 px-3 sm:px-8 md:pt-20 pt-6">
      <Navigation  />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>

      {/* Footer inside Router to be consistent across pages */}
    
    </Router>
  );
}

export default App;
