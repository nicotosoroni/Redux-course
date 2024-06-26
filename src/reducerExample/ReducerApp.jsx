import './App.css';

import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import Counter from './components/Counter';
import UpgradeCounter from './components/UpgradeCounter';
import CrudApi from './components/CrudApi';

function ReducerApp() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <Counter />
      <hr />
      <UpgradeCounter />
    </div>
  );
}

export default ReducerApp;
