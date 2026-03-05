export default function About() {
  return (
    <>
      {/* Header */}
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            Building at the intersection of technology, culture, and impact.
          </h1>
        </div>
      </section>

      {/* Narrative */}
      <section className="border-b">
        <div className="container py-16 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">The Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Saanvi Raghavendran is an IB Diploma student based in Bangalore
                with a strong interest in technology, research, and
                interdisciplinary exploration.
              </p>

              <p>
                Her work sits at the intersection of engineering and creative
                expression. She builds machine learning pipelines, explores
                computational models in music, and studies how mathematics can
                describe patterns in cultural systems such as raga structures.
              </p>

              <p>
                Alongside her technical interests, she is deeply involved in
                social impact initiatives. Through Project Setu, she works on
                initiatives that support underserved schools and improve access
                to learning resources.
              </p>

              <p>
                Outside of research and engineering, Saanvi practices
                Bharatnatyam, exploring the connection between rhythm,
                structure, and mathematical symmetry.
              </p>
            </div>
          </div>

          {/* Academic Focus */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Focus Areas</h2>

            <div className="space-y-4">
              <div className="border p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Areas of Interest
                </p>
                <p className="font-bold text-sm">
                  Computer Engineering · Artificial Intelligence · Data Science
                  · Computational Music
                </p>
              </div>

              <div className="border p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Technical Stack
                </p>
                <p className="font-mono text-sm">
                  Python · Flutter · React · Java · Figma
                </p>
              </div>

              <div className="border p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Research Interests
                </p>
                <p className="text-sm">
                  Machine learning applications, generative systems, and
                  mathematical modeling in music and cultural datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Building */}
      <section>
        <div className="container py-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">What I'm Building Next</h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              Current work includes developing SvarAI, a project exploring
              computational approaches to raga generation and musical
              structure.
            </p>

            <p>
              Additional research explores cross-cultural music modeling and
              generative systems that combine machine learning with traditional
              musical grammars.
            </p>

            <p>
              Alongside research, Saanvi continues expanding Project Setu and
              contributing to technology and idea-driven initiatives within her
              school community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}