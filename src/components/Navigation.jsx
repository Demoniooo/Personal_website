import { useState, useEffect } from 'react';

export default function Navigation() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'skills'];
      const scrollPosition = window.scrollY + 200; // offset for nav header height
      
      for (const section of sections) {
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
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("hl6593@nyu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-[#ffffff]/70 dark:bg-[#010a27]/70 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-12 py-6">
          <span className="font-serif text-xl font-bold tracking-tighter text-[#010a27] dark:text-[#f9f9f9]">HAOLIN LIU</span>
          <div className="hidden md:flex items-center gap-10">
            {['about', 'education', 'experience', 'skills'].map((item) => (
              <a 
                key={item}
                className={`font-serif text-lg tracking-tight pb-1 transition-all ${
                  activeSection === item 
                    ? 'text-[#745a27] font-semibold border-b-2 border-[#745a27]' 
                    : 'text-[#010a27] dark:text-[#f9f9f9] font-normal border-b-2 border-transparent hover:text-[#745a27]'
                }`} 
                href={`#${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a className="text-[#010a27] dark:text-[#f9f9f9] font-normal hover:text-[#745a27] transition-colors font-serif text-lg tracking-tight" href="/Haolin_Alex_Liu_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <button onClick={handleCopy} className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label text-sm uppercase tracking-widest hover:bg-primary-container transition-all text-center min-w-[160px]">
              {copied ? "Email Copied!" : "Contact Me"}
            </button>
          </div>
        </div>
      </nav>
      {/* Ticker Header Signature */}
      <div className="mt-[88px] h-8 bg-primary-container flex items-center px-12 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap">
          <span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-[0.3em] flex items-center">
            <span className="mr-2">●</span> TRAJECTORY: TIANJIN — SEATTLE — NEW YORK CITY
          </span>
          <span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-[0.3em] flex items-center opacity-50">
            GLOBAL_STATE // ONLINE
          </span>
        </div>
      </div>
    </>
  );
}
