import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async ()=>{
      const {user} = await signInWithGooglePopup()
      const userDocRef =  createUserDocumentFromAuth(user)
    }


  return (
    <div>
      <h1>This is sign in page</h1>
      <button onClick={logGoogleUser}>
        Sing in with google popup
      </button>
      </div>
  )
}

export default SignIn