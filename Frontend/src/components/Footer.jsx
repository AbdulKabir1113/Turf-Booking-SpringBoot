import { Phone, Mail, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-green-500">
              TurfHub
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Book your favourite sports turf anytime,
              anywhere with secure online booking and
              real-time slot availability.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-green-400 cursor-pointer">Home</li>

              <li className="hover:text-green-400 cursor-pointer">About Us</li>

              <li className="hover:text-green-400 cursor-pointer">Contact</li>

              <li className="hover:text-green-400 cursor-pointer">Careers</li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-green-400 cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Refund Policy
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+91 9876543210</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>support@turfhub.com</span>

              </div>

              <div className="flex items-center gap-3">

                <Globe size={18} />

                <span>www.turfhub.com</span>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <div className="bg-white/10 p-3 rounded-full hover:bg-blue-600 cursor-pointer transition">
                <FaFacebookF />
              </div>

              <div className="bg-white/10 p-3 rounded-full hover:bg-pink-600 cursor-pointer transition">
                <FaInstagram />
              </div>

              <div className="bg-white/10 p-3 rounded-full hover:bg-sky-600 cursor-pointer transition">
                <FaLinkedinIn />
              </div>

              <div className="bg-white/10 p-3 rounded-full hover:bg-black cursor-pointer transition">
                <FaXTwitter />
              </div>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">

          <p>
            © 2026 TurfHub. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <span className="hover:text-white cursor-pointer">
              Privacy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;