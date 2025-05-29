
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Award, Code, Rocket, Mail, Zap } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Research', href: '#research', icon: Zap },
    { name: 'Startup', href: '#startup', icon: Rocket },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar for brand */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/20 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            ZS
          </div>
          <button className="glass px-6 py-3 rounded-xl text-sm font-medium hover:glow transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400">
            Download CV
          </button>
        </div>
      </nav>

      {/* Hover trigger area for left navigation */}
      <div 
        className="fixed left-0 top-0 w-20 h-full z-30"
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
      />

      {/* Retractable vertical navigation */}
      <nav className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ease-in-out ${
        showNav ? 'translate-x-0' : '-translate-x-16'
      }`}>
        <div className="flex flex-col space-y-4 pl-6">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transition: 'all 0.3s ease-in-out',
                transitionDelay: showNav ? `${index * 0.05}s` : '0s'
              }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className={`w-14 h-14 rounded-xl glass flex items-center justify-center transition-all duration-500 hover:glow group-hover:scale-110 ${
                  activeSection === item.href.slice(1) 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 glow' 
                    : 'border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </button>
              
              {/* Enhanced Tooltip */}
              <div className={`absolute left-20 top-1/2 transform -translate-y-1/2 transition-all duration-300 pointer-events-none ${
                showNav ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } group-hover:opacity-100 group-hover:translate-x-2`}>
                <div className="bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-500/30 whitespace-nowrap">
                  <span className="text-cyan-400 text-sm font-medium">{item.name}</span>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                    <div className="w-2 h-2 bg-black/90 border-l border-b border-cyan-500/30 rotate-45" />
                  </div>
                </div>
              </div>
              
              {/* Active indicator */}
              <div className={`absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full transition-all duration-500 ${
                activeSection === item.href.slice(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`} />
            </div>
          ))}
        </div>
      </nav>

      {/* Navigation hint when hidden */}
      <div className={`fixed left-2 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-500 ${
        showNav ? 'opacity-0 translate-x-8' : 'opacity-60 translate-x-0'
      }`}>
        <div className="w-1 h-16 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 rounded-full animate-pulse" />
      </div>
    </>
  );
};

export default Navigation;
