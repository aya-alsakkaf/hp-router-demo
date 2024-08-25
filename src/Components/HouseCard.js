import React from "react";

const HouseCard = ({ house }) => {
  return (
    <div className="houseCard">
      <img src={house.logo} alt={house.name} />
      <h3>{house.name}</h3>
      <p>{house.description}</p>
    </div>
  );
};

export default HouseCard;
