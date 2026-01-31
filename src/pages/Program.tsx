import nurseryImg from '../assets/nurseryImg.jpg';
import scienceImg from '../assets/scienceImg.jpg';
import commerceImg from '../assets/commerceImg.jpg';
import hotelImg from '../assets/hotelImg.jpg'
import { FaArrowTrendUp } from 'react-icons/fa6';

interface IProgram {
    id: number;
    program: string;
    title: string;
    description: string;
    image: string;
    reverse: boolean
}

const programs: IProgram[] = [
    {
        id: 1,
        program: "Education Programs",
        title: "Nursery to Class 10",
        description: "We provide a nurturing and supportive environment for young learners, focusing on foundational knowledge, creativity, and holistic development from Nursery to Class 10. Our curriculum emphasizes critical thinking, interactive learning, and character building to ensure students develop strong core competencies. Students are encouraged to explore their interests in arts, sports, and technology alongside academics, fostering well-rounded growth. We aim to build confident, responsible, and well-rounded individuals ready for higher education and life challenges.",
        image: nurseryImg,
        reverse: false,
    },
    {
        id: 2,
        program: "Education Programs",
        title: "+2 Science",
        description: "Advanced Science curriculum designed to prepare students for higher education in engineering, medical, and other science-related fields with practical labs and expert faculty. The program emphasizes hands-on experiments and laboratory work to enhance analytical skills and deepen understanding of scientific concepts. Students are guided by experienced teachers who employ modern teaching methodologies to build strong problem-solving abilities. We aim to inspire curiosity, foster scientific temperament, and prepare students for competitive exams and scientific research opportunities.",
        image: scienceImg,
        reverse: true,
    },
    {
        id: 3,
        program: "Education Programs",
        title: "+2 Commerce",
        description: "Commerce stream focused on accounting, economics, and business studies, preparing students for professional courses and future career opportunities in the business world. The curriculum integrates practical projects, case studies, and internships to build real-world skills and industry exposure. Students develop financial literacy, business acumen, and strategic thinking through interactive classroom sessions and business simulations. We aim to nurture competent professionals ready to excel in commerce, finance, management, and entrepreneurship.",
        image: commerceImg,
        reverse: false,
    },
    {
        id: 4,
        program: "Education Programs",
        title: "+2 Hotel Management",
        description: "Hospitality and Hotel Management program offering practical skills, industry knowledge, and internships to groom future professionals in the hospitality sector. Students learn customer service excellence, front office operations, culinary arts, and hotel administration through comprehensive training modules. The program provides extensive exposure to real hotel environments through industry tie-ups and on-site training at premier hospitality establishments. Our goal is to develop skilled, confident, and professional individuals ready to thrive in the fast-paced and dynamic hospitality industry.",
        image: hotelImg,
        reverse: true,
    },
];

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