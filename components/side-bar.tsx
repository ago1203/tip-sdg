"use client"

import Image from "next/image"
import { sdgData } from "@/data/sdg-data"
import { useState, useRef, useEffect } from "react"

interface SidebarProps {
  onNavigate: (sectionId: string) => void
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const [expandedSDGs, setExpandedSDGs] = useState<Set<string>>(new Set())
  const [sidebarWidth, setSidebarWidth] = useState(280)
  const [isResizing, setIsResizing] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const toggleSDGExpand = (sdgId: string) => {
    const newExpanded = new Set(expandedSDGs)
    if (newExpanded.has(sdgId)) {
      newExpanded.delete(sdgId)
    } else {
      newExpanded.add(sdgId)
    }
    setExpandedSDGs(newExpanded)
  }

  const startResizing = () => {
    setIsResizing(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return
      const newWidth = e.clientX
      if (newWidth >= 200 && newWidth <= 500) {
        setSidebarWidth(newWidth)
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing])

  return (
    <div 
      ref={sidebarRef}
      className="bg-white border-r border-gray-200 overflow-y-auto flex flex-col scroll-smooth relative"
      style={{ width: `${sidebarWidth}px` }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-20">
        <div className="h-20 relative w-full max-w-40">
          <Image 
            src="/contents/T.I.P. Logo HD.png" 
            alt="T.I.P. Logo" 
            fill
            className="object-contain object-left"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1.5">
        {/* About Section */}
        <button
          onClick={() => onNavigate("about")}
          className="w-full text-left px-3 py-2.5 rounded-lg transition-colors duration-200 text-s font-medium text-[#292929] hover:bg-gray-100 leading-tight"
        >
          Institutional Commitment to the SDGs
        </button>

        {sdgData.map((sdg) => {
          const isExpanded = expandedSDGs.has(sdg.id)
          // Check if SDG has any titles (target or indicator titles)
          const hasAnyTitles = sdg.targets.some(
            (target) => 
              (target.title && target.link) || 
              target.indicators.some((indicator) => indicator.title && indicator.link)
          )

          return (
            <div key={sdg.id}>
              <div className="flex items-center gap-0.5">
                <button
                  onClick={() => onNavigate(`sdg-${sdg.number}`)}
                  className="flex-1 text-left px-3 py-2.5 rounded-lg transition-all duration-200 text-[13px] font-medium text-[#292929] hover:text-[#f6c445] min-w-0"
                >
                  <span className="truncate block">{`SDG ${sdg.number}: ${sdg.title}`}</span>
                </button>
                {hasAnyTitles && (
                  <button
                    onClick={() => toggleSDGExpand(sdg.id)}
                    className="px-2 py-2.5 rounded-lg transition-all duration-200 hover:text-[#f6c445] shrink-0"
                  >
                    <div
                      className="w-3.5 h-3.5 shrink-0 transition-transform duration-300"
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>

              {isExpanded && hasAnyTitles && (
                <div className="ml-3 mt-1 space-y-0.5 border-l border-gray-200 pl-3 animate-in fade-in duration-200">
                  {sdg.targets.map((target) => {
                    const hasTargetTitle = target.title && target.link
                    const hasIndicatorTitles = target.indicators.some(
                      (indicator) => indicator.title && indicator.link
                    )

                    return (
                      <div key={target.id}>
                        {hasTargetTitle && (
                          <button
                            onClick={() => onNavigate(target.id)}
                            className="text-[12px] text-[#292929]/80 py-1.5 font-semibold uppercase tracking-wide hover:text-[#f6c445] hover:bg-gray-100 transition-colors w-full text-left px-2 rounded leading-tight wrap-break-word"
                          >
                            {target.title}
                          </button>
                        )}
                        {hasIndicatorTitles && (
                          <div className="ml-1 space-y-0.5">
                            {target.indicators.map((indicator) => {
                              if (!indicator.title || !indicator.link) return null
                              return (
                                <button
                                  key={indicator.id}
                                  onClick={() => onNavigate(indicator.id)}
                                  className="text-[11px] text-[#292929]/70 py-1 px-2 hover:text-[#f6c445] hover:bg-gray-100 transition-colors w-full text-left block rounded leading-tight wrap-break-word"
                                >
                                  • {indicator.title}
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Resize Handle */}
      <div
        onMouseDown={startResizing}
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-[#f6c445] transition-colors z-30"
        style={{ backgroundColor: isResizing ? "#f6c445" : "transparent" }}
      />
    </div>
  )
}
