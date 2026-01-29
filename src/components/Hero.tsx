const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4"
    >
      <div className="text-center z-10">
        {/* Logo Placeholder */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-6 sm:mb-8 animate-shine-pulse">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
          <div className="relative w-full h-full rounded-full border-2 border-primary/50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <span className="text-4xl sm:text-5xl font-bold font-orbitron text-primary">D</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-lg font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4">
          National Level Technical Symposium
        </p>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-orbitron mb-4 sm:mb-6 anim-text-flow leading-tight">
          DATRONIX '26
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
          Presented by Department of AI & DS
        </p>

        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10 mb-8 sm:mb-12">
          <i className="fa-solid fa-calendar-days text-primary" />
          <span className="text-sm sm:text-base font-mono text-foreground/80">
            2nd FEBRUARY 2026
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
          <a
            href="#events"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-bold text-base sm:text-lg shadow-lg shadow-primary/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-rocket" />
            Explore Events
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/10 rounded-full font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-circle-info" />
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fa-solid fa-chevron-down text-2xl text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
