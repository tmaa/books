import "./App.css";
import React from "react";
import axios from "axios";
import {SearchBar} from "./SearchBar";
import {BookList} from "./BookList";


class App extends React.Component{
  state = {
    books: []
  }

  onSearchSubmit = async (searchTerm) => {
    const response = await axios.get("https://www.googleapis.com/books/v1/volumes" ,{
      params: {
        q: searchTerm,
        printType: "books",
        maxResults: 20,
        key: process.env.REACT_APP_BOOKS_API
      }
    });
    //

    this.setState({books: response.data.items});
  }

  render(){
    return(
      <div className="content-container">
        <div style={{paddingBottom: "80px"}}>
          <h1 style={{color: "#222f3e", marginTop: "25px", paddingBottom: "20px"}}>Book search</h1>
          <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        </div>
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;