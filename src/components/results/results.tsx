import React, { useEffect, useState } from "react";
import { PrintInvader } from "../../core/PrintInvader";
import { RadarState } from "../../core/radar.types";

function Results(props: { state: RadarState }) {
  const state = props.state;
  const [index, setIndex] = useState(0);

  function onPreviousButtonClick() {
    if (index > 0) setIndex(index - 1);
  }

  function onNextButtonClick() {
    if (index < state.results.length - 1) setIndex(index + 1);
  }

  useEffect(() => {
    setIndex(0);
  }, [state.results]);
  return (
    <React.Fragment>
      <div>
        <div className="radarScreen">
          <p className="textarea larger-text">
            invaders found: {state.results.length}
          </p>
        </div>
        <h4>current invader </h4>
        <div>
          <button onClick={onPreviousButtonClick}>previous</button>
          <span>
            {index + 1} of {state.results.length}
          </span>
          <button onClick={onNextButtonClick}>next</button>
        </div>
      </div>
      <div className="radarScreen">
        <p>
          Invader image from the radar in positition:{" "}
          {state.results[index]?.sample.position[0]} ,{" "}
          {state.results[index]?.sample.position[1]}
        </p>
        <pre className="textarea">{state.results[index]?.image}</pre>
      </div>
      <div className="radarScreen">
        <p>Invader image taking in account only possitive matches</p>
        <pre className="textarea">
          {state.results.length
            ? PrintInvader.fromPositives(
                state.results[index].positives,
                state.results[index].invader
              )
            : ""}
        </pre>
      </div>
      <div className="radarScreen">
        <p>Invader image removing only the noise</p>
        <pre className="textarea">
          {state.results.length
            ? PrintInvader.fromLists(
                state.results[index].positives,
                state.results[index].negatives,
                state.results[index].invader
              )
            : ""}
        </pre>
      </div>
    </React.Fragment>
  );
}

export default Results;
