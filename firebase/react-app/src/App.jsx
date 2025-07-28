import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../config/firbase'

const App = () => {

 async function handleLogin(){
  await signInWithPopup(auth,provider)
  }
  return (
    <div>
      <button onClick={handleLogin}> Google Login</button>
    </div>
  )
}

export default App
