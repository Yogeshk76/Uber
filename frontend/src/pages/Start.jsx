import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-[-30px_-140px] bg-[url(https://images.unsplash.com/photo-1566725240726-f3b8413be1b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 flex justify-between flex-col w-full '>
        <img className='w-16 ml-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4 '>
          <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
          <Link to="/login" className='flex flex-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
