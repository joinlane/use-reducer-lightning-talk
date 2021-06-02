import cloneDeep from 'lodash.clonedeep';
import Action from '../Action';
import {
  DECREMENT_VALUE_ACTION,
  handleDecrementValue,
} from './decrementValueAction';
import {
  handleIncrementValue,
  INCREMENT_VALUE_ACTION,
} from './incrementValueAction';
import { RESET_ACTION } from './resetAction';
import { SAMPLE_ACTION } from './sampleAction';
import { handleSetMin, SET_MIN_ACTION } from './setMinAction';
import isDecrementValueAction from './typeGuards/isDecrementValueAction';
import isIncrementValueAction from './typeGuards/isIncrementValueAction';
import isSetMinAction from './typeGuards/isSetMinAction';

const UNQUALIFIED_ACTION = 'The dispatched action and payload are incompatible';

export type AppReducerState = {
  sampleAction?: boolean;
  innerObject: { value: number; max: number; min: number };
  error: Error | undefined;
};

export const defaultAppReducerState: AppReducerState = {
  sampleAction: false,
  innerObject: { value: 0, max: 100, min: 0 },
  error: undefined,
};

export default function appReducer<T extends Action>(
  state: AppReducerState,
  action: T
): AppReducerState {
  const newState = cloneDeep(state);
  newState.error = undefined;

  try {
    switch (action.type) {
      case RESET_ACTION:
        return cloneDeep(defaultAppReducerState);
      case SAMPLE_ACTION:
        newState.sampleAction = !state.sampleAction;
        return newState;
      case INCREMENT_VALUE_ACTION:
        if (!isIncrementValueAction(action)) {
          throw Error(UNQUALIFIED_ACTION);
        }
        return handleIncrementValue(state, action);
      case DECREMENT_VALUE_ACTION:
        if (!isDecrementValueAction(action)) {
          throw Error(UNQUALIFIED_ACTION);
        }
        return handleDecrementValue(state, action);
      case SET_MIN_ACTION:
        if (!isSetMinAction(action)) {
          throw Error(UNQUALIFIED_ACTION);
        }
        return handleSetMin(state, action);
      default:
        throw new Error(`Unrecognized Action: ${action.type}`);
    }
  } catch (err) {
    newState.error = err;
  }
  return newState;
}
