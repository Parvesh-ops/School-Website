import { FaUsers, FaQuestionCircle, FaCamera } from "react-icons/fa";
import type { JSX } from "react";


interface TourHighlightItem {
    icon: JSX.Element;
    title: string;
    description: string;
}

const tourHighlights: TourHighlightItem[] = [
    {
        icon: <FaCamera className="w-10 h-10 text-blue-600" />,
        title: "See Our Facilities",
        description:
            "Explore our modern classrooms, labs, library, and recreational facilities.",
    },
    {
        icon: <FaUsers className="w-8 h-8 text-blue-600" />,
        title: "Meet Faculty & Students",
        description:
            "Connect with professors/sir and current students to learn about school life.",
    },
    {
        icon: <FaQuestionCircle className="w-8 h-8 text-blue-600" />,
        title: "Get Instant Answers",
        description:
            "Ask questions and get personalized information about programs and admissions.",
    },
];


const TourHighlight = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tourHighlights.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-3xl p-6 text-center
                        transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center
                        bg-blue-100 rounded-2xl">
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {item.title}
                        </h3>

                        <p className="text-gray-500 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TourHighlight;
