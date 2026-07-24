import { work } from "@/data/content";

export function Work() {
  return (
    <section id="work" className="section-pad bg-white">
      <div className="container-xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="display mt-5 text-[clamp(2.1rem,5vw,3.6rem)] text-[var(--ink)]">
            Sites we&apos;ve built for real Aussie businesses
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            From tradie lead-gen to Shopify storefronts and event experiences —
            each one designed to look sharp and do a job.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {work.map((project, index) => (
            <a
              key={project.domain}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${(index % 3) + 1} group relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff,#f7fbff)] p-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_60px_rgba(2,132,199,0.12)] md:p-9`}
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-sky-500 transition duration-500 group-hover:scale-x-100" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                {project.category}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)] md:text-[1.85rem]">
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-sky-700">{project.domain}</p>
              <p className="mt-5 leading-relaxed text-slate-600">{project.summary}</p>
              <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]">
                Visit site
                <span className="transition group-hover:translate-x-1">→</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
