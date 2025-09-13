import { Heart, Ribbon, Sparkles } from "lucide-react"; // You can swap icons if needed

export default function WhyChoose() {
  return (
    <section className="bg-gradient-to-b from-[#0049AD] to-[#001634] text-white rounded-xl py-12 px-6 m-3">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-3xl font-bold mb-4">
          Why Choose Your Space, Virtually?
        </h2>
        <p className="text-gray-200 text-md ">
          We’re not just another digital agency – we’re your hospitality
          experience partners
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-600/40 rounded-full mb-4">
            <Heart className="w-8 h-8 text-pink-400" />
          </div>
          <span className="inline-block text-xs font-bold bg-white/70 text-gray-800 px-3 py-1 rounded-full mb-3">
            Industry Experts
          </span>
          <h3 className="text-lg font-semibold mb-2">Hospitality-Focused</h3>
          <p className="text-gray-200 text-sm">
            We exclusively serve the hospitality industry, understanding your
            unique needs and challenges.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-600/40 rounded-full mb-4">
            <Ribbon className="w-8 h-8 text-red-400" />
          </div>
          <span className="inline-block text-xs font-bold bg-white/70 text-gray-800 px-3 py-1 rounded-full mb-3">
            Creative Excellence
          </span>
          <h3 className="text-lg font-semibold mb-2">Luxury Storytelling</h3>
          <p className="text-gray-200 text-sm">
            We craft premium visual narratives that capture the essence and
            atmosphere of your space.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-600/40 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-pink-400" />
          </div>
          <span className="inline-block text-xs font-bold bg-white/70 text-gray-800 px-3 py-1 rounded-full mb-3">
            Results Guaranteed
          </span>
          <h3 className="text-lg font-semibold mb-2">ROI-Driven Marketing</h3>
          <p className="text-gray-200 text-sm">
            Our strategies are designed to increase bookings, drive foot
            traffic, and maximize your revenue.
          </p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center max-w-4xl mx-auto">
        <p className="font-semibold mb-2">
          Join over 150+ hospitality businesses that have transformed their
          digital presence with us
        </p>
        <p className="text-gray-200 text-md">
          • Hotels & Resorts &nbsp; • Restaurants & Bars &nbsp; • Event Venues
          &nbsp; • Spas & Wellness &nbsp; • Cafés & Bistros
        </p>
      </div>
    </section>
  );
}
