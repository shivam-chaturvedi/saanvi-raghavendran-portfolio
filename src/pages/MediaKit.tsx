import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const downloads = [
  { label: "One-Page Bio", desc: "A concise biography for press and introductions." },
  { label: "Professional Headshot", desc: "High-resolution headshot for publications." },
  { label: "SvarAI One-Pager", desc: "Project summary sheet for SvarAI." },
  { label: "α-Blend One-Pager", desc: "Research summary sheet for α-Blend." },
  { label: "Project Setu One-Pager", desc: "Impact summary for Project Setu." },
  { label: "Press Mentions", desc: "Compiled press coverage and features." },
  { label: "Letters of Recommendation", desc: "Selected letters (redacted as needed)." },
];

export default function MediaKit() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Media</p>
          <h1 className="text-4xl md:text-5xl font-black">Media Kit</h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Downloadable assets for press, nominations, and partnerships.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border">
            {downloads.map((d) => (
              <div key={d.label} className="bg-background p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-2">{d.label}</h3>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
                <Button variant="outline" size="sm" className="mt-6 w-fit" asChild>
                  <a href="#">
                    <Download size={14} className="mr-2" /> Download
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16 max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Press Inquiries</h2>
          <p className="text-sm text-muted-foreground mb-4">
            For interviews, features, or collaboration requests, reach out via email.
          </p>
          <Button variant="accent" asChild>
            <a href="mailto:saanvi@example.com">Contact for Press</a>
          </Button>
        </div>
      </section>
    </>
  );
}
