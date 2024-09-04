import React from 'react'
import iconLink from '../../assets/link.svg'
import { useNavigate } from 'react-router-dom'

const CharacterCard = ({id, name, status, type, gender, species, image}) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/rickmorty/detail/${id}`)
  }

  return (
    <div className="card rounded-none bg-white w-full shadow-sm border-2 border-primary relative overflow-hidden cursor-pointer animatedCard" onClick={handleNavigate}>
        <div className='absolute w-full h-[30%] bg-secondary top-0 left-0'></div>
        <figure className="px-10 pt-10 z-10">
            <img
            src={image}
            alt={name}
            className="w-44 drop-shadow-sm" />
        </figure>
        <div className="card-body justify-between items-center text-center">
            <h2 className="card-title font-bold text-2xl">{name}</h2>
            <div className="divider my-0"></div>
            <div className='grid grid-cols-1 justify-items-center gap-2'>
              <h2 className="card-title text-base text-gray-500">Status: {status}</h2>
            </div>
            <div className="card-actions self-stretch mt-2">
              <button className="btn bg-primary hover:bg-primary text-white w-full rounded-none" 
              onClick={handleNavigate}>
                <img src={iconLink} alt="" className='w-6' />
                Detail
              </button>
            </div>
        </div>
    </div>
  )
}

export default CharacterCard