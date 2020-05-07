import React from "react";
import "./App.css";

class SearchBar extends React.Component{
  state = {searchTerm: ""};

  onInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    //pass to function prop in App.jsx
    this.props.onSearchSubmit(this.state.searchTerm)
    //clear text field after submit
    this.setState({searchTerm: ""})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <input 
              type="text"
              className="search-bar" 
              placeholder="Enter book name" 
              onChange={this.onInputChange}
              value={this.state.searchTerm}
              />
            <button className="search-btn">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export {SearchBar};