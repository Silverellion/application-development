import React from 'react'
import "./Form.css"
import { useRef } from 'react';

const Form = ({nameRef, emailRef}) => {
    
  return (
    <div className='form'>
      <p className='title'>Form</p>
      <hr />

      <p className='regular'>Name</p>
      <input type="text" placeholder='James' ref = {nameRef}/>

      <p className='regular'>Email</p>
      <input type="email" placeholder='abc@yourcompany.com' ref={emailRef}/>
    </div>
  )
}

export default Form
