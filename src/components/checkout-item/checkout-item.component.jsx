import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartitem, clearItem, addItem, removeItem}) => {
  const {imageUrl, name, price, quantity} = cartitem;
  return (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity"> 
      <div className="arrow" onClick={() => removeItem(cartitem)}>&#10092;</div> 
      <span className="value">{quantity}</span> 
      <div className="arrow" onClick={() => addItem(cartitem)}>&#10093;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={ () => clearItem(cartitem)} >&#10005;</div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);