import { Abouts } from "../data/aboutData";
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`py-20 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className={`relative inline-block text-5xl md:text-7xl font-extrabold transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}>
            About <span className={`text-blue-600`}>Us</span>
          </h2>

          <p className={`mt-6 max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Building excellence in education through innovation, integrity, and
            academic excellence.
          </p>
        </div>

        {/* All Sections */}
        {Abouts.map((about, index) => (
          <div
            key={about.id}
            className={`flex flex-col md:flex-row gap-12 items-center ${index > 0 ? 'mt-32' : 'mb-32'} ${about.reverse ? 'md:flex-row-reverse' : ''}`}
          >

            {/* Image */}
            <div className="relative group w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
              <img
                src={about.image}
                alt={about.title}
                className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className={`relative inline-block text-3xl font-bold mb-8 transition-colors duration-300 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                {about.title}
                <span className={`absolute left-1/2 -bottom-3 h-1 rounded-full -translate-x-1/2 transition-colors duration-300 ${about.id === 1 ? (darkMode ? "bg-blue-400 w-72" : "bg-blue-600 w-72") : (darkMode ? "bg-blue-400 w-40" : "bg-blue-600 w-40")}`}></span>
              </h3>

              <p className={`text-sm font-semibold text-center leading-7 mx-auto transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-black"}`}>
                {about.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default About;
