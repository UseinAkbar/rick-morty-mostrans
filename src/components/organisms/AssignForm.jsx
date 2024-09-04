import React from 'react'

const AssignForm = ({handleLocation, handleSubmit, isSubmitting}) => {
  return (
    <form className='flex flex-col gap-2 w-full md:w-5/12 justify-self-stretch md:justify-self-center' onSubmit={handleSubmit}>
        <h2 className='font-semibold text-center text-sm md:text-lg'>Assign to:</h2>
        <label className="form-control w-full">
            <input type="text" placeholder="Write a location" className="input input-bordered rounded-none w-full" onChange={handleLocation} required />                
        </label>
        <button className="btn bg-primary hover:bg-primary text-white text-sm md:text-base w-full rounded-none" 
        type="submit">
            {isSubmitting ? 
            <span className="loading loading-spinner loading-sm"></span> :
            'Assign'
            }
        </button>
    </form>
  )
}

export default AssignForm