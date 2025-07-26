import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import "./cart.css";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.length === 0 ? (
        <div className="contact-heading" style={{textDecoration: "none"}}>
            <p>Your cart </p> &nbsp;
            <a className="blue"> is empty</a>
          </div>
      ) : (
        <>
          <div className="contact-heading">
            <p>Your  items </p> &nbsp;
            <a className="blue"> in cart</a>
          </div>
          <ul>
            {cart.map((item, key) => (
              // <li key={key}>
              //   {item.card_title} - {item.discounted_price}
              // </li>

              <div className="cart-container">
                <div className="cart">
                  {/* <img src={item.image}  alt="image" /> */}
                  <div className="cart-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-text">
                    <div className="cart-title">{item.card_title}</div>
                    <div className="cart-description">{item.description}</div>
                  </div>
                  <div className="checkout-container">
                    <div className="cart-price">
                     रु {item.discounted_price}
                    </div>
                    <button className="checkout">Checkout</button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Cart;
