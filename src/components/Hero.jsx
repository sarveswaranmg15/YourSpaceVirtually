export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
        <div className="space-y-6">
          <span className="inline-flex px-2 py-1 rounded-full text-xs bg-brand-50 text-brand-700 font-medium">
            New • Virtual spaces reimagined
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Bring your space to life, virtually
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-prose">
            Create immersive, interactive virtual spaces with drag-and-drop
            simplicity. Showcase, collaborate, and explore in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand-600 text-white font-medium shadow-card hover:bg-brand-700"
            >
              Start Free
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50"
            >
              Live Demo
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand-100 text-brand-700 text-xs"
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <span>2,500+ creators this month</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-brand-100 via-white to-brand-200 border border-slate-200 shadow-card overflow-hidden">
            <div className="h-full w-full grid grid-cols-3 gap-3 p-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-white border border-slate-200 shadow-sm"
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="rounded-xl bg-white shadow-card border border-slate-200 px-4 py-3 text-sm">
              <b className="block">Realtime collaboration</b>
              <span className="text-slate-600">
                Invite teammates to build together
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
