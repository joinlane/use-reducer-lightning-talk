import Action from '../Action';

type ResetAction = Record<string, unknown> & Action;

export const RESET_ACTION = 'RESET';

export default function resetAction(): ResetAction {
  return {
    type: RESET_ACTION,
  };
}
