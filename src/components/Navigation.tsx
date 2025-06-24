import React from 'react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">Daniel Seskey</div>
        <div className="nav-links">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;