import Link from "next/link"

export default function Header() {

  return (
    <header className="sticky top-0 z-10 bg-black backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
              <span className="font-bold text-white">GS</span>
            </div>
            <span className="text-xl font-bold text-red-500">Giving Spark</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-red-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition">
                  About
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
          </nav>
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
  )
}