import { useNavigate } from "react-router-dom"
import { newsData } from "../../data/newsData"
import { ArrowRight } from "lucide-react"

const News: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Latest News & Events
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest happenings, celebrations, and achievements at our school.
        </p>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.slice(0, 3).map((news) => (
          <div key={news.id} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            {/* Image */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-sm text-gray-200 mb-1">{news.date}</p>
              <h3 className="text-xl font-semibold">{news.title}</h3>
              <p className="mt-2 text-sm text-gray-200">{news.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/news")}
          className="
      group
      flex items-center gap-2
      px-5 py-2
      bg-gray-100 text-black
      rounded-full
      shadow-lg
      hover:bg-gray-200
      transition
      font-medium
      cursor-pointer
    "
        >
          <span>View More</span>
          <ArrowRight
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

    </section>
  )
}

export default News
