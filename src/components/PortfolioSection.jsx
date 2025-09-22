export default function PortfolioSection() {
  const portfolioItems = [
    {
      category: "5-Star Hotel",
      title: "Grand Luxury Hotel",
      description:
        "Complete virtual tour and marketing campaign for a luxury downtown hotel",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Upscale Restaurant",
      title: "Fine Dining Experience",
      description: "Premium photography and 360° dining room showcase",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Luxury Resort",
      title: "Tropical Resort & Spa",
      description:
        "Immersive virtual tour of resort amenities and spa facilities",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 bg-white scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Portfolio</h2>
        <p className="text-gray-600 mb-10">
          Discover how we've transformed hospitality spaces into captivating
          digital experiences
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <p className="text-sm text-gray-500">{item.category}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 border border-gray-300 rounded-lg font-bold hover:bg-black hover:text-white transition">
          View Full Portfolio
        </button>
      </div>
    </section>
  );
}
