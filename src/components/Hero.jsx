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
    <section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary-container">
      {/* Background Imagery */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          alt="Monochrome architectural shot of NYU Tandon building" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjTZmzM0MZgdTp9Y5q9eaDPaUpJc0_5NNPv70pIzWEJXEfb41X1cKjNGzTnaWgO3DCRF4uR8YjQW8w8ovw5wjxySNL8E18EvtEjTzn11zlNa_rKuUfZSqK0T-IEW_LHi589uU881js4RDDX_kGVLF9PyXTax9dseqHeA9NMEEgIRBg5AIMObhnir5FlO37KMQmm9qQQeLk-2b-6uyodWPVRwZmKSvVcpCKsw8vEqsSU4l3kJ537Vdu9Oo6360qR8gK99YT_oJTPD0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container/80"></div>
        {/* Random Walk Motif */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-30" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <path className="k-line-path" d="M0,150 L50,140 L100,160 L150,130 L200,150 L250,110 L300,140 L350,100 L400,130 L450,90 L500,120 L550,80 L600,110 L650,70 L700,100 L750,60 L800,90 L850,50 L900,80 L950,40 L1000,70" fill="none" stroke="#745a27" strokeWidth="1"></path>
        </svg>
      </div>
      
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
        
        <div className="flex flex-col md:flex-row gap-6 mt-4 font-label text-sm text-on-primary/80">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-base">mail</span>
            <span>hl6593@nyu.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-base">call</span>
            <span>(206) 532-7879</span>
          </div>
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
