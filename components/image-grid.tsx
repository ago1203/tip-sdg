"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageGridProps {
  count: number
  indicatorId?: string
}

export default function ImageGrid({ count, indicatorId }: ImageGridProps) {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  // Extract the numeric part from the indicator ID (e.g., "sdg-1-1-1" -> "1.1.1")
  const numericId = indicatorId ? indicatorId.replace("sdg-", "").replace(/-/g, ".") : ""

  useEffect(() => {
    async function loadImages() {
      if (!numericId) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/images?folder=${numericId}`)
        const data = await response.json()

        if (data.images && data.images.length > 0) {
          setImages(data.images)
        }
      } catch (error) {
        console.error("Failed to load images:", error)
      } finally {
        setLoading(false)
      }
    }

    loadImages()
  }, [numericId])

  const getGridCols = (count: number) => {
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-2"
    if (count <= 4) return "grid-cols-2 md:grid-cols-2"
    return "grid-cols-2 md:grid-cols-3"
  }

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  if (loading) {
    return (
      <div className={`grid ${getGridCols(count)} gap-4`}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="aspect-video bg-gray-100 rounded-lg border-2 border-gray-200 animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <div className={`grid ${getGridCols(count)} gap-4`}>
      {Array.from({ length: count }).map((_, index) => {
        const hasError = imageErrors.has(index)
        const imageSrc = images[index]

        return (
          <div
            key={index}
            className="aspect-video bg-white rounded-lg border-2 border-gray-200 overflow-hidden group cursor-pointer hover:shadow-lg hover:border-[#f6c445] transition-all"
          >
            {imageSrc && !hasError ? (
              <Image
                src={imageSrc}
                alt={`SDG Indicator ${indicatorId} - Image ${index + 1}`}
                width={450}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={() => handleImageError(index)}
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs text-gray-500">Image {index + 1}</p>
                  <p className="text-xs text-gray-400 mt-1">Upload to: contents/{numericId}/</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
