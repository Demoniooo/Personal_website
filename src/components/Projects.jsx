import Section from './Section';

const projects = [
  {
    id: 'P.01',
    course: 'FRE 6883',
    tags: 'C++ · Bootstrap · CAAR',
    title: 'Earnings Event Study & CAAR Analysis',
    description:
      'Sector-neutral event study of how quarterly earnings announcements move Russell 3000 stocks — Beat/Meet/Miss grouping, AAR & CAAR with bootstrap sampling, EOD Historical Data API.',
    files: [
      { label: 'PDF', href: '/6883-proj/fre6883-final-project.pdf' },
      { label: 'GitHub', href: 'https://github.com/FRE6883/fre6883-teamproject-fre6883_team2' },
    ],
  },
  {
    id: 'P.02',
    course: 'FRE 6083',
    tags: 'GARCH · Monte Carlo · Python',
    title: 'GARCH Option Pricing & IV Term Structure',
    description:
      'Compared implied-volatility term structures from Black-Scholes vs GARCH(1,1) simulation on S&P 500 options; 3D IV surfaces show BS overpricing deep OTM calls by up to 8.6%.',
    files: [
      { label: 'Report', href: '/6083-proj/report.pdf' },
      {
        label: 'Slides',
        href: '/6083-proj/Comparing%20IV%20termstructure%20from%20Black%20Scholes%20and%20Volatility%20sumulations%20using%20GARCH(1%2C1)%20(1).pptx',
      },
    ],
  },
  {
    id: 'P.03',
    course: 'FRE 6123',
    tags: 'VaR · CVaR · Stress Testing',
    title: 'Financial Risk Management — FRM Final',
    description:
      'VaR & CVaR estimation, stress testing, and regulatory capital frameworks across market, credit, and operational risk exposures.',
    files: [
      { label: 'Paper', href: '/6123-proj/FRM_Final%20Paper%20(2).pdf' },
      { label: 'Report', href: '/6123-proj/FRM_Project_Report.pdf' },
      { label: 'Slides', href: '/6123-proj/FRM_Final%20project.pptx' },
    ],
  },
  {
    id: 'P.04',
    course: 'Internship',
    tags: 'Python · Research',
    title: 'Quantitative Research — US Market Thesis',
    description:
      'Applied research project from an industry internship: data pipeline construction, statistical modeling, and a full analytical write-up.',
    files: [{ label: 'Thesis', href: '/intern-proj/us_market_thesis.pdf' }],
  },
  {
    id: 'P.05',
    course: 'FRE 7773',
    tags: 'Isolation Forest · LOB · Kaggle',
    title: 'Market Manipulation Detection in LOB Data',
    description:
      '76 session-aware features over millisecond limit-order-book data; Isolation Forest trained on normal samples flags spoofing, layering, and quote stuffing.',
    files: [{ label: 'Report', href: '/7773-proj/7773-report.pdf' }],
  },
  {
    id: 'P.06',
    course: 'Fixed Income',
    tags: 'YTM · PV01 · Python',
    title: 'AI-Assisted Treasury Analytics Validation',
    description:
      'Reviewed GPT-5.5 & Claude drafts against fixed-income pricing requirements, then built a corrected USTreasurySecurity class: 32nds quotes, act/act accrual, Newton-solved YTM, PV01, duration, convexity.',
    files: [
      { label: 'Report', href: '/treasury-ai-proj/treasury-ai-comparison-report.pdf' },
      { label: 'Code', href: '/treasury-ai-proj/treasury-security-corrected.py' },
    ],
  },
  {
    id: 'P.07',
    course: 'Research',
    tags: 'FX · OLS · COFER',
    title: 'FX Ambiguity & Safe-Haven Reserves',
    description:
      'Quarterly FX ambiguity index from 9 currency pairs (Asano 2025) merged with IMF COFER data; OLS on 37 quarters finds r = −0.36 — central banks don\'t chase safe havens under ambiguity.',
    files: [],
  },
];

export default function Projects() {
  return (
    <Section no="03" title="Selected Projects" id="projects">
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={`grid md:grid-cols-[60px_1fr_200px] gap-1.5 md:gap-7 items-start transition-colors hover:bg-[#FAFAFA] ${
            i === 0 ? 'pb-6' : 'py-6 border-t border-hairline'
          }`}
        >
          <span className="text-[15px] font-bold text-scarlet md:pt-[3px]">{project.id}</span>
          <div>
            <h3 className="text-lg md:text-xl font-bold tracking-[-0.015em] mb-2">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#444444] max-w-[68ch]">
              {project.description}
            </p>
            {project.files.length > 0 && (
              <div className="mt-2.5">
                {project.files.map((file) => (
                  <a
                    key={file.label}
                    href={file.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-scarlet text-xs font-bold border-b border-scarlet pb-px mr-3 hover:text-ink hover:border-ink transition-colors"
                  >
                    {file.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="hidden md:block text-right text-[11px] uppercase tracking-[0.1em] text-smoke leading-[1.9]">
            <b className="block text-ink">{project.course}</b>
            {project.tags}
          </div>
        </div>
      ))}
    </Section>
  );
}
