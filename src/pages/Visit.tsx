import { FaStar, FaClock, FaShieldAlt, FaGift } from "react-icons/fa";
import TourHighlight from "../components/TourHighlight/TourHighlight";

const quickFacts = [
    { icon: <FaStar className="text-blue-500 w-6 h-6" />, label: "Visitor Satisfaction", value: "95%" },
    { icon: <FaClock className="text-blue-500 w-6 h-6" />, label: "Average Tour Duration", value: "1hr" },
    { icon: <FaShieldAlt className="text-blue-500 w-6 h-6" />, label: "Personalized Experience", value: "100%" },
    { icon: <FaGift className="text-blue-500 w-6 h-6" />, label: "School Tours", value: "Free" },
];

const SchoolTour = () => {
    return (
        <section className="bg-gray-200 text-gray-800 py-16 px-6 md:px-20">
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

                {/* Left Content */}
                <div className="md:w-2/3">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        Book a <span className="text-blue-600">School Tour</span>
                    </h2>
                    <h3 className="text-3xl font-semibold mb-4">Experience Our School</h3>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                        Schedule a personalized tour of Buddha English Boarding School and discover the facilities, programs, and opportunities that await you.
                        Our guided tours provide an in-depth look at school life and academic excellence.
                    </p>
                </div>

                {/* Right Content - Quick Facts */}
                <div className="md:w-1/2 bg-white border border-gray-200 rounded-3xl p-8 shadow-md">
                    <h4 className="text-2xl text-blue-600 text-center font-bold mb-6">Quick Facts</h4>
                    <div className="flex  flex-col  gap-4">
                        {quickFacts.map((fact, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 rounded-2xl border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
                            >

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
                                        {fact.icon}
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                        {fact.label}
                                    </span>
                                </div>
                                <span className="text-blue-600 font-bold text-lg">
                                    {fact.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Book School Tour */}
            <div className="max-w-5xl mx-auto mt-17 px-6 text-center">

                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">
                    Why Book a School Tour?
                </h1>

                <p className="text-lg my-9  text-gray-600 leading-relaxed  ">
                    A school tour is the best way to get a feel for life at
                    <span className=" text-blue-600 font-bold"> Buddha English Boarding School</span>.
                    See our modern facilities, meet our dedicated faculty, and experience the
                    vibrant school community firsthand.
                </p>

            </div>
            <TourHighlight />
        </section>
    );
};

export default SchoolTour;