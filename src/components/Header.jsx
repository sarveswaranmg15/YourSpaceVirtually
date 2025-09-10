import { useState } from "react";
import { cn } from "../utils/cn";

const NavLink = ({ children, href = "#", active }) => (
  <a
    className={cn(
      "px-3 py-2 rounded-md text-sm font-medium hover:text-brand-700 hover:bg-brand-50 transition-colors",
      { "text-brand-700 bg-brand-50": active, "text-slate-600": !active }
    )}
    href={href}
  >
    {children}
  </a>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-slate-900"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            Y
          </span>
          YourSpace
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink active>Home</NavLink>
          <NavLink>Features</NavLink>
          <NavLink>Gallery</NavLink>
          <NavLink>Pricing</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate-600">
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium shadow-card hover:bg-brand-700"
          >
            Get Started
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-700"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container py-3 grid gap-2">
            <NavLink active>Home</NavLink>
            <NavLink>Features</NavLink>
            <NavLink>Gallery</NavLink>
            <NavLink>Pricing</NavLink>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
