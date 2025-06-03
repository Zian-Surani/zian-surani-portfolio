
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Award, Code, Rocket, Mail, Zap, PersonStanding, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Research', href: '#research', icon: Zap },
    { name: 'Startup', href: '#startup', icon: Rocket },
    { name: 'Achievements', href: '#achievements', icon: PersonStanding },
    { name: 'Certifications', href: '#certifications', icon: Award },
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
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      {/* Top bar for brand */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/20 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d83ac73a-c4f5-4483-bd8b-6f958e474c26.png" 
              alt="ZS Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zian Surani
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="glass px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs md:text-sm font-medium text-white hover:glow transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400">
              Download CV
            </button>
            
            {/* Mobile menu button */}
            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="glass w-10 h-10 rounded-xl flex items-center justify-center text-white hover:glow transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Desktop: Fixed vertical navigation */}
      {!isMobile && (
        <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="group relative"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
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
                <div className="absolute left-20 top-1/2 transform -translate-y-1/2 transition-all duration-300 pointer-events-none opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-2">
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
      )}

      {/* Mobile: Dropdown navigation menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 px-6">
          <div className="glass rounded-xl border border-cyan-500/30 overflow-hidden">
            <div className="grid grid-cols-2 gap-2 p-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu overlay */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
