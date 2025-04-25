import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <span className="font-bold text-white">GS</span>
              </div>
              <span className="text-xl font-bold text-red-500">Giving Spark</span>
            </div>
            <p className="text-gray-600 mb-4">Bringing joy to communities through the power of giving.</p>
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Giving Spark. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-red-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/giveaways" className="hover:text-red-400 transition">
                  Giveaways
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-500">Contact Us</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>123 Community Ave, Giving City</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@givingspark.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}