import React, { use } from 'react'
import "./App.css"
import CountDisplayer from './components/CountDisplayer'
import CountUpdater from './components/CountUpdater'
import { RecoilRoot, useRecoilState } from 'recoil'
import themeAtom from './atoms/themeAtom'

const App = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  function updateTheme() {
    if(theme === 0)
      setTheme(1)
    else
      setTheme(0)
  }

  return (
    <>
      <CountDisplayer/>
      <CountUpdater/>
      <hr />
      <button onClick={updateTheme}>Switch theme</button>
      <p>Current theme: {theme}</p> 
    </>
  )
}

export default App
