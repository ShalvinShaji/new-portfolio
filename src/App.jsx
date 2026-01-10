import React, { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// Lazy load heavy sections
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));

function App() {
  const [loading, setLoading] = React.useState(true);
  const [startAnim, setStartAnim] = React.useState(false);

  return (
    <div className="relative min-h-screen text-text-white overflow-x-hidden selection:bg-crimson selection:text-text-white">
      {loading && (
        <Preloader 
          onComplete={() => setLoading(false)} 
          onFadeStart={() => setStartAnim(true)}
        />
      )}

      <div className="fixed top-0 left-0 w-full h-full bg-bg-main -z-20"></div>
      <div className="noise-overlay"></div>
      
      <LazyMotion features={domAnimation}>
        <div>
          <Header />
          <main>
            <Suspense fallback={<div className="h-screen bg-bg-main"></div>}>
              <Hero startAnimation={startAnim} />
              <About />
              <Experience />
              <Skills />
            </Suspense>
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </div>
  );
}

export default App;
