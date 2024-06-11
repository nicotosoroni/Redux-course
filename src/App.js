import './App.css';
import Counter from './components/Counter';
import UpgradeCounter from './components/UpgradeCounter';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <Counter />
      <hr />
      <UpgradeCounter />
    </div>
  );
}

export default App;
