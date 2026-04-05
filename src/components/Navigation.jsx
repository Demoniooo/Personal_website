export default function Navigation() {
  return (
    <>
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-[#ffffff]/70 dark:bg-[#010a27]/70 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-12 py-6">
          <span className="font-serif text-xl font-bold tracking-tighter text-[#010a27] dark:text-[#f9f9f9]">HAOLIN LIU</span>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-[#745a27] font-semibold border-b-2 border-[#745a27] pb-1 font-serif text-lg tracking-tight" href="#about">About</a>
            <a className="text-[#010a27] dark:text-[#f9f9f9] font-normal hover:text-[#745a27] transition-colors font-serif text-lg tracking-tight" href="#education">Education</a>
            <a className="text-[#010a27] dark:text-[#f9f9f9] font-normal hover:text-[#745a27] transition-colors font-serif text-lg tracking-tight" href="#skills">Skills</a>
            <a className="text-[#010a27] dark:text-[#f9f9f9] font-normal hover:text-[#745a27] transition-colors font-serif text-lg tracking-tight" href="/Haolin_Alex_Liu_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="mailto:hl6593@nyu.edu" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label text-sm uppercase tracking-widest hover:bg-primary-container transition-all text-center">Contact Me</a>
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
