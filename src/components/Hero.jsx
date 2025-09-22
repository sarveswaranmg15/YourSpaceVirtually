export default function Hero() {
  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col md:flex-row h-full mt-20 mb-20 items-center md:items-center justify-center md:justify-between px-4 sm:px-6 md:px-16 gap-6 md:gap-10">
      <div className="max-w-2xl w-full text-center md:text-left md:self-center">
        <h3 className="text-4xl sm:text-xl md:text-3xl font-bold">
          Transform your space into a
        </h3>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 leading-[1.05]">
          Digital experience
        </h1>
        <p className="text-lg sm:text-xl font-medium">
          Virtual Tours, Premium Visuals{" "}
        </p>
        <p className="text-lg sm:text-xl font-medium">
          & Digital Marketing for Hospitality
        </p>

        <div className="mt-9 flex gap-4 justify-center md:justify-start flex-wrap">
          <button
            onClick={scrollToBook}
            className="bg-gradient-to-b from-[#0046a8d1] to-[#0145a3] text-white px-5 py-3 md:px-7 md:py-4 rounded-md font-semibold md:font-bold text-base md:text-lg hover:from-[#0046a8] hover:to-[#0056cdeb]"
          >
            Book free Consultation
          </button>
          <button
            onClick={scrollToPortfolio}
            className="bg-gradient-to-b from-[#0046a8d1] to-[#0145a3] text-white px-5 py-3 md:px-7 md:py-4 rounded-md font-semibold md:font-bold text-base md:text-lg hover:from-[#0046a8] hover:to-[#0056cdeb]"
          >
            View our portfolio
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center md:self-center p-4 md:p-8">
        <img
          src="/models/Gemini_Generated_Image_gtm8dzgtm8dzgtm8 (1).svg"
          alt="Digital Experience visualization (updated)"
          className="w-[460px] max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
