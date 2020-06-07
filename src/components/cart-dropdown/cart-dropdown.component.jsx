import React from 'react';
import { connect } from 'react-redux';
import Button from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
