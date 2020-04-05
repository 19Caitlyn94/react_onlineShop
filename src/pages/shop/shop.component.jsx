import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

function ShopPage(props) {
  const [shopData] = useState({ collections: SHOP_DATA });
  const { collections } = shopData;
  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default ShopPage;
