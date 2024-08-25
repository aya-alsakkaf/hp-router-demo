import React from "react";
import harryPotterBooks from "../assets/data/books";
import BookCard from "./BookCard";

const BookList = () => {
  const displayBookList = harryPotterBooks.map((book) => (
    <BookCard book={book} />
  ));
  return <div className="bookList">{displayBookList}</div>;
};

export default BookList;
