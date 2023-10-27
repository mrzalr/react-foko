/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <header className="w-screen fixed top-0 bg-white">
      <nav className="w-full p-6 flex justify-between items-center">
        <button>
          <i className="bx bx-menu text-xl"></i>
        </button>
        <button>
          Oct, 2023 <i className="bx bxs-chevron-down text-xs"></i>
        </button>
        <button className="relative">
          <i className="bx bx-bell text-xl"></i>
          <div className="absolute top-1 w-2 h-2 bg-blue-500 rounded-full flex justify-center items-center"></div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
