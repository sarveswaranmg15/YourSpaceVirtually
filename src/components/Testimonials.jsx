const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Designer",
    quote:
      "It felt like magic the first time our team built a space together — everything just clicked.",
  },
  {
    name: "Priya Singh",
    role: "3D Artist",
    quote:
      "The templates are polished and the editor is buttery smooth. A joy to use.",
  },
  {
    name: "Daniel Lee",
    role: "Founder",
    quote: "We shipped our virtual showroom in a day. Our customers love it.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
          Loved by creators
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">
                <b className="text-slate-900 font-medium">{t.name}</b> •{" "}
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
