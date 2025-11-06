"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Sidebar from "@/components/side-bar"
import { sdgData } from "@/data/sdg-data"

/**
 * Individual SDG page component
 * Displays details for a specific SDG including its targets and indicators
 */
export default function SDGPage() {
  const params = useParams()
  const sdgId = parseInt(params.id as string)
  
  const sdg = sdgData.find((s) => s.number === sdgId)
  
  if (!sdg) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#292929] mb-4">SDG Not Found</h1>
          <Link href="/" className="text-[#f6c445] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* SDG Header */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`/sdg-logos/E_WEB_INVERTED_${sdg.number.toString().padStart(2, "0")}.png`}
                  alt={`SDG ${sdg.number}: ${sdg.title}`}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-[#292929]">{sdg.title}</h1>
            </div>
          </div>
          <div className="h-1 w-32 bg-[#f6c445] rounded-full"></div>
        </div>

        {/* Targets and Indicators */}
        <div className="space-y-16">
          {sdg.targets.map((target) => (
            <div key={target.id} className="space-y-8">
              {/* Target Title */}
              {target.title && (
                <div className="flex flex-wrap items-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#292929]">
                    {target.title}
                  </h2>
                  {target.link && (
                    <Link
                      href={`/sdg/${sdg.number}/${target.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6c445] text-white rounded-lg hover:bg-[#e5b33e] transition-colors font-medium"
                    >
                      <span>View PDF</span>
                      <span>📄</span>
                    </Link>
                  )}
                </div>
              )}

              {/* Indicators */}
              {target.indicators.map((indicator) => (
                <div
                  key={indicator.id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  {/* Description */}
                  {indicator.description && (
                    <p className="text-[#292929] leading-relaxed text-lg mb-4">
                      {indicator.description}
                    </p>
                  )}

                  {/* Indicator Title with Link */}
                  {indicator.title && (
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-lg font-semibold text-[#292929]">
                        {indicator.title}
                      </h3>
                      {indicator.link && (
                        <Link
                          href={`/sdg/${sdg.number}/${indicator.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6c445] text-white rounded-lg hover:bg-[#e5b33e] transition-colors font-medium"
                        >
                          <span>View PDF</span>
                          <span>📄</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <footer className="mt-16 p-8 border-t border-gray-200 bg-white">
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
              © 2023 Technological Institute of the Philippines. All rights reserved.
            </p>
          </div>
        </footer>
        </div>
      </div>
    </div>
  )
}
