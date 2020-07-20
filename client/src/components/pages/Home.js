import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Card from '../layout/Card/Card';
import './Home.css';
import Logo from '../layout/logo.PNG';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="new-home-page">
      <div className="main-bin">
        <div className="logo-div">
          <img src={Logo} alt="convenienC Logo" className="logo-interior" />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
