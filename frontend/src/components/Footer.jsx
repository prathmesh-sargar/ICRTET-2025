"use client"

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="font-bold text-xl">ICRTET 2025</span>
            </div>
            <p className="text-gray-400 text-sm">
              International Conference on Recent Trends in Engineering and Technology
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("about-conference")} className="hover:text-white">
                  About Conference
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tracks")} className="hover:text-white">
                  Tracks
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("dates")} className="hover:text-white">
                  Important Dates
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("registration")} className="hover:text-white">
                  Registration
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("call-for-papers")} className="hover:text-white">
                  Call for Papers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("publications")} className="hover:text-white">
                  Publications
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("committee")} className="hover:text-white">
                  Committee
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sponsors")} className="hover:text-white">
                  Sponsors
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>dypcet.icrtet25@gmail.com</p>
              <p>02312601431</p>
              <p>DYPCET, Kolhapur</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ICRTET. All rights reserved. | Organized by D. Y. Patil College of Engineering & Technology, Kolhapur
          </p>
        </div>
      </div>
    </footer>
  )
}
