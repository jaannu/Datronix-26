import { useState } from 'react';
import EntryAnimation from '@/components/EntryAnimation';
import Galaxy from '@/components/Galaxy';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Department from '@/components/Department';
import Events from '@/components/Events';
import OfficeBearers from '@/components/OfficeBearers';
import Footer from '@/components/Footer';

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
        <div className="min-h-screen">
          {/* Background Effects */}
          <Galaxy
            mouseRepulsion={false}
            density={1.0}
            glowIntensity={1.0}
            saturation={1.0}
            hueShift={0}
            twinkleIntensity={0.5}
            rotationSpeed={0.01}
            repulsionStrength={0.5}
            autoCenterRepulsion={0}
            starSpeed={0}
            speed={0.5}
          />
          <Background />
          
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
