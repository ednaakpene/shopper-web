import React, { useState } from 'react';
import { ShoppingCart, User2Icon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navshop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid py-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <NavLink className="navbar-brand fw-bold text-purple-500" to="/shop">
            VALMART
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
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
                WOMEN'S WEAR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop/menswear">
                MEN'S WEAR
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <NavLink to="/cartpage" className="me-3">
            <button className="btn btn-outline">             <ShoppingCart name="cart" size="24"/>
</button>
          </NavLink>
          <button
            onClick={toggleDropdown}
            className="btn btn-outline"
          >
            <User2Icon name="user" size="24" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <div className="py-1">
                <a
                  href="/signin"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Sign In
                </a>
                <a
                  href="signup"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navshop;
