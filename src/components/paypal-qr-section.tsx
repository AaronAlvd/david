import Link from "next/link"

export default function PaypalQRSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900/30 to-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/80 rounded-lg p-8 shadow-lg border border-red-500/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Donate with PayPal</h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* QR Code Column */}
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  {/* Replace with your actual PayPal QR code */}
                  <img src="/paypal.jpeg" alt="PayPal QR Code" className="w-64 h-64 object-contain" />
                </div>
              </div>

              {/* Instructions Column */}
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Scan to Donate</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Support Youth Highway instantly by scanning this QR code with your phone&apos;s camera.</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open your phone&apos;s camera app</li>
                    <li>Point it at the QR code</li>
                    <li>Tap the notification that appears</li>
                    <li>Complete your donation through PayPal</li>
                  </ol>
                  <p className="mt-4">
                    Your contribution helps us provide toys, school supplies, meals, and more to youth in need.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="https://www.paypal.com/donate/?business=FSJM37UGHK6PL&no_recurring=0&currency_code=USD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition inline-flex items-center gap-2"
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
                    Donate Online
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <p className="text-sm text-gray-400">
                Youth Highway is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the
                extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
