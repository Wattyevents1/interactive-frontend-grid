import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Frontend Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
            <img 
              src="/lovable-uploads/216bf01c-8aba-438b-869a-33c0244aaa04.png" 
              alt="Watty Eventice" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 scroll-reveal">
            Hi, I'm <span className="text-accent">Watty Eventice</span>
          </h1>

          <div className="text-xl md:text-2xl mb-8 h-8 scroll-reveal">
            <span className="typing-cursor">
              {displayText}
            </span>
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 scroll-reveal">
            I build sleek and responsive web experiences that bring ideas to life. 
            Passionate about creating intuitive user interfaces with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
            <button 
              onClick={() => scrollToNext()}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;