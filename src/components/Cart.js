import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-empty text-center py-5">
        <h3 style={{color: '#0066cc'}}>Your cart is empty</h3>
        <p className="text-muted">Add some delicious items to get started!</p>
        <Link to="/menu" className="btn btn-primary">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{color: '#0066cc'}}>Shopping Cart</h2>
        <button 
          className="btn btn-outline-danger btn-sm"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item card mb-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h5 className="card-title" style={{color: '#0066cc'}}>{item.name}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
                <div className="col-md-2">
                  <div className="quantity-controls d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-md-2">
                  <span className="fw-bold" style={{color: '#0066cc'}}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h4 style={{color: '#0066cc'}}>Total: ${getTotalPrice().toFixed(2)}</h4>
            <Link to="/checkout" className="btn btn-primary btn-lg">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
