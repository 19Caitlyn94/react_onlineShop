import React from "react";
import { connect } from "react-redux";

import Button from "../custom-button/custom-button.component";
import { addCartItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

function CollectionItem({ item, addCartItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button inverted onClick={() => addCartItem(item)}>
        Add to cart
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
