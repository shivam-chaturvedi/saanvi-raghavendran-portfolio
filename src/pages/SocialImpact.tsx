export default function SocialImpact() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Social Impact</p>
          <h1 className="text-4xl md:text-5xl font-black">Project Setu & Beyond</h1>
        </div>
      </section>

      {/* Project Setu */}
      <section className="border-b">
        <div className="container py-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-2">Project Setu</h2>
          <p className="text-sm text-muted-foreground mb-8">A Student-Led Peer Enrichment Bridge for Underserved Schools · President (Grade 11) · Partner: Project SETU · Reach: 60+ schools</p>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold mb-3">Problem</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Children in underserved schools (Classes 3–8) rarely receive creative skill exposure, hands-on learning, or confidence-building spaces. Urban private-school students have clubs, workshops, and mentors. Underserved students don't. Meanwhile, youth volunteering is often unstructured one-day drives with no sustained engagement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">The Bridge Model</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Project Setu builds a structured peer-learning bridge: high school volunteers deliver 4–6 week skill modules — age-appropriate, repeatable, and measurable. Each module includes lesson plan, activity sheet, reflection exercise, and showcase day.
              </p>
              <div className="grid md:grid-cols-2 gap-px bg-border border">
                {[
                  { title: "Crochet & Craft", focus: "Fine motor skills, patience, creativity" },
                  { title: "Public Speaking Through Play", focus: "Story circles, theatre games, voice projection" },
                  { title: "Creative Expression Lab", focus: "Poster design, story writing, collaborative murals" },
                  { title: "Growth Mindset Workshops", focus: "Mistake-positive exercises, team challenges" },
                ].map((m) => (
                  <div key={m.title} className="bg-background p-5">
                    <p className="font-bold text-sm mb-1">{m.title}</p>
                    <p className="text-xs text-muted-foreground">{m.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Volunteer System</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recruitment drives → training workshops (teaching basics, child sensitivity) → assigned school teams → recurring visits → reflection & evaluation meetings. This creates consistency and sustainability, not casual volunteering.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border mb-4">
                {[
                  { value: "60+", label: "Schools" },
                  { value: "1,500+", label: "Students / Year" },
                  { value: "100+", label: "Trained Volunteers" },
                  { value: "300+", label: "Student Projects" },
                ].map((m) => (
                  <div key={m.label} className="bg-background p-4 text-center">
                    <p className="text-2xl font-black">{m.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Teachers report more participation and willingness to present. Students display completed crafts and volunteer to lead activities. High school volunteers develop leadership, communication, and social awareness.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">External Validation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                <li>School testimonials and principal feedback</li>
                <li>NGO certification and partnership letters</li>
                <li>Pre/post confidence surveys</li>
                <li>Annual "Setu Showcase Day" with parents and school leaders</li>
                <li>Featured in local newspapers and NGO social media</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">What Makes It Stand Out</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                <li>Scale + structure: 60+ schools with standardized modules — rare for a student-led initiative</li>
                <li>Peer-to-peer model: relatable senior students, not distant adults</li>
                <li>Curriculum-based volunteering with measurable outcomes</li>
                <li>Sustainable ecosystem backed by an established NGO</li>
                <li>Dual impact: transforms both underserved students and youth leaders</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Next Steps</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                <li>Media publication for Project Setu</li>
                <li>Letter from the Deputy Chief Minister of Karnataka</li>
                <li>MoU proposed with Athena (pending parents' response)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dropout Niche */}
      <section className="border-b">
        <div className="container py-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Niche: Dropout Rate in Karnataka</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Saanvi's parents own the partner NGO. She contributes personally and mobilizes other students to address school dropout rates in Karnataka through data-driven initiatives, community workshops, and sustained engagement programs. This work runs parallel to Project Setu and deepens the social impact layer of her portfolio.
          </p>
        </div>
      </section>

      {/* Partnerships */}
      <section>
        <div className="container py-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Partnerships</h2>
          <div className="border p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 bg-secondary">Pending</span>
              <span className="font-bold">MoU with Athena</span>
            </div>
            <p className="text-sm text-muted-foreground">Proposed formal partnership. Awaiting parents' response.</p>
          </div>
        </div>
      </section>
    </>
  );
}
