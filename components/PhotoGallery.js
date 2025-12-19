"use client"

import Image from 'next/image'
import { useRef } from 'react'

export default function PhotoGallery({ images = [] }) {
  const ref = useRef(null)
  const scroll = (dir) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Photo Gallery</h3>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="p-2 rounded-full bg-white/10 text-white">
            ◀
          </button>
          <button onClick={() => scroll(1)} className="p-2 rounded-full bg-white/10 text-white">
            ▶
          </button>
        </div>
      </div>

      <div ref={ref} className="flex gap-4 overflow-x-auto no-scrollbar py-2">
        {images.map((src, i) => (
          <div key={i} className="min-w-[200px] md:min-w-[220px] rounded-lg overflow-hidden bg-white/5">
            <div className="relative w-[200px] md:w-[220px] h-[140px] md:h-[150px]">
              <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
