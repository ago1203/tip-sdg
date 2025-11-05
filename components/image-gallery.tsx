"use client"

import { useState } from "react"

interface ImageGalleryProps {
  imageCount: number
}

export default function ImageGallery({ imageCount }: ImageGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getGridClass = (count: number) => {
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-1 md:grid-cols-2"
    if (count === 3) return "grid-cols-1 md:grid-cols-3"
    if (count === 4) return "grid-cols-2 md:grid-cols-2"
    if (count === 5) return "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
    return count % 2 === 0 ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 md:grid-cols-3"
  }

  return (
    <div className={`grid ${getGridClass(imageCount)} gap-4 md:gap-6 mb-8`}>
      {Array.from({ length: imageCount }).map((_, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-lg"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="aspect-square bg-gradient-to-br from-muted via-muted to-muted/80 border border-border rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-border/80 hover:shadow-md cursor-pointer">
            {/* Animated background effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 transition-opacity duration-300 ${
                hoveredIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="relative z-10 flex flex-col items-center justify-center gap-3">
              <div
                className={`w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                  hoveredIndex === i ? "scale-110" : "scale-100"
                }`}
              >
                <svg className="w-6 h-6 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span
                className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                  hoveredIndex === i ? "text-foreground/70" : "text-foreground/50"
                }`}
              >
                Image {i + 1}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
