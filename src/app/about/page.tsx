import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-red-500">Giving Spark</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn about our mission to bring joy to communities through the power of giving.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Giving Spark began in 2015 when a group of friends decided to organize a community fireworks display for
                families who couldn&apos;t afford their own. What started as a small neighborhood event quickly grew into
                something much bigger.
              </p>
              <p className="text-gray-300 mb-4">
                We noticed that the joy brought by these community celebrations created a spark of connection and hope.
                Inspired by this, we expanded our mission to include other types of giveaways that meet essential needs
                while bringing that same spark of joy.
              </p>
              <p className="text-gray-300">
                Today, Giving Spark operates year-round, providing fireworks displays, food, school supplies, and
                seasonal items to communities across the region. Our founding principle remains the same: everyone
                deserves to experience moments of joy and celebration, regardless of their circumstances.
              </p>
            </div>
            <div className="relative h-80 md:h-full">
              <img
                src="/community-celebration.png"
                alt="Community celebration"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300">
              To bring joy and essential support to communities through thoughtful giveaways that create moments of
              celebration and connection.
            </p>
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
                We approach our work with empathy and understanding, recognizing the dignity of every person we serve.
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
                We believe in the power of bringing people together and fostering a sense of belonging and connection.
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
              <h3 className="text-xl font-bold mb-3 text-center">Joy</h3>
              <p className="text-gray-300 text-center">
                We strive to create moments of happiness and celebration, believing that joy is an essential part of
                human experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Johnson",
                role: "Founder & Executive Director",
                image: "/confident-businessman.png",
                bio: "Michael founded Giving Spark after organizing community fireworks displays for 10 years. His background in event planning and passion for community service drive our mission forward.",
              },
              {
                name: "Sarah Williams",
                role: "Director of Operations",
                image: "/confident-professional.png",
                bio: "Sarah oversees all giveaway logistics and volunteer coordination. Her expertise in nonprofit management ensures our events run smoothly and efficiently.",
              },
              {
                name: "David Chen",
                role: "Community Outreach Coordinator",
                image: "/confident-asian-professional.png",
                bio: "David builds relationships with community partners and identifies areas of need. His background in social work helps us connect with those who can benefit most from our programs.",
              },
              {
                name: "Aisha Patel",
                role: "Development Director",
                image: "/confident-indian-professional.png",
                bio: "Aisha leads our fundraising efforts and donor relations. Her creative approach to securing resources allows us to expand our impact year after year.",
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

      {/* Impact Stats */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Community Events",
                description: "Fireworks displays and giveaway events organized annually",
              },
              {
                number: "10,000+",
                label: "Individuals Served",
                description: "People who have benefited from our giveaway programs",
              },
              {
                number: "5,000+",
                label: "School Supply Kits",
                description: "Backpacks with supplies distributed to students in need",
              },
              {
                number: "25+",
                label: "Community Partners",
                description: "Organizations working with us to maximize our impact",
              },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{stat.label}</h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            There are many ways to get involved with Giving Spark. Whether you donate, volunteer, or spread the word,
            your support helps us bring joy to more communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition">
              Get Involved
            </Link>
            <Link
              href="https://www.paypal.com/donate"
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
