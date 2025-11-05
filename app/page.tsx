"use client"

import { useRef } from "react"
import Image from "next/image"
import Sidebar from "@/components/side-bar"
import SDGSection from "@/components/sdg-section"
import { sdgData } from "@/data/sdg-data"
import AboutSection from "@/components/about-section"

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <div ref={mainContentRef} className="flex-1 overflow-y-auto scroll-smooth">
        {/* About Section */}
        <AboutSection />

        {sdgData.map((sdg) => (
          <SDGSection key={sdg.id} sdgNumber={sdg.number} title={sdg.title} targets={sdg.targets} />
          
        ))}
        
        {/* Institutional Summary Statement */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] mb-8">
              Institutional Summary Statement
            </h2>
            <p className="text-md text-[#292929]/70 leading-relaxed max-w-4xl">
              At T.I.P., sustainability is more than compliance — it is a shared responsibility.
              Through our education, facilities, research, and community engagement, we aim to nurture professionals who innovate responsibly, lead with integrity, and act with compassion for people and the planet.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto p-8 border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="h-26 relative w-48">
              <Image 
                src="/contents/T.I.P. Logo HD.png" 
                alt="T.I.P. Logo" 
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 text-xs text-[#292929]/60">
              © {new Date().getFullYear()} Technological Institute of the Philippines. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
