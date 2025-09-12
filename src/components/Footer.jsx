export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#001634] to-[#0049AD] pt-5 text-white rounded-t-3xl">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 gap-1 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Your Space, Virtually.</h3>
          <p className="text-gray-200 mb-6">
            Transforming hospitality spaces into immersive digital experiences
            that drive bookings and increase revenue.
          </p>
          <h4 className="font-bold text-lg mb-1">Contact</h4>
          <p className="text-gray-200">hello@yourspacevirtually.com</p>
          <p className="text-gray-200">+1 (555) 123-4567</p>
          <p className="text-gray-200">123 Digital Avenue</p>
          <p className="text-gray-200">Creative District, NY 10001</p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-1">
          {/* Services */}
          <div className="text-center ">
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300  hover:font-bold transition">
                  Virtual Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Photography
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Videography
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Web Design
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="text-center">
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Hotels & Resorts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Restaurants & Bars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Event Venues
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Spas & Wellness
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Cafés & Bistros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 hover:font-bold transition">
                  Fitness Centers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-200 mb-2 md:mb-0">
            © 2025 Your Space, Virtually. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
