import Link from "next/link"
import { YouthHighwayData } from "@/data/data"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-red-500">Youth Highway</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn about our mission to improve youth literacy and overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-900">
        <div className="mx-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">{YouthHighwayData.about.description}</p>
              <p className="text-gray-300 mb-4">{YouthHighwayData.mission}</p>
              <p className="text-gray-300">{YouthHighwayData.about.spirit}</p>
            </div>
            <div className="relative h-80 md:h-full">
              <img
                src="/youthHighway.jpeg"
                alt="Community celebration"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-black">
        <div className="mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-300">{YouthHighwayData.vision}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Compassion</h3>
              <p className="text-gray-300 text-center">
                We approach our work with empathy and understanding, recognizing the dignity of every child we serve.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Community</h3>
              <p className="text-gray-300 text-center">
                We believe in the power of bringing people together and fostering a sense of belonging and connection
                for youth in Sacramento.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Empowerment</h3>
              <p className="text-gray-300 text-center">
                We strive to empower youth through literacy, education, and support, believing that every child deserves
                the opportunity to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

          <div className="max-w-md mx-auto">
            {[
              {
                name: YouthHighwayData.about.founder,
                role: "Founder & Executive Director",
                image: "/david.jprg",
                bio: "David founded Youth Highway with a passion for improving youth literacy and creating opportunities for children in Sacramento. His dedication to community service drives our mission forward.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-64 relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-black">
        <div className="mx-6 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {YouthHighwayData.about.programs.map((program, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">{program.name}</div>
                <p className="text-gray-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="mx-6 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">{YouthHighwayData.support.callToAction}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition">
              Get Involved
            </Link>
            <Link
              href="https://www.paypal.com/donate/?business=FSJM37UGHK6PL&no_recurring=0&currency_code=USD"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


