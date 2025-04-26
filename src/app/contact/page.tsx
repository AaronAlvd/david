"use client"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-red-500">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or want to get involved? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
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
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-gray-300">
                123 Community Avenue
                <br />
                Giving City, GS 12345
                <br />
                United States
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
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
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-300">
                Main Office: (555) 123-4567
                <br />
                Donations: (555) 123-4568
                <br />
                Volunteer Line: (555) 123-4569
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
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
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-300">
                General Inquiries: youthhighway@gmail.com
                <br />
                Donations: youthhighway@gmail.com
                <br />
                Volunteer: youthhighway@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden">
            <img
              src="/location-map.png"
              alt="Map showing Giving Spark office location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}