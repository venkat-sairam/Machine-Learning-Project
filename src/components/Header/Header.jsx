import React from "react";
import { DropdownOptions } from "../Header/HeaderModuleData";
import ModuleItems from "./ModuleItems";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="bg-[#363062] border-gray-200 w-full top-0 fixed z-50  shadow">
        <div className="flex justify-between items-center mx-auto container ">
          <Link
            to="/"
            className=" bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
          >
            Machine Learning Project
          </Link>
          <nav className="flex justify-end p-2">
            <ul>
              <li className="flex space-x-4">
                <ModuleItems
                  moduleNumber="1"
                  options={DropdownOptions.module1}
                />
                <ModuleItems
                  moduleNumber="2"
                  options={DropdownOptions.module2}
                />
                <ModuleItems
                  moduleNumber="3"
                  options={DropdownOptions.module3}
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
