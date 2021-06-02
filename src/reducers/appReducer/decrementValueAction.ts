import cloneDeep from 'lodash.clonedeep';
import { AppReducerState } from '.';
import Action from '../Action';

export type DecrementValueAction = {
  amount: number;
} & Action;

export const DECREMENT_VALUE_ACTION = 'DECREMENT_VALUE';

export default function decrementValueAction(
  amount: number = 1
): DecrementValueAction {
  return {
    amount,
    type: DECREMENT_VALUE_ACTION,
  };
}

export function handleDecrementValue(
  state: AppReducerState,
  action: DecrementValueAction
): AppReducerState {
  const newState = cloneDeep(state);
  newState.innerObject.value = Math.max(
    state.innerObject.value - action.amount,
    state.innerObject.min
  );
  return newState;
}
