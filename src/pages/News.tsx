import { Link } from "react-router-dom"
import { newsData } from "../data/newsData"
import { useTheme } from "../context/ThemeContext"

const News = () => {
    const { darkMode } = useTheme()

    return (
        <section
            className={`py-20 transition-colors duration-300 
        ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2
                        className={`text-4xl md:text-5xl font-bold 
              ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                        Latest <span className="text-blue-600">News & Events</span>
                    </h2>

                    <p
                        className={`mt-4 max-w-2xl mx-auto 
              ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                        Stay updated with the latest happenings, celebrations, and achievements
                        at our school.
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((item) => (
                        <div
                            key={item.id}
                            className={`rounded-2xl overflow-hidden cursor-pointer group
                shadow-lg hover:shadow-2xl transition-all duration-300
                ${darkMode ? "bg-gray-900" : "bg-white"}`}
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <p className={`${darkMode ? "text-white font-semibold" : "text-gray-500 font-semibold"} text-sm mb-2`}>
                                    {item.date}
                                </p>

                                <h3
                                    className={`text-xl font-semibold mb-2
                    ${darkMode ? "text-white" : "text-gray-800"}`}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className={`leading-6 text-sm line-clamp-3
                    ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                                >
                                    {item.description}
                                </p>

                                {/* Read More */}
                                <Link
                                    to={`/news/${item.id}`}
                                    className="mt-4 inline-flex items-center gap-2 px-3 py-2 
                             text-blue-600 font-medium text-sm rounded-full
                             hover:bg-blue-200 hover:text-blue-700
                             transition-all duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default News
