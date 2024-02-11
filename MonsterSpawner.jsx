import { useState, useEffect } from 'react'
import './monsters.css'

function MonsterSpawner(props) {

  const MonsterMap = props.monsterArray.map((item, index) => {

      return (
        <div
        className='monster'
        position={item.monsterPosition}
        key = {index}
        style={{left: item.monsterPosition}}
        >
        </div>
    )})

  return (
    <>
      {MonsterMap}
    </>
  )
}

export default MonsterSpawner
