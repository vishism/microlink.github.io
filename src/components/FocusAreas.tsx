import { focusAreas } from "@/data/content";

export function FocusAreas() {
  return (
    <section className="section-pad bg-[var(--paper-soft)]">
      <div className="container-xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Is your business looking for a partner to help with…</p>
          <h2 className="display mt-5 text-[clamp(2.1rem,5vw,3.6rem)] text-[var(--ink)]">
            From the shopfront to the systems behind it
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${(index % 3) + 1} rounded-[1.75rem] border border-slate-200/90 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-10`}
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r from-teal-400 to-sky-400" />
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-slate-600 leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
