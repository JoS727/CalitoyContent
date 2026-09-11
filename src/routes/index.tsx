import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSession } from "@/lib/auth-client";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  const { data: session, isPending } = useSession();

  // Authenticated users get sent straight into the workspace, as before.
  useEffect(() => {
    if (!isPending && session?.user?.id) {
      void navigate({ to: "/dashboard", replace: true });
    }
  }, [isPending, session?.user?.id, navigate]);

  if (isPending || session?.user?.id) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-md text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content antialiased">
      <LandingNav />
      <main>
        <Hero />
        <Features />
        <WhySection />
        <Pricing />
        <CtaBand />
      </main>
      <LandingFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function LandingNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-base-100/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <img
            src="/transparent-logo.png"
            alt="Calitoy Content"
            className="size-8 rounded-lg"
          />
          <span className="text-[15px] font-semibold tracking-tight">
            Calitoy Content
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-base-content/70 md:flex">
          <a href="#features" className="transition-colors hover:text-base-content">
            Features
          </a>
          <a href="#why" className="transition-colors hover:text-base-content">
            Why Calitoy
          </a>
          <a href="#pricing" className="transition-colors hover:text-base-content">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/sign-in"
            className="btn btn-ghost btn-sm text-base-content/80 hover:text-base-content"
          >
            Sign In
          </Link>
          <Link to="/sign-up" className="btn btn-primary btn-sm">
            Get Access
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.28] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, #7c3aed 0%, rgba(124,58,237,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 text-center md:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-base-content/70">
          <span className="size-1.5 rounded-full bg-primary" />
          A Calitoy property · SEO intelligence, refined
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          Your SEO Intelligence
          <br />
          Platform.{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Owned by You.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-base-content/65 md:text-lg">
          The precision alternative to bloated, overpriced SEO suites. Rank
          tracking, audits, backlinks, and an AI agent — everything you need,
          nothing you don&apos;t. From $19/mo.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/sign-up" className="btn btn-primary btn-lg w-full sm:w-auto">
            Get Access
          </Link>
          <Link
            to="/sign-in"
            className="btn btn-outline btn-lg w-full border-white/15 text-base-content hover:border-white/30 hover:bg-white/[0.04] sm:w-auto"
          >
            Sign In
          </Link>
        </div>
        <p className="mt-5 text-xs text-base-content/45">
          60–85% cheaper than Ahrefs, Semrush, Moz &amp; SE Ranking.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */

const FEATURES: { title: string; desc: string; icon: React.ReactNode }[] = [
  {
    title: "Rank Tracking",
    desc: "Monitor keyword positions daily across regions and devices with clean, trustworthy signal.",
    icon: <IconTrend />,
  },
  {
    title: "Site Audits",
    desc: "Automated technical crawls surface the issues that actually move rankings — prioritized, not noisy.",
    icon: <IconShield />,
  },
  {
    title: "Keyword Research",
    desc: "Discover high-intent opportunities with volume, difficulty, and SERP context in one view.",
    icon: <IconSearch />,
  },
  {
    title: "Backlink Analysis",
    desc: "Understand your link profile and your competitors' — spot gaps and toxic risks fast.",
    icon: <IconLink />,
  },
  {
    title: "Search Performance",
    desc: "Native Google Search Console integration turns raw impressions into decisions.",
    icon: <IconChart />,
  },
  {
    title: "AI Agent · SAM",
    desc: "SAM, your SEO AI Model, delivers on-demand strategy, audits, and answers in plain language.",
    icon: <IconSpark />,
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Capabilities"
        title="Everything the enterprise suites have. None of the bloat."
        sub="One focused platform for the work that compounds."
      />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.035]"
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              {f.icon}
            </div>
            <h3 className="text-base font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-base-content/60">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Calitoy Content                                                 */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    title: "Precision",
    desc: "Clean data and prioritized signal. No vanity metrics, no dashboards you'll never open — only what changes decisions.",
  },
  {
    title: "Speed",
    desc: "Built on Cloudflare's edge for instant loads and fast crawls. Your data, delivered without the wait.",
  },
  {
    title: "Intelligence",
    desc: "SAM turns your SEO data into strategy on demand — the analyst that never sleeps, at a fraction of the cost.",
  },
];

