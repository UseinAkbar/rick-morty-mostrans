import React, { useState } from 'react'
import CharacterCard from '../components/molecules/CharacterCard';
import { Link, useNavigate } from 'react-router-dom';
import CharacterLocationForm from '../components/organisms/CharacterLocationForm';
import Title from '../components/atoms/Title';

const CharacterLocation = () => {
    const navigate = useNavigate()
    const dataCharLocation = JSON.parse(localStorage.getItem('characterByLocation')) || []
    const optionLocations = [...new Set(dataCharLocation.map(item => {
        return item.location
    }))].map(data => {
        return {label: data, value: data}
    })
    const [selectedLocation, setselectedLocation] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const handleChange = (selectedState) => {
        const value = selectedState.value
        setselectedLocation(value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFilteredData(dataCharLocation.filter(item => item.location === selectedLocation))
    }

  return (
    <div className='grid grid-cols-1 auto-rows-min gap-6 min-h-screen'>
        <div className='flex items-center justify-between'>
            <div className='link text-xs md:text-base' onClick={() => navigate(-1)}>{`< back`}</div>
            <Link className='link text-xs md:text-base' to={'/rickmorty/list'}>{`> list character`}</Link>
        </div>
        <Title>Characters by Location</Title>
        <CharacterLocationForm 
            optionLocations={optionLocations} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
        />
        <div className='grid grid-cols-1 md:grid-cols-[repeat(4,minmax(300px,1fr))] auto-rows-min gap-4'>
            {filteredData.length === 0 ? 
            <h2 className='font-medium text-base text-center text-gray-500 col-[1/-1]'>No data found</h2> :
            filteredData.map((item, i) => {
                return (
                    <CharacterCard key={i} {...item.data} />
                )
            })
            }
        </div>
    </div>
  )
}

export default CharacterLocation