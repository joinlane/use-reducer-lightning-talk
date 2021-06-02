import Action from '../Action';

type SampleAction = Record<string, unknown> & Action;

export const SAMPLE_ACTION = 'SAMPLE';

export default function sampleAction(): SampleAction {
  return {
    type: SAMPLE_ACTION,
  };
}
