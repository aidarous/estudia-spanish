import React from 'react'
import { signInWithGooglePopup } from '../firebase/firebase.utils'
import SignUpForm from './SignUpForm'

const Login = () => {
  const logGoogleUser = async () =>{
    const response = await signInWithGooglePopup();
  }

  return (
    <div className='box'>
      <SignUpForm />
      {/* <h1>Sign in</h1>
      <button onClick={logGoogleUser}>log in </button> */}
    </div>
  )
}

export default Login
