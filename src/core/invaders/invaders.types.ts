import { Invader } from "./Invader";

export interface RadarResults {
    matchRatio: number;
    positives: number[][];
    negatives: number[][];
    sample: string[][];
    image: string;
    invader: Invader;
    position: number[];
}