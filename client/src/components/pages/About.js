import React from 'react';
import Team from '../layout/Team/Team';
import ReactContactForm from 'react-mail-form';
import Footer from '../layout/Footer/Footer';
import './About.css';
import Caroline from './Caroline.jpeg';

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
            <h2 class="animate__animated animate__bounce">Caroline</h2>
            <p>
              Caroline is a rockstar full-stack web developer and master of
              boilerplate.
            </p>
            <div className="buttongit center">
            <button className="btnb"><a href="https://github.com/carolninganga">github<i class="fab fa-github"></i> </a>
            </button>
            </div>
          </div>
          
          <div className="col-8">
            <h2>Contact Me</h2>

            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

