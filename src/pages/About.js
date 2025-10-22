import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About MarcoCoffee</h1>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Our Story</h2>
                  <p className="card-text">
                    Founded in 2020, MarcoCoffee began as a small dream to bring exceptional coffee 
                    to our community. What started as a passion project has grown into a beloved 
                    local gathering place where coffee lovers come together to enjoy premium blends 
                    and create lasting memories.
                  </p>
                  <p className="card-text">
                    Our commitment to quality extends beyond just the coffee. We carefully select 
                    our beans from sustainable farms, ensuring that every cup supports both 
                    environmental responsibility and exceptional taste.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    To provide our community with the highest quality coffee experience while 
                    fostering connections and creating a welcoming space for everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Our Values</h3>
                  <p className="card-text">
                    Quality, sustainability, community, and innovation guide everything we do. 
                    We believe great coffee brings people together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">Visit Us</h3>
                  <p className="card-text">
                    <strong>Location:</strong> 123 Coffee Street, Downtown<br/>
                    <strong>Hours:</strong> Monday - Sunday: 6:00 AM - 10:00 PM<br/>
                    <strong>Phone:</strong> (555) 123-4567<br/>
                    <strong>Email:</strong> info@marcocoffee.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
