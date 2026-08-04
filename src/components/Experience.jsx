import Section from './Section';

const jobs = [
  {
    when: 'Jul — Sep 2026',
    company: 'China Securities Co., Ltd. (CSC)',
    role: 'FinTech Intern, Information Technology · Beijing',
    bullets: [
      'Owned end-to-end backend development of an AI-assisted narrative generation feature for the firm\'s AML system (Java, Spring Boot, MyBatis, MySQL).',
      'Designed a submit / async-invoke / poll API chain joining 13 data-warehouse profile fields with due-diligence inputs, calling the firm\'s internal LLM platform.',
    ],
    chips: ['Java', 'Spring Boot', 'MySQL', 'LLM Integration', 'AML'],
  },
  {
    when: 'Jun — Aug 2024',
    company: 'Donghai Securities',
    role: 'Investment Department Intern · Beijing',
    bullets: [
      'Macro / meso / micro market analysis; logistic regression forecasting CSI All Share Index trends over 10+ years of data, outperforming baseline benchmarks.',
    ],
    chips: ['Logistic Regression', 'CSI Index'],
  },
  {
    when: 'Jun — Sep 2023',
    company: 'Green Fund',
    role: 'Summer Intern, Investment Department · Tianjin',
    bullets: [
      'Analyzed 5-year yields of Chinese mid/long-term bond funds — 19.4% cumulative, 3.8% annual compound.',
    ],
    chips: ['Fixed Income', 'Yield Curve'],
  },
];

export default function Experience() {
  return (
    <Section no="04" title="Experience" id="experience">
      {jobs.map((job, i) => (
        <div
          key={job.company}
          className={`grid md:grid-cols-[170px_1fr] gap-2 md:gap-8 ${
            i === 0 ? 'pb-7' : 'py-7 border-t border-hairline'
          }`}
        >
          <div className="text-xs font-bold tracking-[0.1em] uppercase text-smoke md:pt-1.5">
            {job.when}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-[-0.02em]">{job.company}</h3>
            <h4 className="text-[15px] text-smoke mt-1 mb-3.5">{job.role}</h4>
            <ul>
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed pl-5 relative mb-2 max-w-[72ch] before:content-['—'] before:absolute before:left-0 before:text-scarlet"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3.5">
              {job.chips.map((chip) => (
                <span
                  key={chip}
                  className="text-[10.5px] uppercase tracking-[0.08em] font-bold border border-scarlet text-scarlet px-2.5 py-1"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
