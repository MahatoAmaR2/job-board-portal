import { motion } from "framer-motion";

function JobCard({ job, onView }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-200 rounded-2xl p-6 transition"
    >
      <h3 className="text-2xl font-semibold">{job.title}</h3>
      <p className="text-gray-500 text-lg font-medium">{job.company}</p>

      <div className="mt-3 text-base text-gray-600 font-normal">
        <p>📍 {job.location}</p>
        <p>💼 {job.experience}</p>
        {job.salary && <p>💰 {job.salary}</p>}
      </div>

      <p className="mt-3 text-gray-500 text-sm line-clamp-2 font-medium">
        {job.description}
      </p>

      <button
        onClick={() => onView(job)}
        className="mt-4 text-lg cursor-pointer font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline "
      >
        View More →
      </button>
    </motion.div>
  );
}

export default JobCard;
