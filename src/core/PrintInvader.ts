import { Invader } from "./invaders/Invader";
export class PrintInvader {
  static fromPositives(positives: number[][], invader: Invader): string {
    console.log(positives);
    let pIndex = 0;
    let str: string = "";
    for (let i = 0; i < invader.height; i++) {
      console.log(str);
      for (let r = 0; r < invader.width; r++) {
        if (
          positives[pIndex] &&
          positives[pIndex][0] === i &&
          positives[pIndex][1] === r
        ) {
          str += "o";
          pIndex++;
        } else {
          str += "-";
        }
      }
      str += `\n`;
    }
    return str;
  }

  static fromLists(positives: number[][], negatives: number[][], invader: Invader): string {
    let pIndex = 0;
    let nIndex = 0;
    let str: string = "";
    for (let i = 0; i < invader.height; i++) {
      for (let r = 0; r < invader.width; r++) {
        if (
          positives[pIndex] &&
          positives[pIndex][0] === i &&
          positives[pIndex][1] === r
        ) {
          str += "o";
          pIndex++;
        } else if (
          negatives[nIndex] &&
          negatives[nIndex][0] === i &&
          negatives[nIndex][1] === r
        ) {
          str += "-";
          nIndex++;
        } else {
          str += " ";
        }
      }
      str += `\n`;
    }
    return str;
  }

  static fromMap(map: string[][]): string {
    let str = "";
    for (let i = 0; i < map.length; i++) {
      str += map[i].join("") + `\n`;
    }
    return str;
  }
}