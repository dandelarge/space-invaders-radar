export class PrintInvader {
  static fromPositives(positives: number[][], width: number, height: number): string {
    let pIndex = 0;
    let str: string = "";
    for (let i = 0; i < height; i++) {
      for (let r = 0; r < width; r++) {
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
    console.log(str);
    return str;
  }

  static fromLists(
    positives: number[][],
    negatives: number[][],
    width: number,
    height: number
  ): string {
    let pIndex = 0;
    let nIndex = 0;
    let str: string = "";
    for (let i = 0; i < height; i++) {
      for (let r = 0; r < width; r++) {
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
    console.log(str);
    return str;
  }

  static fromMap(map: string[][]): string {
    let str = "";
    for (let i = 0; i < map.length; i++) {
      str += map[i].join("") + `\n`;
    }
    console.log(str);
    return str;
  }
}