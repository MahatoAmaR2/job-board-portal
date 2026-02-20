import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Palette,
  TrendingUp,
  HeartPulse,
  Banknote,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

const categories = [
  {
    title: "IT & Software",
    icon: Code,
    description: "Frontend, Backend, Full Stack & DevOps roles.",
    jobs: "400+ Jobs Posted",
  },
  {
    title: "Marketing",
    icon: TrendingUp,
    description: "Digital marketing, SEO & branding roles.",
    jobs: "250+ Jobs Posted",
  },
  {
    title: "Design",
    icon: Palette,
    description: "UI/UX, Product & Graphic design positions.",
    jobs: "180+ Jobs Posted",
  },
  {
    title: "Finance",
    icon: Banknote,
    description: "Banking, Accounting & Investment jobs.",
    jobs: "120+ Jobs Posted",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    description: "Medical & healthcare opportunities.",
    jobs: "90+ Jobs Posted",
  },
  {
    title: "Engineering",
    icon: Briefcase,
    description: "Mechanical, Civil & Core engineering jobs.",
    jobs: "210+ Jobs Posted",
  },
];

function BrowseCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;
  const totalSlides = categories.length;

  const nextSlide = () => {
    if (currentIndex < totalSlides - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div>
          {" "}
          <h1 className="lg:text-5xl md:text-4xl text-xl font-bold">
            Browse{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Job
            </span>{" "}
            Categories
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore diverse job opportunities tailored to your skills. Start
            your career journey today!
          </p>
        </div>
        {/* cards */}

        <div className="relative w-full overflow-hidden mt-14">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {categories.map((cat, index) => (
              <div key={index} className="min-w-70 shrink-0">
                <CategoryCard
                  title={cat.title}
                  icon={cat.icon}
                  description={cat.description}
                  jobs={cat.jobs}
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BrowseCategories;
