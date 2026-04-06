const projects = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
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
    id: "04",
    course: "Health Analytics",
    tags: ["React", "Firebase", "Polynomial Regression", "Public Health"],
    title: "Health: Drug Overdose in USA",
    description:
      "Interactive dashboard on U.S. drug overdose mortality using aggregate public data. Examines death-rate trends by age (2000–2018), including the sharp rise after 2013; defines a government-style concern metric to rank overdose types (e.g. synthetic opioids and heroin in 2018); and forecasts rates by demographic with cross-validated polynomial regression versus simpler linear models.",
    insight:
      '"Trends and forecasts converge on young and middle-aged adults bearing the heaviest burden—targeted prevention, treatment access, and education matter as much as the models."',
    files: [
      {
        label: "Live App",
        href: "https://coconut-analysis-68819.web.app/",
        icon: "language",
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
              02. Selected Records
            </span>
            <h2 className="font-headline text-5xl font-bold text-primary">
              Quantitative Analysis
            </h2>
          </div>
          <div className="hidden md:block font-label text-xs text-outline tracking-widest uppercase">
            Scroll to Explore Project Archives
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-surface-container-lowest border border-outline-variant/10 relative group overflow-hidden ${
                index === 1
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
