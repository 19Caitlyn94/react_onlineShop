import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Button from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

function Cart({ cartItems }) {
  return (
    <div className='cart-dropdown'>
      {cartItems.map(item => {
        return <CartItem key={item.id} item={item} />;
      })}
      <div className='cart-items'></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Cart);
