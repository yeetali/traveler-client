import Link from 'next/link'
import React from 'react'

const DestinationsLayout = ({children}: { children: React.ReactNode}) => {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className="w-full flex justify-end">
            <Link className='bg-blue-500 rounded-lg text-white font-bold px-8 py-4' href={"destinations/create"}>Add Destination</Link>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default DestinationsLayout