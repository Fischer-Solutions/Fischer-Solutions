export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-glow px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="mb-6 inline-flex rounded-full border px-4 py-2 text-sm text-primary">404 · Page not found</p>
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          This page <span className="font-display italic font-normal text-gradient">isn’t here.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          The link may be outdated, or the page may have moved. Let’s get you back on track.
        </p>
        <a href="/" className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105">
          Back to home
        </a>
      </div>
    </main>
  );
}
