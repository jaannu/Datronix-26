import { useState, useEffect } from 'react';

interface EntryAnimationProps {
  onComplete: () => void;
}

const EntryAnimation = ({ onComplete }: EntryAnimationProps) => {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (!videoEnded) return;

    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [videoEnded, onComplete]);

  if (!visible) return null;

  // ---------------- VIDEO INTRO ----------------

  if (!videoEnded) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setVideoEnded(true)}
          className="w-full h-full object-cover"
        >
          <source src="/leo-intro_1.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  // ---------------- UI TRANSITION ----------------

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center font-mono transition-opacity duration-700 ${
        phase === 3 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">

        <div
          className={`text-neon-cyan text-lg mb-2 opacity-0 translate-y-2.5 ${
            phase >= 1 ? 'animate-[slideUpFade_0.5s_forwards]' : ''
          }`}
        >
          {'> INITIALIZING DATRONIX CORE...'}
        </div>

        <div
          className={`text-primary text-lg opacity-0 translate-y-2.5 ${
            phase >= 2 ? 'animate-[slideUpFade_0.5s_forwards]' : ''
          }`}
        >
          {'> ESTABLISHING SECURE CONNECTION...'}
        </div>

        <div className="mt-8 h-1 w-64 bg-gray-800 rounded mx-auto overflow-hidden">
          <div
            className={`h-full bg-neon-cyan shadow-[0_0_10px_hsl(186_100%_50%)] transition-all duration-1000 ${
              phase >= 2 ? 'w-full' : 'w-0'
            }`}
          />
        </div>

      </div>

      {/* Flash Overlay */}
      <div
        className={`absolute inset-0 bg-white pointer-events-none z-[10000] ${
          phase >= 3 ? 'animate-[flashBang_1.5s_ease-in-out_forwards]' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default EntryAnimation;
