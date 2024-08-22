import React from "react";

const BookCard = ({ book }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        border: "1px solid lightgray",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <img src={book.image} alt={book.bookName} />
      <h5>{book.bookName}</h5>
    </div>
  );
};

export default BookCard;
