import { useState } from "react"
import { galleryData } from "../data/galleryData"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
            Our <span className="text-blue-600">School Gallery</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A glimpse of academic excellence, cultural celebrations, and joyful moments
            from our school life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedImage(item.image)
                setSelectedTitle(item.title)
              }}
              className="
                group 
                relative 
                overflow-hidden 
                rounded-2xl 
                shadow-lg 
                cursor-pointer
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full 
                  h-64 
                  object-cover
                  transform 
                  scale-110 
                  group-hover:scale-100 
                  transition-transform 
                  duration-500
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/50
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  flex items-center justify-center
                "
              >
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed inset-0 z-50
            bg-black/80
            flex items-center justify-center
            px-4
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full"
          >
            {/* Image */}
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="
                w-full
                max-h-[80vh]
                object-contain
                rounded-2xl
                shadow-2xl
              "
            />

            {/* Title */}
            <p className="text-center text-white mt-4 text-lg">
              {selectedTitle}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
