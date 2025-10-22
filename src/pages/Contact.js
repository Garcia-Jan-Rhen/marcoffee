import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Get in Touch</h2>
                  <p className="card-text mb-4">
                    Have a question, suggestion, or just want to say hello? We'd love to hear from you!
                  </p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">📍 Location</h3>
                  <p className="card-text">
                    123 Coffee Street<br/>
                    Downtown District<br/>
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">📞 Phone</h3>
                  <p className="card-text">
                    (555) 123-4567<br/>
                    (555) 123-4568<br/>
                    <small>Mon-Sun: 6AM-10PM</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">✉️ Email</h3>
                  <p className="card-text">
                    info@marcocoffee.com<br/>
                    orders@marcocoffee.com<br/>
                    <small>We respond within 24 hours</small>
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

export default Contact;
