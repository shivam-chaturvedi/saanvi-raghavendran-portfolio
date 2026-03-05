import { Button } from "@/components/ui/button";

const sections = [
  {
    heading: "Problem",
    content: `Carnatic vocal training relies on subjective, time-limited human feedback. Students lack quantifiable, raga-aware guidance between lessons. Existing apps are Western-centric, note-snapping tools that fail to capture continuous pitch control, gamakas, intonation drift, and stability — the core of Carnatic singing quality.`,
  },
  {
    heading: "Solution",
    content: `SvarAI is a mobile AI tutor that listens to a sung phrase and provides interpretable, raga-specific feedback on pitch accuracy, gamaka quality, and stability — while tracking improvement over time. It models Carnatic music as a continuous signal with structured ornamentation.`,
  },
  {
    heading: "What It Does",
    content: `For a sung phrase, SvarAI outputs: pitch stability score, gamaka recognition & quality, swara alignment & intonation drift, confidence score, and improvement trends across sessions. All feedback is explainable and visualized.`,
  },
  {
    heading: "Novelty",
    content: `1. Gamaka-aware pitch analysis — analyzes how pitch moves, not just where it lands. 2. Raga-conditioned, phrase-level feedback grounded in Carnatic grammar. 3. Explainable AI using visualizations instead of black-box scores. 4. Personalized, small-data modeling tailored to each singer.`,
  },
  {
    heading: "Method",
    content: `Primary data: Saanvi's own recordings (sarali, janta varisai, alankaram, raga phrases) recorded over weeks. Feature extraction includes f₀ tracking, pitch contour smoothing, time/frequency analysis. ML baseline: signal-processing + rule-based classification. Advanced: CNN or lightweight Transformer on pitch contours.`,
  },
  {
    heading: "Evaluation Metrics",
    content: `Reduction in pitch variance over sessions. Increased gamaka consistency. Faster pitch stabilization. Lower intonation drift. Optional teacher validation via agreement analysis.`,
  },
  {
    heading: "Impact",
    content: `Educational: Makes daily riyaz more effective with actionable feedback. Cultural: Supports Indian classical music traditions in AI, pushing back against Western-centric music models. Technical: Demonstrates ML on continuous, expressive systems — applicable to Hindustani music, speech therapy, and expressive performance analysis.`,
  },
  {
    heading: "Validation Plan",
    content: `Teacher/institution validation with written feedback. Student pilot with 3–5 vocal students over 2–3 weeks. Public outputs: GitHub repo, technical blog, demo video. Academic submission to Journal of Emerging Investigators and research competitions.`,
  },
];

const deliverables = [
  "Working mobile app (Flutter)",
  "ML pipeline (Python)",
  "Visualization dashboards",
  "Research-style report",
  "Error analysis & future work",
  "GitHub repository + demo video",
];

export default function SvarAI() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Capstone Project</p>
          <h1 className="text-3xl md:text-5xl font-black max-w-4xl leading-tight">
            SvarAI: An Explainable AI Tutor for Pitch Accuracy and Gamaka Control in Carnatic Vocal Music
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            {["AI", "Music Tech", "XAI", "Flutter", "Python", "Signal Processing"].map((t) => (
              <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 border">{t}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-xs px-3 py-1 bg-accent text-accent-foreground font-semibold uppercase tracking-widest">Data Collection Done</span>
            <span className="text-xs px-3 py-1 bg-accent text-accent-foreground font-semibold uppercase tracking-widest">UI Developed</span>
            <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground font-semibold uppercase tracking-widest">Deployment Pending — End of March</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Applying for CREST · Planning patent application</p>
        </div>
      </section>

      {/* Visual Placeholders */}
      <section className="border-b">
        <div className="container py-12 grid md:grid-cols-3 gap-px bg-border">
          {["Pitch Contour Graph", "Variance Chart", "Before / After Comparison"].map((label) => (
            <div key={label} className="bg-card aspect-video flex items-center justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">[{label}]</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="border-b">
        <div className="container py-16 max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold mb-3">{s.heading}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b bg-card">
        <div className="container py-12">
          <h2 className="text-xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-3 gap-px bg-border">
            {[
              { label: "Frontend", value: "Flutter App" },
              { label: "ML Pipeline", value: "Python" },
              { label: "Visualization", value: "Dashboards" },
            ].map((t) => (
              <div key={t.label} className="bg-background p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{t.label}</p>
                <p className="font-mono font-bold">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-b">
        <div className="container py-12 max-w-3xl">
          <h2 className="text-xl font-bold mb-6">Deliverables</h2>
          <div className="space-y-2">
            {deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="w-5 h-5 border flex items-center justify-center text-xs font-mono text-muted-foreground">{i + 1}</span>
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outputs */}
      <section>
        <div className="container py-12 max-w-3xl">
          <h2 className="text-xl font-bold mb-6">Key Outputs</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild><a href="#">Demo Video (Placeholder)</a></Button>
            <Button variant="outline" asChild><a href="#">GitHub Repo (Placeholder)</a></Button>
            <Button variant="outline" asChild><a href="#">Charts & Visualizations</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
