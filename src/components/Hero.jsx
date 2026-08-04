import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("hl6593@nyu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header id="top" className="border-b-2 border-ink">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-14 md:py-[90px]">
        <div className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-scarlet font-bold mb-5 md:mb-7">
          Quantitative Finance — Portfolio 2026
        </div>
        <h1 className="text-[clamp(64px,11vw,150px)] leading-[0.92] tracking-[-0.045em] font-bold uppercase">
          Haolin<br />(Alex) Liu{' '}
          <span
            className="block mt-4 text-[17px] tracking-[0.4em] font-normal text-smoke whitespace-nowrap md:inline md:mt-0 md:text-[0.28em] md:tracking-[0.1em] md:align-super"
            style={{ fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif' }}
          >
            刘昊霖
          </span>
        </h1>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mt-9 md:mt-[54px] items-end">
          <p className="text-[17px] md:text-[19px] leading-normal max-w-[46ch]">
            Quantitative Finance · Data Science · Risk Management. Building robust
            models that account for market ambiguity and tail-risk volatility.
          </p>
          <div className="text-xs uppercase tracking-[0.12em] leading-[1.9] md:leading-[2.1] text-smoke md:text-right">
            <b className="text-ink">NYU Tandon</b> — MS Financial Engineering<br />
            <b className="text-ink">Univ. of Washington</b> — BS CFRM<br />
            New York · hl6593@nyu.edu
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3.5 mt-8 md:mt-[42px]">
          <a
            href="/Haolin_Alex_Liu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink bg-ink text-white text-center px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-scarlet hover:border-scarlet"
          >
            View Resume{' '}
            <svg
              className="inline-block w-[11px] h-[11px] ml-1 -translate-y-px"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M2 10L10 2M4 2h6v6" />
            </svg>
          </a>
          <button
            onClick={handleCopy}
            className="border-2 border-ink text-center px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white sm:min-w-[180px]"
          >
            {copied ? 'Email Copied!' : 'Contact Me'}
          </button>
        </div>
      </div>
    </header>
  );
}
