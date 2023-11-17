import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {

  useEffect(() => {
    const hoverArea = document.querySelector('.hover-area');

    const moveDot = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      hoverArea.style.left = `${x}px`;
      hoverArea.style.top = `${y}px`;
    };

    const startTracking = () => {
      document.addEventListener('mousemove', moveDot);
    };

    const stopTracking = () => {
      document.removeEventListener('mousemove', moveDot);
    };

    hoverArea.addEventListener('mouseenter', startTracking);
    hoverArea.addEventListener('mouseleave', stopTracking);

    return () => {
      hoverArea.removeEventListener('mouseenter', startTracking);
      hoverArea.removeEventListener('mouseleave', stopTracking);
      document.removeEventListener('mousemove', moveDot);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
      <div class="container">
        <div class="hover-area"></div>
      </div>
    </div>
  );
}

export default App;
