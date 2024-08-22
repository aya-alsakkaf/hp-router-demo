import React from "react";
import harryPotterBooks from "../assets/data/books";

const BookDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={harryPotterBooks[0].image}
          alt={harryPotterBooks[0].bookName}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          width: "70%",
        }}
      >
        <h2>{harryPotterBooks[0].bookName}</h2>
        <h6>Release Year: {harryPotterBooks[0].releaseYear}</h6>
        <p>Description:</p>
        <p>{harryPotterBooks[0].description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
