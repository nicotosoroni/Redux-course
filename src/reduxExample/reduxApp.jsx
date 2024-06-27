import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TeoriaRedux from './components/TeoriaRedux';
import Counter from './components/Counter';
import ShoppingCart from './components/ShoppingCart';
import CrudApi from './components/CrudApi';

function ReduxApp() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center' }}>
        <h1>Redux</h1>
        <hr />
        <CrudApi />
        <hr />
        <ShoppingCart />
        <hr />
        <Counter />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default ReduxApp;
