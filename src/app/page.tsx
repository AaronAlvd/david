import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src="/vibrant-night-sky.png"
            alt="Fireworks display"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bringing <span className="text-red-500">Joy</span> Through Giving
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We&apos;re a nonprofit organization dedicated to giving away fireworks, food, school supplies, and more to
              communities in need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/giveaways"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition"
              >
                Our Giveaways
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

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Giving Spark</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2015, Giving Spark is dedicated to bringing joy and essential support to communities through
                our various giveaway programs.
              </p>
              <p className="text-gray-300 mb-6">
                What makes us unique is our diverse approach to giving. From spectacular fireworks displays that light
                up community celebrations to essential items like food, school supplies, and seasonal necessities, we
                believe in meeting various needs while creating moments of joy.
              </p>
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
                src="/community-celebration.png"
                alt="Community celebration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Give Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Give</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Fireworks",
                image: "/vibrant-night-sky.png",
                description: "Holiday and special event fireworks displays and giveaways for community celebrations.",
                icon: "✨",
              },
              {
                name: "Food & Essentials",
                image: "/community-care-packages.png",
                description: "Regular distribution of food packages, hygiene products, and household necessities.",
                icon: "🥫",
              },
              {
                name: "School Supplies",
                image: "/colorful-backpack-essentials.png",
                description: "Back-to-school backpacks filled with supplies for students in need.",
                icon: "📚",
              },
              {
                name: "Seasonal Items",
                image: "/cozy-winter-gifting.png",
                description: "Seasonal giveaways including winter coats, holiday gifts, and summer recreation items.",
                icon: "🎁",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-red-500/20 transition"
              >
                <div className="h-48 relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-xl font-bold text-yellow-400">{item.name}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/giveaways"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition"
            >
              View All Giveaways
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Summer Celebration",
                date: "July 15, 2025",
                location: "Riverside Park",
                description: "Fireworks display and summer recreation equipment giveaway for 100 families.",
                image: "/vibrant-night-sky.png",
              },
              {
                title: "Back to School Drive",
                date: "August 20, 2025",
                location: "Community Center",
                description: "Backpacks filled with school supplies for 250 students in grades K-12.",
                image: "/colorful-backpack-essentials.png",
              },
              {
                title: "Fall Food Distribution",
                date: "September 5, 2025",
                location: "Downtown Square",
                description: "Distribution of food packages and fresh produce to 150 families in need.",
                image: "/community-care-packages.png",
              },
            ].map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 relative">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
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
                  <Link
                    href="/giveaways"
                    className="text-red-400 hover:text-red-300 font-medium flex items-center"
                  >
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Community Events", icon: "🎉" },
              { number: "10,000+", label: "Families Helped", icon: "👨‍👩‍👧‍👦" },
              { number: "5,000+", label: "School Supply Kits", icon: "🎒" },
              { number: "25+", label: "Fireworks Shows", icon: "🎆" },
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
      <section className="py-16 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/80 rounded-lg p-8 shadow-lg border border-red-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-red-600/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
                  <p className="text-gray-300 mb-6">
                    Your donation directly funds our community giveaways, from fireworks displays that light up neighborhoods
                    to essential supplies for families in need. Every contribution makes a difference.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link
                      href="https://www.paypal.com/donate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Donate via PayPal
                    </Link>
                    <Link
                      href="/contact"
                      className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition"
                    >
                      Other Ways to Give
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                <p className="text-sm text-gray-400">
                  Giving Spark is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the
                  extent allowed by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

