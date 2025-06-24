import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills', () => {
  it('renders the section with correct heading', () => {
    render(<Skills />);
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Database & Cloud')).toBeInTheDocument();
    expect(screen.getByText('Leadership & Process')).toBeInTheDocument();
  });

  it('renders frontend technologies', () => {
    render(<Skills />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders backend technologies', () => {
    render(<Skills />);
    
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('GraphQL')).toBeInTheDocument();
  });

  it('renders cloud and database technologies', () => {
    render(<Skills />);
    
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('renders leadership skills', () => {
    render(<Skills />);
    
    expect(screen.getByText('Team Leadership')).toBeInTheDocument();
    expect(screen.getByText('Agile/Scrum')).toBeInTheDocument();
    expect(screen.getByText('Mentoring')).toBeInTheDocument();
    expect(screen.getByText('CI/CD')).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    render(<Skills />);
    const section = screen.getByText('Skills & Technologies').closest('section');
    expect(section).toHaveAttribute('id', 'skills');
  });
});