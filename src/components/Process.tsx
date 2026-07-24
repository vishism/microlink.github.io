import { process as steps } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="section-pad bg-[var(--paper-soft)]">
      <div className="container-xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">How we work</p>
          <h2 className="display mt-5 text-[clamp(2.1rem,5vw,3.6rem)] text-[var(--ink)]">
            A simple process that keeps everyone honest
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            No mystery timelines. We discover, design, build and launch — with
            clear checkpoints so you always know where things stand.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.step}
              className={`reveal reveal-delay-${(index % 3) + 1} relative rounded-[1.75rem] border border-slate-200/90 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]`}
            >
              <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-sky-500/35">
                {step.step}
              </p>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
