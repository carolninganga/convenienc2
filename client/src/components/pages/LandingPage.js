import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="row mt-4 justify-content-center text-center">
          <div>
            <Link to="/register" className="signUpBtn-landing">
              Business Registration
            </Link>
          </div>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <div>
            <Link to="/login" className="signUpBtn-landing">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
