import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";


interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);

    console.log("Contact form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gray-200  text-slate-50 p-6 md:p-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        .font-jakarta {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-9">
          <div className="inline-block bg-red-500 border border-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeInUp">
            Let's Connect
          </div>
          <h1 className="font-jakarta text-5xl md:text-6xl font-extrabold mb-4 text-blue-600  animate-fadeInUp delay-100">
            Get in Touch
          </h1>
          <p className="text-l text-gray-500 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Ready to start your educational journey? We're here to help you every step of the way.
            Contact us today to learn more about our programs and how we can help you achieve your
            goals.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 animate-fadeInUp delay-300">

          {/* Contact*/}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h2 className="font-jakarta text-2xl text-blue-600 font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">
              {[
                {
                  label: "Visit Our School",
                  value: "Gramthan-6, Morang, Nepal",
                  sub: "Koshi Province, Nepal",
                  icon: <MapPin className="text-blue-600" />,
                  bg: "bg-blue-100",
                },
                {
                  label: "Call Us",
                  value: "+97700000",
                  sub: "Sunday - Friday: 6:00 AM - 5:00 PM",
                  icon: <Phone className="text-green-600" />,
                  bg: "bg-green-100",
                },
                {
                  label: "Email Us",
                  value: "mail@BuddhaSchool.edu.np",
                  sub: "We'll respond within 24 hours",
                  icon: <Mail className="text-purple-600" />,
                  bg: "bg-purple-100",
                },
                {
                  label: "Office Hours",
                  value: "Sunday - Thursday",
                  sub: "6:00 AM - 5:00 PM",
                  icon: <Clock className="text-orange-600" />,
                  bg: "bg-orange-100",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 hover:shadow-md hover:scale-105 transition duration-400 bg-white"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bg}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-base font-bold text-gray-900">
                      {item.label}
                    </p>
                    <p className="text-blue-600 font-medium">{item.value}</p>
                    <p className="text-sm text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h2 className="font-jakarta text-blue-600 text-2xl font-bold mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-black focus:border-black outline-none resize-none transition"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 hover:shadow-lg transition-all"
              >
                Send Message
              </button>

              {/* Success Message */}
              {sent && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center animate-slideInUp">
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </div>


        </div>

        {/* Map */}
        <div className="w-full h-80 md:h-96 mt-8 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d87.2671234!3d26.4556789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7d123456789%3A0x123456789abcdef!2sNeta%20Chowk%2C%20Biratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
            width="100%"
            height="100%"
            className="border-0k"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Biratnagar Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;