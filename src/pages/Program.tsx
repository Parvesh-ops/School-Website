import { useTheme } from '../context/ThemeContext';
import { programs } from '../data/programData';
import { FaArrowTrendUp } from 'react-icons/fa6';

const Program = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full py-16 px-4 transition-colors duration-300 
        ${darkMode ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className={`text-7xl font-bold mb-4 
            ${darkMode ? 'text-white' : 'text-gray-800'}`}
        >
          Our <span className="text-blue-600">Programs</span>
        </h2>

        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          We provide quality education across different streams, ensuring the
          personal and academic growth of every student.
        </p>
      </div>

      {/* Program Sections */}
      {programs.map((program) => (
        <div
          key={program.id}
          className={`max-w-6xl mx-auto mb-16 flex flex-col md:flex-row 
            items-center gap-8 group 
            ${program.reverse ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Description Card */}
          <div
            className={`w-full md:w-1/2 px-16 py-9 rounded-2xl transition-colors duration-300
              ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
          >
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2 flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaArrowTrendUp className="h-4 w-4 text-white" />
              </div>
              {program.program}
            </span>

            <h3 className="text-4xl font-bold text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-105">
              {program.title}
            </h3>

            <p
              className={`text-sm font-semibold leading-7 text-center mx-auto py-3
                ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {program.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
