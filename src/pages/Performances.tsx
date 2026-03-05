export default function Performances() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Culture</p>
          <h1 className="text-4xl md:text-5xl font-black">Performances & Culture</h1>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="border-b">
        <div className="container py-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Artist Statement</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Discipline in Bharatnatyam and Carnatic music is not separate from engineering — it is the same muscle. Rhythm teaches timing. Raga teaches pattern recognition. Performance teaches precision under pressure. The hours spent at the nattuvangam translate directly into how I debug code: patiently, methodically, and with reverence for the structure underneath.
          </p>
        </div>
      </section>

      {/* Bharatnatyam */}
      <section className="border-b">
        <div className="container py-16">
          <h2 className="text-2xl font-bold mb-8">Bharatnatyam</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card aspect-[3/4] flex items-center justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">[Performance {i}]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carnatic Music */}
      <section className="border-b">
        <div className="container py-16">
          <h2 className="text-2xl font-bold mb-8">Carnatic Music</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card aspect-video flex items-center justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">[Recital {i}]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candid */}
      <section>
        <div className="container py-16">
          <h2 className="text-2xl font-bold mb-8">Candid Shots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card aspect-square flex items-center justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">[Photo {i}]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
