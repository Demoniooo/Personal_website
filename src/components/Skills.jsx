export default function Skills() {
  return (
    <section className="bg-surface py-32 px-12" id="skills">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <span className="font-label text-xs text-secondary uppercase tracking-[0.4em] block mb-4">04. Competencies</span>
          <h2 className="font-headline text-5xl font-bold text-primary mb-12">Technological <br/>Stack</h2>
          {/* Skill Layers */}
          <div className="space-y-8">
            <div>
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-4">Expert Proficiency</span>
              <div className="flex flex-wrap gap-2">
                <span className="font-label text-sm text-primary py-2 px-4 border border-primary/10 bg-surface-container-low">Python</span>
                <span className="font-label text-sm text-primary py-2 px-4 border border-primary/10 bg-surface-container-low">Pandas</span>
                <span className="font-label text-sm text-primary py-2 px-4 border border-primary/10 bg-surface-container-low">Java</span>
              </div>
            </div>
            <div>
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-4">Proficient Tools</span>
              <div className="flex flex-wrap gap-2">
                <span className="font-label text-sm text-on-surface-variant py-2 px-4 border border-outline-variant/30">C++</span>
                <span className="font-label text-sm text-on-surface-variant py-2 px-4 border border-outline-variant/30">SQL</span>
                <span className="font-label text-sm text-on-surface-variant py-2 px-4 border border-outline-variant/30">R</span>
              </div>
            </div>
            <div>
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-4">Financial Libraries</span>
              <p className="font-label text-sm text-secondary font-medium">NumPy, SciPy, Statsmodels, Matplotlib, Scikit-learn</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 bg-surface-container-low p-12">
          <h3 className="font-headline text-2xl font-bold mb-8 flex items-center gap-4">
            Academic Record <span className="h-px bg-outline-variant/30 flex-grow"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="group">
                <span className="font-label text-[10px] text-secondary uppercase block mb-1">Mathematics &amp; Modeling</span>
                <p className="font-body text-sm font-medium border-b border-outline-variant/20 pb-2 group-hover:border-secondary transition-all">Stochastic Calculus, Linear Algebra, Real Analysis</p>
              </div>
              <div className="group">
                <span className="font-label text-[10px] text-secondary uppercase block mb-1">Derivatives &amp; Risk</span>
                <p className="font-body text-sm font-medium border-b border-outline-variant/20 pb-2 group-hover:border-secondary transition-all">Option Pricing Theory, Market Risk, Credit Risk</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="group">
                <span className="font-label text-[10px] text-secondary uppercase block mb-1">Statistics &amp; ML</span>
                <p className="font-body text-sm font-medium border-b border-outline-variant/20 pb-2 group-hover:border-secondary transition-all">Time Series Analysis, Statistical Inference, Neural Networks</p>
              </div>
              <div className="group">
                <span className="font-label text-[10px] text-secondary uppercase block mb-1">Programming</span>
                <p className="font-body text-sm font-medium border-b border-outline-variant/20 pb-2 group-hover:border-secondary transition-all">Algorithmic Trading Systems, Computational Finance</p>
              </div>
            </div>
          </div>
          {/* Abstract Visual Flair: Skill Distribution */}
          <div className="mt-16 flex items-end gap-1 h-32 opacity-40">
            <div className="bg-secondary w-full" style={{ height: "90%" }}></div>
            <div className="bg-secondary w-full" style={{ height: "75%" }}></div>
            <div className="bg-secondary w-full" style={{ height: "85%" }}></div>
            <div className="bg-secondary w-full" style={{ height: "60%" }}></div>
            <div className="bg-secondary w-full" style={{ height: "95%" }}></div>
            <div className="bg-secondary w-full" style={{ height: "70%" }}></div>
            <div className="bg-secondary w-full" style={{ height: "80%" }}></div>
            <div className="bg-secondary w-full" style={{ height: "55%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
