import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userdata, setUserdata] = useState('');
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserdata (
        {
          email: email,
          password: password
        }
      )
      setEmail('');
      setPassword('');
    }


  return (
    <div>
  <div className='p-7 h-screen flex justify-between flex-col'>
  <div>
  <img className='w-16 mb-10' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />

<form onSubmit={submitHandler}>
  <h3 className='text-lg mb-2 font-medium'>What's your email</h3>

  <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required 
  value={email} 
  onChange={(e) => {
    setEmail(e.target.value)
  }}
  type="email" placeholder='email@example.com' />


  <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>

  <input className='bg-[#eeeeee]  mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' 
  value={password}
  onChange={(e) => {
    setPassword(e.target.value)}
  }
  />

  <button
  className='bg-[#111] text-white font-semibold mb-3 rouned px-4 py-2  w-full text-lg placeholder:text-base'
  >Login</button>

  <p className='text-center'>Join a Fleet? <Link to= "/captain-signup" className='text-blue-600'>Register as a Captain</Link> </p>

</form>
  </div>

  <div>
    <Link to="/login"  className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rouned px-4 py-2  w-full text-lg placeholder:text-base' >Sign in as User</Link>
  </div>
    </div>
    </div>
  )
}

export default CaptainLogin
