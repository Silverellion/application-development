import React from 'react'
import "./App.css"
import Form from './components/form/Form'

const App = () => {
  const nameRef = useRef('');
    const emailRef = useRef('');

  return (
    <>
      <Form nameRef={nameRef} emailRef={emailRef}/>
    </>
  )
}

export default App
