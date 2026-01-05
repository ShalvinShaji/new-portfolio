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
    <div className="relative min-h-screen text-text-white overflow-x-hidden selection:bg-crimson selection:text-text-white">
      {/* Fixed Background Layer to prevent mobile scroll issues */}
      <div className="fixed top-0 left-0 w-full h-full luxury-gradient -z-20"></div>
      <div className="noise-overlay"></div>
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
