import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Search from "../search";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full ${
        scrolled ? "bg-white bg-opacity-100" : "bg-transparent"
      } z-[50]`}
    >
      <div className="flex items-center justify-between p-4">
        <Link to="/">
          <h1 className="text-purple-600 text-4xl font-bold cursor-pointer">
            VALMART
          </h1>
        </Link>

        <div class="flex items-center gap-4">
          <div className="relative">
            {/* <input type="search" name="Search" placeholder="Search for Movies" className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" /> */}
            {/* <Search /> */}
          </div>

          <div class="sm:flex sm:gap-4">
            <Link to="/signin">
              <button class="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                Signin
              </button>
            </Link>

            <div class="hidden sm:flex">
              <Link to="/signup">
                <button class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-purple-600">
                  Sign up
                </button>
              </Link>
            </div>
          </div>

          <div class="block md:hidden">
            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
