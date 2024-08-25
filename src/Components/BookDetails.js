import React from "react";
import harryPotterBooks from "../assets/data/books";

const BookDetails = () => {
  return (
    <div className="bookDetailContainer">
      <div className="bookDetails1">
        <img
          src={harryPotterBooks[0].image}
          alt={harryPotterBooks[0].bookName}
        />
      </div>

      <div className="bookDetails2">
        <h2>{harryPotterBooks[0].bookName}</h2>
        <h6>Release Year: {harryPotterBooks[0].releaseYear}</h6>
        <p>Description:</p>
        <p>{harryPotterBooks[0].description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
