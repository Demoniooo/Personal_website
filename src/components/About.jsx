import Section from './Section';

export default function About() {
  return (
    <Section no="01" title="Profile" id="about">
      <p className="text-[21px] md:text-[26px] leading-[1.35] font-bold tracking-[-0.02em] max-w-[30ch] mb-6">
        "The purpose of computing is <span className="text-scarlet">insight</span>,
        not numbers." — Richard Hamming
      </p>
      <p className="text-[15px] md:text-base leading-[1.65] text-[#333333] max-w-[62ch]">
        I am a Quantitative Finance graduate student at NYU Tandon with a background
        in Computational Finance and Risk Management (Data Science) from the
        University of Washington. My expertise lies in derivative pricing,
        stochastic modeling, and the application of machine learning within
        high-frequency financial contexts.
      </p>
    </Section>
  );
}
