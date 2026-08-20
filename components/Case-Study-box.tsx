import Image from "next/image"

// data
import { caseStudyTypes } from "@/data/home.data"

export default function CaseStudyBox({
  title,
  client,
  category,
  summary,
  image,
  results,
}: caseStudyTypes) {
  return (
    <div className="overflow-hidden rounded-2xl border border-secondary-text/20 bg-white">
      
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-action">
          {category}
        </p>

        <h3 className="text-xl font-bold text-primary">
          {title}
        </h3>

        <p className="mt-2 text-sm text-secondary-text">
          {client}
        </p>

        <p className="mt-4 text-sm leading-6 text-secondary-text">
          {summary}
        </p>

        {results?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {results.map((result, index) => (
              <li
                key={index}
                className="rounded-full bg-secondary-text/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}