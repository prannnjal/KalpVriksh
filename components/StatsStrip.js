const defaultItems = [
  { value: '1000', label: 'Happy Parents' },
  { value: '100', label: 'Best Teachers' },
  { value: '1000', label: 'Students enrolled' },
  { value: '500', label: 'Successful Events' },
]

export default function StatsStrip({ items = defaultItems, bg = '/Rectangle 1018.svg', mobileBg = '/Rectangle 1018.png', overlayOpacity = 0, className = '' }) {
  return (
    <div className={`w-full flex justify-center mt-6 ${className}`}>
      <div className="relative max-w-6xl w-full px-4">
        <div className="w-full relative">
          {/* mobile bg (png) visible on small screens */}
          <div
            className="absolute inset-0 block md:hidden bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url("${mobileBg}")` }}
            aria-hidden
          />

          {/* desktop bg (svg) visible on md+ screens */}
          <div
            className="absolute inset-0 hidden md:block bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url("${bg}")` }}
            aria-hidden
          />

          {/* optional dark overlay to improve contrast for white text */}
          {overlayOpacity > 0 && (
            <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} aria-hidden />
          )}

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-6 md:px-12 py-10 md:py-14 text-white">
            {items.map((it) => (
              <div key={it.label} className="flex flex-col items-center md:items-start">
                <span className="text-3xl md:text-4xl font-bold">{it.value}</span>
                <span className="text-sm md:text-base mt-2">{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
