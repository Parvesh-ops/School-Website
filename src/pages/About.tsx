import school from '../assets/School Image.jpg'
import visionImg from '../assets/School Vision.jpg'
import missionImg from '../assets/Mission.jpg'

interface IAboutSection {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

const About: React.FC = () => {
  const sections: IAboutSection[] = [
    {
      id: 1,
      title: "Buddha English Boarding School",
      description: "Established in 2056 B.S., Buddha English Boarding School is a pioneering institution that offers innovative opportunities within a highly academic environment. Our objective is to provide value-based, quality education while prioritizing the personal and professional growth of our students through experienced faculty and modern teaching practices.",
      image: school,
      reverse: false
    },
    {
      id: 2,
      title: "Our Vision",
      description: "Buddha English Boarding School offers a comprehensive educational experience that enhances both practical and theoretical abilities of students, and provides an outstanding opportunity for making a positive impact on the world. It is a place where those who strive for excellence and constantly seek improvement can find ample opportunities to achieve their goals. At Himalaya Darshan College, we firmly believe in the potential of our students and are committed to providing them with the resources and support needed to realize their dreams and aspirations.",
      image: visionImg,
      reverse: true
    },
    {
      id: 3,
      title: "Our Mission",
      description: "The mission of Buddha English Boarding School is to empower students to become successful global citizens. We achieve this by providing students with both theoretical and practical exposure in all areas of study, thereby fostering academic and practical excellence. Our institution values students as valuable assets and creates an environment that enables them to meet industry standards. Our ultimate objective is to encourage excellence, diversity, and engaged learning by providing a contemporary and accessible education.",
      image: missionImg,
      reverse: false
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="relative inline-block text-5xl md:text-7xl font-extrabold text-gray-800">
            About <span className="text-blue-600">Us</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Building excellence in education through innovation, integrity, and
            academic excellence.
          </p>
        </div>

        {/* All Sections */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row gap-12 items-center ${index > 0 ? 'mt-32' : 'mb-32'
              } ${section.reverse ? 'md:flex-row-reverse' : ''}`}
          >

            {/* Image */}
            <div className="relative group w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
              <img
                src={section.image}
                alt={section.title}
                className="
      w-full
      h-100
      object-cover
      transition-transform
      duration-500
      group-hover:scale-105
    "
              />
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="relative inline-block text-4xl font-bold text-blue-600 mb-8">
                {section.title}
                <span className={`absolute left-1/2 -bottom-3 h-1 bg-blue-600 rounded-full -translate-x-1/2 ${section.id === 1 ? 'w-72' : 'w-40'
                  }`}></span>
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {section.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default About;