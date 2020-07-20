
import React, { Component } from 'react';
import API from './API'

class App extends Component {

  state = {
    allUsers: [],
    filteredResults: [],
    searchTerm: ""
  }

  componentDidMount() {
    API.getUsers()
    // .then(res => {
    //   console.log(res)
    // })
    .then(users => {
      this.setState({
        allUsers: users.data,
        filteredResults: users.data
      })
    })
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventdefault()
    const searchTerm = e.target.value;
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.city.indexOf(searchTerm)>=0 || user.zipcode.indexOf(searchTerm)>=0 || user.item1.indexOf(searchTerm)>=0 || user.item2.indexOf(searchTerm)>=0);
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
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
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

export default App;


















