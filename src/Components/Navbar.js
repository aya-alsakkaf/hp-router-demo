import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/HP_-_Harry_Potter_wordmark.svg"
          alt="HP Logo"
          width={"80px"}
        />
      </div>
      <ul
        style={{
          display: "flex",
          gap: "10px",
          listStyle: "none",
          justifyContent: "flex-end",
        }}
      >
        <NavItem name={"Home"} />
        <NavItem name={"Houses"} />
        <NavItem name={"Books"} />
      </ul>
    </nav>
  );
};

export default Navbar;
