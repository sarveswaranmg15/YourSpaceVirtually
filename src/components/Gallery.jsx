const images = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1 }));

export default function Gallery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Showcase
            </h2>
            <p className="text-slate-600">
              A few scenes built by our community.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm hover:bg-slate-50"
          >
            View all
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Scene {img.id}</h3>
                  <button className="text-brand-600 text-sm hover:underline">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
