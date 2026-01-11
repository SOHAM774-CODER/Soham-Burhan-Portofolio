import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About Me' },
  { id: 'resume', title: 'Resume' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'profiles', title: 'Profiles' },
  { id: 'contact', title: 'Contact' }
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let currentSection = '';
      SECTIONS.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinkClasses = (id: string) => 
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      activeSection === id 
        ? 'bg-calm-blue-100 text-calm-blue-700' 
        : 'text-slate-600 hover:bg-calm-blue-50 hover:text-calm-blue-600'
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:block">
            <nav className="flex items-center space-x-4">
              {SECTIONS.map((section) => (
                <a key={section.id} href={`#${section.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }} className={navLinkClasses(section.id)}>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-calm-blue-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {SECTIONS.map((section) => (
              <a key={section.id} href={`#${section.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }} className={`${navLinkClasses(section.id)} block`}>
                {section.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;