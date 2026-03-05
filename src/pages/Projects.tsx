import { Link } from "react-router-dom";

const projects = [
  {
    title: "SvarAI",
    subtitle: "Explainable AI Tutor for Carnatic Vocal Music",
    tags: ["AI", "Music Tech", "XAI", "Flutter"],
    to: "/projects/svarai",
    status: "Deployment Pending",
  },
  {
    title: "α-Blend",
    subtitle: "Blending Raga & Western Grammars with Markov Chains",
    tags: ["Research", "Signal Processing", "Sonic Pi"],
    to: "/projects/alpha-blend",
    status: "Completion Mar 2026",
  },
  {
    title: "APR Society Chatbot",
    subtitle: "Hyperlocal GPT Chatbot for Blue-Collar Workers",
    tags: ["GPT", "Social Impact", "Web"],
    to: "/projects/apr-chatbot",
    status: "In Development",
  },
  {
    title: "Internship — Raak Sapphire",
    subtitle: "Engineering internship and industry exposure.",
    tags: ["Internship", "Engineering"],
    to: "#",
    status: "Completed",
  },
  {
    title: "Internship — Thrust Tech India",
    subtitle: "Technology and engineering internship.",
    tags: ["Internship", "Tech"],
    to: "#",
    status: "Completed",
  },
  {
    title: "Math Project",
    subtitle: "New project starting March 2026 with Mentor Mr Abhishek.",
    tags: ["Mathematics", "Research"],
    to: "#",
    status: "Starting Mar 2026",
  },
];

export default function Projects() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Work</p>
          <h1 className="text-4xl md:text-5xl font-black">Projects</h1>
        </div>
      </section>

      <section>
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border">
            {projects.map((p) => (
              <Link
                key={p.title}
                to={p.to}
                className="bg-background p-8 flex flex-col justify-between hover:bg-card transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 border text-accent-brand border-accent">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-accent-brand transition-colors">
                  View Details →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
