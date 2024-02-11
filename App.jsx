import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import './monsters.css'
import MonsterSpawner from './MonsterSpawner.jsx'

function App() {
  const monsterNames = ['goblin', 'skeleton', 'demon', 'zombie']
  var tempMonsterArray = [];

  const [spawnRate, setSpawnRate] = useState(1);
  const [spawnSwitch, setSpawnSwitch] = useState(true);
  const [monsterArray, setMonsterArray] = useState([]);

  function generateRandomMonster() {
      var tempObj = {};

      tempObj['monsterType'] = monsterNames[Math.floor(Math.random() * monsterNames.length)];
      tempObj['monsterPosition'] = Math.random() * 876
      tempMonsterArray.push(tempObj);

      return tempObj;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newMonster = generateRandomMonster();
      console.log(newMonster)
      setMonsterArray(prevMonsters => [...prevMonsters, newMonster]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MonsterSpawner
        monsterArray = {monsterArray}
      />
      <div
        className='bunker'
      />

    </>
  )
}

export default App
