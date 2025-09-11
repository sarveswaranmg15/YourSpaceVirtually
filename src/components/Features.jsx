import { Star } from "lucide-react";
export default function Features() {
  return (
    <section className="bg-gradient-to-b from-[#001634] to-[#0049AD] text-white py-16 px-6 m-3 rounded-t-xl">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Your Digital Experience Partner
          </h2>
          <p className="mt-2 text-gray-200 max-w-2xl mx-auto">
            At Your Space, Virtually, we specialize exclusively in the
            hospitality industry. We understand that first impressions matter,
            and in today’s digital world, your online presence is often a
            guest’s first interaction with your brand.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-7xl font-black">150+</p>
            <p className="text-gray-300 text-md">Properties performed</p>
          </div>
          <div>
            <p className="text-7xl font-bold">40%</p>
            <p className="text-gray-300 text-md">Average Bookings increased</p>
          </div>
          <div>
            <div className="flex justify-center items-end space-x-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-12 h-12 fill-white text-white" />
              ))}
            </div>
            <p className="text-gray-300 text-md">
              Client Satisfaction Increased
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-200 max-w-3xl mx-auto">
          From luxury hotels and boutique resorts to fine dining restaurants and
          trendy cafés, we create immersive digital experiences that showcase
          the unique character and atmosphere of your space, driving more
          bookings and increasing foot traffic.
        </p>

        {/* Button */}
        <button className="mt-4 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition">
          Discover Our Approach
        </button>
      </div>
    </section>
  );
}
