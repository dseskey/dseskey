import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../Experience';

describe('Experience', () => {
  it('renders the section with correct heading', () => {
    render(<Experience />);
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
  });

  it('renders all experience items', () => {
    render(<Experience />);
    
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });

  it('renders company names', () => {
    render(<Experience />);
    
    expect(screen.getByText('Tech Innovations Inc.')).toBeInTheDocument();
    expect(screen.getByText('Digital Solutions LLC')).toBeInTheDocument();
    expect(screen.getByText('StartupCo')).toBeInTheDocument();
  });

  it('renders time periods', () => {
    render(<Experience />);
    
    expect(screen.getByText('2020 - Present')).toBeInTheDocument();
    expect(screen.getByText('2017 - 2020')).toBeInTheDocument();
    expect(screen.getByText('2014 - 2017')).toBeInTheDocument();
  });

  it('renders job descriptions with key achievements', () => {
    render(<Experience />);
    
    expect(screen.getByText(/Lead a team of 8 engineers/)).toBeInTheDocument();
    expect(screen.getByText(/Reduced deployment time by 60%/)).toBeInTheDocument();
    expect(screen.getByText(/improved code quality by 40%/)).toBeInTheDocument();
    expect(screen.getByText(/Built MVP products from concept to launch/)).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    render(<Experience />);
    const section = screen.getByText('Professional Experience').closest('section');
    expect(section).toHaveAttribute('id', 'experience');
  });

  it('mentions key technical achievements', () => {
    render(<Experience />);
    
    expect(screen.getByText(/microservices infrastructure serving 2M\+ users/)).toBeInTheDocument();
    expect(screen.getByText(/automated testing strategies/)).toBeInTheDocument();
    expect(screen.getByText(/React\/Node\.js applications/)).toBeInTheDocument();
  });
});