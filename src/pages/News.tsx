import { newsData } from "../data/newsData"


const News = () => {
    return (
        <section className="py-20 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Latest <span className="text-blue-600">News & Events</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest happenings, celebrations, and achievements
                        at our school.
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((item) => (
                        <div
                            key={item.id}
                            className="
                bg-white rounded-2xl overflow-hidden
                shadow-lg hover:shadow-2xl
                transition-shadow duration-300
                cursor-pointer
              "
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-400 text-sm mb-2">{item.date}</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News
