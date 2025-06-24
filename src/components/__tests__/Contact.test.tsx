import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

// Mock window.location.href
delete (window as any).location;
window.location = { href: '' } as any;

describe('Contact', () => {
  const mockOnDownloadResume = jest.fn();

  beforeEach(() => {
    mockOnDownloadResume.mockClear();
    window.location.href = '';
  });

  it('renders the section with correct heading', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    expect(screen.getByText('Let\'s Work Together')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('daniel@example.com')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn:')).toBeInTheDocument();
    expect(screen.getByText('linkedin.com/in/danielseskey')).toBeInTheDocument();
    expect(screen.getByText('GitHub:')).toBeInTheDocument();
    expect(screen.getByText('github.com/danielseskey')).toBeInTheDocument();
  });

  it('renders contact links with correct href attributes', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    
    const emailLink = screen.getByText('daniel@example.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:daniel@example.com');
    
    const linkedinLink = screen.getByText('linkedin.com/in/danielseskey');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/danielseskey');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    
    const githubLink = screen.getByText('github.com/danielseskey');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/danielseskey');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders action buttons', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    
    expect(screen.getByText('Send Email')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  it('calls onDownloadResume when Download Resume is clicked', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    
    fireEvent.click(screen.getByText('Download Resume'));
    expect(mockOnDownloadResume).toHaveBeenCalled();
  });

  it('triggers email client when Send Email is clicked', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    
    fireEvent.click(screen.getByText('Send Email'));
    expect(window.location.href).toBe('mailto:daniel@example.com');
  });

  it('has correct section id for navigation', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    const section = screen.getByText('Let\'s Work Together').closest('section');
    expect(section).toHaveAttribute('id', 'contact');
  });

  it('renders call-to-action message', () => {
    render(<Contact onDownloadResume={mockOnDownloadResume} />);
    expect(screen.getByText(/I'm always interested in new opportunities/)).toBeInTheDocument();
  });
});