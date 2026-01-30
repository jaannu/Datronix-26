import { useState } from 'react';
import EntryAnimation from '@/components/EntryAnimation';


import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Department from '@/components/Department';
import Events from '@/components/Events';
import OfficeBearers from '@/components/OfficeBearers';
import Footer from '@/components/Footer';
import Galaxy from '@/components/Galaxy1';

const Index = () => {
  const [showEntry, setShowEntry] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleEntryComplete = () => {
    setShowEntry(false);
    setShowContent(true);
  };

  return (
    <>
      {showEntry && <EntryAnimation onComplete={handleEntryComplete} />}
      
      {showContent && (
        <div className="relative min-h-screen overflow-hidden">

          {/* Galaxy Background */}
          <div className="fixed inset-0 -z-10">
            <Galaxy starSpeed={1.5}
    density={1.7}
    hueShift={10}
    speed={1}
    glowIntensity={0.45}
    saturation={0}
    mouseRepulsion
    repulsionStrength={2}
    twinkleIntensity={0.5}
    rotationSpeed={0.05}
    transparent/>
          </div>
          
          
          {/* Content */}
          <Navbar />
          <main>
            <Hero />
            <About />
            <Department />
            <Events />
            <OfficeBearers />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
