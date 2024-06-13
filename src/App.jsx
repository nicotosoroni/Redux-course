import React from 'react';
import ReducerApp from 'reducerExample/ReducerApp';
import ReduxApp from 'reduxExample/reduxApp';

function App() {
  console.log(process.env.REACT_APP_SHOWN_EXAMPLE);
  return (
    <div>
      {process.env.REACT_APP_SHOWN_EXAMPLE === 'redux' ? (
        <ReduxApp />
      ) : (
        <ReducerApp />
      )}
    </div>
  );
}

export default App;
