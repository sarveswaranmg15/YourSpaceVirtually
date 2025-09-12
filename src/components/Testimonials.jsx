export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        '“Your Space, Virtually transformed our online presence completely. The virtual tour increased our direct bookings by 45% within just three months. Guests now arrive already excited about their stay.”',
      name: 'Sarah Mitchell',
      title: 'General Manager',
      company: 'The Grand Boutique Hotel',
    },
    {
      quote:
        '“The photography and virtual walkthrough captured the exact ambiance we wanted to convey. Our reservation calls increased dramatically, and guests often mention seeing our space online first.”',
      name: 'Marco Rodriguez',
      title: 'Owner & Chef',
      company: 'Bella Vista Restaurant',
    },
    {
      quote:
        '“Working with Your Space, Virtually was seamless. They understood our luxury brand immediately and delivered content that perfectly represents our premium experience. ROI exceeded expectations.”',
      name: 'Jennifer Park',
      title: 'Marketing Director',
      company: 'Oceanview Resort & Spa',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-slate-600">
            Hear from hospitality leaders who've transformed their business with our solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
            >
              <p className="italic text-slate-700">{t.quote}</p>
              <hr className="my-4" />
              <div>
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.title}</p>
                <p className="text-sm text-slate-400">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-slate-500 text-sm">
          Join 150+ satisfied hospitality businesses
        </p>
      </div>
    </section>
  );
}
