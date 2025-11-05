"use client"

import type { SDG } from "@/data/sdg-data"
import ImageGallery from "./image-gallery"

interface MainContentProps {
  sdg: SDG | undefined
  selectedSDG: number
}

export default function MainContent({ sdg, selectedSDG }: MainContentProps) {
  if (selectedSDG === 0) {
    return (
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-background via-background to-background/95">
        <div className="max-w-5xl mx-auto px-8 py-16 md:py-20">
          {/* About Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-balance">Sustainable Development Goals</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
              Explore the 17 Sustainable Development Goals and their targets. Each goal is designed to create a better
              future for all by addressing global challenges including poverty, inequality, climate change, and more.
            </p>
          </div>

          <div className="space-y-12">
            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* About Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group aspect-[4/3] bg-muted border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-foreground/40 group-hover:text-foreground/60 transition-colors">Image {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!sdg) return null

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-background via-background to-background/95">
      <div className="max-w-5xl mx-auto px-8 py-16 md:py-20">
        <div className="mb-16 space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg font-bold text-lg">
              {selectedSDG}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              <span className="text-balance">{sdg.title}</span>
            </h1>
          </div>
        </div>

        <div className="space-y-16">
          {sdg.targets.map((target, index: number) => (
            <article key={target.id} className="group">
              {/* Target Header */}
              <div className="mb-8 pb-6 border-b border-border/50">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
                  {/* {target.title} */}
                </h2>
              </div>

              {/* Indicators */}
              {target.indicators && target.indicators.length > 0 && (
                <div className="space-y-12">
                  {target.indicators.map((indicator, indicatorIndex: number) => (
                    <div key={indicator.id}>
                      <div className="mb-10">
                        {/* <h3 className="text-xl font-semibold text-foreground mb-4">{indicator.title}</h3> */}
                        <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl">
                          {indicator.description}
                        </p>
                      </div>

                      {/* Images for indicator */}
                      {/* {indicator.imageCount && indicator.imageCount > 0 && (
                        <div className="mb-12">
                          <ImageGallery imageCount={indicator.imageCount} />
                        </div>
                      )} */}

                      {indicatorIndex < target.indicators.length - 1 && (
                        <div className="mt-12 pt-12 border-t border-border/20" />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {index < sdg.targets.length - 1 && <div className="mt-16 pt-16 border-t border-border/30" />}
            </article>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="mt-20 pb-12" />
      </div>
    </div>
  )
}
