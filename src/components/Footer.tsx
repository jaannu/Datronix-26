const Footer = () => {
  return (
    <footer className="relative bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-orbitron mb-3">
              DATRONIX <span className="text-primary">'26</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A National Level Technical Symposium organized by the Department of AI & DS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#bearers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Office Bearers
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4 text-foreground">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-xs text-muted-foreground/60">
            © 2026 DATRONIX. All rights reserved. | Department of AI & Data Science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
