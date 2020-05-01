import React from "react";
import {BookCard} from "./BookCard";

const BookList = (props) => {
  // console.log("books:", props.books);

  const listOfBooks = props.books.map((book) => {
    let link = book.volumeInfo.infoLink;
    return(
      <div onClick={() => {window.open(link, "_blank")}} key={book.etag}>
        <BookCard book={book} />
      </div>
    );
  });

  return(
    <div className="cards">{listOfBooks}</div>
  );
}

export {BookList};
