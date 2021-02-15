import { PrintInvader } from "../PrintInvader";
import { RadarResults } from "../radar.types";

export class Invader {
  name: string;
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

  constructor(name: string, image: string,) {
    this.image = image.trim();
    this.name = name;
    this.map = this.processImage();
    this.width = this.map[0].length;
    this.height = this.map.length;
    this.populateLists();
  }

  processImage() {
    const linesArray = this.image.split("\n");
    return linesArray.map((line) => line.split(""));
  }



}
