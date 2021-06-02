import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import './AppContextConsumer.scss';
import Dispatcher from './Dispatcher';
import State from './State';

export default function AppContextConsumer() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="app-context-consumer">
      <State state={state} />
      <Dispatcher dispatch={dispatch} />
    </div>
  );
}
