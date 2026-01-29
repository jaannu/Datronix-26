const bearerImages = [
  '/images/bearers/1.png',
  '/images/bearers/2.png',
  '/images/bearers/30.png',
  '/images/bearers/31.png',
  '/images/bearers/32.png',
  '/images/bearers/33.png',
  '/images/bearers/34.png',
  '/images/bearers/35.png',
];

const OfficeBearers = () => {
  return (
    <section id="bearers" className="py-16 sm:py-24 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 font-orbitron">
            Office <span className="text-primary">Bearers</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            The masterminds behind the innovation.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-8 sm:py-12">
          {/* Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <div className="flex animate-scroll-left w-max gap-6 sm:gap-8">
            {/* Original Set */}
            {bearerImages.map((src, idx) => (
              <div
                key={`original-${idx}`}
                className="flex-shrink-0 w-[300px] h-[500px] sm:w-[400px] sm:h-[600px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-datronix-blue"
              >
                <img
                  src={src}
                  alt={`Office Bearer ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {bearerImages.map((src, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex-shrink-0 w-[300px] h-[500px] sm:w-[400px] sm:h-[600px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-datronix-blue"
              >
                <img
                  src={src}
                  alt={`Office Bearer ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeBearers;
