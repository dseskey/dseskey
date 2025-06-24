import React from 'react';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2020 - Present',
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      description: 'Lead a team of 8 engineers developing cloud-native applications. Architected microservices infrastructure serving 2M+ users. Reduced deployment time by 60% through CI/CD improvements.'
    },
    {
      period: '2017 - 2020',
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      description: 'Developed and maintained React/Node.js applications for enterprise clients. Implemented automated testing strategies that improved code quality by 40%. Mentored junior developers.'
    },
    {
      period: '2014 - 2017',
      title: 'Software Developer',
      company: 'StartupCo',
      description: 'Built MVP products from concept to launch. Worked directly with founders to translate business requirements into technical solutions. Gained experience across the full product lifecycle.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="timeline-item">
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;