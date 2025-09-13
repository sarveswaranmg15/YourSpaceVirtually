export default function HospitalityBanner() {
  return (
    <section className="mx-3 my-8 rounded-xl bg-gradient-to-r from-[#002b6b] to-[#0052cc] text-white px-6 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Elevate Your Hospitality Experience?
      </h2>
      <p className="text-sm md:text-base max-w-2xl mx-auto mb-6">
        Transform your space into an immersive digital experience that drives bookings and increases revenue.
        Let’s create something extraordinary together.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
        <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition">
          Let’s Get Started
        </button>
        <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition">
          Schedule a Call
        </button>
      </div>
      <p className="text-xs opacity-80">
        Free consultation • No obligation • Custom proposal within 24 hours
      </p>
    </section>
  );
}
