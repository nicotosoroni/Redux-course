import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TeoriaRedux from './components/TeoriaRedux';

function ReduxApp() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center' }}>
        <h1>Redux</h1>
        Redux app
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default ReduxApp;
