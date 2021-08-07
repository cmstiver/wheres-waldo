import React, { useEffect } from 'react';
import thumb from '../imgs/goals/thumb.png';
import slime from '../imgs/goals/slime.png';
import beholder from '../imgs/goals/beholder.png';
import marvin from '../imgs/goals/marvin.png';
import rick from '../imgs/goals/rick.png';
import squidward from '../imgs/goals/squidward.png';
import kirby from '../imgs/goals/kirby.png';
import ryuk from '../imgs/goals/ryuk.png';

function Goals(props) {
  useEffect(() => {
    props.completed.map((x) => {
      document.querySelector(`#${x}-goal`).classList = 'completed';
      return false;
    });
  }, [props.completed]);
  return (
    <div id="goals-container">
      <div id="thumb-goal" className="goal">
        Fooglie
        <img className="lowerdown" src={thumb} alt="thumb" />
      </div>
      <div id="slime-goal" className="goal">
        Gelatinous Cube
        <img src={slime} alt="slime" />
      </div>
      <div id="beholder-goal" className="goal">
        Beholder
        <img src={beholder} alt="beholder" />
      </div>
      <div id="rick-goal" className="goal">
        Rick
        <img src={rick} alt="rick" />
      </div>
      <div id="kirby-goal" className="goal">
        Kirby
        <img src={kirby} alt="kirby" />
      </div>
      <div id="ryuk-goal" className="goal">
        Ryuk
        <img className="lowerdown" src={ryuk} alt="ryuk" />
      </div>
      <div id="squidward-goal" className="goal">
        Squidward
        <img className="lowerdown" src={squidward} alt="squidward" />
      </div>
      <div id="marvin-goal" className="goal">
        Marvin
        <img src={marvin} alt="marvin" />
      </div>
    </div>
  );
}

export default Goals;
