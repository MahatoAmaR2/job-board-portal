import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/logos/doodles/2026/ice-hockey-2026-feb-20-o-6753651837111057-law.gif",
  },
  {
    name: "Microsoft",
    logo: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png",
  },
  {
    name: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hB9sXohCaS4toAKEzfhtjWTNyMqiXXvYsg&s",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/500px-Airbnb_Logo_B%C3%A9lo.svg.png",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2024_Spotify_Logo.svg/500px-2024_Spotify_Logo.svg.png",
  },
];

function TrustedCompanies() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="lg:text-5xl md:text-4xl text-xl font-bold">
          Trusted by{" "}
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            1000
          </span>
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent lg:text-6xl md:text-5xl text-lg">
            +
          </span>{" "}
          Companies
        </h2>
      </div>

      <div className="relative w-full overflow-hidden ">
        <motion.div
          className="flex md:space-x-16 space-x-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-37.5"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 object-contain  transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
