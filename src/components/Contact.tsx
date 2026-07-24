import { site } from "@/data/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0d9488_0%,#0284c7_55%,#38bdf8_100%)] py-[clamp(4.5rem,10vw,8rem)] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.16),transparent_35%)]" />
      <div className="container-xl relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center !text-white">
            Let&apos;s work together
          </p>
          <h2 className="display mt-5 text-[clamp(2.4rem,6vw,4.4rem)]">
            Ready to make your digital stuff earn its keep?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Tell us about the website, Shopify store, integration or product
            you&apos;ve got in mind. We&apos;ll come back with a clear next step —
            no hard sell.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="btn bg-white text-teal-800 shadow-[0_14px_34px_rgba(7,11,20,0.18)] hover:bg-sky-50"
            >
              Email {site.email}
            </a>
            <a href="#packages" className="btn btn-outline-light">
              Review packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
