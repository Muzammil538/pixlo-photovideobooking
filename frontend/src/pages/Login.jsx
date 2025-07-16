import React from 'react'
import LoginForm from '../components/auth/LoginForm'


const Login = () => {
  return (
    <>
      <div className='flex gap-0 justify-center items-center h-full min-h-full w-full'>
        <div className='w-full max-w-md  p-6 rounded-lg h-[100%] relative'>
          <LoginForm />
          
        </div>
        <div className='w-full max-w-md p-6'>
          <img src="./assets/loginart.jpg" alt="login" className='rounded-xl'/>
        </div>
      </div>
    </>
  )
}

export default Login