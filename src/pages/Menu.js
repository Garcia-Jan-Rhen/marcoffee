import React from 'react';

const Menu = () => {
  const coffeeItems = [
    {
      name: "Espresso",
      description: "Rich, full-bodied shot of pure coffee perfection",
      price: "$3.50"
    },
    {
      name: "Americano",
      description: "Espresso with hot water for a smooth, clean taste",
      price: "$4.00"
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "$4.50"
    },
    {
      name: "Latte",
      description: "Espresso with steamed milk and light foam",
      price: "$5.00"
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: "$5.50"
    },
    {
      name: "Macchiato",
      description: "Espresso with a dollop of foam",
      price: "$4.25"
    },
    {
      name: "Cold Brew",
      description: "Smooth, refreshing cold-brewed coffee",
      price: "$4.75"
    },
    {
      name: "Iced Coffee",
      description: "Freshly brewed coffee served over ice",
      price: "$3.75"
    }
  ];

  const foodItems = [
    {
      name: "Croissant",
      description: "Buttery, flaky pastry",
      price: "$3.25"
    },
    {
      name: "Bagel & Cream Cheese",
      description: "Fresh bagel with your choice of cream cheese",
      price: "$4.50"
    },
    {
      name: "Avocado Toast",
      description: "Smashed avocado on artisan bread",
      price: "$7.50"
    },
    {
      name: "Muffin",
      description: "Freshly baked muffin of the day",
      price: "$3.75"
    }
  ];

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Menu</h1>
          
          {/* Coffee Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: '#0066cc'}}>Coffee & Beverages</h2>
              <div className="row">
                {coffeeItems.map((item, index) => (
                  <div key={index} className="col-md-6 col-lg-4 mb-3">
                    <div className="menu-item">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <div className="menu-price">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Food Section */}
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: '#0066cc'}}>Food & Pastries</h2>
              <div className="row">
                {foodItems.map((item, index) => (
                  <div key={index} className="col-md-6 col-lg-4 mb-3">
                    <div className="menu-item">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <div className="menu-price">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">Special Offers</h3>
                  <p className="card-text">
                    <strong>Happy Hour:</strong> 20% off all drinks from 2:00 PM - 4:00 PM<br/>
                    <strong>Student Discount:</strong> 10% off with valid student ID<br/>
                    <strong>Loyalty Program:</strong> Buy 9 drinks, get the 10th free!
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

export default Menu;
