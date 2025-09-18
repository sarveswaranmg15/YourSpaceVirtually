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
  <div className="flex items-center h-16 w-full px-4">
    {/* Left: Logo */}
    <a
      href="#"
      className="flex items-center gap-2 font-semibold text-slate-900"
    >
      <div className="leading-tight ml-3 sm:ml-4">
        <span className="block">YourSpace,</span>
        <span className="block">Virtually.</span>
      </div>
    </a>

    {/* Middle: Nav */}
    <nav className="hidden md:flex flex-1 justify-center items-center gap-1">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#services">Service</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
    </nav>

    {/* Right: Contact */}
    <div className="hidden md:flex items-center gap-3">
      <NavLink href="#contact">Contact</NavLink>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen((v) => !v)}
      className="md:hidden p-2 rounded-lg hover:bg-slate-100 ml-auto"
      aria-label="Menu"
    >
      ...
    </button>
  </div>

      {/* Mobile Nav Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container py-3 grid gap-2">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Service</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
