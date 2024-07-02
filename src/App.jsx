import React from 'react';
import ReducerApp from 'reducerExample/ReducerApp';
import ReduxApp from 'reduxExample/reduxApp';
import ReduxToolkitApp from 'reduxTookitExample/reduxToolkitApp';

function App() {
  return (
    <div>
      {process.env.REACT_APP_SHOWN_EXAMPLE === 'reducer' && <ReducerApp />}
      {process.env.REACT_APP_SHOWN_EXAMPLE === 'redux' && <ReduxApp />}
      {process.env.REACT_APP_SHOWN_EXAMPLE === 'redux_toolkit' && (
        <ReduxToolkitApp />
      )}
    </div>
  );
}

export default App;
