import React, { useEffect } from 'react';
import './App.scss';
import { PrintInvader } from './helpers/print';
import { Invader } from './invaders/Invader';
import { Spider } from './invaders/Spider';
import { Squid } from './invaders/Squid';

  const reading =`
----o--oo----o--ooo--ooo---------o---oo-o----oo---o--o---------o----o------o----------------o--o--o-
--o-o-----oooooooo-oooooo-------o----o------ooo-o---o--o----o------o--o---ooo-----o--oo-o------o----
--o--------oo-ooo-oo-oo-oo------------------ooooo-----o-----o------o---o--o--o-o-o------o----o-o-o--
-------o--oooooo--o-oo-o--o-o-----oo--o-o-oo--o-oo-oo-o--------o-----o------o-ooooo---o--o--o-------
------o---o-ooo-ooo----o------o-------o---oo-ooooo-o------o----o--------o-oo--ooo-oo-------------o-o
-o--o-----o-o---o-ooooo-o-------o----o---------o-----o-oo-----------oo----ooooooo-ooo-oo------------
o-------------ooooo-o--o--o--o-------o--o-oo-oo-o-o-o----o-------------o--oooo--ooo-o----o-----o--o-
--o-------------------------oo---------oo-o-o--ooo----o-----o--o--o----o--o-o-----o-o------o-o------
-------------------o-----------------o--o---------------o--------o--oo-o-----oo-oo---o--o---o-----oo
----------o----------o------------------o--o----o--o-o------------oo------o--o-o---o-----o----------
------o----o-o---o-----o-o---------oo-o--------o---------------------------------o-o-o--o-----------
---------------o-------------o-------o-------------------o-----o---------o-o-------------o-------oo-
-o--o-------------o-o--------o--o--oo-------------o----ooo----o-------------o----------oo----o---o-o
-o--o-------------o----oo------o--o-------o--o-----------o----o-----o--o----o--oo-----------o-------
-o-----oo-------o------o---------------o--o----------o-----o-------o-----------o---o-o--oooooo-----o
-o--------o-----o-----o---------oo----oo---o-----------o---o--oooo-oo--o-------o------oo--oo--o-----
------------o-------------------o----oooo-------------oo-oo-----ooo-oo-----o-------o-oo-oooooooo---o
-----------------------------------oooooooo---o-----o-------o--oooooo-o------------o-o-ooooooo-o----
------------o------o-------o-------oo-oo--o--o---------o--o-o-o-ooooo-o--------------oo-o----o-oo-o-
---o-o----------o--------oo----o----oooooooo-------o----o-o-o-o-----o-o-----o----------ooo-oo--o---o
-o-o---------o-o---------------o--o--o--ooo---ooo-------o------oo-oo------------o--------o--o-o--o--
-------oo---------------------------o-oo----------o------o-o-------o-----o----o-----o-oo-o-----o---o
---o--------o-----o-------o-oo-----oo--oo-o----oo----------o--o---oo------oo----o-----o-------o-----
---o--ooo-o---------o-o----o------------o---------o----o--o-------o-------------o----------------oo-
---o------o----------------o----o------o------o---oo-----------o-------------o----------oo---------o
--oo---------------o--o------o---o-----o--o-------------o------o-------o-----o-----o----o------o--o-
-o-------o----------o-o-o-------o-----o--o-o-----------o-oo-----------o------o---------o-----o-o----
----------o----o-------o----o--o------o------------o---o---------------oo----o-----ooo--------------
----o--------oo----o-o----o--o------ooo----o-oooo---o--o-oo--------o-oo-----o-o---o-o--o-----oo-----
------o--------o-ooooo----o---o--o-----o---------------o-o-------o-----o----------------------------
o-------oo----o--oooooo-o---o--o------oooo----------o-oo-------o---o----------o------oo-------------
-o---o----------o--oo-oo-o---o-----o-o-----------------------oo--o------o------o--------------------
-----oo-o-o-o---ooooooooo----o----o--------o--o---oo---o------------o----------o-o---o------o-o--oo-
------o------o---ooo-o---------------------------o--o---o---o----o--o-------o-----o------o----o----o
-------o----------ooo-o-----o----o---o--o-oo--o--o-o--o------o--o-oo---ooo------------------------o-
-o-------o------o-o--ooo--o---o---oo-----o----o-------------o----o-ooo-o------o--o-o------o-o-------
---oo--o---o-o---------o---o--------------o--o-----o-------o-----o--o---o-oo--------o----o----o-----
o------o----oo-o-----------oo--o---o--------o-o------o-------o-o------o-oo---------o-----oo---------
----o--o---o-o-----------o---o------------o-------o----o--o--o--o-o---------------o-----------------
-------oo--o-o-----o-----o----o-o--o----------------------o-------o------o----oo----ooo---------o---
o-----oo-------------------o--o-----o-----------o------o-------o----o-----------o----------------o--
--o---o-------o------------o--------------------o----o--o-------------oo---o---------oo--------o----
--o--------o---------o------------o------o-------o------------o-------o---o---------ooooo-----------
------o--------------o-o-o---------o---o-------o--o-----o-------o-o----------o-----oo-ooo----------o
--o---------------o----o--oo-------------o---------o-------------------oo---------oo-o-ooo----------
-o-----------o------ooo----o----------------ooo-----o--------o--o---o-----------o-o-oooooo--------oo
-o---o-------o---o-oooo-----o-------------------o----oo-----------------o--o--------o--o------o--o--
-------o---o------oooooo--o----ooo--o--------o-------o----------------------------oo-oo-o--o--------
o--oo------o-----oo--o-oo------------oo--o------o--o-------------oo----o------------oooo-o------oo--
-----o----------ooooooooo--------------oo--------------oo-----o-----o-o--o------o----------o----o---`;



function processRadarImage() {
  const array = reading.trim().split('\n');
  return array.map( line => line.split(''));
}

function takeSamples(input: string[][], sampleWidth: number, sampleHeight: number): string[][][] {
  let result: string[][][] = [];
  for(let line = 0; line < input.length - sampleHeight; line++) {
    for(let pixel = 0; pixel < input[0].length - sampleWidth; pixel++) {
      const sample = input.slice(line, line + sampleHeight);
      const chop = sample.map( (line) => line.slice(pixel, pixel + sampleWidth));
      result.push(chop);
    }
  }
  return result;
}

function printResults(results: any[], invader: Invader) {
  results
    .filter( result => result.matchRatio > 0.85) //we can adjust the definition we want to search for
    .forEach( result => {
      console.log('Radar Image')
      PrintInvader.fromMap(result.sample);
      console.log('Visualization by object matches')
      PrintInvader.fromPositives(result.positives, invader.width, invader.height);
      console.log('Visualization by matching both spaces and objects')
      PrintInvader.fromLists(result.positives, result.negatives, invader.width, invader.height);
    });
}

function onRender() {
  const spider = new Spider();
  const squid = new Squid();
  const input = processRadarImage();

  const spiderSamples = takeSamples(input, spider.width, spider.height);
  const squidSamples = takeSamples(input, squid.width, squid.height);

  const spiderResults = spiderSamples.map( sample => {
    return Invader.calculateMatchPercentage(sample, spider.positivesList, spider.negativesList);
  });
  const squidResults = squidSamples.map( sample => {
    return Invader.calculateMatchPercentage(sample, squid.positivesList, squid.negativesList);
  });

  printResults(spiderResults, spider);
  printResults(squidResults, squid);
}

function App() {
  useEffect(onRender, []);

  return (
    <div className="App">
      <h3>Hello!</h3>
      <pre>{ reading }</pre>
    </div>
  );
}

export default App;
