import React from 'react'
import { useGetAllCharacters } from '../hooks/services/api/character'
import CharacterCard from '../components/molecules/CharacterCard'
import CardSkeleton from '../components/atoms/CardSkeleton'
import { Link, useNavigate } from 'react-router-dom'
import Title from '../components/atoms/Title'

const List = () => {
    const navigate = useNavigate()
    const {data, isFetching} = useGetAllCharacters()

  return (
    <div className='grid grid-cols-1 auto-rows-min gap-6 min-h-screen'>
      <div className='flex items-center justify-between'>
        <div className='link text-xs md:text-base' onClick={() => navigate(-1)}>{`< back`}</div>
        <Link className='link text-xs md:text-base' to={'/rickmorty/characterByLocation'}>{`> location`}</Link>
      </div>
      <Title>List Characters</Title>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-min gap-6'>
          {isFetching ? <CardSkeleton /> :
          data.map((item, i) => {
              return (
                  <CharacterCard key={i} {...item} />
              )
          })
          }
      </div>
    </div>
  )
}

export default List