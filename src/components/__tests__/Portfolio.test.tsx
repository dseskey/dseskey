import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from '../Portfolio';

describe('Portfolio', () => {
  it('renders the section with correct heading', () => {
    render(<Portfolio />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Portfolio />);
    
    expect(screen.getByText('Noggle Boggle Trivia and Quiz Generator')).toBeInTheDocument();
    expect(screen.getByText('Single Plant Irrigation System (SPIS)')).toBeInTheDocument();
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    render(<Portfolio />);
    
    expect(screen.getByText(/real-time WebSocket backend service/)).toBeInTheDocument();
    expect(screen.getByText(/intelligent, sensor-driven irrigation system/)).toBeInTheDocument();
    expect(screen.getByText(/Full-stack e-commerce solution/)).toBeInTheDocument();
    expect(screen.getByText(/Collaborative project management tool/)).toBeInTheDocument();
    expect(screen.getByText(/Data visualization platform/)).toBeInTheDocument();
  });

  it('renders technology tags for projects', () => {
    render(<Portfolio />);
    
    // Noggle Boggle project technologies
    expect(screen.getAllByText('Node.js')).toHaveLength(2); // Node.js appears in multiple projects
    expect(screen.getByText('WebSocket')).toBeInTheDocument();
    expect(screen.getAllByText('AWS')).toHaveLength(1);
    expect(screen.getByText('AWS Cognito')).toBeInTheDocument();
    expect(screen.getByText('Event-Driven Architecture')).toBeInTheDocument();
    
    // SPIS project technologies
    expect(screen.getByText('C/C++')).toBeInTheDocument();
    expect(screen.getByText('MSP430 (TI)')).toBeInTheDocument();
    expect(screen.getByText('Sensors')).toBeInTheDocument();
    expect(screen.getByText('Embedded Systems')).toBeInTheDocument();
    
    // E-commerce project technologies
    expect(screen.getAllByText('React')).toHaveLength(2); // React appears in two projects
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('Stripe')).toBeInTheDocument();
    
    // Task management project technologies
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
    expect(screen.getByText('Socket.io')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Express')).toBeInTheDocument();
  });

  it('renders project links', () => {
    render(<Portfolio />);
    
    const demoLinks = screen.getAllByText('Live Demo');
    const githubLinks = screen.getAllByText('GitHub');
    
    expect(demoLinks).toHaveLength(4); // SPIS has demo, others have demo
    expect(githubLinks).toHaveLength(4); // Noggle Boggle, E-commerce, Task Management, Analytics have GitHub
  });

  it('has correct section id for navigation', () => {
    render(<Portfolio />);
    const section = screen.getByText('Featured Projects').closest('section');
    expect(section).toHaveAttribute('id', 'portfolio');
  });

  it('renders project image placeholders', () => {
    render(<Portfolio />);
    
    const imagePlaceholders = screen.getAllByText('Project Image');
    expect(imagePlaceholders).toHaveLength(5); // Now 5 projects total
  });
});