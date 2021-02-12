export class Invader {
  width: number;
  height: number;
  image: string;
  map: string[][];
  positivesList: number[][] = [];
  negativesList: number[][] = [];

  private populateLists() {
    this.map.forEach((line, lineIndex) => {
      for (let pixel = 0; pixel < line.length; pixel++) {
        if (line[pixel] === "o") {
          this.positivesList.push([lineIndex, pixel]);
        } else {
          this.negativesList.push([lineIndex, pixel]);
        }
      }
    });
  }

  constructor(image: string) {
    this.image = image.trim();
    this.map = this.processImage();
    this.width = this.map[0].length;
    this.height = this.map.length;
    this.populateLists();
  }

  processImage() {
    const linesArray = this.image.split("\n");
    return linesArray.map((line) => line.split(""));
  }

  static calculateMatchPercentage(
    sample: string[][],
    positives: number[][],
    negatives: number[][]
  ): {
    matchRatio: number;
    positives: number[][];
    negatives: number[][];
    sample: string[][];
  } {
    let matches = 0;

    const positivesMatches: number[][] = [];
    const negativesMatches: number[][] = [];

    positives.forEach((px) => {
      if (sample[px[0]][px[1]] === "o") {
        matches++;
        positivesMatches.push(px);
      }
    });

    negatives.forEach((px) => {
      if (sample[px[0]][px[1]] === "-") {
        matches++;
        negativesMatches.push(px);
      }
    });

    const matchRatio = matches / (sample.length * sample[0].length);

    return { matchRatio, positives: positivesMatches, negatives: negativesMatches, sample };
  }

}
