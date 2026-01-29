const Department = () => {
  return (
    <section id="dept" className="py-16 sm:py-24 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex justify-center">
        <div className="relative w-full max-w-6xl">
          <div className="absolute -inset-4 bg-primary/20 blur-[50px] sm:blur-[80px] rounded-full opacity-50" />
          
          <div className="glass-panel-solid p-6 sm:p-8 md:p-14 rounded-[2rem] sm:rounded-[3rem] relative z-10 hover:border-primary/30 transition-colors duration-500">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 font-orbitron leading-tight">
                    The <span className="text-primary">Department</span>
                  </h2>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">
                    Artificial Intelligence & Data Science
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                  The Department of AI & DS is at forefront of cognitive revolution, driving innovation through data-centric technologies. We are dedicated to nurturing next generation of data scientists and AI engineers, equipping them with profound skills to transform raw data into actionable intelligence.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-brain text-base sm:text-xl" />
                    </div>
                    <h4 className="text-base sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Vision
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    To lead future of technology by fostering a world-class environment for Artificial Intelligence and Data Science education.
                  </p>
                </div>

                <div className="bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-database text-base sm:text-xl" />
                    </div>
                    <h4 className="text-base sm:text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      Mission
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    To empower students with cutting-edge analytical skills and ethical AI principles to solve complex global challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
