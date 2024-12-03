import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData] = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

            <div className='flex justify-between px-4 py-2 mb-2 bg-red-400 rounded'>
                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
            </div>

            <div>
                {userData.map(function (elem) {
                    return <div className='flex justify-between px-4 py-2 mb-2 border-2 rounded border-emerald-500'>
                        <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask