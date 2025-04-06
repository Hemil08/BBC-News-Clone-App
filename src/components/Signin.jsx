import React from 'react'
import logo from "../images/logo.png"
import {signInWithPopup} from "firebase/auth"
import {auth,googleProvider} from "../firebase/setup"
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate = useNavigate()

  const googleSignIn = async() =>{
    try{
      await signInWithPopup(auth,googleProvider)
      auth.currentUser && navigate("/")
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className='grid grid-cols-2 bg-black h-screen'>
        <div className='text-center'>
            <img src={logo} className='h-10 ml-60 mt-32'></img>
            <h1 className='text-white text-3xl font-semibold mt-7'>Sign In</h1>
            <button onClick={googleSignIn} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 w-96 mt-14">
              Sign In
            </button>
            <h2 className='text-blue-500 underline mt-9'>Sign in now</h2>
        </div>
        <div>
        {/* <img src={front}/> */}
        </div>
        
    </div>
  )
}

export default Signin