import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../../context/profile/profileContext';
import { Link } from 'react-router-dom';
import './CardItem.css';

const CardItem = ({ profile }) => {
  const profileContext = useContext(ProfileContext);
  const { deleteProfile, setCurrent, clearCurrent } = profileContext;

  const { _id, name, phone, city, zipcode, item1, item2, bio } = profile;

  const onDelete = () => {
    deleteProfile(name);
    clearCurrent();
  };

  return (
    <div className="card stores" style={{ margin: '0.7rem' }}>
      {/* <h3 className='text-primary text-left'>
                {name}{' '} <span style={{ float: 'right' }} 
                    className={'badge ' + (type === 'professional' ? 'badge-dark' : 'badge-dark' )}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3> */}
      <ul className="list">
        {name && (
          <li className="business-name">
            <i className="fas fa-user business-icon" /> {name}
            <hr />
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone phone-icon" />
            {phone}
          </li>
        )}
        {city && (
          <li>
            <i className="fas fa-map-marker-alt pin-icon" /> {city} {zipcode}
          </li>
        )}
        {item1 && (
          <li className="btn btn-success btn-sm">
            <i className="fas fa-shopping-cart" /> {item1}
          </li>
        )}
        {item2 && (
          <li className="btn btn-success btn-sm">
            <i className="fas fa-shopping-cart" /> {item2}
          </li>
        )}
        {/* {bio && (
                    <li>
                    <i class="fas fa-info-circle"/> {bio}
                    </li>
                )} */}
      </ul>
      <p>
        {/* <button className="btn btn-dark btn-sm" onClick={() => setCurrent(profile)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button> */}

        {/* <Link
          to={{
            pathname: `/detail/${_id}`,
            query: {
              name: name,
              phone: phone,
              item1: item1,
              item2: item2,
              bio: bio,
              city: city,
              zipcode: zipcode
            }
          }}
          className="btn btn-success btn-sm"
        >
          Read More
        </Link> */}
      </p>
    </div>
  );
};

CardItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default CardItem;
