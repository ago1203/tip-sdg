"use client"

import { useState } from "react"

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

/**
 * PDF Viewer component that displays Google Drive PDFs
 * Converts Google Drive links to embedded view format
 * @param pdfUrl - Google Drive PDF link
 * @param title - Title of the PDF document
 */
export default function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  /**
   * Converts Google Drive sharing link to embedded preview URL with fit parameters
   * Example: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
   * Converts to: https://drive.google.com/file/d/FILE_ID/preview?embedded=true&rm=minimal
   * Parameters:
   * - embedded=true: Optimizes for embedded viewing
   * - rm=minimal: Removes unnecessary controls for cleaner view
   */
  const getEmbedUrl = (url: string): string => {
    try {
      // Extract file ID from Google Drive URL
      const match = url.match(/\/d\/([^/]+)/)
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview?embedded=true&rm=minimal`
      }
      return url
    } catch (error) {
      console.error("Error parsing PDF URL:", error)
      return url
    }
  }

  const embedUrl = getEmbedUrl(pdfUrl)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="w-full space-y-4">
      {/* PDF Controls */}
      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📄</span>
          <div>
            <p className="text-sm font-medium text-[#292929]">PDF Document</p>
            <p className="text-xs text-[#292929]/60">{title}</p>
          </div>
        </div>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6c445] text-white rounded-lg hover:bg-[#e5b33e] transition-colors font-medium text-sm"
        >
          <span>Open in New Tab</span>
          <span>↗</span>
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f6c445] mx-auto mb-4"></div>
              <p className="text-[#292929]/60">Loading PDF...</p>
            </div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center p-8">
              <span className="text-6xl mb-4 block">⚠️</span>
              <p className="text-[#292929] font-semibold mb-2">Unable to load PDF</p>
              <p className="text-sm text-[#292929]/60 mb-4">
                The PDF could not be displayed in the browser.
              </p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6c445] text-white rounded-lg hover:bg-[#e5b33e] transition-colors font-medium"
              >
                <span>Open in Google Drive</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        )}

        <iframe
          src={embedUrl}
          className="w-full border-0"
          style={{ height: "calc(100vh - 300px)", minHeight: "600px" }}
          title={title}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="autoplay"
        />
      </div>

      {/* Alternative Link */}
      <div className="text-center text-sm text-[#292929]/60">
        If the PDF doesn't display correctly,{" "}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f6c445] hover:underline font-medium"
        >
          open it directly in Google Drive
        </a>
      </div>
    </div>
  )
}
