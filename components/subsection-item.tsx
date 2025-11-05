// import ImageGrid from "./image-grid"

interface SubsectionItemProps {
  id?: string
    title: string
  description: string
  // imageCount: number
}

export default function SubsectionItem({ id, title, description }: SubsectionItemProps) {
  return (
    <div id={id} className="space-y-6 pb-8 border-b border-gray-200 last:border-0 scroll-mt-32">
      {/* Description */}
      <p className="text-[#292929]/70 leading-relaxed text-pretty max-w-3xl">{description}</p>

      {/* Subsection Title - Now below description with anchor link */}
      <div>
        <a 
          href={`#${id}`}
          className="text-lg font-semibold text-[#f6c445] hover:text-[#292929] transition-colors duration-200 inline-flex items-center gap-2"
        >
          {title}
          <span className="text-sm">🔗</span>
        </a>
      </div>

      

      {/* Image Grid */}
      {/* {imageCount > 0 && <ImageGrid count={imageCount} indicatorId={id} />} */}
    </div>
  )
}
