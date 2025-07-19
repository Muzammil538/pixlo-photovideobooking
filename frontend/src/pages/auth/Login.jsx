import React from 'react'
import LoginForm from '../../components/auth/LoginForm'


const Login = () => {
  return (
    <>
      <div className='flex gap-0 justify-center items-center h-screen min-h-full w-full'>
        <div className='w-full max-w-md  p-6 rounded-lg h-full relative flex justify-center items-center flex-col'>
          <LoginForm />
          
        </div>
        <div className='w-full max-w-md p-6'>
          <img src="./assets/loginart.jpg" alt="login" className='rounded-xl' loading='lazy'/>
        </div>
      </div>
    </>
  )
}

export default Login