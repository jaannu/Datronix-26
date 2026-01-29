const Background = () => {
  return (
    <>
      {/* Digital Grid - 3D Effect */}
      <div
        className="fixed inset-0 z-[-19] pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(hsl(186 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(186 100% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center top',
          transform: 'perspective(500px) rotateX(60deg) translateY(0) scale(2)',
          transformOrigin: 'top center',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 40%, transparent 100%)',
        }}
      />

      {/* Dynamic Planets */}
      <div className="fixed inset-0 z-[-18] pointer-events-none overflow-hidden">
        {/* Saturn with rings */}
        <div
          className="absolute rounded-full blur-[1px] opacity-80 animate-planet-move"
          style={{
            top: '20%',
            left: '-350px',
            width: '300px',
            height: '300px',
            background: 'linear-gradient(30deg, #6366f1, #a855f7, #ec4899)',
            boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.9), 0 0 50px rgba(168, 85, 247, 0.4)',
            animationDuration: '90s',
          }}
        >
          <div
            className="absolute animate-rotate-ring"
            style={{
              top: '50%',
              left: '50%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(transparent 55%, rgba(200, 220, 255, 0.5) 56%, rgba(180, 200, 230, 0.7) 60%, transparent 62%, rgba(160, 180, 210, 0.6) 64%, rgba(140, 160, 190, 0.4) 70%, transparent 71%)',
              boxShadow: '0 0 15px rgba(173, 216, 230, 0.3)',
              transform: 'translate(-50%, -50%) rotateX(75deg) rotateY(10deg)',
            }}
          />
        </div>

        {/* Medium planet */}
        <div
          className="absolute rounded-full blur-[1px] opacity-70 animate-planet-move"
          style={{
            top: '60%',
            left: '-250px',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle at 30% 30%, #3b82f6, #1d4ed8, #020215 90%)',
            boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(59, 130, 246, 0.3)',
            animationDuration: '70s',
            animationDelay: '-10s',
          }}
        />

        {/* Small planet */}
        <div
          className="absolute rounded-full blur-[1px] opacity-60 animate-planet-move"
          style={{
            bottom: '10%',
            left: '-150px',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle at 30% 30%, #22d3ee, #0891b2, #020215 90%)',
            boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.9), 0 0 20px rgba(34, 211, 238, 0.3)',
            animationDuration: '50s',
            animationDelay: '-20s',
          }}
        />
      </div>

      {/* Nebula */}
      <div className="fixed inset-0 z-[-17] pointer-events-none">
        <div
          className="absolute rounded-full blur-[100px] opacity-40 animate-nebula-pulse"
          style={{
            top: '10%',
            right: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, hsl(270 67% 47% / 0.5), transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-40 animate-nebula-pulse"
          style={{
            bottom: '20%',
            left: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.4), transparent 70%)',
            animationDelay: '6s',
          }}
        />
      </div>

      {/* Light Rays */}
      <div
        className="fixed z-[-16] pointer-events-none animate-rotate-rays"
        style={{
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `conic-gradient(from 0deg at 50% 50%, 
            transparent 0deg, 
            rgba(59, 130, 246, 0.03) 20deg, 
            transparent 40deg, 
            rgba(139, 92, 246, 0.03) 60deg, 
            transparent 80deg)`,
        }}
      />
    </>
  );
};

export default Background;
