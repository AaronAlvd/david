import Link from "next/link"

export default function GiveawaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-red-500">Giveaways</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our upcoming giveaway events and learn about the various items we distribute to communities in
              need.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-900">
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
        </div>
      </section>

      {/* Upcoming Giveaways */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Giveaways</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Summer Celebration",
                date: "July 15, 2025",
                location: "Riverside Park",
                description: "Fireworks display and summer recreation equipment giveaway for 100 families.",
                type: "Fireworks & Recreation",
              },
              {
                title: "Back to School Drive",
                date: "August 20, 2025",
                location: "Community Center",
                description: "Backpacks filled with school supplies for 250 students in grades K-12.",
                type: "School Supplies",
              },
              {
                title: "Fall Food Distribution",
                date: "September 5, 2025",
                location: "Downtown Square",
                description: "Distribution of food packages and fresh produce to 150 families in need.",
                type: "Food & Essentials",
              },
              {
                title: "Winter Warmth Drive",
                date: "November 10, 2025",
                location: "City Hall Plaza",
                description: "Distribution of winter coats, gloves, and blankets for the upcoming cold season.",
                type: "Seasonal Items",
              },
              {
                title: "Holiday Celebration",
                date: "December 18, 2025",
                location: "Central Park",
                description:
                  "Holiday gifts for children, food baskets for families, and a community fireworks display.",
                type: "Multiple Items",
              },
              {
                title: "New Year's Eve Spectacular",
                date: "December 31, 2025",
                location: "Downtown Waterfront",
                description:
                  "Our biggest fireworks display of the year with hot chocolate and treats for all attendees.",
                type: "Fireworks & Food",
              },
            ].map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-yellow-400">{event.title}</h3>
                  <span className="inline-block px-3 py-1 bg-red-600/80 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>
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
                <div className="flex justify-end">
                  <span className="inline-block px-4 py-2 bg-gray-700 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Giveaways */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Giveaways</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Spring Food Drive",
                date: "April 10, 2025",
                location: "Community Center",
                description: "Distributed food packages to 200 families in need.",
                image: "/overflowing-donation-boxes.png",
                testimonial:
                  "The food packages from Giving Spark helped my family through a difficult time. We're so grateful for their support.",
                author: "Maria C., Recipient",
              },
              {
                title: "Winter Coat Distribution",
                date: "January 15, 2025",
                location: "Downtown Plaza",
                description: "Provided warm winter coats to 150 children and adults.",
                image: "/placeholder.svg?key=bi8r4",
                testimonial:
                  "My children received beautiful new coats that kept them warm all winter. Thank you for your generosity!",
                author: "James T., Parent",
              },
              {
                title: "New Year's Fireworks",
                date: "December 31, 2024",
                location: "Riverside Park",
                description: "Community fireworks display attended by over 1,000 people.",
                image: "/vibrant-new-years-sky.png",
                testimonial:
                  "The fireworks display brought our entire neighborhood together. It was a magical way to start the new year.",
                author: "Community Center Director",
              },
              {
                title: "Back to School 2024",
                date: "August 25, 2024",
                location: "Multiple Schools",
                description: "Distributed 500 backpacks with school supplies to students.",
                image: "/community-backpack-drive.png",
                testimonial:
                  "The quality of the supplies was amazing. My kids were so excited to start school with their new backpacks.",
                author: "Sarah M., Parent",
              },
            ].map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{event.title}</h3>
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
                  <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-400 mb-2">
                    "{event.testimonial}"
                  </blockquote>
                  <p className="text-sm text-gray-500">— {event.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Qualify */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How to Qualify</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Check Eligibility</h3>
                  <p className="text-gray-300">
                    Most of our giveaways are open to anyone in need within the communities we serve. Some specialized
                    giveaways may have specific eligibility requirements based on age, family size, or other factors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Register in Advance</h3>
                  <p className="text-gray-300">
                    For most giveaways, we require advance registration to ensure we have enough items for everyone.
                    Registration typically opens 2-4 weeks before each event. You can register by phone, email, or in
                    person at our office.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Attend the Event</h3>
                  <p className="text-gray-300">
                    Bring your registration confirmation and any required identification to the giveaway event. We
                    strive to make the process quick and respectful for all participants.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Special Circumstances</h3>
                  <p className="text-gray-300">
                    If you have an urgent need or special circumstances, please contact us directly. We do our best to
                    accommodate emergency situations outside of our regular giveaway schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition"
              >
                Contact Us for More Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Giveaway Process Timeline */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Giveaway Process</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-red-500"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Planning & Preparation</h3>
                      <p className="text-gray-300">
                        We identify community needs, secure funding and donations, and plan logistics for each giveaway
                        event.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-3"></div>
                </div>

                {/* Item 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-8 order-3">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Announcement & Registration</h3>
                      <p className="text-gray-300">
                        We announce upcoming giveaways through community partners, social media, and local
                        organizations. Registration opens 2-4 weeks before each event.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Preparation & Setup</h3>
                      <p className="text-gray-300">
                        Our volunteers organize items, prepare the venue, and set up distribution stations to ensure a
                        smooth event.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-3"></div>
                </div>

                {/* Item 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-8 order-3">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Distribution Day</h3>
                      <p className="text-gray-300">
                        Recipients arrive at their scheduled time, check in, and receive their items. For fireworks
                        events, we host community displays in safe, designated areas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Follow-up & Evaluation</h3>
                      <p className="text-gray-300">
                        We collect feedback, assess impact, and identify improvements for future giveaways to better
                        serve our communities.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">5</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Giveaway Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "City Parks Department",
                logo: "/placeholder.svg?height=100&width=200&query=city parks department logo",
                description: "Provides venues for our fireworks displays and outdoor events.",
              },
              {
                name: "Local Food Bank",
                logo: "/placeholder.svg?height=100&width=200&query=food bank logo",
                description: "Partners with us on food distribution giveaways.",
              },
              {
                name: "Community Schools",
                logo: "/placeholder.svg?height=100&width=200&query=school district logo",
                description: "Helps identify students in need for our school supply giveaways.",
              },
              {
                name: "Regional Health Center",
                logo: "/placeholder.svg?height=100&width=200&query=health center logo",
                description: "Provides health and safety information at our giveaway events.",
              },
              {
                name: "Local Businesses Association",
                logo: "/placeholder.svg?height=100&width=200&query=business association logo",
                description: "Contributes donations and volunteer support for giveaways.",
              },
              {
                name: "Transportation Authority",
                logo: "/placeholder.svg?height=100&width=200&query=transportation authority logo",
                description: "Offers free transportation to and from major giveaway events.",
              },
              {
                name: "Youth Development Center",
                logo: "/placeholder.svg?height=100&width=200&query=youth center logo",
                description: "Connects young people with our seasonal giveaway programs.",
              },
              {
                name: "Community Foundation",
                logo: "/placeholder.svg?height=100&width=200&query=community foundation logo",
                description: "Provides grant funding for our largest giveaway initiatives.",
              },
            ].map((partner, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="h-16 object-contain mb-4"
                />
                <h3 className="text-lg font-bold mb-2 text-yellow-400">{partner.name}</h3>
                <p className="text-gray-300 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Interested in becoming a giveaway partner?</p>
            <Link href="/contact" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">How do I know if I qualify for a giveaway?</h3>
              <p className="text-gray-300">
                Most of our giveaways are open to anyone in need within the communities we serve. Specific eligibility
                requirements, if any, will be clearly stated in the giveaway announcement. If you&apos;re unsure, please
                contact us and we'll be happy to help determine if you qualify.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Do I need to bring anything to a giveaway event?
              </h3>
              <p className="text-gray-300">
                For most giveaways, you'll need to bring your registration confirmation (email or printed) and a valid
                ID. For specific giveaways like school supplies, we may ask for proof of school enrollment. All
                requirements will be communicated during registration.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">What if I can't attend a giveaway in person?</h3>
              <p className="text-gray-300">
                If you&apos;re unable to attend due to work, health issues, or transportation challenges, you can designate
                someone to pick up items on your behalf. Please contact us in advance to make these arrangements.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Are your fireworks displays safe?</h3>
              <p className="text-gray-300">
                Absolutely. Safety is our top priority. Our fireworks displays are conducted by licensed professionals
                in accordance with all local regulations. We coordinate with fire departments and emergency services to
                ensure a safe experience for everyone.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">How can I help with giveaways?</h3>
              <p className="text-gray-300">
                There are many ways to help! You can donate items or funds, volunteer your time, or become a community
                partner. Visit our Contact page to learn more about getting involved with our giveaway programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Help Us Make a Difference</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Your support helps us bring joy and essential items to communities in need. Together, we can make a
            meaningful impact.
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
