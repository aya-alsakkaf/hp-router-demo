import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bookCard">
      <img src={book.image} alt={book.bookName} />
      <h5>{book.bookName}</h5>
    </div>
  );
};

export default BookCard;
