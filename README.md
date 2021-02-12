# Space Invaders Radar

## The algorithm
The strategy is brute-force. The search is done in stages.

- **Turn the input from a string to a 2D array.** in order to treat the input as pixels in a sceren we need to have some sort of convention. The inputs and samples will be two-dimentional arrays so I can take advantage of the built-it functions of the language.

- **Take samples the size of the invader from the input.** From the mapped input, We take samples the size of the invader.
The number of samples taken is `(W -iW) * (H - iH)` where:
    - `W` is te Width of the Input,
    - `iW` is the width of the invader
    - `H` is the height of the input
    - `iH` is the height of the invader

    This is not optimal. but it's the first approach. If I have time I'll think of a better way of finding the Invaders.

- **Abstract the Invader image information.** I created an `Invader` class that is responsible for holding and procesing the invader information. Two things we want two know from the shape of the invader are:
    1. what are the coordinates for all the 'o's
    2. what are the coordinates for all the '-'s

    the `Invader` class stores these in two lists. `Invader.positivesList` and `Invader.negativesList`. we can use these as 'checklists' against the samples from the input.

- **Compare the samples against the invader's checklists.** We already have a list of samples and a list of coordinates with the invader's shape. So now, instead of traversing another two-dimentional array, we can traverse the checklists and compare the value of the pixel in the coordinates that are stored in the checklists.

- **calculate the match ratio of the sample.** The result of comparing the values of the checklists against the sample is a the match ratio. a decimal number that is always less or equal to one. This number is calculated by dividing the amount of matches by the amount of squares in the samples.

- **discriminate samples with poor match ratio.** Using that Match ratio, we can discriminate the objects in the radar and leave only the more likely to be an Invader.


## Helper functions
I have created a `PrintInvader` class with three static methods that help visualize what the algrithm "sees".
- `PrintInvader.fromPositives(positives: number[][])` constructs an image based only in the object matches and sets the rest of pixels to '-'
- `PrintInvader.fromLists(positives: number[][], negatives[][])` builds an image using the matches of both objects and spaces, the missmatches are represented as empty spaces.
- `PrintInvader.fromMap(map: string[][])` takes a two-dimentional array and turns it into a string.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
