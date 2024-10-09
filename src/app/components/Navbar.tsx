import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-gray-900 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 text-2xl">
                <Link href="/" className="text-gray-700 hover:text-gray-900 hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="#shop" className="text-gray-700  hover:text-gray-900 hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Shop</Link>
                <Link href="#product" className="text-gray-700  hover:text-gray-900 hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Product</Link>
                <Link href="#contact" className="text-gray-700  hover:text-gray-900 hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 ">
          <Link href="/" className="text-gray-700 hover:text-gray-900 hover:font-bold block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/shop" className="text-gray-700  hover:text-gray-900 hover:font-bold block px-3 py-2 rounded-md text-base font-medium">Shop</Link>
          <Link href="/product" className="text-gray-700  hover:text-gray-900 hover:font-bold block px-3 py-2 rounded-md text-base font-medium">Product</Link>
          <Link href="/contact" className="text-gray-700  hover:text-gray-900 hover:font-bold block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;