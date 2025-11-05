"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Sidebar from "@/components/side-bar"
import { sdgData } from "@/data/sdg-data"
import PDFViewer from "@/components/pdf-viewer"

/**
 * Individual indicator page with PDF viewer
 * Displays a specific indicator and its associated PDF document
 */
export default function IndicatorPage() {
  const params = useParams()
  const sdgId = parseInt(params.id as string)
  const indicatorId = params.indicatorId as string
  
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
  
  // Find the indicator in the SDG data
  let indicator = null
  let targetTitle = ""
  
  for (const target of sdg.targets) {
    const foundIndicator = target.indicators.find((ind) => ind.id === indicatorId)
    if (foundIndicator) {
      indicator = foundIndicator
      targetTitle = target.title || ""
      break
    }
  }
  
  if (!indicator || !indicator.link) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#292929] mb-4">Indicator Not Found</h1>
          <Link href={`/sdg/${sdgId}`} className="text-[#f6c445] hover:underline">
            Return to SDG {sdgId}
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
        <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#f6c445] hover:underline">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/sdg/${sdgId}`} className="text-[#f6c445] hover:underline">
            SDG {sdgId}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#292929]/60">{indicator.title || indicatorId}</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`/sdg-logos/E_WEB_INVERTED_${sdg.number.toString().padStart(2, "0")}.png`}
                alt={`SDG ${sdg.number}: ${sdg.title}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-[#292929]/60 font-medium">
                SDG {sdg.number}: {sdg.title}
              </p>
              {targetTitle && (
                <p className="text-xs text-[#292929]/50">{targetTitle}</p>
              )}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#292929] mb-4">
            {indicator.title || `Indicator ${indicatorId}`}
          </h1>
          
          {indicator.description && (
            <p className="text-lg text-[#292929]/80 leading-relaxed max-w-4xl">
              {indicator.description}
            </p>
          )}
          
          <div className="h-1 w-32 bg-[#f6c445] rounded-full mt-4"></div>
        </div>

        {/* PDF Viewer */}
        <PDFViewer pdfUrl={indicator.link} title={indicator.title || ""} />

        {/* Footer */}
        <footer className="mt-16 p-8 border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
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
    </div>
  )
}