function WhySection() {
  return (
    <section id="why" className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="Why Calitoy Content"
          title="Precision. Speed. Intelligence."
          sub="The principles behind every decision we ship."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="relative pl-6">
              <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-primary to-transparent" />
              <div className="text-sm font-mono text-primary/70">
                0{i + 1}
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-base-content/60">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Pricing"
        title="Enterprise SEO intelligence at startup pricing."
        sub="No seat traps. No feature paywalls buried in the fine print."
      />

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
        {/* Core */}
        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
          <h3 className="text-lg font-semibold">Core</h3>
          <p className="mt-1 text-sm text-base-content/55">
            For focused operators &amp; growing sites.
          </p>
          <div className="mt-6 flex items-baseline gap-1.5">
            <span className="text-4xl font-semibold tracking-tight">$19</span>
            <span className="text-sm text-base-content/50">/mo</span>
          </div>
          <p className="mt-1 text-xs text-base-content/45">
            or $15/mo billed annually
          </p>
          <ul className="mt-6 space-y-3 text-sm text-base-content/70">
            <PriceItem>Rank tracking</PriceItem>
            <PriceItem>Keyword research</PriceItem>
            <PriceItem>Site audits</PriceItem>
            <PriceItem>Basic analytics</PriceItem>
          </ul>
          <Link
            to="/sign-up"
            className="btn btn-outline mt-8 border-white/15 text-base-content hover:border-white/30 hover:bg-white/[0.04]"
          >
            Get Core
          </Link>
        </div>

        {/* Pro (highlighted) */}
        <div className="relative flex flex-col rounded-2xl border border-primary/50 bg-primary/[0.06] p-8 shadow-[0_0_60px_-15px_rgba(124,58,237,0.5)]">
          <div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-content">
            Most Popular
          </div>
          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="mt-1 text-sm text-base-content/55">
            The full intelligence stack, incl. SAM.
          </p>
          <div className="mt-6 flex items-baseline gap-1.5">
            <span className="text-4xl font-semibold tracking-tight">$79</span>
            <span className="text-sm text-base-content/50">/mo</span>
          </div>
          <p className="mt-1 text-xs text-base-content/45">
            or $63/mo billed annually
          </p>
          <ul className="mt-6 space-y-3 text-sm text-base-content/80">
            <PriceItem highlighted>Everything in Core</PriceItem>
            <PriceItem highlighted>AI agent — SAM</PriceItem>
            <PriceItem highlighted>Backlink analysis</PriceItem>
            <PriceItem highlighted>Search Console integration</PriceItem>
            <PriceItem highlighted>Competitor analysis</PriceItem>
            <PriceItem highlighted>Unlimited projects</PriceItem>
          </ul>
          <Link to="/sign-up" className="btn btn-primary mt-8">
            Get Pro
          </Link>
        </div>
      </div>

      {/* Competitor comparison callout */}
      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 md:p-8">
        <p className="text-center text-sm font-medium text-base-content/80">
          The same intelligence — for{" "}
          <span className="text-primary">60–85% less</span>.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-6">
          <CompareCol name="Calitoy Pro" price="$79" highlight />
          <CompareCol name="Ahrefs Std" price="$249" />
          <CompareCol name="SE Ranking" price="$279" />
          <CompareCol name="Moz Pro" price="$179" />
          <CompareCol name="Semrush" price="$117" />
          <CompareCol name="Serpstat" price="$100" />
        </div>
        <p className="mt-6 text-center text-xs text-base-content/45">
          Competitor pricing as of Sept 2026, mid-tier plans. Comparison for
          illustration.
        </p>
      </div>
    </section>
  );
}

function CompareCol({
  name,
  price,
  highlight,
}: {
  name: string;
  price: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center rounded-xl border p-3 text-center ${
        highlight
          ? "border-primary/50 bg-primary/10"
          : "border-white/[0.06] bg-white/[0.01]"
      }`}
    >
      <span
        className={`text-lg font-semibold tracking-tight ${
          highlight ? "text-primary" : "text-base-content/70"
        }`}
      >
        {price}
      </span>
      <span className="mt-0.5 text-[11px] text-base-content/50">{name}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band                                                            */
/* ------------------------------------------------------------------ */

function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-base-200 to-base-100 p-10 text-center md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-[100px]"
          style={{ background: "#7c3aed" }}
        />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Take control of your SEO.
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-base-content/65">
          Join operators who traded bloated suites for precision. Get access
          from $19/mo.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Link to="/sign-up" className="btn btn-primary btn-lg">
            Get Access
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function LandingFooter() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm md:flex-row">
        <div className="flex items-center gap-2.5">
          <img
            src="/transparent-logo.png"
            alt="Calitoy Content"
            className="size-6 rounded-md"
          />
          <span className="text-base-content/60">
            Calitoy Content is a{" "}
            <span className="font-medium text-base-content/80">Calitoy</span>{" "}
            property.
          </span>
        </div>
        <div className="flex items-center gap-6 text-base-content/60">
          <Link to="/sign-in" className="transition-colors hover:text-primary">
            Sign In
          </Link>
          <Link to="/sign-up" className="transition-colors hover:text-primary">
            Get Access
          </Link>
          <span className="text-base-content/30">
            © {new Date().getFullYear()} Calitoy
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-base-content/55">{sub}</p>
      ) : null}
    </div>
  );
}

function PriceItem({
  children,
  highlighted,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <IconCheck
        className={highlighted ? "text-primary" : "text-base-content/40"}
      />
      <span>{children}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Icons (inline, no deps)                                             */
/* ------------------------------------------------------------------ */

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={`mt-0.5 size-4 shrink-0 ${className ?? ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

function IconTrend() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 15l6-6" />
      <path d="M11 6l1-1a4 4 0 015.7 5.7l-1 1" />
      <path d="M13 18l-1 1A4 4 0 016.3 13.3l1-1" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <rect x="7" y="11" width="3" height="6" rx="0.5" />
      <rect x="12" y="7" width="3" height="10" rx="0.5" />
      <rect x="17" y="13" width="3" height="4" rx="0.5" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
    </svg>
  );
}
