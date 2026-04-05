export default function Projects() {
  return (
    <section className="bg-surface-container-low py-32 px-12 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-24">
          <div className="space-y-4">
            <span className="font-label text-xs text-secondary uppercase tracking-[0.4em]">02. Selected Records</span>
            <h2 className="font-headline text-5xl font-bold text-primary">Quantitative Analysis</h2>
          </div>
          <div className="hidden md:block font-label text-xs text-outline tracking-widest uppercase">
            Scroll to Explore Project Archives
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project 1: GARCH */}
          <div className="bg-surface-container-lowest p-12 relative group overflow-hidden border border-outline-variant/10 md:col-span-12">
            <div className="absolute top-0 right-0 p-8">
              <span className="font-label text-4xl text-outline-variant/20">01</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-tertiary-container text-tertiary-fixed-dim font-label text-[10px] uppercase tracking-tighter">GARCH(1,1)</span>
              <span className="px-3 py-1 bg-tertiary-container text-tertiary-fixed-dim font-label text-[10px] uppercase tracking-tighter">Monte Carlo</span>
              <span className="px-3 py-1 bg-tertiary-container text-tertiary-fixed-dim font-label text-[10px] uppercase tracking-tighter">Python</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-6 text-primary group-hover:text-secondary transition-colors cursor-pointer">GARCH Option Pricing &amp; Implied Volatility</h3>
            <p className="font-body text-on-surface-variant mb-12 max-w-xl">
              A rigorous examination of S&amp;P 500 option pricing using GARCH models to address the volatility clustering neglected by standard Black-Scholes.
            </p>
            <div className="bg-surface-container-low p-6 border-l-2 border-secondary mb-8">
              <span className="font-label text-[10px] text-secondary uppercase block mb-2">Key Research Insight</span>
              <p className="font-label text-sm text-primary font-medium italic">"Constructed 3D implied volatility surface, found BS model overpriced deep OTM calls by up to 8.6%."</p>
            </div>
            <a className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary transition-all" href="#">
              Repository Archive <span className="material-symbols-outlined text-sm">database</span>
            </a>
          </div>
          
          {/* Project 2: FX Ambiguity */}
          <div className="md:col-span-12 bg-surface-container-lowest p-12 flex flex-col md:flex-row gap-12 items-center border border-outline-variant/10">
            <div className="md:w-1/2">
              <img 
                className="w-full h-64 object-cover rounded opacity-80 grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Clean, minimalist data visualization showing currency fluctuations and ambiguity index overlays" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw_rrb-wiaOlLMV_RRd9WClxC5spQ9WdzoDuqU1ZFXx267Wun3aDlNr810ybOJnIDxA18xlFlhe0Dl1RV1yDBWUg-59GQLZEnL0Wd2v4UMnBBc5FXkpi4H8ET6Z0pVM71QF-CyPXZx4wN3fLEUUj0hl9BOc53XFyYVnqeKhANc39A3As0VFjvF0V4p9XCe0WgQg8f8-n-lpWcLbDyGyRHH_Og8RyrN3HxFVvHgrm1whjk_Mulsr3CpYsMwaHnNIralSVtCK29sx-U"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="flex gap-2">
                <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">OLS Regression</span>
                <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">IMF COFER</span>
                <span className="font-label text-[10px] text-secondary border border-secondary/30 px-2 py-0.5">Asano(2025)</span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-primary">FX Ambiguity &amp; Safe-Haven Reserve Allocation</h3>
              <p className="font-body text-on-surface-variant">
                Investigation into central bank behaviors during periods of high monetary uncertainty.
              </p>
              <div className="p-6 bg-surface-container border-l-2 border-primary">
                <p className="font-label text-sm italic">
                  "Built quarterly FX Ambiguity Index; found central banks did not increase safe-haven holdings during high ambiguity (r = -0.36)."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
