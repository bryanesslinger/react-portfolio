import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
// import Navigation from './components/Navigation';
import Project from './components/Project';

const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/about" element={<div><h2>About Me</h2><p>This is about me.</p></div>} />
          <Route path="/portfolio" element={
            <div>
              <h2>Portfolio</h2>
              <div>
                <Project
                  title="Project 1"
                  description="Description of Project 1"
                  imageUrl="https://via.placeholder.com/150"
                />
                <Project
                  title="Project 2"
                  description="Description of Project 2"
                  imageUrl="https://via.placeholder.com/150"
                />
                {/* Add more Project components as needed */}
              </div>
            </div>
          } />
          <Route path="/contact" element={<div><h2>Contact</h2><p>Contact me here.</p></div>} />
          <Route path="/resume" element={<div><h2>Resume</h2><p>Resume details go here.</p></div>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;