import React from 'react';
import Button from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

export default function Cart() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
