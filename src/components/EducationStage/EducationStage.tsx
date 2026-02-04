import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { stages } from "../../data/EducationStageData";
import { useNavigate } from "react-router-dom";

const EducationStages = () => {
    const navigate = useNavigate();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="w-full py-16 bg-white">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                    Learning That Grows With Every Stage
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    From early childhood through university preparation, we provide
                    high-quality education tailored to every stage of development.
                </p>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto px-4">
                <Slider {...settings}>
                    {stages.map((stage, index) => (
                        <div key={index} className="px-3">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">

                                {/* Image */}
                                <img
                                    src={stage.image}
                                    alt={stage.title}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Content */}
                                <div className="absolute bottom-0 p-9 text-white">
                                    <h3 className="text-xl font-semibold">{stage.title}</h3>
                                    <p className="mt-2 text-sm text-gray-200">
                                        {stage.description}
                                    </p>
                                </div>

                                {/* Arrow Button */}
                                <button
                                    onClick={() => navigate("/program")}
                                    className="absolute right-4 bottom-4 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100 transition"
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default EducationStages;
