import React from "react";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row-reverse justify-center items-center sm:gap-20 px-6">
      <img src="img/404.png" alt="404 Error" className="w-72 sm:w-80 mb-10" />

      <div className="space-y-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-6xl font-bold">OOOPS...</h1>
        <h3 className="text-lg">
          Looks like this page doesn't exist, <br /> but don't let that stop you.
        </h3>
        <Link to="/">
          <button className="border-2 border-black mt-3 font-bold px-6 py-3 hover:bg-black hover:text-white text-xs">
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
