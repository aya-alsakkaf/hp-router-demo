import React from "react";
import houses from "../assets/data/houses";
import HouseCard from "./HouseCard";
import Navbar from "./Navbar";

const HouseList = () => {
  const displayHouses = houses.map((house) => {
    return <HouseCard house={house} />;
  });
  return (
    <>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Explore Hogwarts Houses!
      </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px",
          justifyContent: "center",
        }}
      >
        {displayHouses}
      </div>
    </>
  );
};

export default HouseList;
