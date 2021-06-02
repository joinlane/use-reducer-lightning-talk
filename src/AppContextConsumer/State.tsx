import React from 'react';
import { AppReducerState } from '../reducers/appReducer';
import './State.scss';

type AppContextStateConsumerProps = {
  state: AppReducerState;
};

function RecursiveState({ state, keyName }: { state: any; keyName: string }) {
  return (
    <div className={`state-${keyName}`}>
      <pre>{keyName}:</pre>
      {Object.keys(state).map((key: string) => {
        switch (typeof state[key]) {
          case 'undefined':
          case 'boolean':
          case 'number':
            return (
              <pre className="value" key={key}>
                {key}={String(state[key])}
              </pre>
            );
          case 'object':
            return state[key] instanceof Error ? (
              <pre key={key}>error: {state[key].message}</pre>
            ) : (
              <RecursiveState state={state[key]} keyName={key} key={key} />
            );
          default:
            return (
              <pre key={key}>Unhandled State Type: {typeof state[key]}</pre>
            );
        }
      })}
    </div>
  );
}

export default function State({ state }: AppContextStateConsumerProps) {
  return (
    <>
      <h2>
        <pre>AppContextState</pre>
      </h2>
      <div className="state-container">
        <RecursiveState state={state} keyName="appReducerState" />
      </div>
      {state.error && <div className="error">Error: {state.error.message}</div>}
    </>
  );
}
