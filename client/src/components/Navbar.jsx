import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Branding */}
          <NavLink to="/" className="text-2xl font-semibold text-blue-600">
            TeamTrack
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add Employee
            </NavLink>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Employee
          </NavLink>
        </div>
      )}
    </header>
  );
}
