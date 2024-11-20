import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-7 bg-[#1c1c1c] p-5 rounded'>
                <form className='flex flex-wrap items-start justify-between w-full'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Task Title</h3>
                            <input className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' type="text" placeholder='Make a UI design' />
                        </div>
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Date</h3>
                            <input className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' type="date" name="" id="" />
                        </div>
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Asign to</h3>
                            <input className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' type="text" placeholder='Employee Name' name="" id="" />
                        </div>
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Category</h3>
                            <input className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' type="text" placeholder='design, dev, etc,' name="" id="" />
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-2/5'>
                        <h3 className='mb-0.5 text-sm text-gray-300'>Description</h3>
                        <textarea className='w-full px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' name="" id="" cols="30" rows="10"></textarea>
                        <button className='w-full px-5 py-3 mt-4 text-sm rounded bg-emerald-500 hover:bg-emerald-600'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask