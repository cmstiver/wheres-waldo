import React, { useEffect, useState } from 'react';
import Goals from './components/Goals';
import Waldo from './components/Waldo';
import './styles/style.scss';
import firestore from './firebase.config';

function App() {
  const [goals, setGoals] = useState([]);
  const [completed, setCompleted] = useState([]);

  const fetchGoals = async () => {
    if (goals.length >= 8) {
      return;
    }
    const response = firestore.collection('goals');
    const data = await response.get();
    data.forEach((item) => {
      setGoals((prevGoals) => [...prevGoals, item.data()]);
    });
  };

  function addCompleted(id) {
    if (!completed.includes(id)) {
      setCompleted((prevCompleted) => [...prevCompleted, id]);
    }
  }

  useEffect(() => {
    fetchGoals();
  }, []);
  return (
    <div id="main-container">
      <Goals completed={completed} />
      <Waldo goals={goals} addCompleted={addCompleted} />
    </div>
  );
}

export default App;
