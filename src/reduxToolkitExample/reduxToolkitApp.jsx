import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UsersList from './components/UsersList';

const ReduxToolkitApp = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center' }}>Toolkit</div>
      <UsersList />
    </Provider>
  );
};

export default ReduxToolkitApp;
