import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { stages } from "../../data/EducationStageData";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EducationStages = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: true,
    pauseOnFocus: false,
    pauseOnDotsHover: true,
    swipeToSlide: true,
    touchMove: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Learning That Grows With Every Stage
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          From early childhood through university preparation, we provide
          high-quality education tailored to every stage of development.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {stages.map((stage, index) => (
            <div key={index} className="px-2 sm:px-3">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                
                {/* Image */}
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="
                    w-full
                    h-56 sm:h-64 md:h-72 lg:h-80
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {stage.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-200 line-clamp-3">
                    {stage.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  onClick={() => navigate("/program")}
                  className="
                    absolute
                    right-3 sm:right-4
                    bottom-3 sm:bottom-4
                    bg-white
                    text-black
                    p-2 sm:p-3
                    rounded-full
                    shadow
                    hover:bg-gray-100
                    transition
                  "
                >
                  <FaChevronRight className="text-sm sm:text-base" />
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
