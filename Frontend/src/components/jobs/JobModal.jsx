import { CalendarDays, Briefcase, MapPin } from "lucide-react";

function JobModal({ job, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl max-w-2xl w-full relative max-h-[90vh] flex flex-col">

    
        <div className="overflow-y-auto p-8">

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>

          <div className="flex items-center gap-4 mb-6">
            {job.logo && (
              <img
                src={job.logo}
                alt={job.company}
                className="w-14 h-14 rounded-lg object-contain border"
              />
            )}
            <div>
              <h2 className="md:text-2xl text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-500 font-medium">{job.company}</p>
            </div>
          </div>

         
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {job.location}
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              {job.experience} • {job.type}
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              Posted on {job.postedDate}
            </div>

            {job.salary && <div>💰 {job.salary}</div>}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Job Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {job.description}
            </p>
          </div>

          {job.skills && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Key Skills</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                {job.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {job.responsibilities && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">
                Roles & Responsibilities
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                {job.responsibilities.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t p-4 bg-white sticky bottom-0 flex justify-end">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition cursor-pointer">
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default JobModal;