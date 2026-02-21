import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {/* Brand */}
          <div className="">
            <h2 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HireHub
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Job portal with user profiles, skill updates, certifications, work
              experience and admin job postings.
            </p>
          </div>

          {/* Product */}
          <div className="lg:ml-36 md:16 ml-10">
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Product
            </h3>
            <ul className="space-y-1 text-base font-semibold text-gray-500">
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Find Job
              </li>
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Find Company
              </li>
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Find Employee
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:ml-36 md:ml-10 ml-0">
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Company
            </h3>
            <ul className="space-y-1 text-base font-semibold text-gray-500">
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                About Us
              </li>
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Contact Us
              </li>
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Privacy Policy
              </li>
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:ml-44 ml-10">
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Support
            </h3>
            <ul className="space-y-1 text-base font-semibold text-gray-500">
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Help & Support
              </li>
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                Feedback
              </li>
              <li className="hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent cursor-pointer hover:translate-x-1.5 transform duration-300">
                FAQs
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-2xl text-gray-400 font-bold">
          Designed & Developed By{" "}
          <span className="inline-block hover:cursor-pointer hover:scale-90 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Amar Mahato
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
