import { programs } from '../data/programData';
import { FaArrowTrendUp } from 'react-icons/fa6';


const Program = () => {
    return (
        <div className="w-full py-16 px-4 bg-gray-200">
            {/* Heading */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-7xl font-bold text-gray-800 mb-4">Our <span className='text-blue-600'>Programs</span></h2>
                <p className="text-lg text-gray-600">
                    We provide quality education across different streams, ensuring the personal and academic growth of every student.
                </p>
            </div>

            {/* Program Sections */}
            {programs.map((program) => (
                <div
                    key={program.id}
                    className={`max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8 group ${program.reverse ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Image */}
                    <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Description */}
                    <div className="w-full bg-white rounded-2xl py-9 md:w-1/2 px-16">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2 flex items-center gap-4">
                            <div className="p-3 bg-blue-600 rounded-lg flex items-center justify-center">
                                <FaArrowTrendUp className='h-4 w-4 text-white' />
                            </div>
                            {program.program}
                        </span>
                        <h3 className="text-4xl font-bold text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-105">
                            {program.title}
                        </h3>
                        <p className="text-gray-600 mb-6 transition-transform duration-300 group-hover:scale-105 py-3">
                            {program.description}
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Program;