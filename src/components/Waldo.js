import React, { useEffect, useState } from 'react';
import waldo from '../imgs/waldo.jpeg';
import '../styles/magnify.css';
import magnify from './scripts/magnifyingGlass';
import Dropdown from './Dropdown';

function Waldo(props) {
  useEffect(() => {
    magnify();
  }, []);

  const [toggle, setToggle] = useState(false);
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  function getClickPosition(e) {
    const rect = e.target.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    console.log(`${posX}, ${posY}`);

    setX(posX);
    setY(posY);
    setToggle(true);
  }
  function toggleFalse() {
    setToggle(false);
  }

  return (
    <>
      <div id="waldo-container">
        <img
          role="presentation"
          onClick={getClickPosition}
          id="waldo"
          src={waldo}
          alt="where's waldo"
        />
        <div id="zoom" />
        {toggle ? (
          <Dropdown
            x={x}
            y={y}
            toggle={toggleFalse}
            goals={props.goals}
            addCompleted={props.addCompleted}
          />
        ) : null}
      </div>
    </>
  );
}

export default Waldo;
