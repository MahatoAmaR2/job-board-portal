import React from "react";

const CategoryCard = ({ title, icon: Icon, description, jobs }) => {
  return (
    <div className="group rounded-2xl w-fit p-0.5 bg-linear-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition duration-500">
      <div className="bg-white rounded-2xl p-4 text-center transition duration-300">
        <div className="flex justify-center mb-2">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-r from-blue-100 to-purple-100 group-hover:scale-110 transition">
            <Icon className="text-blue-600" size={28} />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 ">{title}</h3>

        <p className="text-gray-500 text-sm mb-2">{description}</p>

        <p className="font-medium text-sm bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:cursor-pointer">
          {jobs}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
