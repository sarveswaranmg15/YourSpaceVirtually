const features = [
  {
    title: "Drag & drop",
    desc: "Arrange objects in 3D with smart snapping and physics-aware guides.",
    icon: "M12 6v12m6-6H6",
  },
  {
    title: "Real-time",
    desc: "Collaborate live with cursors, comments, and presence.",
    icon: "M5 13l4 4L19 7",
  },
  {
    title: "Templates",
    desc: "Start fast with pre-built scenes tuned for performance.",
    icon: "M4 6h16v12H4z",
  },
  {
    title: "Embeds",
    desc: "Share anywhere with lightweight, responsive embeds.",
    icon: "M3 12l3-3m0 0l3 3m-3-3v6",
  },
];

const Icon = ({ d }) => (
  <svg
    className="h-6 w-6 text-brand-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Features() {
  return (
    <section className="py-16 lg:py-24 border-t border-slate-200 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything to build faster
          </h2>
          <p className="text-slate-600 mt-3">
            Flexible primitives and smart tools so you can focus on the
            experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-50 flex items-center justify-center">
                <Icon d={f.icon} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
