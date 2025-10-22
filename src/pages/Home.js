import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Welcome to MarcoCoffee</h1>
          <p className="hero-subtitle">
            Experience the finest coffee blends in a cozy atmosphere
          </p>
          <Link to="/menu" className="btn btn-primary btn-lg">
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose MarcoCoffee?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">☕ Premium Coffee</h3>
                  <p className="card-text">
                    We source the finest coffee beans from around the world to bring you exceptional flavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">🏠 Cozy Atmosphere</h3>
                  <p className="card-text">
                    Relax in our comfortable space designed for work, study, or casual conversations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">👨‍🍳 Expert Baristas</h3>
                  <p className="card-text">
                    Our skilled baristas craft each drink with passion and precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'}}>
        <div className="container text-center">
          <h2 className="section-title">Ready to Experience Great Coffee?</h2>
          <p className="lead mb-4">
            Visit us today or order online for pickup. We're open 7 days a week!
          </p>
          <div>
            <Link to="/contact" className="btn btn-primary btn-lg me-3">
              Contact Us
            </Link>
            <Link to="/about" className="btn btn-outline-primary btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
