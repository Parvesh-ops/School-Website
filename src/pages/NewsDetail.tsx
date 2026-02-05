import { useParams, useNavigate } from "react-router-dom"
import { newsData } from "../data/newsData"

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const news = newsData.find((item) => item.id === Number(id))

  if (!news) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-100 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          News not found
        </h2>
        <button
          onClick={() => navigate("/news")}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
        >
          Back to News
        </button>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-xl mb-8">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-125 object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Date */}
        <p className="text-gray-400 text-sm mb-2">{news.date}</p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {news.title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          {news.description}
        </p>
      </div>
    </section>
  )
}

export default NewsDetail
