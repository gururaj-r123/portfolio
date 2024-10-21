import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './componenets/NavBar';
import About from './componenets/About';
import Courses from './componenets/Course';
import Contact from './componenets/Contact';


const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Gururaj Portfolio!</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
