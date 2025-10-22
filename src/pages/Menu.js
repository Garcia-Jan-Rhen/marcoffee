import React from 'react';
import { useCart } from '../contexts/CartContext';

const Menu = () => {
  const { addToCart } = useCart();
  
  const coffeeItems = [
    {
      id: 1,
      name: "Espresso",
      description: "Rich, full-bodied shot of pure coffee perfection",
      price: 3.50
    },
    {
      id: 2,
      name: "Americano",
      description: "Espresso with hot water for a smooth, clean taste",
      price: 4.00
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: 4.50
    },
    {
      id: 4,
      name: "Latte",
      description: "Espresso with steamed milk and light foam",
      price: 5.00
    },
    {
      id: 5,
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: 5.50
    },
    {
      id: 6,
      name: "Macchiato",
      description: "Espresso with a dollop of foam",
      price: 4.25
    },
    {
      id: 7,
      name: "Cold Brew",
      description: "Smooth, refreshing cold-brewed coffee",
      price: 4.75
    },
    {
      id: 8,
      name: "Iced Coffee",
      description: "Freshly brewed coffee served over ice",
      price: 3.75
    }
  ];

  const foodItems = [
    {
      id: 9,
      name: "Croissant",
      description: "Buttery, flaky pastry",
      price: 3.25
    },
    {
      id: 10,
      name: "Bagel & Cream Cheese",
      description: "Fresh bagel with your choice of cream cheese",
      price: 4.50
    },
    {
      id: 11,
      name: "Avocado Toast",
      description: "Smashed avocado on artisan bread",
      price: 7.50
    },
    {
      id: 12,
      name: "Muffin",
      description: "Freshly baked muffin of the day",
      price: 3.75
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
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="menu-price">${item.price.toFixed(2)}</div>
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
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
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="menu-price">${item.price.toFixed(2)}</div>
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
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
