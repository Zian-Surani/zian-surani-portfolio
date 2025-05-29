
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import CursorTrail from '@/components/CursorTrail';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden">
      <CursorTrail />
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Projects />
      <TechStack />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Zian Rajeshkumar Surani. Built with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
