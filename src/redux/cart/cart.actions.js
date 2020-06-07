import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_HIDE_CART,
});

export const addCartItem = item => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});
