import { useState, useEffect } from 'react';

const navItems = ['about', 'education', 'projects', 'experience', 'skills'];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of navItems) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-ink">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex justify-between items-center gap-3.5 py-3.5 md:py-[18px]">
        <a href="#top" className="font-bold text-[13px] md:text-[15px] tracking-tight whitespace-nowrap">
          HAOLIN LIU<span className="text-scarlet">.</span>
        </a>
        <div className="flex items-center gap-4 md:gap-7 text-[11px] md:text-xs uppercase tracking-[0.12em] overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`whitespace-nowrap transition-colors hover:text-scarlet ${
                activeSection === item ? 'text-scarlet font-bold' : ''
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="/Haolin_Alex_Liu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap font-bold transition-colors hover:text-scarlet"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
