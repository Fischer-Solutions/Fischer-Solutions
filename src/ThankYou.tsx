export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-glow px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="mb-6 inline-flex rounded-full border px-4 py-2 text-sm text-primary">Message received</p>
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Thanks for <span className="font-display italic font-normal text-gradient">reaching out.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Your message is on its way. We’ll be in touch soon to talk about your business and next steps.
        </p>
        <a href="/#top" className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105">
          Back to Fischer Solutions
        </a>
      </div>
    </main>
  );
}
