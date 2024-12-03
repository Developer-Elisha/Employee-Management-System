import React from 'react'

const AccecptTask = ({data}) => {
  console.log();
  
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl">
            <div className='flex items-center justify-between'>
                <h3 className='px-3 py-1 text-sm bg-red-600 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='mt-2 text-sm'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='px-2 py-1 text-sm bg-green-500'>Mark as Completed</button>
                <button className='px-2 py-1 text-sm bg-red-500'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AccecptTask