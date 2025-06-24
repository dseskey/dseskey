import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Vue.js', 'Next.js', 'HTML5/CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend', 
      skills: ['Node.js', 'Python', 'Java', 'Express', 'FastAPI', 'GraphQL']
    },
    {
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Redis']
    },
    {
      title: 'Leadership & Process',
      skills: ['Team Leadership', 'Agile/Scrum', 'Code Review', 'Mentoring', 'Architecture Design', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={`${category.title}-${skill}`} className="skill-tag">{skill}</span>
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