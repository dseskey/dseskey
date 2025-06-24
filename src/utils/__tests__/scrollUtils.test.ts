import { scrollToSection, downloadResume } from '../scrollUtils';

// Mock DOM methods
const mockScrollIntoView = jest.fn();
const mockGetElementById = jest.fn();
const mockCreateElement = jest.fn();
const mockClick = jest.fn();

// Setup DOM mocks
Object.defineProperty(document, 'getElementById', {
  value: mockGetElementById,
});

Object.defineProperty(document, 'createElement', {
  value: mockCreateElement,
});

describe('scrollUtils', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear();
    mockGetElementById.mockClear();
    mockCreateElement.mockClear();
    mockClick.mockClear();
  });

  describe('scrollToSection', () => {
    it('scrolls to element when element exists', () => {
      const mockElement = {
        scrollIntoView: mockScrollIntoView,
      };
      
      mockGetElementById.mockReturnValue(mockElement);
      
      scrollToSection('about');
      
      expect(mockGetElementById).toHaveBeenCalledWith('about');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('does nothing when element does not exist', () => {
      mockGetElementById.mockReturnValue(null);
      
      scrollToSection('nonexistent');
      
      expect(mockGetElementById).toHaveBeenCalledWith('nonexistent');
      expect(mockScrollIntoView).not.toHaveBeenCalled();
    });

    it('handles different section IDs', () => {
      const mockElement = {
        scrollIntoView: mockScrollIntoView,
      };
      
      mockGetElementById.mockReturnValue(mockElement);
      
      scrollToSection('portfolio');
      scrollToSection('experience');
      scrollToSection('contact');
      
      expect(mockGetElementById).toHaveBeenCalledWith('portfolio');
      expect(mockGetElementById).toHaveBeenCalledWith('experience');
      expect(mockGetElementById).toHaveBeenCalledWith('contact');
    });
  });

  describe('downloadResume', () => {
    it('creates and clicks download link', () => {
      const mockLink = {
        href: '',
        download: '',
        click: mockClick,
      };
      
      mockCreateElement.mockReturnValue(mockLink);
      
      downloadResume();
      
      expect(mockCreateElement).toHaveBeenCalledWith('a');
      expect(mockLink.href).toBe('/resume.pdf');
      expect(mockLink.download).toBe('Daniel_Seskey_Resume.pdf');
      expect(mockClick).toHaveBeenCalled();
    });

    it('sets correct file path and name', () => {
      const mockLink = {
        href: '',
        download: '',
        click: mockClick,
      };
      
      mockCreateElement.mockReturnValue(mockLink);
      
      downloadResume();
      
      expect(mockLink.href).toBe('/resume.pdf');
      expect(mockLink.download).toBe('Daniel_Seskey_Resume.pdf');
    });
  });
});