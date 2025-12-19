import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'

const samplePhotos = [
  '/gallery/photo1.jpg',
  '/gallery/photo2.jpg',
  '/gallery/photo3.jpg',
  '/gallery/photo4.jpg',
]

const sampleVideos = [
  { thumb: '/gallery/video1.jpg', id: 'v1' },
  { thumb: '/gallery/video2.jpg', id: 'v2' },
]

export default function CampusLife({ photos = samplePhotos, videos = sampleVideos }) {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Campus Life</h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">Explore the vibrant and enriching environment that our students experience every day</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <PhotoGallery images={photos} />
        <VideoGallery videos={videos} />
      </div>
    </section>
  )
}
