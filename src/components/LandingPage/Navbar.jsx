// import React from 'react';
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800  text-white px-16 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-10" />
      </div>
      <div className="flex items-center space-x-7 ">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="hover:text-gray-300">
          About
        </a>
        <a href="/projects" className="hover:text-gray-300">
          Projects
        </a>
        <a href="/blogs" className="hover:text-gray-300">
          Blogs
        </a>
        <a href="/contact" className="hover:text-gray-300">
          Contact
        </a>
        <FaSearch />
      </div>
    </nav>
  );
};

export default Navbar;
