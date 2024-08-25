import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/HP_-_Harry_Potter_wordmark.svg"
          alt="HP Logo"
          className="logo"
        />
      </div>
      <ul className="navItems">
        <NavItem name={"Home"} />
        <NavItem name={"Houses"} />
        <NavItem name={"Books"} />
      </ul>
    </nav>
  );
};

export default Navbar;
