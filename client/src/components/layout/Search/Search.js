
import React, { Component } from 'react';


class Search extends Component {


  

  handleFormSubmit = e => {
   
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    //console.log("23", this.state.allUsers)
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.city.indexOf(searchTerm)>=0 || user.zipcode.indexOf(searchTerm)>=0 || user.item1.indexOf(searchTerm)>=0 || user.item2.indexOf(searchTerm)>=0);
    console.log('23', newFilteredUsers)
    this.setState({filteredResults: newFilteredUsers})
  }

  render() {
    return (
      <>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control filter-field"
          name="searchTerm"
          value={this.props.searchTerm}
          onChange={this.props.handleChange}
          placeholder="Business Name"
          aria-label="Business Name"
          aria-describedby="button-addon2"
        />

        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={this.handleFormSubmit} type="button" id="button-addon2">
            Search
          </button>
        </div>
        </div>
   </>
      
    );
  }

}

export default Search;


















