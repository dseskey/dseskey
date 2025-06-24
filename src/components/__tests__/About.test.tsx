import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About', () => {
  it('renders the section with correct heading', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders introduction paragraphs', () => {
    render(<About />);
    
    expect(screen.getByText(/I'm a seasoned software engineer/)).toBeInTheDocument();
    expect(screen.getByText(/I believe in writing clean, maintainable code/)).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    render(<About />);
    const section = screen.getByText('About Me').closest('section');
    expect(section).toHaveAttribute('id', 'about');
  });

  it('mentions key experience points', () => {
    render(<About />);
    
    expect(screen.getByText(/over a decade of experience/)).toBeInTheDocument();
    expect(screen.getByText(/startups and enterprise companies/)).toBeInTheDocument();
    expect(screen.getByText(/mentoring junior developers/)).toBeInTheDocument();
  });
});