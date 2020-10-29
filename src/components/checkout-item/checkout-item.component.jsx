import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import { CheckoutItemContainer, 
         CheckoutImageContainer, 
         TextContainer, 
         QuantityContainer, 
         RemoveButtonContainer } from "./checkout-item.styles";


const CheckoutItem = ({cartitem, clearItem, addItem, removeItem}) => {
  const {imageUrl, name, price, quantity} = cartitem;
  return (
  <CheckoutItemContainer>
    <CheckoutImageContainer>
      <img src={imageUrl} alt="item" />
    </CheckoutImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer> 
      <div onClick={() => removeItem(cartitem)}>&#10092;</div> 
      <span >{quantity}</span> 
      <div onClick={() => addItem(cartitem)}>&#10093;</div>
    </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveButtonContainer onClick={ () => clearItem(cartitem)} >&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);