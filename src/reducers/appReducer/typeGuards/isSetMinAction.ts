import Action from '../../Action';
import { SetMinAction } from '../setMinAction';

export default function isSetMinAction(
  action: Action | SetMinAction
): action is SetMinAction {
  return !Number.isNaN((action as SetMinAction).min);
}
