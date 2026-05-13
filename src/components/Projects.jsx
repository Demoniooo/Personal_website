const projects = [
  {
    id: "01",
    course: "FRE 6883",
    tags: ["C++", "Event Study", "Bootstrap", "CAAR", "EOD API"],
    title: "Earnings Event Study & CAAR Analysis",
    description:
      "A sector-neutral event study evaluating how quarterly earnings announcements affect Russell 3000 stock price movements. Built Beat, Meet, and Miss groups from earnings surprise, retrieved adjusted close prices through the EOD Historical Data API, computed AAR and CAAR with bootstrap sampling, and visualized expected CAAR paths with gnuplot.",
    insight:
      '"Earnings surprises produced clearly separated post-announcement CAAR paths, with Beat stocks showing positive momentum and Miss stocks experiencing the strongest negative abnormal returns."',
    files: [
      {
        label: "Final Project (PDF)",
        href: "/6883-proj/fre6883-final-project.pdf",
        icon: "description",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/FRE6883/fre6883-teamproject-fre6883_team2",
        icon: "code",
      },
    ],
  },
  {
    id: "02",
    course: "FRE 6083",
    tags: ["GARCH(1,1)", "Black-Scholes", "Monte Carlo", "Python"],
    title: "GARCH Option Pricing & Implied Volatility Term Structure",
    description:
      "A rigorous examination of S&P 500 option pricing comparing implied volatility term structures derived from classical Black-Scholes and GARCH(1,1) volatility simulations. Constructed 3D implied volatility surfaces and found BS overpriced deep OTM calls by up to 8.6%.",
    insight:
      '"GARCH(1,1) better captures volatility clustering and produces more realistic IV surfaces than the constant-vol Black-Scholes assumption."',
    files: [
      {
        label: "Report (PDF)",
        href: "/6083-proj/report.pdf",
        icon: "description",
      },
      {
        label: "Presentation",
        href: "/6083-proj/Comparing%20IV%20termstructure%20from%20Black%20Scholes%20and%20Volatility%20sumulations%20using%20GARCH(1%2C1)%20(1).pptx",
        icon: "present_to_all",
      },
    ],
  },
  {
    id: "03",
    course: "FRE 6123",
    tags: ["VaR", "CVaR", "Stress Testing", "Risk Management"],
    title: "Financial Risk Management — FRM Final Project",
    description:
      "Comprehensive financial risk management analysis covering Value-at-Risk estimation, CVaR, stress testing, and regulatory capital frameworks. Developed quantitative models to assess and mitigate market, credit, and operational risk exposures.",
    insight:
      '"Stress testing under historical and Monte Carlo scenarios reveals tail-risk exposures invisible to standard VaR at the 95% confidence level."',
    files: [
      {
        label: "Final Paper (PDF)",
        href: "/6123-proj/FRM_Final%20Paper%20(2).pdf",
        icon: "description",
      },
      {
        label: "Project Report",
        href: "/6123-proj/FRM_Project_Report.pdf",
        icon: "summarize",
      },
      {
        label: "Presentation",
        href: "/6123-proj/FRM_Final%20project.pptx",
        icon: "present_to_all",
      },
    ],
  },
  {
    id: "04",
    course: "Internship",
    tags: ["Python", "Data Analysis", "Quantitative Research", "Thesis"],
    title: "Quantitative Research — Internship Project",
    description:
      "Applied quantitative research project completed during an industry internship. Involved data pipeline construction, statistical modeling, and analytical reporting; full write-up available as a PDF thesis.",
    insight:
      '"Real-world data is messy — robust preprocessing and feature engineering proved as critical as model selection in driving analytical accuracy."',
    files: [
      {
        label: "Thesis (PDF)",
        href: "/intern-proj/us_market_thesis.pdf",
        icon: "description",
      },
    ],
  },
  {
    id: "05",
    course: "FRE 7773",
    tags: ["Isolation Forest", "LOB Data", "Anomaly Detection", "Kaggle"],
    title: "Market Manipulation Detection in Limit Order Book Data",
    description:
      "An anomaly-detection pipeline for suspicious trading behavior in millisecond-level limit order book data. Engineered 76 session-aware features across returns, order flow, event density, time gaps, and sequence structure, then trained an Isolation Forest on normal samples to flag manipulative patterns such as spoofing, layering, and quote stuffing.",
    insight:
      '"Session-aware feature engineering mattered more than model complexity: grouping by Date + ExternalSymbol helped the Isolation Forest reach a Kaggle score of 0.97223 while surfacing realistic anomalies in names like MSFT and INTC."',
    files: [
      {
        label: "Report (PDF)",
        href: "/7773-proj/7773-report.pdf",
        icon: "description",
      },
    ],
  },
  {
    id: "06",
    course: "Fixed Income Analytics",
    tags: ["Python", "Treasury Bonds", "YTM", "PV01", "AI Validation"],
    title: "AI-Assisted Treasury Bond Analytics Validation",
    description:
      "A Python implementation and review study for U.S. Treasury note and bond analytics. Compared GPT-5.5 and Claude Opus 4.7 drafts against fixed-income pricing requirements, then built a corrected USTreasurySecurity class covering 32nds quote parsing, actual/actual accrued interest, dirty price, Newton-solved YTM, PV01, duration, and convexity.",
    insight:
      '"Agreement between two AI-generated implementations was not proof of correctness: both drafts matched standard tests but shared a high-impact 100-24++ quote-parsing bug that only specification-level validation caught."',
    files: [
      {
        label: "Corrected Code",
        href: "/treasury-ai-proj/treasury-security-corrected.py",
        icon: "code",
      },
      {
        label: "Comparison Report (PDF)",
        href: "/treasury-ai-proj/treasury-ai-comparison-report.pdf",
        icon: "description",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section
      className="bg-surface-container-low py-32 px-12 relative overflow-hidden"
      id="projects"
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-24">
          <div className="space-y-4">
            <span className="font-label text-xs text-secondary uppercase tracking-[0.4em]">
              03. Selected Records
            </span>
            <h2 className="font-headline text-5xl font-bold text-primary">
              Academic Projects
            </h2>
          </div>
          <div className="hidden md:block font-label text-xs text-outline tracking-widest uppercase">
            Scroll to Explore Project Archives
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-surface-container-lowest border border-outline-variant/10 relative group overflow-hidden ${
                project.course === "FRE 6123"
                  ? "flex flex-col md:flex-row gap-0"
                  : ""
              }`}
            >
              {/* Large project number watermark */}
              <div className="absolute top-0 right-0 p-8 pointer-events-none">
                <span className="font-label text-6xl text-outline-variant/10 select-none">
                  {project.id}
                </span>
              </div>

              <div className="p-10 md:p-12 flex-1">
                {/* Course badge + tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-primary text-on-primary font-label text-[10px] uppercase tracking-tighter">
                    {project.course}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-tertiary-container text-tertiary-fixed-dim font-label text-[10px] uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6 text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {/* Key insight */}
                <div className="bg-surface-container-low p-5 border-l-2 border-secondary mb-10">
                  <span className="font-label text-[10px] text-secondary uppercase block mb-2 tracking-widest">
                    Key Insight
                  </span>
                  <p className="font-label text-sm text-primary font-medium italic">
                    {project.insight}
                  </p>
                </div>

                {/* File links */}
                <div className="flex flex-wrap gap-3">
                  {project.files.map((file) => (
                    <a
                      key={file.label}
                      href={file.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest font-bold text-primary border border-outline-variant/30 px-5 py-3 hover:bg-primary hover:text-on-primary transition-all duration-200"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {file.icon}
                      </span>
                      {file.label}
                      <span className="material-symbols-outlined text-xs opacity-60">
                        open_in_new
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
