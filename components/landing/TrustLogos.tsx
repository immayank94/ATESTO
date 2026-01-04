"use client";

const companies = [
  { name: "Siemens", abbr: "SI" },
  { name: "Bosch", abbr: "BO" },
  { name: "BASF", abbr: "BF" },
  { name: "Continental", abbr: "CO" },
  { name: "Henkel", abbr: "HE" },
  { name: "Schaeffler", abbr: "SC" },
];

export function TrustLogos() {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by compliance teams at leading manufacturers
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
            >
              {/* Logo placeholder - using text-based logos for demo */}
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-sm font-bold text-muted-foreground">
                  {company.abbr}
                </span>
              </div>
              <span className="text-lg font-semibold text-muted-foreground tracking-tight">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
