"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { useActiveSection } from "@/lib/useActiveSection";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "skills", label: "Skills" },
  { href: "experience", label: "Experience" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
    const isHome = pathname === "/";
      const [open, setOpen] = useState(false);
        const active = useActiveSection(isHome ? links.map((l) => l.href) : []);
  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:px-4"
      >
        <nav className="flex w-full max-w-6xl items-center justify-between gap-2 rounded-full border border-line bg-surface/95 px-3 py-2.5 shadow-lg shadow-black/20 backdrop-blur-md sm:gap-3 sm:px-4">
          <div className="min-w-0 shrink-0">
            <BrandLogo className="h-6 sm:h-7" />
          </div>

          <ul className="relative hidden min-w-0 items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={`${isHome ? "" : "/"}#${l.href}`}
                  className={`relative z-10 block whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                    active === l.href ? "text-white" : "text-slate hover:text-fg"
                  }`}
                >
                  {l.label}
                </a>
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 lg:ml-0">
            <a
              href="#contact"
              aria-label="Get in touch"
              className="group hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-purple px-3 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:flex xl:px-4"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-fg transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation"
            className="fixed inset-x-3 top-20 z-40 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-line bg-surface/95 p-4 shadow-lg shadow-black/20 backdrop-blur-md sm:inset-x-4 lg:hidden"
          >
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={`${isHome ? "" : "/"}#${l.href}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium ${
                      active === l.href ? "bg-primary text-white" : "text-slate hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
