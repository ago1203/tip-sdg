"use client"
import Image from "next/image"
import SubsectionItem from "./subsection-item"

interface Target {
  id: string
  title?: string
  link?: string
  indicators: {
    id: string
    title?: string
    link?: string
    description: string
    // imageCount?: number
  }[]
}

interface SDGSectionProps {
  sdgNumber: number
  title: string
  targets: Target[]
}

export default function SDGSection({ sdgNumber, title, targets }: SDGSectionProps) {
  return (
    <section id={`sdg-${sdgNumber}`} className="bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0">
              {/* LOGO */}
              <div className="w-50 h-50 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`/sdg-logos/E_WEB_INVERTED_${sdgNumber.toString().padStart(2, "0")}.png`}
                  alt={`SDG ${sdgNumber}: ${title}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold text-[#292929]">{title}</h2>
            </div>
          </div>
          <div className="h-1 w-32 bg-[#f6c445] rounded-full"></div>
        </div>

        <div className="space-y-12 animate-in fade-in duration-300">
          {targets.map((target) => (
            <div key={target.id} className="space-y-8">
              {/* Indicators for this target */}
              {target.indicators.map((indicator, index) => (
                <div key={indicator.id} className="space-y-4">
                  {/* Description */}
                  <div id={indicator.id} className="scroll-mt-32">
                    <p className="text-[#292929] leading-relaxed text-pretty max-w-3xl text-[20px]">{indicator.description}</p>
                  </div>
                  
                  {/* Target Title (Bigger) - Shown once after first description */}
                  {index === 0 && target.title && target.link && (
                    <div id={target.id} className="scroll-mt-32">
                      <a 
                        href={target.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-[#292929]/80 hover:text-[#f6c445] transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        {target.title}
                        <span className="text-xl">🔗</span>
                      </a>
                    </div>
                  )}
                  
                  {/* Indicator Title (Smaller) - Only shown if title and link are available */}
                  {indicator.title && indicator.link && (
                    <div>
                      <a 
                        href={indicator.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#292929]/80 hover:text-[#f6c445] transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        {indicator.title}
                        <span className="text-sm">🔗</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
