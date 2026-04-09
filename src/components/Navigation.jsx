import { useState, useEffect } from 'react';

export default function Navigation() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'projects', 'experience', 'skills'];
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

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("hl6593@nyu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = ['about', 'education', 'projects', 'experience', 'skills'];

  return (
    <>
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-[#ffffff]/70 dark:bg-[#010a27]/70 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 py-6">
          <span className="font-serif text-xl font-bold tracking-tighter text-[#010a27] dark:text-[#f9f9f9]">HAOLIN LIU</span>
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item}
                className={`font-serif text-lg tracking-tight transition-all ${
                  activeSection === item 
                    ? 'text-[#745a27] font-bold underline underline-offset-[8px] decoration-2 decoration-[#745a27]' 
                    : 'text-[#010a27] dark:text-[#f9f9f9] font-normal hover:text-[#745a27]'
                }`} 
                href={`#${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a className="text-[#010a27] dark:text-[#f9f9f9] font-normal hover:text-[#745a27] transition-all font-serif text-lg tracking-tight" href="/Haolin_Alex_Liu_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <button onClick={handleCopy} className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label text-sm uppercase tracking-widest hover:bg-primary-container transition-all text-center min-w-[160px]">
              {copied ? "Email Copied!" : "Contact Me"}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-outline-variant/30 text-[#010a27] dark:text-[#f9f9f9] hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="absolute top-4 right-4 left-4 bg-white dark:bg-[#010a27] border border-outline-variant/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant/15">
              <span className="font-serif text-base font-bold tracking-tight text-[#010a27] dark:text-[#f9f9f9]">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition text-[#010a27] dark:text-[#f9f9f9]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            <div className="px-2 py-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-4 rounded-xl font-serif text-base tracking-tight transition ${
                    activeSection === item
                      ? 'bg-black/5 dark:bg-white/10 text-[#745a27] font-bold'
                      : 'text-[#010a27] dark:text-[#f9f9f9] hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  <span className="material-symbols-outlined text-[18px] opacity-70">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>

            <div className="p-4 pt-2 border-t border-outline-variant/15 grid grid-cols-2 gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant/30 px-4 py-3 font-label text-[11px] uppercase tracking-widest font-bold text-[#010a27] dark:text-[#f9f9f9] hover:bg-black/5 dark:hover:bg-white/10 transition"
                href="/Haolin_Alex_Liu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
              <button
                onClick={(e) => {
                  handleCopy(e);
                  setMobileMenuOpen(false);
                }}
                className="inline-flex items-center justify-center rounded-xl bg-primary text-on-primary px-4 py-3 font-label text-[11px] uppercase tracking-widest font-bold hover:bg-primary-container transition"
              >
                {copied ? "Email Copied!" : "Contact Me"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Ticker Header Signature */}
      <div className="mt-[88px] h-8 bg-primary-container flex items-center px-6 md:px-12 overflow-hidden">
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
