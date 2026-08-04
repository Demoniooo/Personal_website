import Section from './Section';

const schools = [
  {
    when: '2025 — 2027',
    name: 'New York University, Tandon',
    degree: 'Master of Science in Financial Engineering',
    courses: [
      'Quantitative Methods',
      'Derivative Securities',
      'Financial Risk Management',
      'Financial Econometrics',
      'ML in Financial Engineering',
      'Financial Computing in C++',
    ],
  },
  {
    when: '2021 — 2025',
    name: 'University of Washington',
    degree: 'BS, Computational Finance & Risk Management',
    courses: [
      'Time Series Analysis',
      'Linear Algebra',
      'Statistical Inference',
      'Real Analysis',
    ],
  },
];

export default function Education() {
  return (
    <Section no="02" title="Education" id="education">
      {schools.map((school, i) => (
        <div
          key={school.name}
          className={`grid md:grid-cols-[170px_1fr] gap-2 md:gap-8 ${
            i === 0 ? 'pb-7' : 'py-7 border-t border-hairline'
          }`}
        >
          <div className="text-xs font-bold tracking-[0.1em] uppercase text-smoke md:pt-1.5">
            {school.when}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-[-0.02em]">{school.name}</h3>
            <h4 className="text-[15px] text-smoke mt-1 mb-3.5">{school.degree}</h4>
            <div className="flex flex-wrap gap-2">
              {school.courses.map((course) => (
                <span
                  key={course}
                  className="text-[10.5px] uppercase tracking-[0.08em] font-bold border border-ink px-2.5 py-1"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
