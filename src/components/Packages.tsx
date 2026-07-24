import { customEngagements, packages } from "@/data/content";

export function Packages() {
  return (
    <section
      id="packages"
      className="section-pad bg-[linear-gradient(180deg,#f3f9fd_0%,#ffffff_55%,#f0faf7_100%)]"
    >
      <div className="container-xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Website packages</p>
          <h2 className="display mt-5 text-[clamp(2.1rem,5vw,3.6rem)] text-[var(--ink)]">
            Clear pricing. No smoke and mirrors.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Straight-up packages for Aussie businesses. Domain and Cloudflare DNS
            included where noted — email hosting is always separate.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {packages.map((pack) => (
            <article
              key={pack.name}
              className={`reveal flex flex-col rounded-[1.75rem] border p-7 ${
                pack.featured
                  ? "border-teal-300 bg-white shadow-[0_24px_60px_rgba(13,148,136,0.16)] ring-1 ring-teal-200/80"
                  : "border-slate-200/90 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
              }`}
            >
              {pack.featured ? (
                <span className="mb-4 w-fit rounded-full bg-gradient-to-r from-teal-500 to-sky-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  Most popular
                </span>
              ) : (
                <span className="mb-4 h-6" />
              )}
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
                {pack.name}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight text-teal-700">
                {pack.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {pack.blurb}
              </p>
              <ul className="mt-7 flex-1 space-y-2.5">
                {pack.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                    <span className="mt-1 text-teal-600">✓</span>
                    {item}
                  </li>
                ))}
                {pack.excludes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate-400">
                    <span className="mt-1">–</span>
                    Excludes {item.toLowerCase()}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn mt-8 w-full ${pack.featured ? "btn-primary" : "btn-dark"}`}
              >
                Enquire
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-10">
          <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
            Need something more custom?
          </h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            Integrations, NetSuite work, WordPress and app builds are scoped to
            the job. Tell us what you&apos;re trying to fix and we&apos;ll come
            back with a clear quote.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {customEngagements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[var(--paper-soft)] p-5"
              >
                <h4 className="font-semibold text-[var(--ink)]">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
