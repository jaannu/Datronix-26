const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex justify-center">
        <div className="relative w-full max-w-6xl">
          <div className="absolute -inset-4 bg-primary/20 blur-[50px] sm:blur-[80px] rounded-full opacity-50" />
          
          <div className="glass-panel-solid p-6 sm:p-8 md:p-14 rounded-[2rem] sm:rounded-[3rem] relative z-10 hover:border-primary/30 transition-colors duration-500">
            <div className="relative z-10 max-w-4xl mx-auto text-center px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-orbitron">
                About <span className="text-primary">Datronix</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed text-muted-foreground">
                Datronix is a National Level Technical Symposium organized by Department of Artificial Intelligence and Data Science. Since its inception, it has been a beacon for tech enthusiasts to showcase their skills in coding, robotics, and design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
