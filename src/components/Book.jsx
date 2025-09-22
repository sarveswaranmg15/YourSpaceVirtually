import React, { useState } from "react";

function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.businessType) {
      setSubmitStatus("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Using FormSubmit service to send email
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      submitFormData.append("business_type", formData.businessType);
      submitFormData.append(
        "project",
        formData.project || "No additional details provided"
      );
      submitFormData.append(
        "_subject",
        "New Virtual Experience Booking Request"
      );
      submitFormData.append("_captcha", "false");
      submitFormData.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/sarveswaranmg@gmail.com",
        {
          method: "POST",
          body: submitFormData,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", businessType: "", project: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };
  return (
    <section id="book" className="py-16 bg-white scroll-mt-24 md:scroll-mt-28">
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you! Your booking request has been sent successfully.
                  We'll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  Sorry, there was an error sending your request. Please try
                  again or contact us directly.
                </div>
              )}
              {submitStatus &&
                typeof submitStatus === "string" &&
                submitStatus !== "success" &&
                submitStatus !== "error" && (
                  <div className="p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
                    {submitStatus}
                  </div>
                )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
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
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white font-semibold shadow-md transition ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-900 to-blue-600 hover:opacity-90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Book your Virtual Experience"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
