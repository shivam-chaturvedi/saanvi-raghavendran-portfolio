import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Connect</p>
          <h1 className="text-4xl md:text-5xl font-black">Contact</h1>
        </div>
      </section>

      <section>
        <div className="container py-16 grid md:grid-cols-2 gap-16 max-w-4xl">
          {/* Form Placeholder */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest block mb-2">Name</label>
                <input type="text" className="w-full border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest block mb-2">Email</label>
                <input type="email" className="w-full border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest block mb-2">Message</label>
                <textarea rows={5} className="w-full border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Your message..." />
              </div>
              <Button type="submit" variant="accent" size="lg">Send Message</Button>
            </form>
          </div>

          {/* Direct Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Direct Contact</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Email</p>
                <Button variant="outline" asChild>
                  <a href="mailto:saanvi@example.com">
                    <Mail size={14} className="mr-2" /> saanvi@example.com
                  </a>
                </Button>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">LinkedIn</p>
                <a href="#" className="text-sm text-accent-brand hover:underline">linkedin.com/in/saanvi (Placeholder)</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">GitHub</p>
                <a href="#" className="text-sm text-accent-brand hover:underline">github.com/saanvi (Placeholder)</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
