import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About us" },
    { link: "/products", name: "Products" },
    { link: "/contact", name: "Contact" },
  ];

  return (
    <header className="bg-[whitesmoke] shadow-md">
      <div className="mx-auto w-full max-w-8xl px-12 py-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-7">
            <img src="/images/blkdot.png" alt="header-logo" />
          </div>
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((navLink, i) => (
            <NavLink
              to={navLink.link}
              key={i}
              className={({ isActive }) =>
                `text-gray-600 hover:text-black transition ${
                  isActive ? "text-black font-semibold border-b-2 border-black pb-1" : ""
                }`
              }
            >
              {navLink.name}
            </NavLink>
          ))}
        </nav>

        {/* Search Input */}
        <div className="hidden md:flex items-center gap-2 border border-gray-400 rounded-2xl px-3 py-1">
          <img src="/images/Searchh.png" alt="search-icon" className="w-4" />
          <input className="bg-transparent focus:outline-none" type="text" placeholder="Search..." />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md absolute w-full left-0 top-16">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <NavLink
                  to={navLink.link}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-black transition block ${
                      isActive ? "text-black font-semibold border-l-4 border-black pl-2" : ""
                    }`
                  }
                >
                  {navLink.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
