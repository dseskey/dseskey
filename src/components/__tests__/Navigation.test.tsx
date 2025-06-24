import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
  const mockOnNavigate = jest.fn();

  beforeEach(() => {
    mockOnNavigate.mockClear();
  });

  it('renders navigation with brand name', () => {
    render(<Navigation onNavigate={mockOnNavigate} />);
    expect(screen.getByText('Daniel Seskey')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navigation onNavigate={mockOnNavigate} />);
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls onNavigate with correct section id when clicked', () => {
    render(<Navigation onNavigate={mockOnNavigate} />);
    
    fireEvent.click(screen.getByText('About'));
    expect(mockOnNavigate).toHaveBeenCalledWith('about');
    
    fireEvent.click(screen.getByText('Skills'));
    expect(mockOnNavigate).toHaveBeenCalledWith('skills');
    
    fireEvent.click(screen.getByText('Portfolio'));
    expect(mockOnNavigate).toHaveBeenCalledWith('portfolio');
  });
});