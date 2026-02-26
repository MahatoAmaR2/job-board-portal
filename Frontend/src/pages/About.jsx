import { motion } from "framer-motion";
import { Briefcase, Users, Building2, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <Link
          to="/"
          className="flex items-center gap-1 mb-6 text-lg font-medium cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded transition-colors duration-200 w-fit transform hover:scale-105"
        >
          <ArrowLeft size={18} />
          <p>Home</p>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HireHub
          </span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          HireHub connects talented professionals with top companies. We
          simplify hiring and help candidates land their dream jobs faster.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center"
      >
        {[
          {
            icon: Briefcase,
            value: "1,200+",
            label: "Jobs Posted",
            color: "text-blue-600",
          },
          {
            icon: Building2,
            value: "350+",
            label: "Companies",
            color: "text-purple-600",
          },
          {
            icon: Users,
            value: "10,000+",
            label: "Active Users",
            color: "text-green-600",
          },
          {
            icon: Target,
            value: "95%",
            label: "Success Rate",
            color: "text-red-500",
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-6 border rounded-2xl hover:scale-105 transition"
            >
              <Icon className={`mx-auto mb-4 ${item.color}`} size={28} />
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to bridge the gap between job seekers and employers
            by providing a seamless hiring experience. We empower professionals
            to showcase their skills and connect with the right opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl text-white"
        >
          <h3 className="text-2xl font-semibold mb-4">Why Choose HireHub?</h3>
          <ul className="space-y-3 text-sm">
            <li>✔ Easy job search & filtering</li>
            <li>✔ Company profile insights</li>
            <li>✔ Secure and fast applications</li>
            <li>✔ Modern user-friendly interface</li>
          </ul>
        </motion.div>
      </div>
      <div className="rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center py-16 px-6  text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Start Your Career Journey Today 🚀
          </h2>
          <p className="text-white/80 mb-6">
            Join thousands of professionals and companies on HireHub.
          </p>
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition cursor-pointer">
            Explore Jobs
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
