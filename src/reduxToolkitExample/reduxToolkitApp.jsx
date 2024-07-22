import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UsersList from './components/UsersList';
import ProductsList from './components/ProductsList';

const ReduxToolkitApp = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center' }}>Toolkit</div>
      <ProductsList />
      <UsersList />
    </Provider>
  );
};

export default ReduxToolkitApp;
