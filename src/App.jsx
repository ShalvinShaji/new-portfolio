import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';



function App() {
  return (
    <div className="luxury-gradient min-h-screen relative overflow-x-hidden">
      <div className="noise-overlay"></div>
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
