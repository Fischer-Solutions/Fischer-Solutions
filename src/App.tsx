import { useEffect, useRef, useState, type ReactNode } from "react";

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${inView ? "in" : ""} ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">{children}</p>;
}

const nav = [["About", "#about"], ["Services", "#services"], ["Process", "#process"], ["Work", "#work"], ["Pricing", "#pricing"]];

const services = [
  { icon: "◐", t: "Website Design", d: "Custom-built from scratch for your business. No templates, no bloat — just a site that reflects your brand and turns visitors into customers.", f: ["Custom design system", "Mobile-first build", "Conversion-focused layout"] },
  { icon: "↻", t: "Website Redesign", d: "We rebuild slow, dated sites into fast, modern experiences that rank and convert in Whitestown and Indy.", f: ["Performance audit included", "SEO preservation", "New copy and structure"] },
  { icon: "◈", t: "Hosting & Care Plans", d: "We handle the tech so you can run your business. Updates, backups, security, and actual human support.", f: ["Daily backups and SSL", "Uptime monitoring", "Content edits on request"] },
  { icon: "◎", t: "Local SEO", d: "Show up when Whitestown, Zionsville, Lebanon and surrounding area customers search. Google Business, maps, local intent.", f: ["Google Business optimization", "Local keyword targeting", "Citation and review setup"] },
];

const why = [
  ["90+", "PageSpeed Score", "Sub-1.5s loads mean lower bounce and higher Google ranking."],
  ["100%", "Responsive", "Perfect on iPhone, Android, tablet and desktop. Tested on real devices."],
  ["0", "Templates", "Every site is bespoke. Your competitors won’t have the same site."],
  ["48h", "Support Response", "Real support after launch. Text or call and we actually answer."],
];

const steps = [
  ["Discovery", "We learn your business, customers and goals. A 30-minute call in Whitestown or over Zoom, plus an audit of your current site and competitors."],
  ["Design", "You get a full homepage concept in Figma. We refine until it feels exactly like your business — premium, trustworthy, local."],
  ["Development", "Fast, accessible, SEO-ready code. Content, integrations, booking, payments — whatever you need to run."],
  ["Launch", "Testing, training and go-live. We handle domain, hosting and analytics. A site that works day one and grows with you."],
];

