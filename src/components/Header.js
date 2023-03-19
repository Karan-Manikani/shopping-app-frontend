import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="flex justify-between items-center bg-gray-100 shadow-sm h-20 px-10">
      <Link to={"/"} className="text-2xl">
        Shopping App
      </Link>
      <div className="flex w-96 justify-between">
        <Link
          className="hover:bg-black hover:text-white transition-colors py-2 px-3 rounded-full cursor-pointer"
          to={"/cart"}
        >
          Cart
        </Link>
        <Link
          className="hover:bg-black hover:text-white transition-colors py-2 px-3 rounded-full cursor-pointer"
          to={"/me"}
        >
          My Profile
        </Link>
        <Link
          className="hover:bg-black hover:text-white transition-colors py-2 px-3 rounded-full cursor-pointer"
          to={"/register"}
        >
          Register
        </Link>
        <Link
          className="hover:bg-black hover:text-white transition-colors py-2 px-3 rounded-full cursor-pointer"
          to={"/login"}
        >
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
