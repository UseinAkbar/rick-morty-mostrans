import React, { useEffect, useState } from 'react'
import { useGetCharacterById } from '../hooks/services/api/character'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetAllLocations } from '../hooks/services/api/location'
import toast from 'react-hot-toast';
import AssignForm from '../components/organisms/AssignForm';
import Title from '../components/atoms/Title';

const Detail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [selectedLocation, setselectedLocation] = useState('')
    const dataCharLocation = JSON.parse(localStorage.getItem('characterByLocation')) || []
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {data, isFetching} = useGetCharacterById(id)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const isAssigned = dataCharLocation.some(item => {
            return item.data.name === data.name
        })
        if(isAssigned) {
            toast.error('Character is already assigned!')
        } else {
            const selectedData = {
                data,
                location: selectedLocation
            }
            const storedData = [...dataCharLocation, selectedData]
            localStorage.setItem('characterByLocation', JSON.stringify(storedData))
            toast.success('Character assigned successfully!')
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
        setTimeout(() => {
            setIsSubmitting(false)
        }, 1000)
    }

    const handleLocation = (e) => {
        setselectedLocation(e.target.value)
    }

  return (
    <div className='grid grid-cols-1 auto-rows-min gap-6'>
        <div className='flex items-center justify-between'>
            <Link className='link text-xs md:text-base' to={'/rickmorty/list'}>{`< list character`}</Link>
            <Link className='link text-xs md:text-base' to={'/rickmorty/characterByLocation'}>{`> location`}</Link>
        </div>
        <Title>Detail Character</Title>
        <img
            src={data?.image}
            alt={data?.name}
            className="justify-self-center w-1/2 md:w-56 drop-shadow-sm" 
        />
        <div className='flex flex-col items-center gap-2 text-base text-gray-500'>
            <h2 className='text-2xl text-fontPrimary font-bold tracking-wide'>{data?.name}</h2>
            <div className="divider my-0"></div>
            <div className='flex justify-center flex-wrap gap-2 w-full md:w-[30%]'>
                <h2 className='bg-secondary text-base px-2 py-1 text-fontPrimary'>
                    Status: <span className='font-semibold'>{data?.status}</span>
                </h2>
                <h2 className='bg-secondary text-base px-2 py-1 text-fontPrimary'>
                    Species: <span className='font-semibold'>{data?.species}</span>
                </h2>
                <h2 className='bg-secondary text-base px-2 py-1 text-fontPrimary'>
                    Gender: <span className='font-semibold'>{data?.gender}</span>
                </h2>
                <h2 className='bg-secondary text-base px-2 py-1 text-fontPrimary'>
                    Type: <span className='font-semibold'>{data?.type || '-'}</span>
                </h2>
                <h2 className='bg-secondary text-base px-2 py-1 text-fontPrimary'>
                    Origin: <span className='font-semibold'>{data?.origin?.name || '-'}</span>
                </h2>
            </div>
        </div>
        {/* <div className="divider my-0"></div> */}
        <AssignForm 
            isSubmitting={isSubmitting} 
            handleLocation={handleLocation} 
            handleSubmit={handleSubmit} 
        />
    </div>
  )
}

export default Detail