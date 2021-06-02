import cloneDeep from 'lodash.clonedeep';
import { AppReducerState } from '.';
import Action from '../Action';

export type IncrementValueAction = {
  amount: number;
} & Action;

export const INCREMENT_VALUE_ACTION = 'INCREMENT_VALUE';

export default function incrementValueAction(
  amount: number = 1
): IncrementValueAction {
  return {
    amount,
    type: INCREMENT_VALUE_ACTION,
  };
}

export function handleIncrementValue(
  state: AppReducerState,
  action: IncrementValueAction
): AppReducerState {
  const newState = cloneDeep(state);
  newState.innerObject.value = Math.min(
    state.innerObject.value + action.amount,
    state.innerObject.max
  );
  return newState;
}
