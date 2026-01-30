 const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[50px] sm:blur-[80px] rounded-full opacity-50" />
            <div className="glass-panel-solid p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] relative z-10 hover:border-primary/30 transition-colors duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold">10+</span>
                  </div>
                  <span className="text-sm font-medium">Years of Excellence</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold">50+</span>
                  </div>
                  <span className="text-sm font-medium">Technical Events</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold">5000+</span>
                  </div>
                  <span className="text-sm font-medium">Participants</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-orbitron">
              About <span className="text-primary">Datronix</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed text-muted-foreground">
              Datronix is a National Level Technical Symposium organized by the Department of Computer Science and Engineering. Since its inception, it has been a beacon for tech enthusiasts to showcase their skills in coding, robotics, design, and innovation.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              Join us for an unforgettable experience filled with competitions, workshops, and networking opportunities with industry experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
