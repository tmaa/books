import React from "react";

const BookCard = (props) => {
  let imgURL = "";
  if(props.book.volumeInfo.imageLinks !== undefined){
    imgURL = (props.book.volumeInfo.imageLinks.thumbnail).replace("http", "https");
  }

  return(
    <div className="card">
      <img alt={imgURL} src={imgURL}/>
      <p style={{fontSize:"14px"}}>{props.book.volumeInfo.title}</p>
    </div>
  );
}
export {BookCard};
