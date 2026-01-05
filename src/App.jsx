import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Preloader from './components/Preloader';

// Lazy load heavy sections
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));


function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="relative min-h-screen text-text-white overflow-x-hidden selection:bg-crimson selection:text-text-white">
      
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}

      <div className="fixed top-0 left-0 w-full h-full luxury-gradient -z-20"></div>
      <div className="noise-overlay"></div>
      
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <SocialSidebar />
        <main>
          <Suspense fallback={<div className="h-screen bg-bg-main"></div>}>
            <Hero />
            <About />
            <Experience />
            <Skills />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
