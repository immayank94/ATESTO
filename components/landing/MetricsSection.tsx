"use client";

export function MetricsSection() {
  return (
    <section className="section-spacing bg-section-alt section-g bg-[#e8f0e8]">
      <div className="container-g">
        <div className="text-center mb-12">
          <span className="section-label">[ DATA-DRIVEN RESULTS ]</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Process documents faster with ATESTO.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-g">
            <div className="text-sm font-mono text-[#666] mb-4">Manual Data Entry</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Without ATESTO</span>
                  <span className="font-semibold">20 hrs</span>
                </div>
                <div className="h-4 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div className="h-full w-full bg-[#666] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>With ATESTO</span>
                  <span className="font-semibold text-[#2d5a3d]">1.8 hrs</span>
                </div>
                <div className="h-4 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div className="h-full w-[9%] bg-[#2d5a3d] rounded-full" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-2xl font-serif text-[#2d5a3d]">10x faster processing</p>
          </div>
          
          <div className="card-g">
            <div className="text-sm font-mono text-[#666] mb-4">Extraction Accuracy</div>
            <div className="flex items-end justify-between h-32 gap-2 mb-4">
              {[65, 78, 85, 92, 95, 98].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-[#2d5a3d] rounded-t" style={{ height: h + '%' }} />
                  <span className="text-xs text-[#666]">M{i+1}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#666]">Accuracy improves over time as ATESTO learns from your corrections</p>
          </div>
        </div>
      </div>
    </section>
  );
}
