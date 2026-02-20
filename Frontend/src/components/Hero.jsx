import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="pt-32 md:pb-30 pb-10 bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Find Your{" "}
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dream Job
          </span>{" "}
          Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Discover thousands of job opportunities from top companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            placeholder="Search job title..."
            className="px-6 py-3 w-full md:w-96 rounded-full border border-gray-300 focus:outline-none "
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold"
          >
            Search Jobs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
