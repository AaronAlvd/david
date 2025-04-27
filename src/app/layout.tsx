import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "@/components/site-header"
import Footer from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fireworks For All - Nonprofit Fireworks Giveaways",
  description:
    "A nonprofit organization dedicated to giving away fireworks and bringing joy to communities through spectacular displays.",
  openGraph: {
    images: [
      {
        url: "/icon.png",
        alt: "Fireworks For All - Nonprofit Fireworks Giveaways",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}