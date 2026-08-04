export default function Section({ no, title, id, children }) {
  return (
    <section id={id} className="border-b-2 border-ink">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-[190px_1fr]">
        <div className="flex items-baseline gap-3.5 border-b border-hairline pt-8 pb-4 md:block md:border-b-0 md:border-r-2 md:border-ink md:py-12 md:pr-6">
          <div className="text-[30px] md:text-[40px] font-bold tracking-[-0.04em] leading-none text-scarlet">{no}</div>
          <h2 className="text-base font-bold uppercase tracking-[0.06em] md:mt-3">{title}</h2>
        </div>
        <div className="py-8 md:py-12 md:pl-11">{children}</div>
      </div>
    </section>
  );
}
