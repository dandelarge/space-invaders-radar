import { Invader } from "./invaders/Invader";

export interface RadarAction {
  type: "UPDATE_INPUT" | "PROCESS_INPUT" | "UPDATE_STATE";
  newState: RadarState;
}

export interface RadarSample {
  sample: string[][];
  position: number[];
}

export interface RadarInvaderSamples {
  invader: Invader;
  samples: RadarSample[];
}

export interface RadarResults {
  matchRatio: number;
  positives: number[][];
  negatives: number[][];
  sample: RadarSample;
  image: string;
  invader: Invader;
}

export interface RadarState {
  input: string;
  samples: RadarSample[];
  results: RadarResults[];
  definition: number;
  invaders: Invader[];
}
