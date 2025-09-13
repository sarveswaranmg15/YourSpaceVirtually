import React from "react";

function Book() {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Book Your Virtual Experience
        </h2>
        <p className="mt-2 text-gray-600">
          Ready to transform your hospitality space? Let&apos;s discuss your
          project.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6">
        {/* Left Side */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Let&apos;s Create Something Extraordinary
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you&apos;re a boutique hotel, fine dining restaurant, luxury
            resort, or event venue, we&apos;ll create a custom solution that
            showcases your unique space and drives results.
          </p>

          <ul className="space-y-2 mb-8">
            <li className="font-semibold">Free initial consultation</li>
            <li className="font-semibold">Custom proposal within 24 hours</li>
            <li className="font-semibold">Hospitality industry expertise</li>
            <li className="font-semibold">ROI-focused solutions</li>
          </ul>

          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Industries We Serve:
          </h4>
          <div className="grid grid-cols-2 gap-x-8 text-gray-700">
            <ul className="space-y-2 list-disc list-inside">
              <li>Hotels & Resorts</li>
              <li>Event Venues</li>
              <li>Cafés & Bistros</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Restaurants & Bars</li>
              <li>Spas & Wellness</li>
              <li>Fitness Centers</li>
            </ul>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex justify-end">
          <div className=" shadow-[12px_22px_35px_2px_rgba(0,0,0,0.25)] rounded-[10px] p-6 w-full lg:w-[400px]">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
              Get Your Free Consultation
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Business Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tell us about your project
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md text-white font-semibold shadow-md bg-gradient-to-r from-blue-900 to-blue-600 hover:opacity-90 transition">
                Book your Virtual Experience
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
