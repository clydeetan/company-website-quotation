import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuote } from '../context/useQuote';

const productCategories = ['Home Office', 'House Furniture'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { totalItems } = useQuote();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/products') {
      return location.pathname.startsWith('/products') ? 'text-blue-900 font-bold' : 'text-gray-600';
    }
    return location.pathname === path ? 'text-blue-900 font-bold' : 'text-gray-600';
  };

  return (
    <nav className="bg-blue-50 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className={`text-xl font-bold ${location.pathname === '/' ? 'text-blue-900' : 'text-gray-800'}`}>
              Company ABC
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex space-x-8">
              <Link to="/" className={`hover:text-blue-900 px-3 py-2 ${isActive('/')}`}>
                Home
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative group">
                <Link 
                  to="/products"
                  className={`hover:text-blue-900 px-3 py-2 flex items-center gap-1 ${isActive('/products')}`}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown Content */}
                <div 
                  className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 ${isProductsOpen ? 'block' : 'hidden'}`}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {productCategories.map((category) => {
                    const categoryPath = `/products/${category.toLowerCase().replace(' ', '-')}`;
                    return (
                      <Link
                        key={category}
                        to={categoryPath}
                        className={`block px-4 py-2 hover:text-blue-900 hover:bg-gray-100 ${
                          location.pathname === categoryPath ? 'text-blue-900 font-bold' : 'text-gray-600'
                        }`}
                      >
                        {category}
                      </Link>
                    );
                  })}
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link
                    to="/products"
                    className={`block px-4 py-2 hover:text-blue-900 hover:bg-gray-100 ${
                      location.pathname === '/products' ? 'text-blue-900 font-bold' : 'text-gray-600'
                    }`}
                  >
                    View All Products
                  </Link>
                </div>
              </div>

              <Link to="/contact" className={`hover:text-blue-900 px-3 py-2 ${isActive('/contact')}`}>
                Contact
              </Link>
              <Link 
                to="/quote" 
                className={`hover:text-blue-900 px-3 py-2 flex items-center gap-2 ${isActive('/quote')}`}
              >
                Quote
                {totalItems > 0 && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex-1 flex items-center justify-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-50 border-t border-gray-200`}>
        <div className="container mx-auto px-4">
          <div className="py-3 space-y-1">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2 hover:text-blue-900 hover:bg-gray-100 rounded-md ${isActive('/')}`}
            >
              Home
            </Link>
            
            {/* Products Section in Mobile Menu */}
            <div>
              <Link 
                to="/products"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 hover:text-blue-900 hover:bg-gray-100 rounded-md ${isActive('/products')}`}
              >
                All Products
              </Link>
              {productCategories.map((category) => {
                const categoryPath = `/products/${category.toLowerCase().replace(' ', '-')}`;
                return (
                  <Link
                    key={category}
                    to={categoryPath}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 hover:text-blue-900 hover:bg-gray-100 rounded-md ml-4 text-sm ${
                      location.pathname === categoryPath ? 'text-blue-900 font-bold' : 'text-gray-600'
                    }`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>

            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 hover:text-blue-900 hover:bg-gray-100 rounded-md ${isActive('/contact')}`}
            >
              Contact
            </Link>
            <Link 
              to="/quote"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 hover:text-blue-900 hover:bg-gray-100 rounded-md flex items-center justify-between ${isActive('/quote')}`}
            >
              <span>Quote</span>
              {totalItems > 0 && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;