export default function About() {
  return (
    <section className="bg-surface py-32 px-12" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="font-label text-xs text-secondary uppercase tracking-[0.4em]">01. Profile</span>
          <h2 className="font-headline text-4xl font-bold text-primary">Technical <br/>Philosophy</h2>
        </div>
        <div className="md:col-span-8 flex flex-col gap-8 border-l border-outline-variant/20 pl-12">
          <p className="font-headline text-2xl leading-snug text-on-surface-variant italic">
            "Bridging mathematical precision with economic intuition to decode complex market dynamics and risk architectures."
          </p>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            I am a Quantitative Finance graduate student at NYU Tandon with a background in mathematics and statistics from the University of Washington. My expertise lies in derivative pricing, stochastic modeling, and the application of machine learning within high-frequency financial contexts. I focus on building robust models that account for market ambiguity and tail-risk volatility.
          </p>
        </div>
      </div>
    </section>
  );
}
