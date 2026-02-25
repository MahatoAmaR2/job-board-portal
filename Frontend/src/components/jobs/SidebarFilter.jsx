import { Search, MapPin, Briefcase, Layers } from "lucide-react";

function SidebarFilter({
  search,
  setSearch,
  location,
  setLocation,
  category,
  setCategory,
  experience,
  setExperience,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 space-y-8">
      <h3 className="text-xl font-semibold">Filters</h3>

      <div>
        <div className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
          <Search size={18} />
          <span>Job Title</span>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search job..."
          className="w-full border rounded p-2 focus:outline-none "
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
          <MapPin size={18} />
          <span>Location</span>
        </div>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded p-2 focus:outline-none"
        >
          <option value="">All Locations</option>
          <option>Kolkata</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Bangalore</option>
        </select>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
          <Layers size={18} />
          <span>Category</span>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded p-2 focus:outline-none"
        >
          <option value="">All Categories</option>
          <option>IT</option>
          <option>Marketing</option>
          <option>Design</option>
        </select>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
          <Briefcase size={18} />
          <span>Experience</span>
        </div>
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full border rounded p-2 focus:outline-none"
        >
          <option value="">All Levels</option>
          <option>Fresher</option>
          <option>Mid-Level</option>
          <option>Senior</option>
        </select>
      </div>

      <button
        onClick={() => {
          setSearch("");
          setLocation("");
          setCategory("");
          setExperience("");
        }}
        className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg py-2 transition cursor-pointer duration-300 text-gray-700 font-medium"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default SidebarFilter;
