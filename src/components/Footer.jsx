export default function Footer() {
  return (
    <footer className="py-11 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-[clamp(40px,6vw,80px)] font-bold tracking-[-0.04em] uppercase leading-none">
          Let's talk —<br />
          <a
            href="mailto:hl6593@nyu.edu"
            className="border-b-4 border-scarlet transition-colors hover:text-scarlet"
          >
            hl6593@nyu.edu
          </a>
        </div>
        <div className="mt-7 md:mt-[34px] flex flex-col md:flex-row gap-1.5 justify-between text-[11px] uppercase tracking-[0.12em] text-smoke">
          <span>© {new Date().getFullYear()} Haolin (Alex) Liu · New York, NY</span>
          <span className="flex gap-6">
            <a
              className="hover:text-scarlet transition-colors"
              href="https://www.linkedin.com/in/haolin-liu-b73799299/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-scarlet transition-colors"
              href="https://github.com/haolin122"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
