import Action from '../../Action';
import { DecrementValueAction } from '../decrementValueAction';

export default function isDecrementValueAction(
  action: Action | DecrementValueAction
): action is DecrementValueAction {
  return !Number.isNaN((action as DecrementValueAction).amount);
}
