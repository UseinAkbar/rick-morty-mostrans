import React from 'react'
import Select from 'react-select';

const CharacterLocationForm = ({optionLocations, handleChange, handleSubmit}) => {
  return (
    <form className='flex flex-col gap-2 w-full md:w-5/12 justify-self-stretch md:justify-self-center' onSubmit={handleSubmit}>
        <h2 className='font-semibold text-center text-sm md:text-lg'>Search Character:</h2>
        <Select
            onChange={handleChange}
            options={optionLocations}
            className='text-sm md:text-base z-30'
            placeholder='Select location'                                
            name='location'     
            required                           
        />
        <button className="btn bg-primary hover:bg-primary text-white text-sm md:text-base w-full rounded-none" 
        type="submit">
            Search
        </button>
    </form>
  )
}

export default CharacterLocationForm