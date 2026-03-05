import { Button } from "@/components/ui/button";

const timeline = [
  { stage: "Ideation & Research Question", duration: "21 days" },
  { stage: "Review of Literature", duration: "21 days" },
  { stage: "Introduction", duration: "7 days" },
  { stage: "Methodology", duration: "7 days" },
  { stage: "Data Collection", duration: "21 days" },
  { stage: "Data Analysis", duration: "14 days" },
  { stage: "Results and Discussion", duration: "10 days" },
  { stage: "Conclusion, Abstract, Draft, Edits", duration: "10 days" },
  { stage: "Journal Formatting", duration: "7 days" },
  { stage: "Submit for Publication", duration: "2 days" },
];

export default function AlphaBlend() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Research Project</p>
          <h1 className="text-3xl md:text-5xl font-black max-w-4xl leading-tight">
            α-Blend: Blending Raga and Western Melodic Grammars with Markov Chains in Sonic Pi
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Research", "Markov Chains", "Sonic Pi", "Python", "Music Theory"].map((t) => (
              <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 border">{t}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Completion expected end of March · Applying for Sigma Xi</p>
        </div>
      </section>

      <section className="border-b">
        <div className="container py-16 max-w-3xl space-y-12">
          <div>
            <h2 className="text-xl font-bold mb-3">Research Questions</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-4">
              <li>Can Markov chains trained separately on raga note grammar and Western diatonic melody be convexly combined via a tunable parameter α to generate hybrids that remain harmonically coherent?</li>
              <li>How does Markov order (1 vs 2) change perceived authenticity and novelty?</li>
              <li>Which mathematics/physics-based objective metrics best track listener judgments for these hybrids?</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Methodology</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experimental + Quantitative: symbolic modeling, audio rendering, with an evaluative listener component. Raga rule lists converted to 12-TET pitch classes. Western melodic corpora (e.g., JSB Chorales) key-normalized. α-fusion implemented via matrix mixing, per-step switching, and logit/temperature mixing. Rendered to MIDI and auditioned in Sonic Pi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Objective Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border">
              {["Pitch-Class Divergence (JSD)", "Keyness", "Cross-Entropy / Perplexity", "Tonal-Centroid Tension", "Roughness / Harmonicity", "Listener Ratings (optional)"].map((m) => (
                <div key={m} className="bg-background p-4 text-xs font-mono">{m}</div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Expected Outcomes</h2>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-4">
              <li>Journal publication (short paper, methods + results)</li>
              <li>Conference presentation (poster/demo)</li>
              <li>Research competition entry</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3">Tentative journals: JEI, National High School Journal of Science, Curieux Academic Journal</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Timeline</h2>
            <div className="border">
              <div className="grid grid-cols-2 bg-card font-semibold text-xs uppercase tracking-widest p-3 border-b">
                <span>Stage</span>
                <span>Duration</span>
              </div>
              {timeline.map((t, i) => (
                <div key={i} className={`grid grid-cols-2 p-3 text-sm ${i < timeline.length - 1 ? "border-b" : ""}`}>
                  <span>{t.stage}</span>
                  <span className="text-muted-foreground">{t.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12 max-w-3xl">
          <h2 className="text-xl font-bold mb-6">Resources</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild><a href="#">Paper PDF (Placeholder)</a></Button>
            <Button variant="outline" asChild><a href="#">Code Repository (Placeholder)</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
