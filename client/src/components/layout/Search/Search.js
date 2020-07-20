import React, { Component } from 'react';
import ProfileState, { getProfiles } from '../../../context/profile/ProfileState';
import PropTypes from 'prop-types';

export default class Search extends Component {
    state ={
        searchItem: ""
    }

    componentDidMountz() {
        this.props.getProfiles()   
    }

    handleInputChange = e => {
        searchItem = e.target.value;
    }

    handleSubmit = e => {
        e.preventdefault()
        searchItem = e.target.value;
        this.setState({ searchItem: e.target.value})
        const filteredItems = items.filterz((item) => item.name.includes(this.state.searchItem))
    }


    render() {
        return (
            <div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                    </div>
                    {profiles.map((_id, name, phone, city, zipcode, item1, item2, bio }) => (
                        <ul key={_id}>
                            <li>{name}</li>
                            <li>{phone}</li>
                            <li>{city}</li>
                            <li>{zipcode}</li>
                            <li>{item1}</li>
                            <li>{item2}</li>
                            <li>{bio}</li>
                        </ul>
                    )}
            </div>
        )
    }
}

Directory.propTypes = { 
getProfiles: PropTypes.func.isRequired,
profile: PropTypes.object.isRequired }

const mapStateToprops = (state) => ({
profile: state.profile
})

export default Search;