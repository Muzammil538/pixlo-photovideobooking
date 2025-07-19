import React from 'react'
import VerifyCodeForm from '../../components/auth/VerifyCodeForm'

const VerifyCode = () => {
  return (
    <>
      <div className='flex gap-0 justify-center items-center h-screen min-h-full w-full'>
        <div className='w-full max-w-md  p-6 rounded-lg h-full relative flex justify-center items-center flex-col'>
          <VerifyCodeForm />
        </div>
        <div className='w-full max-w-md p-6'>
          <img src="./assets/verifycode.jpg" alt="details" className='rounded-xl' loading='lazy'/>
        </div>
      </div>
    </>
  )
}

export default VerifyCode