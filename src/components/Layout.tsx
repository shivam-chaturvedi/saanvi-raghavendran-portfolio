import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/social-impact", label: "Social Impact" },
  { to: "/performances", label: "Performances" },
  { to: "/awards", label: "Awards" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="text-lg font-bold tracking-tight">
            SAANVI<span className="text-accent-brand">.</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  pathname === l.to
                    ? "text-accent-brand"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t bg-background">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-xs font-semibold uppercase tracking-widest border-b ${
                  pathname === l.to
                    ? "text-accent-brand"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card">
        <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-lg mb-2">
              SAANVI<span className="text-accent-brand">.</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tech builder · Cultural enthusiast · Grade 11 scholar at United World Academy, Bangalore.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3">Quick Links</p>
            <div className="flex flex-col gap-1">
              {navLinks.slice(0, 5).map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3">Connect</p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <a href="mailto:saanvi@example.com" className="hover:text-foreground transition-colors">
                saanvi@example.com
              </a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-4 text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Saanvi Raghavendran. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
