import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = memoize(collectionParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionParam]
  )
);
