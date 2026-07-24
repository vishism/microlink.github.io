import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-xl">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">What we do</p>
            <h2 className="display mt-5 text-[clamp(2.1rem,5vw,3.6rem)] text-[var(--ink)]">
              Practical digital. Properly built.
            </h2>
          </div>
          <p className="max-w-md text-slate-600 leading-relaxed">
            Shopify, tradie websites, WordPress, NetSuite integrations and custom
            apps — scoped to the outcome, not a pile of buzzwords.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="reveal group grid gap-6 rounded-[1.75rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_20px_50px_rgba(2,132,199,0.1)] md:grid-cols-[0.9fr_1.4fr_1fr] md:p-9"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                  {String(index + 1).padStart(2, "0")} · {service.eyebrow}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)] md:text-[1.75rem]">
                  {service.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed md:pt-7">{service.body}</p>
              <ul className="space-y-2.5 md:pt-7">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
