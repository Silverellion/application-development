import React, { useState } from 'react'
import counterAtom from '../atoms/CounterAtom'
import { useRecoilState } from 'recoil';

const CountUpdater = () => {
    const [count, setCount] = useRecoilState(counterAtom);
    function increaseCount( ){
      setCount(count + 1)
    }
    function decreaseCount() {
      setCount(count - 1)
    }

  return (
    <div>
      <button onClick={increaseCount}>Increase count</button>
      <br />
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  )
}

export default CountUpdater
