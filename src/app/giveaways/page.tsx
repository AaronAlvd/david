import Link from "next/link"
import { YouthHighwayData } from "@/data/data"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-red-500">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our youth-focused programs and initiatives that serve Sacramento and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-900">
        <div className="mx-6 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">{program.name}</h3>
                  <p className="text-gray-300">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-black">
        <div className="mx-6 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Toy Drive",
                date: "December 15, 2025",
                location: "Sacramento Community Center",
                description:
                  "Join us for our annual toy drive, providing joy to thousands of children during the holiday season.",
                type: "Toy Drive",
              },
              {
                title: "Back to School Drive",
                date: "August 20, 2025",
                location: "Community Center",
                description: "Backpacks filled with school supplies for students in need throughout Sacramento.",
                type: "School Supplies",
              },
              {
                title: "Feeding the Homeless",
                date: "September 5, 2025",
                location: "Downtown Sacramento",
                description: "Join us as we provide meals and essential items to those experiencing homelessness.",
                type: "Food Distribution",
              },
              {
                title: "Pajamas for Foster Children",
                date: "November 10, 2025",
                location: "City Hall Plaza",
                description: "Distribution of pajamas and comfort items for foster children in our community.",
                type: "Foster Care Support",
              },
              {
                title: "Scholarship Award Ceremony",
                date: "June 18, 2025",
                location: "Sacramento Convention Center",
                description: "Annual ceremony recognizing scholarship recipients and celebrating their achievements.",
                type: "Scholarship Program",
              },
              {
                title: "Shoe Drive",
                date: "October 31, 2025",
                location: "Downtown Waterfront",
                description: "Help us collect and distribute shoes to ensure every child walks with confidence.",
                type: "Shoe Drive",
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

      {/* Past Events */}
      <section className="py-16 bg-gray-900">
        <div className="mx-6 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Annual Toy Drive 2024",
                date: "December 15, 2024",
                location: "Sacramento Community Center",
                description: "Distributed over 5,000 toys to children in need during the holiday season.",
                image: "/overflowing-donation-boxes.png",
                testimonial:
                  "The joy on my children's faces when they received their gifts was priceless. Thank you Youth Highway for making our holiday special.",
                author: "Maria C., Parent",
              },
              {
                title: "Back to School Drive 2024",
                date: "August 20, 2024",
                location: "Multiple Schools",
                description: "Provided 500 backpacks with school supplies to students in need.",
                image: "/community-backpack-drive.png",
                testimonial:
                  "The quality of the supplies was amazing. My kids were so excited to start school with their new backpacks.",
                author: "Sarah M., Parent",
              },
              {
                title: "Feeding the Homeless",
                date: "April 10, 2024",
                location: "Downtown Sacramento",
                description: "Served meals to over 200 individuals experiencing homelessness.",
                image: "/community-care-packages.png",
                testimonial:
                  "Youth Highway doesn't just provide food, they provide dignity and compassion. Their volunteers make everyone feel valued.",
                author: "Community Center Director",
              },
              {
                title: "Shoe Drive 2024",
                date: "March 15, 2024",
                location: "Sacramento Convention Center",
                description: "Collected and distributed over 300 pairs of shoes to children in need.",
                image: "/colorful-backpack-essentials.png",
                testimonial:
                  "My son was being bullied because of his worn-out shoes. The new shoes he received gave him confidence to return to school.",
                author: "James T., Parent",
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
                    &qout;{event.testimonial}&quot;
                  </blockquote>
                  <p className="text-sm text-gray-500">— {event.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 bg-black">
        <div className="mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How to Participate</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Check Program Details</h3>
                  <p className="text-gray-300">
                    Review our program information to find which initiatives align with your needs or interests. Each
                    program has specific details about who can participate and how to get involved.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Register for Events</h3>
                  <p className="text-gray-300">
                    For most programs and events, we require advance registration to ensure we can properly serve
                    everyone. Registration typically opens 2-4 weeks before each event. You can register by phone,
                    email, or in person.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Attend or Volunteer</h3>
                  <p className="text-gray-300">
                    Participate in our programs as a recipient or volunteer to help others. We welcome community members
                    who want to contribute their time and talents to support our mission.
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
                    accommodate emergency situations outside of our regular program schedule.
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

      {/* Program Process */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Program Process</h2>

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
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Needs Assessment</h3>
                      <p className="text-gray-300">
                        We identify community needs through outreach, partnerships with schools, and direct engagement
                        with families.
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
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Program Development</h3>
                      <p className="text-gray-300">
                        We design programs that address specific needs, establish goals, and create implementation plans
                        with our community partners.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Resource Gathering</h3>
                      <p className="text-gray-300">
                        We collect donations, secure funding, and mobilize volunteers to support each program
                        initiative.
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
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Implementation</h3>
                      <p className="text-gray-300">
                        We execute programs through events, distributions, and ongoing initiatives that directly serve
                        youth and families in need.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">Evaluation & Growth</h3>
                      <p className="text-gray-300">
                        We assess program impact, gather feedback, and continuously improve our approaches to better
                        serve our community.
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
        <div className="mx-6 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Sacramento Schools",
                logo: "/education-crest.png",
                description: "Partners with us on educational initiatives and school supply drives.",
              },
              {
                name: "Local Food Bank",
                logo: "/hands-holding-abundance.png",
                description: "Collaborates on food distribution programs.",
              },
              {
                name: "Community Center",
                logo: "/urban-green-leaf.png",
                description: "Provides venues for our events and programs.",
              },
              {
                name: "Regional Health Center",
                logo: "/interconnected-health.png",
                description: "Supports health and wellness aspects of our programs.",
              },
              {
                name: "Local Businesses Association",
                logo: "/interconnected-growth.png",
                description: "Contributes donations and volunteer support.",
              },
              {
                name: "Youth Development Center",
                logo: "/vibrant-youth-hub.png",
                description: "Collaborates on youth empowerment initiatives.",
              },
              {
                name: "Sacramento Foundation",
                logo: "/interconnected-community.png",
                description: "Provides grant funding for our programs.",
              },
              {
                name: "Foster Care Network",
                logo: "/interconnected-hearts.png",
                description: "Partners on programs for foster children.",
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
            <p className="text-gray-300 mb-4">Interested in becoming a partner?</p>
            <Link href="/contact" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">How can my child benefit from your programs?</h3>
              <p className="text-gray-300">
                Our programs are designed to support youth in various ways, from providing essential supplies to
                offering educational opportunities. If your child needs school supplies, clothing, or other support,
                please contact us to learn about eligibility for our current programs.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">How can I volunteer with Youth Highway?</h3>
              <p className="text-gray-300">
                We welcome volunteers for all our programs! Whether you can help at a single event or on a regular
                basis, your support makes a difference. Contact us through our website or call our office to learn about
                current volunteer opportunities.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">How are donations used?</h3>
              <p className="text-gray-300">
                As a registered 501(c)(3) nonprofit, all donations go directly toward our programs serving youth in
                Sacramento. Your contributions fund toy drives, backpack distributions, meals for the homeless,
                scholarship programs, and more.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Do you work with schools?</h3>
              <p className="text-gray-300">
                Yes! We partner with schools throughout Sacramento to identify students in need and provide appropriate
                support. If you&apos;re an educator interested in connecting your school with our programs, please reach out
                to discuss potential collaboration.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">How can businesses support Youth Highway?</h3>
              <p className="text-gray-300">
                Businesses can support our mission through sponsorships, in-kind donations, employee volunteer days, or
                hosting collection drives. We recognize our business partners and can provide tax documentation for all
                contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Help Us Make a Difference</h2>
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

