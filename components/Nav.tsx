"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/access", label: "Access" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-widest">
          KURO COFFEE
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-muted transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="menu"
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-line bg-background">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-line/50 text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
