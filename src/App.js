import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Origin from './components/Origin/krinky';
import About from './components/About/';
import Contact from './components/Contact/';
import Skills from './components/Skills/';
import Service from './components/Service/';
import Works from './components/Work/';
import Blog from './components/Blog/';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Origin />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
