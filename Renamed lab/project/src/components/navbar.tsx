import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Beaker className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="ml-2 text-lg sm:text-xl font-bold">Vi Lab</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <Link to="/labs" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Labs</Link>
            <Link to="/tutorials" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Tutorials</Link>
            <Link to="/collaborate" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Collaborate</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">Pricing</Link>
            <Link to="/login" className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 lg:px-4 lg:py-2 rounded-md text-sm lg:text-base">
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center h-16 px-4 border-b">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Beaker className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-bold">Vi Lab</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-6 space-y-6">
            <Link
              to="/labs"
              className="block text-lg text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Labs
            </Link>
            <Link
              to="/tutorials"
              className="block text-lg text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/collaborate"
              className="block text-lg text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborate
            </Link>
            <Link
              to="/pricing"
              className="block text-lg text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className="block w-full text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}