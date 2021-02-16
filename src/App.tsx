import React, { useEffect, useReducer } from 'react';
import './App.scss';
import { globals } from './config';
import { Spider } from './core/invaders/Spider';
import { Squid } from './core/invaders/Squid';
import { RadarState } from './core/radar.types';
import { Radar } from './core/Radar';
import { radarReducer } from './core/reducers/radar-reducer';
import Results from './components/results/results';

const spider = new Spider();
const squid = new Squid();

export const RadarDispatch = React.createContext({});

const initialState: RadarState = {
  input: globals.DEFAULT_READING,
  invaders: [spider,squid],
  samples: [],
  results: [],
  definition: 0.8
}

function radarInit(state: RadarState) {
  Radar.processInput(state);
  return {...state};
}

function App() {
  const [state, dispatch] = useReducer(radarReducer, initialState, radarInit);
  useEffect(() => {
    dispatch({type: 'PROCESS_INPUT', newState: state});
  }, [])

  function onProcessButtonClick() {
    dispatch({type: 'PROCESS_INPUT', newState: state });
  }
  function onInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const input = event.target.value;
    dispatch({type: 'UPDATE_INPUT', newState:{...state, input}});
  }

  function onCleanupButtonClick () {
    const cleanInput = Radar.cleanNoise(Radar.processImage(state.input), state.results);
    dispatch({type: 'UPDATE_STATE', newState: {...state, input: cleanInput}});
  }

  return (
    <div className="App">
      <RadarDispatch.Provider value={dispatch}>
        <section className="input-panel">
          <span>match ratio</span>
          <input type="number" max="1" placeholder="0.8" value={state.definition}
            onChange={event => dispatch({type: 'UPDATE_STATE', newState: {...state, definition: parseFloat(event.target.value)}})}/>
          <div id="radarInput" className="radarScreen" spellCheck="false">
            <textarea className="textarea radarInput" value={state.input} onChange={onInputChange}></textarea>
          </div>
          <button onClick={onProcessButtonClick}>process Input</button>
          <button onClick={onCleanupButtonClick}>Clean noise</button>
        </section>
        <div className="results-panel">
          <Results state={state}></Results>
        </div>
      </RadarDispatch.Provider>
    </div>
  );
}

export default App;
