import { motion } from "framer-motion";

function Newsletter() {
  return (
    <section className="py-24 bg-linear-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="text-white max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Never Want to Miss Any Job News?
            </h2>
            <p className="mt-4 text-white/80">
              Subscribe to get the latest job updates, hiring news, and career
              tips directly in your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="relative hidden md:block w-105">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 pr-36 rounded-full bg-white text-gray-800 focus:outline-none"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition">
                Subscribe
              </button>
            </div>

            <div className="md:hidden w-full space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-white text-gray-800 focus:outline-none"
              />

              <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
