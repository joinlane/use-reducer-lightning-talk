import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import './AppContextConsumer.scss';
import Dispatcher from './Dispatcher';
import State from './State';

const AppContextConsumer: React.FunctionComponent<unknown> = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="app-context-consumer">
      <State state={state} />
      <Dispatcher dispatch={dispatch} />
    </div>
  );
};

export default AppContextConsumer;
