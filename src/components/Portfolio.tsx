import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  sortOrder: number;
}

const projects: Project[] = [
    {
      title: 'Noggle Boggle Trivia and Quiz Generator',
      description: 'A real-time WebSocket backend service designed to power interactive trivia games and quizzes through third-party user interfaces. This project served as an exploratory initiative into modern web technologies, representing a first foray into WebSocket implementation within AWS infrastructure and leveraging AWS Cognito for user authentication and authorization. The project is planned for future optimization and enhancement, incorporating newer AWS technologies and improved event-driven architecture strategies.',
      technologies: ['Node.js', 'WebSocket', 'AWS', 'AWS Cognito', 'Event-Driven Architecture'],
      githubUrl: 'https://github.com/dseskey/noggleboggle-aws',
      sortOrder: 1
    },
    {
      title: 'Single Plant Irrigation System (SPIS)',
      description: 'An intelligent, sensor-driven irrigation system developed collaboratively at the University of Pittsburgh in 2013 as part of an advanced Embedded Systems course. The SPIS represents a sustainable approach to plant and grass care, utilizing real-time environmental monitoring to optimize water usage while maintaining plant health.',
      technologies: ['C/C++', 'MSP430 (TI)', 'Sensors', 'Embedded Systems'],
      demoUrl: 'https://www.youtube.com/watch?v=ruhGDVa6X80',
      sortOrder: 2
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
      sortOrder: 3
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Express'],
      demoUrl: '#',
      githubUrl: '#',
      sortOrder: 4
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with interactive charts, real-time metrics, and customizable reporting for business intelligence.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      demoUrl: '#',
      githubUrl: '#',
      sortOrder: 5
    }
  ];

const Portfolio: React.FC = () => {
  

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">Project Image</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="project-link">Live Demo</a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="project-link">GitHub</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;