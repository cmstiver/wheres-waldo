import React from 'react';

function Dropdown(props) {
  const style = {
    left: props.x,
    top: props.y + -190,
  };
  function attemptGoal(e) {
    const goal = props.goals.find((x) => x.id === e.target.id);
    const x0 = goal.coords[0].x;
    const x1 = goal.coords[1].x;
    const y0 = goal.coords[0].y;
    const y1 = goal.coords[1].y;

    if (props.x > x0 && props.y > y0 && props.x < x1 && props.y < y1) {
      props.addCompleted(e.target.id);
    }
    props.toggle();
  }

  return (
    <div id="dropdown" style={style} onMouseLeave={props.toggle}>
      <div id="thumb" onClick={attemptGoal}>
        Fooglie
      </div>
      <div id="slime" onClick={attemptGoal}>
        Gelatinous Cube
      </div>
      <div id="beholder" onClick={attemptGoal}>
        Beholder
      </div>
      <div id="rick" onClick={attemptGoal}>
        Rick Sanchez
      </div>
      <div id="kirby" onClick={attemptGoal}>
        Kirby
      </div>
      <div id="ryuk" onClick={attemptGoal}>
        Ryuk
      </div>
      <div id="squidward" onClick={attemptGoal}>
        Squidward
      </div>
      <div id="marvin" onClick={attemptGoal}>
        Marvin the Paranoid Android
      </div>
    </div>
  );
}

export default Dropdown;
