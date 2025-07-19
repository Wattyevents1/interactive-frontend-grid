import React from 'react';
import { Download, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Creative Design",
      description: "Transforming ideas into beautiful, user-friendly interfaces"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Performance",
      description: "Optimizing applications for speed and smooth user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary scroll-reveal">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground scroll-reveal">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-reveal">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-lg">
                <img 
                  src="/lovable-uploads/216bf01c-8aba-438b-869a-33c0244aaa04.png" 
                  alt="Watty Eventice" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="scroll-reveal">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 3 years of experience in web development, I specialize in creating 
                modern, responsive websites and applications. I'm passionate about user experience 
                and love bringing designs to life with clean, efficient code.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              {/* Resume Preview */}
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/bd43c62f-6994-4457-8f0f-97da7a8c6512.png" 
                  alt="Watty Eventice Resume Preview" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg border border-border"
                />
              </div>
              
              <a 
                href="/resume-watty-eventice.pdf" 
                download="Watty_Eventice_Resume.pdf"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow scroll-reveal">
                <div className="mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;