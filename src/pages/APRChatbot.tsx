export default function APRChatbot() {
  return (
    <>
      <section className="border-b">
        <div className="container py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-brand mb-4">Community Project</p>
          <h1 className="text-3xl md:text-5xl font-black max-w-4xl leading-tight">
            Hyperlocal GPT Chatbot for Blue-Collar Workers in APR Society
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            {["GPT", "Social Impact", "Hyperlocal", "Web"].map((t) => (
              <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 border">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="container py-16 max-w-3xl space-y-10">
          <div>
            <h2 className="text-xl font-bold mb-3">Problem</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In APR Society, Bangalore, local skilled blue-collar workers — painters, carpenters, plumbers, electricians, handymen — depend on word-of-mouth to find jobs. Residents face delays and uncertainty for urgent repairs. Existing gig platforms are too broad, require smartphone fluency, and don't serve hyper-local needs.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Solution</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Integrate a GPT-powered helper chatbot into the society's existing website (<a href="https://www.aprvillas.com/" className="text-accent-brand hover:underline" target="_blank" rel="noopener">aprvillas.com</a>) that queries the already-available blue-collar workers repository. The chatbot accepts simple natural requests — skill, flat/block, desired time, price — and instantly returns up to three nearby, verified matches with a call action.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Why It Works</h2>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4 leading-relaxed">
              <li>Technology on the server — workers don't need new apps</li>
              <li>Preserves direct voice contact for trust</li>
              <li>Solves hyper-local, time-sensitive hiring</li>
              <li>Repository of worker details already exists</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Validation</h2>
            <div className="space-y-3 text-sm text-muted-foreground italic border-l-2 border-accent pl-4">
              <p>"Helped me find a verified plumber within minutes in APR Society." — Resident</p>
              <p>"Quick access to local electricians reduced wait times." — Facility Manager</p>
              <p>"We support a pilot of this chatbot on our website." — RWA President</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
