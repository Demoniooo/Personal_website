export default function Experience() {
  return (
    <section className="bg-surface py-32 px-12 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-24">
          <div className="space-y-4">
            <span className="font-label text-xs text-secondary uppercase tracking-[0.4em]">03. Professional Trajectory</span>
            <h2 className="font-headline text-5xl font-bold text-primary">Industry Experience</h2>
          </div>
          <div className="hidden md:block font-label text-xs text-outline tracking-widest uppercase">
            Applied Quantitative Analysis
          </div>
        </div>
        
        <div className="relative border-l-2 border-outline-variant/20 ml-2 md:ml-6 pl-10 md:pl-16 space-y-20">
          
          {/* Placeholder Internship 1 */}
          <div className="relative group">
             {/* Timeline Node */}
             <div className="absolute -left-[49px] md:-left-[73px] top-6 w-4 h-4 bg-tertiary-fixed-dim rounded-full shadow-[0_0_12px_rgba(0,230,57,0.5)] z-10"></div>
             
             <div className="bg-surface-container-lowest p-10 md:p-14 border border-outline-variant/10 shadow-[0_8px_32px_rgba(1,10,39,0.04)] transition-all group-hover:shadow-[0_16px_48px_rgba(1,10,39,0.06)] relative overflow-hidden">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-tertiary-container text-tertiary-fixed-dim font-label text-[10px] uppercase tracking-tighter">◒ EXECUTED_RECORD</span>
                  <span className="font-label text-sm text-outline-variant font-bold tracking-widest ml-auto">Jan 2024 — Present</span>
                </div>
                
                <h3 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">[Organization Name]</h3>
                <h4 className="font-body text-xl text-on-surface-variant font-medium mb-8">[Quantitative Researcher Intern]</h4>
                
                <div className="bg-surface-container-low p-6 border-l-2 border-secondary mb-8">
                  <span className="font-label text-[10px] text-secondary uppercase block mb-1">Key Deliverables</span>
                  <ul className="list-none space-y-2 font-label text-sm text-primary font-medium leading-relaxed">
                     <li>→ Engineered and optimized high-frequency trading signals resulting in a [X]% improvement in backtest sharpe ratio.</li>
                     <li>→ Processed over [X]TB of tick-level order book data utilizing Python (Pandas/NumPy).</li>
                     <li>→ Developed stochastic volatility models to enhance derivative pricing accuracy by [X]%.</li>
                  </ul>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
