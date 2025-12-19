"use client"

import Image from 'next/image'
import { useRef } from 'react'

export default function VideoGallery({ videos = [] }) {
  const ref = useRef(null)
  const scroll = (dir) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <div className="w-full mt-6 md:mt-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Video Gallery</h3>
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
        {videos.map((v, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[380px] rounded-lg overflow-hidden bg-white/5 relative">
            <div className="relative w-[320px] md:w-[380px] h-[200px] md:h-[220px]">
              <Image src={v.thumb} alt={`video-${i}`} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center text-blue-700 font-bold">▶</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
