"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const companies = [
  { name: "J.P. Morgan", abbr: "JPM" },
  { name: "Ramp", abbr: "RP" },
  { name: "Brex", abbr: "BX" },
  { name: "Checkr", abbr: "CR" },
  { name: "Square", abbr: "SQ" },
  { name: "Vendr", abbr: "VN" },
  { name: "Mercury", abbr: "MC" },
  { name: "Valon", abbr: "VL" },
  { name: "Upstart", abbr: "UP" },
  { name: "Nuvo", abbr: "NV" },
];

function LogoItem({ company }: { company: { name: string; abbr: string } }) {
  return (
    <div className="flex items-center gap-3 px-6 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default">
      <div className="w-10 h-10 rounded-xl bg-secondary border border-border/50 flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary/5 transition-all">
        <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
          {company.abbr}
        </span>
      </div>
      <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap tracking-tight">
        {company.name}
      </span>
    </div>
  );
}

export function TrustLogos() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-sm font-medium text-muted-foreground mb-10 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Cutting-edge, enterprise-class document processing with ATESTO
        </p>
      </div>

      {/* Marquee container */}
      <div
        className={`relative ${isInView ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "200ms" }}
      >
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <div className="flex animate-marquee hover:pause">
          {/* First set */}
          <div className="flex items-center shrink-0">
            {companies.map((company) => (
              <LogoItem key={company.name} company={company} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center shrink-0">
            {companies.map((company) => (
              <LogoItem key={`${company.name}-dup`} company={company} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="text-center group">
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl font-bold text-foreground font-display">
                &gt;99%
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full">
                <div className="h-full w-3/4 bg-primary rounded-full" />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Accuracy Rate</p>
          </div>
          <div className="text-center group">
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl font-bold text-foreground font-display">
                10x
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-copper/20 rounded-full">
                <div className="h-full w-4/5 bg-copper rounded-full" />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Faster Processing</p>
          </div>
          <div className="text-center group">
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl font-bold text-foreground font-display">
                50K+
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full">
                <div className="h-full w-2/3 bg-primary rounded-full" />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Documents Processed</p>
          </div>
          <div className="text-center group">
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl font-bold text-foreground font-display">
                500+
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-copper/20 rounded-full">
                <div className="h-full w-1/2 bg-copper rounded-full" />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Enterprise Teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}
