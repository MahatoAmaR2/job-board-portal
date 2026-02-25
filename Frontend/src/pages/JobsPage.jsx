import { useState, useMemo, useEffect } from "react";
import jobsData from "../data/jobs.json";
import JobCard from "../components/jobs/JobCard";
import JobModal from "../components/jobs/JobModal";
import SidebarFilter from "../components/jobs/SidebarFilter";
import { SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function JobsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  const filteredJobs = useMemo(() => {
    return jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (location ? job.location === location : true) &&
        (category ? job.category === category : true) &&
        (experience ? job.experience === experience : true),
    );
  }, [search, location, category, experience]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, category, experience]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 border px-4 py-2 rounded-lg"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-10">
        {/* Desktop Sidebar */}
        <div className="hidden md:block md:col-span-1">
          <SidebarFilter
            search={search}
            setSearch={setSearch}
            location={location}
            setLocation={setLocation}
            category={category}
            setCategory={setCategory}
            experience={experience}
            setExperience={setExperience}
          />
        </div>

        <div className="md:col-span-3">
          <div className="grid md:grid-cols-2 gap-4">
            {currentJobs.map((job) => (
              <JobCard key={job.id} job={job} onView={setSelectedJob} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-4 py-2 border rounded disabled:opacity-40"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded border ${
                    currentPage === index + 1
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded"
                      : "hover:bg-gray-100 cursor-pointer"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 border rounded disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-72 bg-white z-50 p-6 md:hidden overflow-y-auto"
            >
              <SidebarFilter
                search={search}
                setSearch={setSearch}
                location={location}
                setLocation={setLocation}
                category={category}
                setCategory={setCategory}
                experience={experience}
                setExperience={setExperience}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

export default JobsPage;
