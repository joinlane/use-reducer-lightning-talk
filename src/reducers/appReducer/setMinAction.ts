import cloneDeep from 'lodash.clonedeep';
import { AppReducerState } from '.';
import Action from '../Action';

const CANNOT_SET_MIN_GREATER_MAX =
  'Minimum cannot be a value greater than the maximum.';

export type SetMinAction = { min: number } & Action;

export const SET_MIN_ACTION = 'SET_MIN';

export default function setMinAction(min: number = 0): SetMinAction {
  return {
    min,
    type: SET_MIN_ACTION,
  };
}

export function handleSetMin(
  state: AppReducerState,
  action: SetMinAction
): AppReducerState {
  const nextState = cloneDeep(state);
  nextState.innerObject.min = action.min;

  if (nextState.innerObject.min > state.innerObject.max) {
    throw Error(CANNOT_SET_MIN_GREATER_MAX);
  }

  // Value cannot be less than the minimum, so clamp.
  nextState.innerObject.value = Math.max(
    nextState.innerObject.value,
    nextState.innerObject.min
  );
  return nextState;
}
