import React from "react";
import harryPotterBooks from "../assets/data/books";
import BookCard from "./BookCard";
import Navbar from "./Navbar";

const BookList = () => {
  const displayBookList = harryPotterBooks.map((book) => (
    <BookCard book={book} />
  ));
  return (
    <>
      <Navbar />
      <div className="bookList">{displayBookList}</div>;
    </>
  );
};

export default BookList;
