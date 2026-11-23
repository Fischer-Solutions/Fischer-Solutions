import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Fischer Solutions" },
      { name: "description", content: "Thank you for reaching out to Fischer Solutions." },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-glow" aria-hidden="true" />
      <div className="relative w-full max-w-2xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
            ✓
          </span>
          Fischer Solutions
        </p>
        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          Thanks for <span className="font-display font-normal italic text-gradient">reaching out.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
          We appreciate you sharing a little about your project. We look forward to learning more.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          Back to Fischer Solutions
        </Link>
      </div>
    </main>
  );
}