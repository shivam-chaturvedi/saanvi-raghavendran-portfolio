import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const metrics = [
  { label: "AMC 12A Score", value: "150/150" },
  { label: "Dance Experience", value: "12 years" },
  { label: "Schools Impacted", value: "60+" },
  { label: "Core Stacks", value: "Flutter · React · Java · Python" },
];

const highlights = [
  {
    title: "SvarAI",
    desc: "Explainable AI tutor for Carnatic vocal music — gamaka-aware pitch analysis and raga-conditioned feedback.",
    to: "/projects/svarai",
    tags: ["AI", "Music Tech", "XAI"],
  },
  {
    title: "α-Blend",
    desc: "Blending raga and Western melodic grammars with Markov chains in Sonic Pi.",
    to: "/projects/alpha-blend",
    tags: ["Research", "Signal Processing", "Music"],
  },
  {
    title: "Project Setu",
    desc: "Student-led peer enrichment bridge serving 60+ underserved schools.",
    to: "/social-impact",
    tags: ["Social Impact", "Education", "Leadership"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b">
        <div className="container py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">
            Grade 11 · United World Academy
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] max-w-4xl">
            Saanvi Raghavendran
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Tech-savvy and a cultural enthusiast, blending American and Indian heritage, writing code for a brighter world — trained in Bharatnatyam and rooted in Carnatic music.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="accent">
              <Link to="/projects">View Projects <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact <Mail className="ml-1" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-b bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`py-8 px-4 ${i > 0 ? "border-l" : ""}`}
            >
              <p className="text-2xl md:text-3xl font-black">{m.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-black mb-12">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {highlights.map((h) => (
              <Link
                key={h.title}
                to={h.to}
                className="bg-background p-8 flex flex-col justify-between hover:bg-card transition-colors group"
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {h.tags.map((t) => (
                      <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent-brand group-hover:underline">
                  Read More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Summary */}
      <section>
        <div className="container py-20 max-w-3xl">
          <h2 className="text-3xl font-black mb-6">About Saanvi</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Grade 11 IB Diploma student at United World Academy, Bangalore, pursuing HL Mathematics AA, Physics, and Chemistry. Saanvi builds at the intersection of artificial intelligence, music technology, and social impact — driven by the belief that rigorous engineering and cultural depth are not opposites, but amplifiers of each other.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From developing an explainable AI tutor for Carnatic vocal music to leading enrichment programs across 60+ underserved schools, her work is grounded in data, designed with empathy, and built to scale.
          </p>
          <Button asChild variant="outline">
            <Link to="/about">Full Story →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
