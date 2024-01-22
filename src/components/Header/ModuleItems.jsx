import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ModuleItems({ moduleNumber, options }) {
  // const navigate = useNavigate();
  return (
    <div className="relative group ">
      <button className="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded">
        {`Module-${moduleNumber}`}
      </button>
      <ul className="absolute hidden group-hover:block bg-gray-700  py-2 rounded shadow-lg">
        {options.map((option) => (
          <li key={option.name}>
            {
              <Link
                to={option.path}
                // className="block px-4 py-2 hover:bg-gray-600"
                className="block text-gray-400 hover:bg-slate-200 hover:text-sky-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                {option.name}
              </Link>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleItems;
