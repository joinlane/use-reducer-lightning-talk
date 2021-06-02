import React from 'react';
import { AppReducerState } from '../reducers/appReducer';
import './State.scss';

type AppContextStateConsumerProps = {
  state: AppReducerState;
};

type RecursiveStateProps = {
  state: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  keyName: string;
};

const RecursiveState: React.FunctionComponent<RecursiveStateProps> = ({
  state,
  keyName,
}: RecursiveStateProps) => {
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
          case 'string':
            return (
              <pre className="value" key={key}>
                {`${key}="${String(state[key])}"`}
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
};

const State: React.FunctionComponent<AppContextStateConsumerProps> = ({
  state,
}: AppContextStateConsumerProps) => {
  return (
    <>
      <h2>
        <pre>AppContextState</pre>
      </h2>
      <div className="state-container">
        <RecursiveState state={state} keyName="appReducerState" />
      </div>
      <h2>
        <pre>Actions:</pre>
      </h2>
      <div className="actions">
        <pre>{JSON.stringify(state.actions, null, 4)}</pre>
      </div>
      {state.error && <div className="error">Error: {state.error.message}</div>}
    </>
  );
};

export default State;
