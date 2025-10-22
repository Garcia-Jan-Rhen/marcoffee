import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container">
      <section className="not-found">
        <div className="container">
          <h1>404</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Go Back Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
