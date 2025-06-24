import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the utility functions
jest.mock('./utils/scrollUtils', () => ({
  scrollToSection: jest.fn(),
  downloadResume: jest.fn(),
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders all main sections', () => {
    render(<App />);
    
    // Check that all major sections are present
    expect(screen.getAllByText('Daniel Seskey')).toHaveLength(2); // Navigation brand and Hero title
    expect(screen.getByText('Senior Software Engineer & Technical Leader')).toBeInTheDocument(); // Hero
    expect(screen.getByText('About Me')).toBeInTheDocument(); // About
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument(); // Skills
    expect(screen.getByText('Featured Projects')).toBeInTheDocument(); // Portfolio
    expect(screen.getByText('Professional Experience')).toBeInTheDocument(); // Experience
    expect(screen.getByText('Let\'s Work Together')).toBeInTheDocument(); // Contact
  });

  it('renders navigation component', () => {
    render(<App />);
    
    const navLinks = ['About', 'Skills', 'Portfolio', 'Experience', 'Contact'];
    navLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders hero section with action buttons', () => {
    render(<App />);
    
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getAllByText('Download Resume')).toHaveLength(2); // Hero and Contact sections
  });

  it('renders skills section with technology categories', () => {
    render(<App />);
    
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Database & Cloud')).toBeInTheDocument();
    expect(screen.getByText('Leadership & Process')).toBeInTheDocument();
  });

  it('renders portfolio section with projects', () => {
    render(<App />);
    
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
  });

  it('renders experience timeline', () => {
    render(<App />);
    
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Innovations Inc.')).toBeInTheDocument();
    expect(screen.getByText('2020 - Present')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<App />);
    
    expect(screen.getByText('daniel@example.com')).toBeInTheDocument();
    expect(screen.getByText('linkedin.com/in/danielseskey')).toBeInTheDocument();
    expect(screen.getByText('github.com/danielseskey')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<App />);
    
    // Check for semantic elements
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
    
    // Check for heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('Daniel Seskey');
    
    const h2Headings = screen.getAllByRole('heading', { level: 2 });
    expect(h2Headings.length).toBeGreaterThan(0);
  });
});
