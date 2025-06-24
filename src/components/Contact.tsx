import React from 'react';

interface ContactProps {
  onDownloadResume: () => void;
}

interface ContactInfo {
  label: string;
  value: string;
  href: string;
}

const Contact: React.FC<ContactProps> = ({ onDownloadResume }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:daniel@example.com';
  };

  const contactInfo: ContactInfo[] = [
    {
      label: 'Email:',
      value: 'daniel@example.com',
      href: 'mailto:daniel@example.com'
    },
    {
      label: 'LinkedIn:',
      value: 'linkedin.com/in/danielseskey',
      href: 'https://linkedin.com/in/danielseskey'
    },
    {
      label: 'GitHub:',
      value: 'github.com/danielseskey',
      href: 'https://github.com/danielseskey'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Let's Work Together</h2>
        <p>I'm always interested in new opportunities and exciting projects. Let's connect!</p>
        <div className="contact-info">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-item">
              <span className="contact-label">{contact.label}</span>
              <a 
                href={contact.href} 
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
        <div className="contact-buttons">
          <button className="contact-button" onClick={handleEmailClick}>Send Email</button>
          <button className="resume-button" onClick={onDownloadResume}>Download Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;