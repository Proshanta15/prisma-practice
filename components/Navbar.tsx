"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
      <path d="m9.5 13 1.8 1.8L15 11" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-b-neutral-200 bg-white shadow-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BriefcaseIcon className="h-6 w-6 text-[#1e3a6e]" />
          <span className="text-lg font-bold text-neutral-900">Job Board</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6 text-xs text-neutral-600 sm:gap-8">
          <li>
            <Link href="/jobs" className="flex items-center gap-1">
              <span>Browse Jobs</span>
            </Link>
          </li>
          <li>
            <Link href="/jobs/post" className="flex items-center gap-1">
              <span>Post a Job</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="flex items-center gap-1">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/auth/signin" className="flex items-center gap-1">
              <span>Sign In</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
