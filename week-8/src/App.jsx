import React, { use } from 'react'
import "./App.css"
import CountDisplayer from './components/CountDisplayer'
import CountUpdater from './components/CountUpdater'
import { RecoilRoot, useRecoilState } from 'recoil'
import themeAtom from './atoms/themeAtom'

const App = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  function updateTheme() {
    if(theme === true)
      setTheme(false)
    else
      setTheme(true)
  }

  return (
    <>
      <div className={theme?"light-theme":"dark-theme"}>
        <CountDisplayer/>
        <CountUpdater/>
        <hr />
        <button onClick={updateTheme}>Switch theme</button>
      </div>
    </>
  )
}

export default App
