import Section from './Section';

export default function Skills() {
  return (
    <Section no="05" title="Stack" id="skills">
      <div className="grid md:grid-cols-3">
        <div className="md:border-r md:border-hairline md:pr-8 md:mr-8">
          <h3 className="text-xs uppercase tracking-[0.16em] text-scarlet font-bold mb-4">
            Expert
          </h3>
          <ul className="text-[19px] md:text-[22px] font-bold tracking-[-0.02em] leading-[1.55]">
            <li>Python</li>
            <li>Pandas</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:border-r md:border-hairline md:pr-8 md:mr-8">
          <h3 className="text-xs uppercase tracking-[0.16em] text-scarlet font-bold mb-4">
            Proficient
          </h3>
          <ul className="text-[19px] md:text-[22px] font-bold tracking-[-0.02em] leading-[1.55]">
            <li>C++</li>
            <li>SQL</li>
            <li>
              R <small className="text-[13px] font-normal text-smoke tracking-normal">/ Matlab</small>
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-xs uppercase tracking-[0.16em] text-scarlet font-bold mb-4">
            Libraries
          </h3>
          <p className="text-base leading-8">
            NumPy · SciPy<br />
            Statsmodels<br />
            Matplotlib<br />
            Scikit-learn
          </p>
        </div>
      </div>
    </Section>
  );
}
