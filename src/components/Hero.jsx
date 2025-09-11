export default function Hero() {
  return (
    <div className="flex h-full mt-50 mb-50 justify-center gap-70">
      <div>
        <h3 className="text-2xl font-bold">Transform your space into a</h3>
        <h1 className="text-5xl font-bold mb-5">Digital experience</h1>
        <p className="text-lg font-medium">Virtual Tours, Premium Visuals </p>
        <p className="text-lg font-medium">
          & Digital Marketing for Hospitality
        </p>

        <div className="mt-7 flex gap-5">
          <button className="bg-gradient-to-b from-[#0046a8d1] to-[#0145a3] text-white p-3 rounded-md font-bold">
            Book free Consultation
          </button>
          <button className="bg-gradient-to-b from-[#0046a8d1] to-[#0145a3] text-white p-3 rounded-md font-bold">
            View our portfolio
          </button>
        </div>
      </div>

      <div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Placeholder Image"
        />
      </div>
    </div>
  );
}
