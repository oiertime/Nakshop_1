import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Curriculum } from './components/Curriculum';
import { Rules } from './components/Rules';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-nakGray font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Curriculum />
      <Rules />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;