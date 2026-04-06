import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("hl6593@nyu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary">
      
      <div className="relative max-w-7xl mx-auto px-12 py-24 flex flex-col items-start gap-8 z-10 w-full">
        <div className="space-y-2">
          <span className="font-label text-sm text-secondary tracking-[0.3em] uppercase">Quantitative Ledger</span>
          <h1 className="font-headline text-6xl md:text-8xl text-on-primary font-bold tracking-tighter leading-none">
            Haolin (Alex) <br/><span className="italic text-secondary-fixed-dim">Liu</span> 
            <span className="text-2xl md:text-4xl font-normal ml-4 opacity-70 tracking-normal" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>刘昊霖</span>
          </h1>
        </div>
        
        <p className="font-body text-xl md:text-2xl text-on-primary-container max-w-2xl leading-relaxed">
          Quantitative Finance · Data Science · Risk Management. 
          <span className="block mt-4 font-label text-sm tracking-widest text-on-primary opacity-60">NYU Tandon School of Engineering / University of Washington</span>
        </p>
        
        <div className="flex items-center gap-2 mt-4 font-label text-sm text-on-primary/80">
          <span className="material-symbols-outlined text-secondary text-base">mail</span>
          <span>hl6593@nyu.edu</span>
        </div>
        
        <div className="flex gap-4 mt-8">
          <a href="/Haolin_Alex_Liu_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-secondary text-on-primary px-8 py-4 rounded font-label text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
            View Resume (PDF) <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
          <button onClick={handleCopy} className="inline-flex items-center justify-center border border-outline-variant/30 text-on-primary px-8 py-4 rounded font-label text-xs uppercase tracking-widest hover:bg-white/5 transition-all min-w-[160px]">
            {copied ? "Email Copied!" : "Contact Me"}
          </button>
        </div>
      </div>
    </section>
  );
}
