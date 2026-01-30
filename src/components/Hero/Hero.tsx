import backgroundImg from "../../assets/Background Img.jpg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="
        relative
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        text-white
      "
    >

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 md:px-12">
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
            className="
              bg-blue-600
              px-8 py-4
              rounded-full
              font-semibold
              shadow-lg
              transition-all
              duration-300
              ease-out
              hover:bg-blue-700
              hover:scale-105
              active:scale-95
            "
          >
            Apply Now
          </button>

          <button
            className="
              bg-orange-400
              px-8 py-4
              rounded-full
              font-semibold
              shadow-lg
              transition-all
              duration-300
              ease-out
              hover:bg-orange-500
              hover:scale-105
              active:scale-95
            "
          >
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
