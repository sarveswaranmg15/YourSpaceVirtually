export default function Hero() {
  return (
    <div className="flex h-full mt-50 mb-50 justify-center items-center px-20 gap-10">
      <div>
        <h3 className="text-3xl font-bold">Transform your space into a</h3>
        <h1 className="text-7xl font-bold mb-5">Digital experience</h1>
        <p className="text-lg font-medium">Virtual Tours, Premium Visuals </p>
        <p className="text-lg font-medium">
          & Digital Marketing for Hospitality
        </p>

        <div className="mt-7 flex gap-5">
          <button className="bg-gradient-to-b from-[#0046a8d1] to-[#0145a3] text-white p-3 rounded-md font-bold hover:from-[#0046a8] hover:to-[#0056cdeb] ">
            Book free Consultation
          </button>
          <button className="bg-gradient-to-b from-[#0046a8d1] to-[#0145a3] text-white p-3 rounded-md font-bold hover:from-[#0046a8] hover:to-[#0056cdeb]">
            View our portfolio
          </button>
        </div>
      </div>

      <div className="flex  justify-center items-center p-20">
        image goes here
      </div>
    </div>
  );
}
