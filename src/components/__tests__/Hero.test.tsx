import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  const mockOnNavigate = jest.fn();
  const mockOnDownloadResume = jest.fn();

  beforeEach(() => {
    mockOnNavigate.mockClear();
    mockOnDownloadResume.mockClear();
  });

  it('renders hero content with name and title', () => {
    render(<Hero onNavigate={mockOnNavigate} onDownloadResume={mockOnDownloadResume} />);
    
    expect(screen.getByText('Daniel Seskey')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Engineer & Technical Leader')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Hero onNavigate={mockOnNavigate} onDownloadResume={mockOnDownloadResume} />);
    
    expect(screen.getByText(/Passionate software engineer with 10\+ years of experience/)).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<Hero onNavigate={mockOnNavigate} onDownloadResume={mockOnDownloadResume} />);
    
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  it('calls onNavigate when View My Work is clicked', () => {
    render(<Hero onNavigate={mockOnNavigate} onDownloadResume={mockOnDownloadResume} />);
    
    fireEvent.click(screen.getByText('View My Work'));
    expect(mockOnNavigate).toHaveBeenCalledWith('portfolio');
  });

  it('calls onDownloadResume when Download Resume is clicked', () => {
    render(<Hero onNavigate={mockOnNavigate} onDownloadResume={mockOnDownloadResume} />);
    
    fireEvent.click(screen.getByText('Download Resume'));
    expect(mockOnDownloadResume).toHaveBeenCalled();
  });

  it('renders profile placeholder with initials', () => {
    render(<Hero onNavigate={mockOnNavigate} onDownloadResume={mockOnDownloadResume} />);
    
    expect(screen.getByText('DS')).toBeInTheDocument();
  });
});