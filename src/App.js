import './App.css';
import Counter from './components/Counter';
import UpgradeCounter from './components/UpgradeCounter';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <ShoppingCart />
      <hr />
      <Counter />
      <hr />
      <UpgradeCounter />
    </div>
  );
}

export default App;
