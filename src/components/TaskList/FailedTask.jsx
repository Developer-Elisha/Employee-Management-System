import React from 'react'

const FailedTask = () => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl">
            <div className='flex items-center justify-between'>
                <h3 className='px-3 py-1 text-sm bg-red-600 rounded'>High</h3>
                <h4 className='text-sm'>02 - july - 2004</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Failed Task</h2>
            <p className='mt-2 text-sm'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iure labore quo minus, blanditiis omnis.
            </p>
            <div className='mt-2'>
                <button className='w-full bg-red-500'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask