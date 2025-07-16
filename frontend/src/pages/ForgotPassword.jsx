import React from 'react'
import ForgotPassForm from '../components/auth/ForgotPassForm'

const ForgotPassword = () => {
  return (
    <>
      <div className='flex gap-0 justify-center items-center h-full min-h-full w-full'>
        <div className='w-full max-w-md  p-6 rounded-lg h-[100%]'>
          <ForgotPassForm />
        </div>
        <div className='w-full max-w-md p-6'>
          <img src="./assets/forgotpass.jpg" alt="details" className='rounded-xl'/>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword