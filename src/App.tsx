import React, { useReducer } from 'react';

import './App.scss';
import AppContext from './contexts/AppContext';
import appReducer, { defaultAppReducerState } from './reducers/appReducer';
import AppContextConsumer from './AppContextConsumer';

const App: React.FunctionComponent<unknown> = () => {
  const [state, dispatch] = useReducer(appReducer, defaultAppReducerState);

  return (
    <div className="app">
      <h1>
        <pre>useContext</pre> + <pre>useReducer</pre>
      </h1>
      <AppContext.Provider value={{ state, dispatch }}>
        <AppContextConsumer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
