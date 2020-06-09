import React from 'react';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Button from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

function Cart({ cartItems, history }) {
  return (
    <div className='cart-dropdown'>
      {cartItems.length ? (
        cartItems.map(item => {
          return <CartItem key={item.id} item={item} />;
        })
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
      <div className='cart-items'></div>
      <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
