import React, { useState } from 'react';
import Action from '../reducers/Action';
import decrementValueAction, {
  DECREMENT_VALUE_ACTION,
} from '../reducers/appReducer/decrementValueAction';
import incrementValueAction, {
  INCREMENT_VALUE_ACTION,
} from '../reducers/appReducer/incrementValueAction';
import resetAction, { RESET_ACTION } from '../reducers/appReducer/resetAction';
import sampleAction, {
  SAMPLE_ACTION,
} from '../reducers/appReducer/sampleAction';
import setMinAction, {
  SET_MIN_ACTION,
} from '../reducers/appReducer/setMinAction';
import './Dispatcher.scss';

type DispatcherProps = {
  dispatch: React.Dispatch<Action>;
};

type MinValueCallback = (minValue: number) => void;

export default function Dispatcher({ dispatch }: DispatcherProps) {
  const [dispatching, setDispatching] = useState<boolean>(false);

  return (
    <div className="dispatcher">
      <h2>Dispatch(s):</h2>
      <button
        type="button"
        disabled={dispatching}
        onClick={() => {
          dispatch(sampleAction());
        }}
      >
        <pre>{SAMPLE_ACTION}</pre>
      </button>
      <button
        type="button"
        disabled={dispatching}
        onClick={() => {
          dispatch(resetAction());
        }}
      >
        <pre>{RESET_ACTION}</pre>
      </button>
      <button
        type="button"
        disabled={dispatching}
        onClick={() => {
          dispatch(incrementValueAction());
        }}
      >
        <pre>{INCREMENT_VALUE_ACTION}</pre>
      </button>
      <button
        type="button"
        disabled={dispatching}
        onClick={() => {
          dispatch(incrementValueAction(10));
        }}
      >
        <pre>{INCREMENT_VALUE_ACTION} 10</pre>
      </button>
      <button
        type="button"
        disabled={dispatching}
        onClick={() => {
          dispatch(decrementValueAction());
        }}
      >
        <pre>{DECREMENT_VALUE_ACTION}</pre>
      </button>
      <button
        type="button"
        disabled={dispatching}
        onClick={() => {
          dispatch(setMinAction());
        }}
      >
        <pre>{SET_MIN_ACTION}</pre>
      </button>
      <button
        type="button"
        disabled={dispatching}
        onClick={() => {
          setDispatching(true);
          async function handleClick() {
            const minValue = String(await prompt('Choose a min value.'));
            const parsedMinValue = parseInt(minValue, 10);
            setDispatching(false);
            if (Number.isNaN(parsedMinValue)) {
              return;
            }
            dispatch(setMinAction(parsedMinValue));
          }
          handleClick();
        }}
      >
        <pre>{SET_MIN_ACTION} $VALUE</pre>
      </button>
    </div>
  );
}
