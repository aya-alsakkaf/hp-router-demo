import React from "react";

const NavItem = ({ name }) => {
  return (
    <li
      style={{
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {name}
    </li>
  );
};

export default NavItem;
