import React from "react";

function Services() {
  const services = [
    {
      title: "Virtual Tours & 3D Walkthroughs",
      description:
        "Immersive 360° virtual experiences that allow guests to explore your space before they arrive. Perfect for hotels, restaurants, and event venues.",
      icon: "🌍",
    },
    {
      title: "High-End Photography & Videography",
      description:
        "Professional visual storytelling that captures the essence and luxury of your hospitality space with stunning imagery and cinematic videos.",
      icon: "🎥",
    },
    {
      title: "Digital Marketing & Storytelling",
      description:
        "Strategic marketing campaigns that showcase your unique hospitality experience and drive more bookings and walk-ins.",
      icon: "🎨",
    },
    {
      title: "Web Design & Guest Conversion",
      description:
        "Custom websites designed to convert visitors into guests, featuring seamless booking integration and mobile-responsive design.",
      icon: "🕸️",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Our Premium Services
        </h2>
        <p className="mt-2 text-gray-600">
          Specialized solutions designed exclusively for the hospitality
          industry
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 text-center transition duration-300 ease-out hover:shadow-2xl hover:ring-slate-300 hover:scale-105"
          >
            <div className="text-6xl mb-4 drop-shadow-lg">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
