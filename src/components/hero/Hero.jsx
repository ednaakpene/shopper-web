import React from "react";
import { Link } from "react-router-dom/dist";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen flex items-center"
      style={{
        background: `url(${require("../../assets/hero.jpeg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex flex-col justify-center items-center text-neutral-content h-full">
        <div className="max-w-md">
          <p
            className="font-bold ml-4 whitespace-nowrap"
            style={{ fontSize: "3.2rem", color: "white" }}
          >
            Shop
          </p>
          <p
            className="mb-10 font-bold ml-4 whitespace-nowrap"
            style={{ fontSize: "3.2rem", color: "white" }}
          >
            Till you drop.
          </p>
          <Link to="/shop">
            <button
              type="button"
              class="text-white bg-purple-700 hover:bg-purple focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:purple dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 ml-4"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
