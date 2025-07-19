import React from 'react'
import DetailsForm from '../../components/auth/DetailsForm'

const Details = () => {
  return (
    <>
      <div className='flex gap-0 justify-center items-center h-screen min-h-full w-full'>
        <div className='w-full max-w-md  p-6 rounded-lg h-full relative flex justify-center items-center flex-col'>
          <DetailsForm />
        </div>
        <div className='w-full max-w-md p-6'>
          <img src="./assets/detailsart.jpg" alt="details" className='rounded-xl' loading='lazy'/>
        </div>
      </div>
    </>
  )
}

export default Details