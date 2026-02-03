
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import type { CSSProperties } from "react";

import backgroundImg1 from "../../assets/Background Img.jpg";
import backgroundImg2 from "../../assets/Background Img 2.jpg";
import backgroundImg3 from "../../assets/Background Img 2.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// Arrow component props interface for custom arrows
interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const heroImages = [backgroundImg1, backgroundImg2, backgroundImg3];

const Hero = () => {
  const navigate = useNavigate();

  const SampleNextArrow = ({ onClick }: ArrowProps) => {
    return (
      <button
        aria-label="Next slide"
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 
                 right-3 sm:right-5 z-10 
                 bg-gray-500 text-white 
                 p-2 rounded-full shadow-md 
                 hover:bg-gray-600 transition"
      >
        <AiOutlineArrowRight size={22} />
      </button>
    );
  };

  const SamplePrevArrow = ({ onClick }: ArrowProps) => {
    return (
      <button
        aria-label="Previous slide"
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 
                 left-3 sm:left-5 z-10 
                 bg-gray-500 text-white 
                 p-2 rounded-full shadow-md 
                 hover:bg-gray-600 transition"
      >
        <AiOutlineArrowLeft size={22} />
      </button>
    );
  };


  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          arrows: false,
        },
      },
    ],

  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Slider {...settings}>
        {heroImages.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Background Image */}
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl px-6 md:px-12 h-full flex flex-col justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Excellence in <span className="text-blue-400">Education</span>
                </h1>

                <p className="mt-4 text-lg md:text-xl font-semibold text-gray-100">
                  Shaping futures through quality learning experiences
                </p>

                <p className="mt-3 max-w-2xl text-base md:text-lg text-gray-200">
                  Join our community of learners and discover your potential in a
                  supportive, innovative academic environment.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-5">
                  <button
                    className="bg-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105 active:scale-95"
                  >
                    Apply Now
                  </button>

                  <button
                    className="bg-orange-400 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 ease-out hover:bg-orange-500 hover:scale-105 active:scale-95"
                    onClick={() => navigate("/program")}
                  >
                    Explore Programs
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
