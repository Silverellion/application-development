import React from 'react'
import "./App.css"
import CountDisplayer from './components/CountDisplayer'
import CountUpdater from './components/CountUpdater'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <>
      <CountDisplayer/>
      <CountUpdater/> 
    </>
  )
}

export default App
