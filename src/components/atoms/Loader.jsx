import React from 'react'
import loader from '../../assets/loader.png'

const Loader = () => {
  return (
    <div className="grid place-items-center fixed inset-0 z-20">
      <img src={loader} alt="Rick and Morty" className="w-24 md:w-40" />
    </div>
  )
}

export default Loader