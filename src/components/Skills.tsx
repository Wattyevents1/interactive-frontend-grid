import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "React", level: 92, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "Vue.js", level: 75, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 78, category: "Backend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Backend" },
    { name: "PostgreSQL", level: 72, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Docker", level: 65, category: "Tools" },
    { name: "Figma", level: 80, category: "Tools" },
    { name: "Webpack", level: 70, category: "Tools" }
  ];

  const technologies = [
    { name: "React", color: "text-blue-500" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "HTML5", color: "text-orange-500" },
    { name: "CSS3", color: "text-blue-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Next.js", color: "text-gray-700" },
    { name: "Tailwind", color: "text-cyan-500" },
    { name: "Git", color: "text-orange-600" },
    { name: "Figma", color: "text-purple-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary scroll-reveal">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto scroll-reveal">
            Here are the technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        {/* Technology Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 scroll-reveal">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-border hover:shadow-lg transition-shadow">
              <div className={`text-2xl font-bold ${tech.color} mb-2`}>
                {tech.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="max-w-4xl mx-auto">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="mb-12 scroll-reveal">
              <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border border-border">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-primary">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`bg-accent h-2 rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'skill-progress' : 'w-0'
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;