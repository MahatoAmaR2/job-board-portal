import { useState } from "react";
import { Search, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const companiesData = [
  {
    id: 1,
    name: "Google",
    logo: "https://www.google.com/logos/doodles/2026/ice-hockey-2026-feb-20-o-6753651837111057-law.gif",
    location: "Bangalore",
    openJobs: 12,
    industry: "Technology",
  },
  {
    id: 2,
    name: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hB9sXohCaS4toAKEzfhtjWTNyMqiXXvYsg&s",
    location: "Mumbai",
    openJobs: 8,
    industry: "E-commerce",
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png",
    location: "Hyderabad",
    openJobs: 10,
    industry: "Technology",
  },
  {
    id: 4,
    name: "Flipkart",
    logo: "https://rukminim2.flixcart.com/fk-p-flap/52/44/image/d2ecfddf891a3922.png?q=60",
    location: "Delhi",
    openJobs: 6,
    industry: "Retail",
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/500px-Meta_Platforms_Inc._logo.svg.png",
    location: "Remote",
    openJobs: 5,
    industry: "Social Media",
  },
  {
    id: 6,
    name: "Adobe",
    logo: "https://www.adobe.com/federal/assets/svgs/adobe-logo.svg",
    location: "Bangalore",
    openJobs: 4,
    industry: "Design Software",
  },
];

function Companies() {
  const [search, setSearch] = useState("");

  const filteredCompanies = companiesData.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-5">
      <div className="text-center mb-10">
        <Link
          to="/"
          className="flex items-center gap-1 mb-6 text-lg font-medium cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded transition-colors duration-200 w-fit transform hover:scale-105"
        >
          <ArrowLeft size={18} />
          <p>Home</p>
        </Link>
        <h1 className="text-4xl font-bold">
          Discover Top Companies Hiring Now
        </h1>
        <p className="mt-4 text-gray-600">
          Explore leading companies and find opportunities that match your
          skills.
        </p>
      </div>

      <div className="relative max-w-md mx-auto mb-16">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-full pl-12 pr-4 py-3 focus:outline-none "
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCompanies.map((company) => (
          <div
            key={company.id}
            className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-600 transition duration-300 ease-in-out"
          >
            <div className="flex justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* <h3 className="text-2xl font-semibold text-center">
              {company.name}
            </h3> */}

            <div className="text-sm text-gray-500 text-center mt-2 space-y-1 font-medium">
              <div className="flex items-center justify-center gap-1">
                <MapPin size={14} />
                {company.location}
              </div>
              <div className="flex items-center justify-center gap-1">
                <Briefcase size={14} />
                {company.openJobs} Open Jobs
              </div>
              <p>{company.industry}</p>
            </div>

            <button className="mt-6 w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-2 rounded-full hover:scale-105 transition cursor-pointer">
              View Company
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
