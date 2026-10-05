"use client";

import Link from "next/link";

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-sm rounded-xl bg-white px-6 py-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-neutral-900">
          Welcome to JobList
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Sign in to post jobs or apply for opportunities
        </p>

        <button
          type="button"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-md border border-neutral-200 bg-slate-50 px-4 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <GitHubIcon className="h-5 w-5 text-neutral-900" />
          Continue with GitHub
        </button>

        <p className="mt-6 text-xs leading-relaxed text-neutral-500">
          By signing in, you agree to our
          <Link href="/terms" className="text-indigo-600 hover:underline">
            Terms of Service
          </Link>
          and
          <Link href="/privacy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </section>
    </main>
  );
}
