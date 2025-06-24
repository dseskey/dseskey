export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const downloadResume = (): void => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Daniel_Seskey_Resume.pdf';
  link.click();
};