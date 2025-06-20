import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const togglemode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.style.backgroundColor = newMode ? 'grey' : 'white';
      document.body.style.color = newMode ? 'white' : 'black';
      return newMode;
    });
  };

  return (
    <Router>
      <Navbar 
        title="Alpesh Utils"  
        about="About" 
        darkMode={darkMode} 
        toggleMode={togglemode} 
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<Textform darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
