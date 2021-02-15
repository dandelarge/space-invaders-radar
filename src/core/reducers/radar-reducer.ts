import { Radar } from "../Radar";
import { RadarAction, RadarState } from "../radar.types";

export function radarReducer(state: RadarState, action: RadarAction): RadarState {
    switch(action.type) {
      case 'UPDATE_INPUT': {
        return {...state, input: action.newState.input}
      }
      case 'PROCESS_INPUT': {
        return Radar.processInput(state);
      }
      case 'UPDATE_STATE': {
        return action.newState
      }
      default:
        throw new Error;
    }
  }