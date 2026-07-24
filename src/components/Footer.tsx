import { Logo } from "@/components/Logo";
import { nav, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[var(--paper-soft)] text-[var(--ink)]">
      <div className="container-xl grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo size={44} showWordmark wordmarkClassName="text-xl" />
          <p className="mt-5 max-w-sm text-slate-600 leading-relaxed">
            Australian digital partner for websites, Shopify, integrations and
            products that actually move the needle.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 transition hover:text-teal-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Contact
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-slate-600 transition hover:text-sky-700"
          >
            {site.email}
          </a>
          <p className="mt-6 text-sm text-slate-400">Based in Australia</p>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-xl flex flex-col gap-2 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
