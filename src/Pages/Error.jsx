import React from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col gap-20 justify-center items-center text-center">
      <h1 className="text-3xl font-bold text-red-500">404 – Page Not Found</h1>
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
