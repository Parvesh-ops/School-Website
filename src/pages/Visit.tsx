
import { FaStar, FaClock, FaShieldAlt, FaGift } from "react-icons/fa";

const quickFacts = [
  { icon: <FaStar className="text-blue-500 w-5 h-5" />, label: "Visitor Satisfaction", value: "95%" },
  { icon: <FaClock className="text-blue-500 w-5 h-5" />, label: "Average Tour Duration", value: "60min" },
  { icon: <FaShieldAlt className="text-blue-500 w-5 h-5" />, label: "Personalized Experience", value: "100%" },
  { icon: <FaGift className="text-blue-500 w-5 h-5" />, label: "school Tours", value: "Free" },
];

const schoolTour = () => {
  return (
    <section className="bg-gray-200 text-gray-800 py-16 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-7xl font-bold mb-4">Book a <span className="text-blue-600">school Tour</span></h2>
          <h3 className="text-3xl font-semibold mb-4">Experience Our school</h3>
          <p className="text-gray-800 text-xl leading-relaxed">
            Schedule a personalized tour of Buddha English Boarding School and discover the facilities, programs, and opportunities that await you.
            Our guided tours provide an in-depth look at school life and academic excellence.
          </p>
        </div>

        {/* Right Content - Quick Facts */}
       <div className="md:w-1/3 bg-gray-300 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4">
  <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
  {quickFacts.map((fact, index) => (
    <div
      key={index}
      className="flex items-center justify-between bg-gray-200 rounded-lg p-3 transition-colors duration-300 hover:bg-gray-100"
    >
      <div className="flex items-center gap-3">
        {fact.icon}
        <span className="text-gray-800 text-xl">{fact.label}</span>
      </div>
      <span className="font-semibold">{fact.value}</span>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default schoolTour;
