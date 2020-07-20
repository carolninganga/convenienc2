import React, { Fragment, useContext, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProfileContext from '../../../context/profile/profileContext';
import CardItem from './CardItem';
import Spinner from '../Spinner';
import Search from '../Search/Search'
// import { GridColumn } from 'semantic-ui-react';

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  padding: '10px',
  GridColumnGap: '10px'
};

const Card = () => {
  const profileContext = useContext(ProfileContext);

  const { profiles, filtered, getProfiles, loading } = profileContext;
  
  const [ data, setData ] = useState([]); 
  const [ results, setResults ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchedResult, setSearchResult ] = useState([])


  useEffect(() => {

    getProfiles().then(res => {
      setData(res.data)
      setResults(res.data)
      setSearchResult(res.data)
    });
    // eslint-disable-next-line
  }, []);

  const handleChange = event => {
    const searchTerm = event.target.value;
    const newSearchedResult = results.filter(user => user.name.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.zipcode.indexOf(searchTerm)>=0 || user.item1.indexOf(searchTerm)>=0 || user.item2.indexOf(searchTerm)>=0)
    setSearchResult(newSearchedResult)
    console.log(newSearchedResult)
  }

  // const handleChange = event => {
  //   // console.log('test', event.target.value)
  //   const value = event.target.value;
  //   setSearchTerm(value)
  //   const searchedResults = data.filter()
  //   setResults = searchedResults
  // }


  if (profiles !== null && profiles.length === 0 && !loading) {
    return <h4>Please add a profile</h4>;
  }

  //const SearchItem

  return (
    <Fragment>
      <Search name="searchTerm" value={searchTerm} handleChange={handleChange} />
      {profiles !== null && !loading ? (
        <TransitionGroup>
          <div style={gridContainerStyle}>
            {/* {searchTerm !== ""? searchedResult.map(profile => (
              <CSSTransition
              key={profile._id}
              timeout={500}
              classNames="item"
            >
              <CardItem profile={profile} />
            </CSSTransition> 
            )) :  */}
               {searchedResult.map(profile => (
                  <CSSTransition
                    key={profile._id}
                    timeout={500}
                    classNames="item"
                  >
                    <CardItem profile={profile} />
                  </CSSTransition>
                ))
            }
          </div>
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Card;
