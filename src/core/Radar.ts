import { Invader } from "./invaders/Invader";
import { PrintInvader } from "./PrintInvader";
import {
  RadarInvaderSamples,
  RadarResults,
  RadarSample,
  RadarState,
} from "./radar.types";

export class Radar {
  static takeSamples(input: string[][], invader: Invader): RadarInvaderSamples {
    let samples: RadarSample[] = [];
    for (let line = 0; line < input.length - invader.height; line++) {
      for (let pixel = 0; pixel < input[0].length - invader.width; pixel++) {
        const sample = input.slice(line, line + invader.height);
        const chop = sample.map((line) =>
          line.slice(pixel, pixel + invader.width)
        );
        samples.push({ position: [line, pixel], sample: chop });
      }
    }
    return { invader, samples };
  }

  static processImage(reading: string): string[][] {
    const array = reading.trim().split("\n");
    return array.map((line) => line.split(""));
  }

  static processInput(state: RadarState): RadarState {
    const samples = state.invaders
      .map((invader) =>
        Radar.takeSamples(Radar.processImage(state.input), invader)
      )
      .flat();
    const samplesArray = samples.map((sample) => sample.samples).flat();
    const results = samples
      .map((invaderSample) =>
        invaderSample.samples.map((sample) =>
          Radar.calculateRadarResults(sample, invaderSample.invader)
        )
      )
      .flat()
      .filter((result) => result.matchRatio > state.definition);
    return {
      ...state,
      samples: samplesArray,
      results,
    };
  }

  static calculateRadarResults(
    sample: RadarSample,
    invader: Invader
  ): RadarResults {
    let matches = 0;

    const positives: number[][] = [];
    const negatives: number[][] = [];

    invader.positivesList.forEach((px) => {
      if (sample.sample[px[0]][px[1]] === "o") {
        matches++;
        positives.push(px);
      }
    });

    invader.negativesList.forEach((px) => {
      if (sample.sample[px[0]][px[1]] === "-") {
        matches++;
        negatives.push(px);
      }
    });

    const matchRatio =
      matches / (sample.sample.length * sample.sample[0].length);

    const image = PrintInvader.fromMap(sample.sample);

    return {
      matchRatio,
      positives,
      negatives,
      sample,
      invader,
      image,
    };
  }

  static cleanNoise(input: string[][], results: RadarResults[]): string {
    let result = "";
    const positives = results
      .map((result) =>
        result.positives.map((position) => [
          position[0] + result.sample.position[0],
          position[1] + result.sample.position[1],
        ])
      )
      .flat()
      .sort( (a, b) => {
          if(a[0] > b[0]) {
            return 1;
          }
          if (a[0] === b[0]){
            if (a[1] > b[1]) {
                return 1
            }
            return -1;
          }
          return -1;

      });

    const radarString = PrintInvader.fromMap(input);
    const invaderRadar = new Invader("radar", radarString);

    result = PrintInvader.fromPositives(positives, invaderRadar);
    return result;
  }
}
