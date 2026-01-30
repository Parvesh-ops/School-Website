import school from '../assets/School Image.jpg'
import visionImg from '../assets/School Vision.jpg' 
import missionImg from '../assets/Mission.jpg'

const About = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">

          {/* Left Content */}
          <div>
            <h3 className="relative inline-block text-4xl font-bold text-blue-600 mb-8">
              Buddha English Boarding School
              <span className="absolute left-1/2 -bottom-3 w-72 h-1 bg-blue-600 rounded-full -translate-x-1/2"></span>
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Established in 2056 B.S., Buddha English Boarding School is a
              pioneering institution that offers innovative opportunities
              within a highly academic environment. Our objective is to provide
              value-based, quality education while prioritizing the personal
              and professional growth of our students through experienced
              faculty and modern teaching practices.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <img
              src={school}
              alt="School"
              className="
                rounded-2xl
                shadow-xl
                w-full
                h-100
                object-cover
                transition-transform
              
              "
            />
          </div>
        </div>

        {/* VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative group md:order-1 order-2">
            <img
              src={visionImg}
              alt="Our Vision"
              className="
                rounded-2xl
                shadow-xl
                w-full
                h-100
                object-cover
                transition-transform
              
              "
            />
          </div>

          {/* Right Content */}
          <div className="md:order-2 order-1">
            <h3 className="relative inline-block text-4xl font-bold text-blue-600 mb-8">
              Our Vision
              <span className="absolute left-1/2 -bottom-3 w-30 h-1 bg-blue-600 rounded-full -translate-x-1/2"></span>
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Buddha English Boarding School offers a comprehensive educational experience that enhances both practical
              and theoretical abilities of students, and provides an outstanding opportunity for making a positive
               impact on the world. It is a place where those who strive for excellence and constantly seek improvement 
               can find ample opportunities to achieve their goals. At Himalaya Darshan College, we firmly believe in 
               the potential of our students and are committed to providing them with the resources and support needed 
               to realize their dreams and aspirations.
            </p>

            
          </div>

        </div>

        {/* Our mission */}
        
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-32">

  {/* Left Content */}
  <div>
    <h3 className="relative inline-block text-4xl font-bold text-blue-600 mb-8">
      Our Mission
      <span className="absolute left-1/2 -bottom-3 w-40 h-1 bg-blue-600 rounded-full -translate-x-1/2"></span>
    </h3>

    <p className="text-gray-700 text-lg leading-relaxed mb-4">
      The mission of Buddha English Boarding School is to empower students to become successful global citizens. We achieve
       this by providing students with both theoretical and practical exposure in all areas of study, thereby fostering
        academic and practical excellence. Our institution values students as valuable assets and creates an environment
         that enables them to meet industry standards. Our ultimate objective is to encourage excellence, diversity, and
          engaged learning by providing a contemporary and accessible education.
    </p>


  </div>

  {/* Right Image */}
  <div className="relative group">
    <img
      src={missionImg} 
      alt="Our Mission"
      className="
        rounded-2xl
        shadow-xl
        w-full
        h-100
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />
  </div>

</div>


      </div>
    </section>
  );
};

export default About;
