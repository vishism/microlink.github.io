import { fuelgo } from "@/data/content";

export function FuelGo() {
  return (
    <section
      id="fuelgo"
      className="section-pad relative overflow-hidden bg-[linear-gradient(165deg,#ffffff_0%,#eef9ff_50%,#e9fbf5_100%)]"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.28),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.22),transparent_70%)]" />
      <div className="container-xl grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <p className="eyebrow">Our product</p>
          <h2 className="display mt-5 text-[clamp(2.2rem,5vw,3.8rem)] text-[var(--ink)]">
            {fuelgo.name}
          </h2>
          <p className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight text-slate-800 md:text-[1.85rem]">
            {fuelgo.headline}
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
            {fuelgo.status}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            {fuelgo.body}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {fuelgo.features.map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[var(--ink)] shadow-sm"
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={fuelgo.href} className="btn btn-primary">
              Explore FuelGO
            </a>
            <a href="#contact" className="btn btn-dark">
              Build a product with us
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_55%)]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-6 text-white shadow-[0_30px_80px_rgba(2,132,199,0.22)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/50">
                  Dianella · Nearby
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-tight">
                  Save 9.4¢/L
                </p>
              </div>
              <span className="rounded-full bg-teal-300/20 px-3 py-1 text-xs font-semibold text-teal-200">
                Best Pick
              </span>
            </div>

            <div className="mt-8 space-y-3">
              {[
                ["BP Malaga", "Diesel · 4.2 km", "181.9¢"],
                ["7-Eleven", "U91 · nearby", "177.9¢"],
                ["Ampol Foodary", "U95 · open now", "193.9¢"],
              ].map(([name, meta, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-white/50">{meta}</p>
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-xl tracking-tight text-sky-200">
                    {price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
