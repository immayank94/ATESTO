"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const companies = [
  { name: "Microsoft", style: "font-bold" },
  { name: "Siemens", style: "font-bold tracking-wide" },
  { name: "BASF", style: "font-bold" },
  { name: "Bosch", style: "font-bold" },
  { name: "SAP", style: "font-bold tracking-wider" },
  { name: "Adidas", style: "font-bold lowercase" },
  { name: "BMW", style: "font-bold tracking-widest" },
  { name: "Henkel", style: "font-bold" },
  { name: "Continental", style: "font-medium" },
  { name: "Daimler", style: "font-bold tracking-wide" },
];

function LogoItem({ name, style }: { name: string; style: string }) {
  return (
    <div className="flex items-center justify-center px-8 lg:px-12">
      <span className={`text-xl lg:text-2xl text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 ${style}`}>
        {name}
      </span>
    </div>
  );
}

export function TrustLogos() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="py-16 lg:py-20 border-y border-border/30 bg-secondary/20 overflow-hidden"
    >
      <div className="container-custom mb-8">
        <p 
          className={`text-center text-sm font-medium text-muted-foreground uppercase tracking-wider ${
            isInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          Trusted by industry leaders worldwide
        </p>
      </div>
      
      <div 
        className={`relative ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ animationDelay: '200ms' }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          <div className="flex shrink-0">
            {companies.map((company, i) => (
              <LogoItem key={`a-${i}`} {...company} />
            ))}
          </div>
          <div className="flex shrink-0">
            {companies.map((company, i) => (
              <LogoItem key={`b-${i}`} {...company} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-12">
        <div 
          className={`flex flex-wrap justify-center gap-8 lg:gap-16 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '400ms' }}
        >
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold font-display text-foreground">500+</p>
            <p className="text-sm text-muted-foreground mt-1">Enterprise Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold font-display text-foreground">2M+</p>
            <p className="text-sm text-muted-foreground mt-1">Documents Processed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold font-display text-foreground">98.7%</p>
            <p className="text-sm text-muted-foreground mt-1">Extraction Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold font-display text-foreground">&lt;3s</p>
            <p className="text-sm text-muted-foreground mt-1">Avg. Processing Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
