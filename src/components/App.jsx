import React from "react";
import {SearchBar} from "./SearchBar";
import "./App.css";


class App extends React.Component{

  onSearchSubmit = async (searchTerm) => {
    console.log("term: ", searchTerm);
  }

  render(){
    return(
      <div className="content-container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;