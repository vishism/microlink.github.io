import Image from "next/image";
import { site } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(165deg,#ffffff_0%,#eef8ff_42%,#e6faf6_100%)] text-[var(--ink)]"
    >
      <div className="hero-grid absolute inset-0" />
      <div className="hero-orb animate-drift left-[-6%] top-[8%] h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(56,189,248,0.45),transparent_68%)]" />
      <div
        className="hero-orb right-[-8%] top-[22%] h-[34rem] w-[34rem] bg-[radial-gradient(circle,rgba(45,212,191,0.38),transparent_70%)]"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="container-xl relative grid min-h-[100svh] items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-28">
        <div className="max-w-4xl">
          <p className="eyebrow animate-rise">Australia · Apps · Web · Integrations</p>
          <h1
            className="display animate-rise mt-6 text-[clamp(3.1rem,8.5vw,6.2rem)] text-[var(--ink)]"
            style={{ animationDelay: "90ms" }}
          >
            <span className="bg-gradient-to-r from-teal-700 via-sky-700 to-sky-500 bg-clip-text text-transparent">
              Microlink
            </span>
            <span className="block text-[var(--ink)]">Solutions</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            We partner with Aussie businesses to build websites, Shopify stores,
            integrations and digital products that pull their weight — measured
            by leads, sales and less admin.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "230ms" }}
          >
            <a href="#contact" className="btn btn-primary">
              Start a project
            </a>
            <a href="#work" className="btn btn-ghost">
              See our work
            </a>
          </div>

          <div
            className="animate-rise mt-14 grid gap-4 border-t border-slate-200/80 pt-8 sm:grid-cols-3"
            style={{ animationDelay: "320ms" }}
          >
            {[
              ["Websites & Shopify", "Built to convert"],
              ["NetSuite & APIs", "Systems that sync"],
              ["FuelGO & products", "Shipped by us"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--ink)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-rise relative mx-auto hidden w-full max-w-md lg:block"
          style={{ animationDelay: "280ms" }}
        >
          <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_65%)] blur-2xl" />
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-300/40 via-white/40 to-sky-300/40 blur-xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/70 p-10 shadow-[0_40px_100px_rgba(2,132,199,0.22)] backdrop-blur-xl">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
            <Image
              src="/brand/microlink-logo.png"
              alt={`${site.name} logo`}
              width={520}
              height={520}
              priority
              className="logo-float relative mx-auto h-auto w-full max-w-[280px] object-contain drop-shadow-[0_20px_40px_rgba(2,132,199,0.25)]"
            />
            <p className="mt-8 text-center font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--ink)]">
              Digital that earns its keep
            </p>
            <p className="mt-2 text-center text-sm text-slate-500">
              Web · Shopify · Integrations · Apps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
