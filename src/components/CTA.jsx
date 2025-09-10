export default function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 p-8 md:p-12 bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Ready to build your space?
              </h2>
              <p className="mt-2 text-white/80">
                Start free, upgrade anytime. No credit card required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-brand-700 font-medium hover:bg-white/90"
              >
                Create Account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
