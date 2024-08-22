import React from "react";

const HouseCard = ({ house }) => {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <img
        src={house.logo}
        alt={house.name}
        style={{
          width: "300px",
          objectFit: "fill",
        }}
      />
      <h3>{house.name}</h3>
      <p>{house.description}</p>
    </div>
  );
};

export default HouseCard;
