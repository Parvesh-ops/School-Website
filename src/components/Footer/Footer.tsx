import SchoolLogo from '../../assets/school logo.jpg'
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube,} from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* College Info */}
        <div>
          <img
            src={SchoolLogo }
            alt="SchoolLogo "
            className="w-30 h-30 mb-4"
          />

          <p className="text-gray-600 leading-relaxed mb-6">
            Buddha English Bording School is committed to providing quality
            education and fostering innovation in learning. We prepare
            students for success in their academic and professional journeys.
          </p>

          <p className="text-sm text-gray-500">
            🌐 Established 2054
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-6">
            Navigation
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Programs</li>
            <li className="hover:text-blue-600 cursor-pointer">Events</li>
            <li className="hover:text-blue-600 cursor-pointer">Admissions</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-6">
            Contact Info
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <IoLocationOutline className="text-blue-600 text-xl mt-1" />
              <span>Gramthan-6, Morang, Nepal</span>
            </li>

            <li className="flex items-center gap-3">
              <IoCallOutline className="text-blue-600 text-xl" />
              <span>+97700000</span>
            </li>

            <li className="flex items-center gap-3">
              <IoMailOutline className="text-blue-600 text-xl" />
              <span>mail@BuddhaSchool.edu.np</span>
            </li>

            <li className="flex items-center gap-3">
              <IoTimeOutline className="text-blue-600 text-xl" />
              <span>Sun - Fri : 6:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-xl text-blue-600">
              <IoLogoFacebook className="hover:text-blue-800 cursor-pointer" />
              <IoLogoInstagram className="hover:text-blue-800 cursor-pointer" />
              <IoLogoYoutube className="hover:text-blue-800 cursor-pointer" />
              <IoLogoLinkedin className="hover:text-blue-800 cursor-pointer" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-blue-600"
            />
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
