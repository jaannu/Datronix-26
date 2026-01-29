import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#dept', label: 'Department' },
    { href: '#events', label: 'Events' },
    { href: '#bearers', label: 'Office Bearers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel-solid py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
          <span className="text-xl sm:text-2xl font-bold font-orbitron text-white group-hover:text-primary transition-colors">
            DATRONIX
          </span>
          <span className="text-xs font-mono text-primary/80 hidden sm:inline">'26</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#events"
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel-solid border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 hover:text-primary transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#events"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-2.5 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full text-sm font-semibold transition-all mt-4"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
