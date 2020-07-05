import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

function ShopPage({ match }) {
  return (
    <div className='shop-page'>
      <h1>Shop Page</h1>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CollectionPage}
      />
    </div>
  );
}

export default ShopPage;