const plans = [
  { n: "Starter", p: "$150", s: "flat", d: "Perfect for new businesses", f: ["One-page custom site", "Mobile optimized", "Basic local SEO", "Contact form + map", "1 round of revisions"], c: "Start with Starter" },
  { n: "Growth", p: "$200", s: "flat", d: "Most businesses start here", f: ["Multi-page (up to 5)", "Booking or lead forms", "Google Business setup", "Blog or service CMS", "Speed optimization 90+", "30-day support"], c: "Choose Growth", hot: true },
  { n: "Premium", p: "$300+", s: "", d: "For scaling operations", f: ["Everything in Growth", "E-commerce / payments", "Advanced automations", "Custom integrations", "Priority support & care plan", "Conversion analytics"], c: "Talk About Premium" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("Not sure yet");
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const choose = (p: string) => { setPlan(p); document.getElementById("contact")?.scrollIntoView(); };

  return (
    <div className="overflow-x-clip">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b" : ""}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="text-lg font-semibold tracking-tight">Fischer <span className="text-primary">Solutions</span></a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-block">Free Quote</a>
          <button aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden text-2xl">{open ? "×" : "≡"}</button>
        </div>
        {open && (
          <nav className="glass flex flex-col gap-1 border-b px-6 pb-6 md:hidden animate-in fade-in slide-in-from-top-2">
            {[...nav, ["Contact", "#contact"]].map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-2xl font-medium">{l}</a>)}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen flex-col items-center justify-center bg-glow px-6 pt-24 text-center">
        <p className="animate-rise mb-8 rounded-full border px-4 py-1.5 text-xs text-muted-foreground">Serving Whitestown · Zionsville · Lebanon · Surrounding Areas</p>
        <h1 className="animate-rise max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl" style={{ animationDelay: "120ms" }}>
          Websites that <span className="font-display italic font-normal text-gradient">actually convert.</span>
        </h1>
        <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "240ms" }}>
          Custom, fast, mobile-friendly sites for local businesses. No templates. No page builders. Just clean code that ranks and sells.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: "360ms" }}>
          <a href="#contact" className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105">Request Free Quote</a>
          <a href="#work" className="rounded-full border px-7 py-3.5 font-medium transition-colors hover:bg-muted">View Our Work →</a>
        </div>
        <div className="animate-rise mt-20 grid w-full max-w-3xl grid-cols-3 divide-x rounded-2xl border bg-card/50" style={{ animationDelay: "480ms" }}>
          {[["100%", "Responsive"], ["90+", "PageSpeed"], ["Local", "Whitestown based"]].map(([a, b]) => (
            <div key={b} className="py-6"><div className="text-3xl font-semibold md:text-4xl">{a}</div><div className="mt-1 text-xs text-muted-foreground md:text-sm">{b}</div></div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y py-5 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-2xl font-display italic text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, i) => ["Website Design", "✦", "Redesigns", "✦", "Hosting & Care", "✦", "Local SEO", "✦", "Helping Indiana Small Businesses", "✦"].map((w, j) => <span key={`${i}-${j}`}>{w}</span>))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl gap-16 px-6 py-32 md:grid-cols-2 md:items-center">
        <Reveal>
          <Eyebrow>About Fischer Solutions</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Who we are.</h2>
          <p className="mt-6 text-lg text-muted-foreground">Fischer Solutions is a web design business focused on helping small businesses establish a strong online presence. We believe every company deserves a website that is fast, professional, and easy to use.</p>
          <p className="mt-4 text-lg text-muted-foreground">Our goal is to create websites that not only look great but also help businesses build trust, attract customers, and grow with confidence.</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="animate-float relative rounded-2xl border bg-card p-10">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-glow blur-2xl" />
            <p className="text-sm text-muted-foreground">Meet the founder</p>
            <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-semibold text-primary-foreground">MF</div>
            <h3 className="mt-6 text-3xl font-semibold">Michael Fischer</h3>
            <p className="text-muted-foreground">Web Designer & Founder</p>
            <p className="mt-2 text-sm text-primary">📍 Whitestown, Indiana</p>
            <p className="mt-6 font-display text-xl italic leading-relaxed">“I’m a young developer from Indiana who enjoys building websites, software, and technology solutions that make things easier.”</p>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="bg-card/40 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Built to grow your business, <span className="font-display italic font-normal text-muted-foreground">not just look nice.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground">Speed, clarity, and turning Google searches into booked jobs.</p>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <div className="group h-full rounded-2xl border bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <div className="text-4xl text-primary transition-transform duration-500 group-hover:rotate-180">{s.icon}</div>
                  <h3 className="mt-6 text-2xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-muted-foreground">{s.d}</p>
                  <ul className="mt-6 space-y-2 text-sm">{s.f.map((f) => <li key={f} className="flex gap-2"><span className="text-primary">✓</span>{f}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <Reveal className="text-center">
          <Eyebrow>Why Fischer Solutions</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight md:text-7xl">We build like your <br /><span className="text-gradient">business depends on it.</span></h2>
        </Reveal>
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4">
          {why.map(([n, t, d], i) => (
            <Reveal key={t} delay={i * 100} className="h-full">
              <div className="h-full bg-background p-8">
                <div className="text-6xl font-semibold tracking-tight text-primary">{n}</div>
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-card/40 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">From idea to launch <span className="font-display italic font-normal text-primary">in 2–3 weeks.</span></h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">Clear steps, no surprises. Built for busy owners in Central Indiana.</p>
          </Reveal>
          <div className="mt-16 space-y-4">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="group grid items-baseline gap-4 border-t py-8 md:grid-cols-[120px_1fr_2fr]">
                  <span className="font-display text-5xl italic text-muted-foreground transition-colors group-hover:text-primary">0{i + 1}</span>
                  <h3 className="text-3xl font-semibold">{t}</h3>
                  <p className="text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <Eyebrow>Featured Projects</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Real businesses. <br />Real results in Indiana.</h2>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            { loc: "Carmel, IN", tag: "Barbershop Booking Site", t: "True Barbers", d: "Online booking that cut no-shows by 40%. Built for a Main St. shop.", stat: "−40%", sl: "no-shows", href: "https://truebarbers.fischersolutions.nx.kg/" },
            { loc: "Whitestown", tag: "Lead Generation Site", t: "Landscaping", d: "Quote funnel and seasonal galleries. 3x more qualified leads in the first 60 days.", stat: "3×", sl: "qualified leads", href: "https://fischerlewislawncare.gt.tc/" },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 120}>
              <a href={p.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col rounded-2xl border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40">
                <div className="flex justify-between text-xs text-muted-foreground"><span>{p.loc}</span><span>{p.tag}</span></div>
                <div className="my-10"><span className="text-7xl font-semibold text-gradient">{p.stat}</span><span className="ml-2 text-muted-foreground">{p.sl}</span></div>
                <h3 className="text-2xl font-semibold">{p.t}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{p.d}</p>
                <span className="mt-6 text-primary transition-transform group-hover:translate-x-1">View Project →</span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <a href="#contact" className="flex h-full flex-col justify-end rounded-2xl border border-dashed bg-glow p-8 transition-colors hover:border-primary">
              <p className="text-xs text-muted-foreground">Your next project</p>
              <h3 className="mt-4 text-2xl font-semibold">Your site could be here</h3>
              <p className="mt-2 text-muted-foreground">Ready to grow your business online? Start with a site built to bring in more customers.</p>
              <span className="mt-6 text-primary">Start Now →</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-card/40 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Simple pricing. <span className="font-display italic font-normal text-muted-foreground">No retainers.</span></h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Flat fees. You own your site. Hosting and care are optional after launch — no lock-in.</p>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div className={`relative flex h-full flex-col rounded-2xl border p-8 ${p.hot ? "border-primary bg-surface md:-translate-y-4" : "bg-background"}`}>
                  {p.hot && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Most Popular</span>}
                  <h3 className="text-xl font-semibold">{p.n}</h3>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                  <div className="my-8"><span className="text-6xl font-semibold tracking-tight">{p.p}</span> <span className="text-muted-foreground">{p.s}</span></div>
                  <ul className="flex-1 space-y-3 text-sm">{p.f.map((f) => <li key={f} className="flex gap-2"><span className="text-primary">✓</span>{f}</li>)}</ul>
                  <button onClick={() => choose(p.n)} className={`mt-8 rounded-full py-3 font-medium transition-transform hover:scale-[1.03] ${p.hot ? "bg-primary text-primary-foreground" : "border hover:bg-muted"}`}>{p.c}</button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground">All projects include ownership transfer, training video, and launch support. Payment plans available.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" />Now booking</p>
            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">Ready to <span className="font-display italic font-normal text-gradient">grow?</span></h2>
            <p className="mt-6 text-lg text-muted-foreground">Tell us about your business. We’ll reply with ideas, timeline, and flat pricing — no sales pitch. If you’re local, we can meet in Whitestown.</p>
            <div className="mt-10 space-y-4">
              <a href="tel:+13177588631" className="block rounded-2xl border p-5 transition-colors hover:border-primary"><div className="text-xl font-semibold">☎ +1 (317) 758-8631</div><div className="text-sm text-muted-foreground">Call or text, Whitestown IN</div></a>
              <a href="mailto:contact@fischersolutions.nx.kg" className="block rounded-2xl border p-5 transition-colors hover:border-primary"><div className="text-xl font-semibold break-all">✉ contact@fischersolutions.nx.kg</div><div className="text-sm text-muted-foreground">Usually replies in a few hours</div></a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">◆ No spam. We build websites, not email lists.</p>
          </Reveal>
          <Reveal delay={150}>
            <form action="https://preview--formcraft0.lovable.app/api/public/f/bb0ba4be-2b9d-4c5f-9825-8ee80dc73237" method="POST" encType="multipart/form-data" className="space-y-4 rounded-2xl border bg-card p-8">
              <input type="hidden" name="_subject" value="New website inquiry" />
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              {[["name", "Your name", true], ["business", "Business name", false], ["email", "Email", true], ["phone", "Phone (optional)", false]].map(([n, l, r]) => (
                <input key={n as string} name={n as string} placeholder={l as string} required={r as boolean} type={n === "email" ? "email" : "text"} className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary" />
              ))}
              <select name="plan" value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:border-primary">
                {["Not sure yet", "Starter", "Growth", "Premium"].map((o) => <option key={o}>{o}</option>)}
              </select>
              <textarea name="message" placeholder="Message" rows={4} required className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:border-primary" />
              <label className="block text-sm text-muted-foreground">
                Attachment (optional)
                <input type="file" name="attachment" className="mt-2 block w-full text-sm" />
              </label>
              <button type="submit" className="w-full rounded-full bg-primary py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]">Send</button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Fischer Solutions · Whitestown, Indiana
      </footer>
    </div>
  );
}
