import React from 'react'
import VerifyCodeForm from '../components/auth/VerifyCodeForm'

const VerifyCode = () => {
  return (
    <>
      <div className='flex gap-0 justify-center items-center h-full min-h-full w-full'>
        <div className='w-full max-w-md  p-6 rounded-lg h-[100%]'>
          <VerifyCodeForm />
        </div>
        <div className='w-full max-w-md p-6'>
          <img src="./assets/verifycode.jpg" alt="details" className='rounded-xl'/>
        </div>
      </div>
    </>
  )
}

export default VerifyCode