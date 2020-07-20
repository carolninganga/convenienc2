import React, { Component } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import axios from 'axios';
import './Profile.css';

class Profile extends Component {
  state = {
    name: '',
    phone: '',
    city: '',
    zipcode: '',
    item1: '',
    item2: '',
    bio: ''
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const profileObj = {
      name: this.state.name,
      phone: this.state.phone,
      city: this.state.city,
      zipcode: this.state.zipcode,
      item1: this.state.item1,
      item2: this.state.item2,
      bio: this.state.bio
    };
    console.log(profileObj);

    axios.post('/api/profile', profileObj);
    alert('Your business profile has been created');
    this.setState({
      name: '',
      phone: '',
      city: '',
      zipcode: '',
      item1: '',
      item2: '',
      bio: ''
    });
  };

  render() {
    return (
      <div>
        <div className="row mt-4">
          <div className="profile-form">
            <div class="container">
              ​<h2 class="text-center mt-3">Fill out your specs!</h2>
              <hr />
              <form id="survey-form">
                <div class="row">
                  <div class="form-group col">
                    <label id="name-label" for="name">
                      Business Name
                    </label>
                    <input
                      className="profile-input"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      id="name"
                      class="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                  <div class="form-group col">
                    <label id="phone-label" for="name">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      id="phone"
                      class="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                  ​
                </div>
                <div class="row">
                  <div class="form-group col">
                    <label id="city-label" for="city">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleInputChange}
                      id="city"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                  ​ ​
                  <div class="form-group col">
                    <label id="zipcode-label" for="zipcode">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      value={this.state.zipcode}
                      onChange={this.handleInputChange}
                      id="zipcode"
                      class="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                  ​ ​
                </div>
                ​
                <div class="row">
                  <div class="form-group col">
                    <p>Select available essential item</p>
                    <select
                      id="item1"
                      name="item1"
                      value={this.state.item1}
                      onChange={this.handleInputChange}
                      class="form-control"
                      required
                    >
                      <option disabled selected value>
                        Select an option
                      </option>
                      <option value="Toilet Paper">Toilet Paper</option>
                      <option value="Batteries">Batteries</option>
                      <option value="Candles">Candles</option>
                      <option value="Water">Water</option>
                    </select>
                  </div>
                  <div class="form-group col">
                    <p>Select available essential item</p>
                    <select
                      id="item2"
                      name="item2"
                      value={this.state.item2}
                      onChange={this.handleInputChange}
                      class="form-control"
                      required
                    >
                      <option disabled selected value>
                        Select an option
                      </option>
                      <option value="Pizza">Pizza</option>
                      <option value="Bleach">Bleach</option>
                      <option value="Lysol">Lysol</option>
                      <option value="Hand Sanitizer">Hand Sanitizer</option>
                    </select>
                  </div>
                </div>
                ​ ​
                <div class="form-group">
                  <p>Bio</p>
                  <textarea
                    id="bio"
                    class="input-textarea form-control"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    placeholder="Tell us more about you"
                  ></textarea>
                </div>
                <hr />​
                <div className="btn-div">
                  <a
                    href="/"
                    type="submit"
                    id="submit"
                    onClick={this.handleSubmit}
                    className="signUpBtn2"
                  >
                    Submit
                  </a>
                </div>
                <div className="btn-div">
                  <a href="/home" type="submit" className="signUpBtn2">
                    Home
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
