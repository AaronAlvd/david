import Link from "next/link"
import PaypalQRSection from "@/components/paypal-qr-section"
import { YouthHighwayData } from "@/data/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img src="/vibrant-night-sky.png" alt="Youth Highway" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{YouthHighwayData.welcome}</h1>
            <p className="text-xl text-gray-300 mb-8">{YouthHighwayData.mission}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/giveaways"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition"
              >
                Our Programs
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-black">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-6">
                Watch our founder, David Carmon, explain the mission and impact of Youth Highway in the Sacramento
                community. Learn how we&apos;re making a difference in the lives of young people through our various programs
                and initiatives.
              </p>
              <p className="text-gray-300 mb-6">
                Youth Highway is committed to improving youth literacy and overall well-being through education,
                outreach, and advocacy. Our programs touch thousands of lives each year, providing essential support and
                creating opportunities for growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[350px] aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                {/* Video placeholder - replace src with your actual video */}
                <video className="w-full h-full object-cover" controls poster="/video-poster.png" preload="metadata">
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Optional play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-red-600/80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Youth Highway</h2>
              <p className="text-gray-300 mb-4">{YouthHighwayData.about.description}</p>
              <p className="text-gray-300 mb-6">{YouthHighwayData.vision}</p>
              <Link
                href="/about"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition"
              >
                Learn more about our mission
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="/youthHighway.jpeg"
                alt="Community celebration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-black">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {YouthHighwayData.about.programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-red-500/20 transition"
              >
                <div className="h-48 relative">
                  <img
                    src={`${program.image}`}
                    alt={program.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{program.name}</h3>
                  <p className="text-gray-300">{program.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/giveaways"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Toy Drive",
                date: "December 15, 2025",
                location: "Sacramento Community Center",
                description:
                  "Join us for our annual toy drive, providing joy to thousands of children during the holiday season.",
                image: "/placeholder.svg?key=myyg0",
              },
              {
                title: "Back to School Drive",
                date: "August 20, 2025",
                location: "Community Center",
                description: "Backpacks filled with school supplies for students in need throughout Sacramento.",
                image: "/colorful-backpack-essentials.png",
              },
              {
                title: "Feeding the Homeless",
                date: "September 5, 2025",
                location: "Downtown Sacramento",
                description: "Join us as we provide meals and essential items to those experiencing homelessness.",
                image: "/community-care-packages.png",
              },
            ].map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{event.title}</h3>
                  <div className="flex items-center gap-2 mb-2 text-gray-300">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-gray-300">
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
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <Link href="/giveaways" className="text-red-400 hover:text-red-300 font-medium flex items-center">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/giveaways"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-black">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "20,000+", label: "Toys Distributed", icon: "🎁" },
              { number: "1,000+", label: "Backpacks Provided", icon: "🎒" },
              { number: "5,000+", label: "Meals Served", icon: "🍲" },
              { number: "Countless", label: "Lives Changed", icon: "❤️" },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-red-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="">
        <PaypalQRSection />
      </section>
    </div>
  )
}


