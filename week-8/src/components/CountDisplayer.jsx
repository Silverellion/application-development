import React from 'react'
import counterAtom from '../atoms/CounterAtom';
import { useRecoilState } from 'recoil'

const CountDisplayer = () => {
const [count, _] = useRecoilState(counterAtom);
  return (
    <div>
      Current count: {count}
    </div>
  )
}

export default CountDisplayer
