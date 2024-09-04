import React from 'react'

const Title = ({children}) => {
  return (
    <h1 className='font-bold text-2xl md:text-4xl text-center'>{children}</h1>
  )
}

export default Title