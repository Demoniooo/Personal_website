export default function Experience() {
  return (
    <section className="bg-surface py-32 px-12 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-24">
          <div className="space-y-4">
            <span className="font-label text-xs text-secondary uppercase tracking-[0.4em]">04. Professional Trajectory</span>
            <h2 className="font-headline text-5xl font-bold text-primary">Industry Experience</h2>
          </div>
          <div className="hidden md:block font-label text-xs text-outline tracking-widest uppercase">
            Applied Quantitative Analysis
          </div>
        </div>
        
        <div className="relative border-l-2 border-outline-variant/20 ml-2 md:ml-6 pl-10 md:pl-16 space-y-20">
          
          {/* Experience 1: Donghai Securities */}
          <div className="relative group">
             {/* Timeline Node */}
             <div className="absolute -left-[49px] md:-left-[73px] top-6 w-4 h-4 bg-tertiary-fixed-dim rounded-full shadow-[0_0_12px_rgba(0,230,57,0.5)] z-10"></div>
             
             <div className="bg-surface-container-lowest p-10 md:p-14 border border-outline-variant/10 shadow-[0_8px_32px_rgba(1,10,39,0.04)] transition-all group-hover:shadow-[0_16px_48px_rgba(1,10,39,0.06)] relative overflow-hidden">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-tertiary-container text-tertiary-fixed-dim font-label text-[10px] uppercase tracking-tighter">◒ EXECUTED_RECORD</span>
                  <span className="font-label text-sm text-outline-variant font-bold tracking-widest ml-auto">Jun 2024 — Aug 2024</span>
                </div>
                
                <h3 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">Donghai Securities</h3>
                <h4 className="font-body text-xl text-on-surface-variant font-medium mb-2">Investment Department Intern</h4>
                <span className="font-label text-xs text-outline tracking-widest">Beijing, CN</span>
                
                <div className="bg-surface-container-low p-6 border-l-2 border-secondary mt-8 mb-8">
                  <span className="font-label text-[10px] text-secondary uppercase block mb-3">Key Deliverables</span>
                  <ul className="list-none space-y-3 font-label text-sm text-primary font-medium leading-relaxed">
                     <li>→ Performed comprehensive market analysis from macro, meso, and micro perspectives.</li>
                     <li>→ Applied logistic regression to forecast CSI All Share Index trends, examining over 10 years of market data and outperforming baseline benchmarks in predicting rising vs. falling curves.</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">Logistic Regression</span>
                  <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">Market Analysis</span>
                  <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">CSI Index</span>
                </div>
             </div>
          </div>
          
          {/* Experience 2: Green Fund */}
          <div className="relative group">
             {/* Timeline Node */}
             <div className="absolute -left-[49px] md:-left-[73px] top-6 w-4 h-4 bg-surface-container-high border-2 border-outline-variant rounded-full z-10 transition-colors group-hover:bg-primary-container"></div>
             
             <div className="bg-surface-container-lowest/70 p-10 md:p-14 border border-outline-variant/10 relative overflow-hidden transition-all group-hover:bg-surface-container-lowest">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="font-label text-[10px] uppercase tracking-tighter text-outline px-3 py-1 border border-outline-variant/30">◒ EXECUTED_RECORD</span>
                  <span className="font-label text-sm text-outline-variant font-bold tracking-widest ml-auto">Jun 2023 — Sep 2023</span>
                </div>
                
                <h3 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">Green Fund</h3>
                <h4 className="font-body text-xl text-on-surface-variant font-medium mb-2">Summer Intern, Investment Department</h4>
                <span className="font-label text-xs text-outline tracking-widest">Tianjin, CN</span>
                
                <div className="bg-surface-container-low p-6 border-l-2 border-outline-variant/50 mt-8 mb-8 transition-colors group-hover:border-secondary">
                  <span className="font-label text-[10px] text-secondary uppercase block mb-3">Key Deliverables</span>
                  <ul className="list-none space-y-3 font-label text-sm text-primary font-medium leading-relaxed">
                     <li>→ Collected and analyzed yield rate data for mid- and long-term bond funds in China spanning the most recent 5 years.</li>
                     <li>→ Discovered cumulative yield rate achieved 19.4% with an annual compound yield rate of 3.8%.</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">Fixed Income</span>
                  <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">Bond Analysis</span>
                  <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">Yield Curve</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
