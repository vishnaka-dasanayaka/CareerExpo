import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-center">
      <Link to={"/"}>
        <button className="mx-5 bg-purple-400 px-5 py-1 cursor-pointer hover:bg-purple-600">
          home
        </button>
      </Link>
      <Link to={"/about"}>
        <button className="mx-5 bg-purple-400 px-5 py-1 cursor-pointer hover:bg-purple-600">
          about
        </button>{" "}
      </Link>
    </div>
  );
}

export default Header;
