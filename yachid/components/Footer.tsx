import { GitBranch } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { SOCIALS } from "@/lib/data";

const COPYRIGHT_YEAR = 2026;

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full min-w-0 overflow-x-clip border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:grid-cols-3 sm:gap-8">
        <div className="col-span-2 min-w-0 sm:col-span-1">
          <BrandLogo className="h-7" />
          <p className="mt-3 max-w-xs text-sm text-slate">
            Ideas &middot; Code &middot; Impact.
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-fg">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate transition hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-fg">Connect</p>
          <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-slate transition hover:border-primary hover:text-fg"
            >
              <GitBranch className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-slate transition hover:border-primary hover:text-fg"
            >
              <span className="text-xs font-bold">in</span>
            </a>
            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-slate transition hover:border-primary hover:text-fg"
            >
              <span className="text-sm font-bold">X</span>
            </a>
          </div>
        </div>
      </div>

      <p className="w-full border-t border-line px-4 py-5 text-center text-xs leading-relaxed text-slate sm:px-5">
        &copy; {COPYRIGHT_YEAR} Jamgbadi Eneye Tehillah. All rights reserved.
      </p>
    </footer>
  );
}
