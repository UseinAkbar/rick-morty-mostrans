import React from 'react'

const CardSkeleton = () => {
    const arr = [1,2,3,4]
  return (
    <>
      {arr.map(item => (
          <div key={item} className="flex w-auto flex-col gap-4">
              <div className="skeleton h-64 w-full rounded-none"></div>
              <div className="skeleton h-10 w-full rounded-none"></div>
              <div className="skeleton h-8 w-full rounded-none"></div>
          </div>
      ))}
    </>
  )
}

export default CardSkeleton