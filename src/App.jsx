import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Service from './pages/Services/ServicePage';
import Education from './pages/Education';
import Media from './pages/Media';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import MeditationPage from "./pages/Services/MeditationPage";
import YouthPage from "./pages/Services/YouthPage";
import SanskarPage from "./pages/Services/SanskarPage";
import YagyaPage from "./pages/Services/YagyaPage";
import BalSanskar from "./pages/Services/BalSanskar";
import Yoga from "./pages/Services/yoga";
import SwadhyayPage from "./pages/Services/SwadhyayPage";
import DivineGuides from "./pages/DivineGuides";

import './App.css';

function App() {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);               // ← This line (instant top)
  //   // Or for smooth scroll: window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);                       // ← This line
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
    
        <Navbar />
    
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About  />} />
            <Route path="/service" element={<Service />} />
            <Route path="/education" element={<Education />} />
            <Route path="/media" element={<Media />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/meditationPage" element={<MeditationPage />} />
            <Route path="/youthPage" element={<YouthPage />} />
            <Route path="/sanskarPage" element={<SanskarPage />} />
            <Route path="/balSanskar" element={<BalSanskar />} />
            <Route path="/swadhyayPage" element={<SwadhyayPage />} />
            <Route path="/yagyaPage" element={<YagyaPage />} />
            <Route path="/divine-guides" element={<DivineGuides />} />
            <Route path="/Yoga" element={<Yoga />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
