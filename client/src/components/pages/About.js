import React from 'react';
import Team from '../layout/Team/Team';
import ReactContactForm from 'react-mail-form';
import Footer from '../layout/Footer/Footer';
import './About.css';
import Nick from './Nick.jpeg';
import Caroline from './Caroline.jpeg';
import Abir from './Abir.jpeg';

const About = () => {
  return (
    <div>
      <div className="about-bin">
        <h1>About convenienC</h1>
        <hr />
        <p className="my-1">
          This is a Full Stack Application that allows local businesses to post
          and delete current available items.{' '}
        </p>
        <p className="bg-dark p">
          <strong>Version: </strong> 1.0.0
        </p>
      </div>
      <div className="bio-bin">
        <div className="row">
          <div className="col-4">
            <img className="bio-img" src={Caroline} />
            <h2>Caroline</h2>
            <p>
              Caroline is a rockstar full-stack web developer and master of
              boilerplate.
            </p>
          </div>
          <div className="col-4">
            <img className="bio-img" src={Abir} />
            <h2>Abir</h2>
            <p>Abir is a full-stack web developer and refactoring wiz.</p>
          </div>
          <div className="col-4">
            <img className="bio-img" src={Nick} />
            <h2>Nick</h2>
            <p>Nick is a full-stack web developer and css sleuth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
