"use client";

const testimonialData = [
  { quote: "ATESTO reduced our compliance processing time by 90%. We can now focus on strategic work.", name: "Sarah Chen", title: "Head of Compliance", company: "EcoFashion" },
  { quote: "The accuracy is remarkable. We catch more issues now than we did with manual review.", name: "Marcus Weber", title: "Supply Chain Director", company: "GreenTech" },
  { quote: "Easy integration with our existing systems. The API is well documented.", name: "Priya Sharma", title: "CTO", company: "TraceOrigin" },
  { quote: "Our team loves it. They can process 10x more documents without burnout.", name: "David Kim", title: "Operations Manager", company: "MaterialsPlus" },
  { quote: "The learning feature means it gets better every week. Incredible ROI.", name: "Emma Johnson", title: "Compliance Lead", company: "SafeSupply" },
  { quote: "We went from 3 days to process a batch to under 2 hours.", name: "Thomas Muller", title: "QA Director", company: "CertifyNow" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-g">
      <div className="container-g">
        <div className="text-center mb-12">
          <span className="section-label">[ TESTIMONIALS ]</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">From Compliance Teams That Use ATESTO</h2>
          <p className="mt-4 text-[#666]">See what compliance managers are saying</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((t, i) => (
            <div key={i} className="card-g">
              <p className="text-[#1a1a1a] mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2d5a3d] flex items-center justify-center text-white font-semibold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-[#666]">{t.title}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
