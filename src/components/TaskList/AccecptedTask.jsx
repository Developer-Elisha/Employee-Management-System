import React from 'react'

const AccecptedTask = () => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl">
            <div className='flex items-center justify-between'>
                <h3 className='px-3 py-1 text-sm bg-red-600 rounded'>High</h3>
                <h4 className='text-sm'>02 - july - 2004</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Accecpted Task</h2>
            <p className='mt-2 text-sm'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iure labore quo minus, blanditiis omnis.
            </p>
            <div className='flex justify-between mt-4'>
                <button className='px-2 py-1 text-sm bg-green-500'>Mark as Completed</button>
                <button className='px-2 py-1 text-sm bg-red-500'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AccecptedTask