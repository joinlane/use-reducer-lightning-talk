import React from 'react';
import Action from '../reducers/Action';
import {
  AppReducerState,
  defaultAppReducerState,
} from '../reducers/appReducer';

type AppContextType = {
  state: AppReducerState;
  dispatch: React.Dispatch<Action>;
};

const defaultAppContext = {
  state: defaultAppReducerState,
  dispatch: () => undefined,
};

const AppContext = React.createContext<AppContextType>(defaultAppContext);

export default AppContext;
