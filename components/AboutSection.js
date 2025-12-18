import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 px-4 md:px-8 lg:px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-4">
            <h2
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '-0.01em',
                color: '#1F2937',
              }}
            >
              We, at Kalp Vriksh,
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            are dedicated to achieve excellence through a confluence of traditional teaching values and
            technological advancement in teaching methods. With our highly experienced faculty, specially trained
            to act in consonance with the psychology and individual needs of the students, we are able to cater
            to the individual needs of each and every students.
            </p>

            <button
              className="text-white font-semibold w-fit"
              style={{
                backgroundColor: '#FFB606',
                borderRadius: '24px',
                padding: '12px 24px',
                transition: 'all 200ms ease-out',
              }}
            >
              Know More
            </button>
          </div>

        <div className="relative w-full max-w-[700px] mx-auto lg:ml-auto h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px]">
            <div
            className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: '18px 18px 150px 18px',
              backgroundImage: 'url("/Rectangle 4.svg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              }}
            />
            <div
            className="absolute inset-0 sm:inset-[1px] lg:inset-[2px] z-10 overflow-hidden"
              style={{
                borderRadius: '18px 18px 150px 18px',
              }}
            >
            <Image src="/KVPS 1.png" alt="Kalp Vriksh campus" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

