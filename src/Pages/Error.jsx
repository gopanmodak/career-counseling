import React from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404 </h1>
      <p className="text-3xl ">The page you are looking for can't be found.</p>
      <p className="text-l text-center">
        It may have been moved, removed, or never existed. Try going back home
        and continue exploring the portfolio.
      </p>
      <Link to="/" className="btn btn-error text-white gap-2 flex items-center">
        {" "}
        <span className="text-3xl">
          <IoMdHome />
        </span>{" "}
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
