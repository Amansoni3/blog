import React from 'react'
import { auth , provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = ({setIsAuth}) => {
  
  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth , provider).then((result)=>{
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      console.log(auth.currentUser , 'user')
      navigate("/")
    })
  }

  return (
    <div>
      <p>Sign with google to continue</p>
      <button onClick={signInWithGoogle}>Sign with google</button>
    </div>
  )
}

export default Login