import React, { useState } from 'react';
import { Search, ShoppingCart, User2Icon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navshop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="w-100">
        <div className="container-fluid py-2 d-flex justify-content-between">
        <Search/>
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand fw-bold" to="/shop">
            VALMART
          </NavLink>
        </div>
        <div className="relative">
        <NavLink to="/cartpage">
        <ShoppingCart/>

           </NavLink>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center text-gray-600"
          >
            <User2Icon name="user" size="24" />
          </button>
          {isOpen && (
            <div className="absolute right-0 w-48 bg-white rounded-lg shadow-lg z-10">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
        <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/shop">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop/jewelry">
                JEWELRY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop/electronics">
                ELECTRONICS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop/womenswear">
                WOMEN'S WEAR{' '}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop/menswear">
                MEN'S WEAR
              </NavLink>
            </li>
          </ul>
      </div>
        </div>
      
      
    </nav>
  );
};

export default Navshop;
