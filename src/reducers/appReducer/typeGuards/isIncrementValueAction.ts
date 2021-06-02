import Action from '../../Action';
import { IncrementValueAction } from '../incrementValueAction';

export default function isIncrementValueAction(
  action: Action | IncrementValueAction
): action is IncrementValueAction {
  return !Number.isNaN((action as IncrementValueAction).amount);
}
