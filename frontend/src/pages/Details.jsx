import React from 'react'
import DetailsForm from '../components/auth/DetailsForm'

const Details = () => {
  return (
    <>
      <div className='flex gap-0 justify-center items-center h-full min-h-full w-full'>
        <div className='w-full max-w-md  p-6 rounded-lg   h-[100%]'>
          <DetailsForm />
        </div>
        <div className='w-full max-w-md p-6'>
          <img src="./assets/detailsart.jpg" alt="details" className='rounded-xl'/>
        </div>
      </div>
    </>
  )
}

export default Details