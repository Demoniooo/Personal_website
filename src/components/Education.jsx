export default function Education() {
  return (
    <section className="bg-surface-container-low py-32 px-12 relative overflow-hidden" id="education">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-24">
          <div className="space-y-4">
            <span className="font-label text-xs text-secondary uppercase tracking-[0.4em]">02. Academic Journey</span>
            <h2 className="font-headline text-5xl font-bold text-primary">Educational Record</h2>
          </div>
          <div className="hidden md:block font-label text-xs text-outline tracking-widest uppercase">
            Quantifying Academic Experience
          </div>
        </div>
        
        <div className="relative border-l-2 border-outline-variant/20 ml-2 md:ml-6 pl-10 md:pl-16 space-y-20">
          
          {/* Master's Record - NYU */}
          <div className="relative group">
             {/* Timeline Node */}
             <div className="absolute -left-[49px] md:-left-[73px] top-6 w-4 h-4 bg-tertiary-fixed-dim rounded-full shadow-[0_0_12px_rgba(0,230,57,0.5)] z-10"></div>
             
             <div className="bg-surface-container-lowest p-10 md:p-14 border border-outline-variant/10 shadow-[0_8px_32px_rgba(1,10,39,0.04)] transition-all group-hover:shadow-[0_16px_48px_rgba(1,10,39,0.06)] relative overflow-hidden">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-tertiary-container text-tertiary-fixed-dim font-label text-[10px] uppercase tracking-tighter">● ACTIVE_ALUMNI</span>
                  <span className="font-label text-sm text-outline-variant font-bold tracking-widest ml-auto">2025 — 2027</span>
                </div>
                
                <h3 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">New York University (NYU Tandon)</h3>
                <h4 className="font-body text-xl text-on-surface-variant font-medium mb-8">Master of Science in Financial Engineering</h4>
                
                <div className="bg-surface-container-low p-6 border-l-2 border-secondary mb-8">
                  <span className="font-label text-[10px] text-secondary uppercase block mb-1">Cumulative GPA</span>
                  <p className="font-label text-2xl text-primary font-bold">3.78 <span className="text-sm font-normal text-outline">/ 4.0</span></p>
                </div>

                <div>
                   <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-4">Core Structural Coursework</span>
                   <div className="flex flex-wrap gap-2">
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20">Stochastic Calculus</span>
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20">Option Pricing Theory</span>
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20">Algorithmic Trading Systems</span>
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20">Market Risk</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Bachelor's Record - UW */}
          <div className="relative group">
             {/* Timeline Node */}
             <div className="absolute -left-[49px] md:-left-[73px] top-6 w-4 h-4 bg-surface-container-high border-2 border-outline-variant rounded-full z-10 transition-colors group-hover:bg-primary-container"></div>
             
             <div className="bg-surface-container-lowest/70 p-10 md:p-14 border border-outline-variant/10 relative overflow-hidden transition-all group-hover:bg-surface-container-lowest">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="font-label text-[10px] uppercase tracking-tighter text-outline px-3 py-1 border border-outline-variant/30">○ ARCHIVED_RECORD</span>
                  <span className="font-label text-sm text-outline-variant font-bold tracking-widest ml-auto">2018 — 2022</span>
                </div>
                
                <h3 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">University of Washington</h3>
                <h4 className="font-body text-xl text-on-surface-variant font-medium mb-8">Bachelor of Science in Computational Finance &amp; Risk Management</h4>
                
                <div className="bg-surface-container-low p-6 border-l-2 border-outline-variant/50 mb-8 transition-colors group-hover:border-secondary">
                  <span className="font-label text-[10px] text-secondary uppercase block mb-1">Cumulative GPA</span>
                  <p className="font-label text-2xl text-primary font-bold">3.73 <span className="text-sm font-normal text-outline">/ 4.0</span></p>
                </div>

                <div>
                   <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-4">Foundation Coursework</span>
                   <div className="flex flex-wrap gap-2">
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20 bg-surface">Time Series Analysis</span>
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20 bg-surface">Linear Algebra</span>
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20 bg-surface">Statistical Inference</span>
                     <span className="font-label text-xs text-primary py-2 px-4 border border-outline-variant/20 bg-surface">Real Analysis</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
