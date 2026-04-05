export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12 px-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4 md:mb-0">
          © 2024 Haolin (Alex) Liu. All Rights Reserved. Built with Precision.
        </span>
        <div className="flex gap-12">
          <a className="font-mono text-[10px] uppercase tracking-widest text-primary hover:text-[#745a27] underline decoration-dotted" href="https://www.linkedin.com/in/haolin-liu-b73799299/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="font-mono text-[10px] uppercase tracking-widest text-primary hover:text-[#745a27] underline decoration-dotted" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
