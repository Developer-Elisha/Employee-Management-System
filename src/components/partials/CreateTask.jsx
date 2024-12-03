import React, { useState } from 'react'

const CreateTask = () => {
    
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        
        setNewTask({taskTitle, taskDate, taskDescription, category, active:false, newTask:true, failed:false, completed:false})
        const data = JSON.parse(localStorage.getItem('employees'))

        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
            }       
        })
        
    
        setTaskTitle("")
        setTaskDate("")
        setAssignTo("")
        setCategory("")
        setTaskDescription("")
        
    }
    
  return (
    <div className='mt-7 bg-[#1c1c1c] p-5 rounded'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} 
                className='flex flex-wrap items-start justify-between w-full'>
                    <div className='w-1/2'>
                    
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Task Title</h3>
                            <input 
                            value={taskTitle} 
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' 
                            type="text" 
                            placeholder='Make a UI design' />
                        </div>
                        
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Date</h3>
                            <input 
                            value={taskDate} 
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' 
                            type="date" />
                        </div>
                        
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Asign to</h3>
                            <input 
                            value={assignTo} 
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' 
                            type="text" 
                            placeholder='Employee Name' />
                        </div>
                        
                        <div>
                            <h3 className='mb-0.5 text-sm text-gray-300'>Category</h3>
                            <input 
                            value={category} 
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='w-4/5 px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' 
                            type="text" 
                            placeholder='design, dev, etc,' />
                        </div>
                        
                    </div>
                    
                    <div className='flex flex-col items-start w-2/5'>
                        <h3 className='mb-0.5 text-sm text-gray-300'>Description</h3>
                        <textarea 
                        value={taskDescription} 
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full px-2 py-1 text-sm bg-transparent rounded outline-none border-[1px] border-gray-400 mb-9' 
                        cols="30" 
                        rows="10"></textarea>
                        <button className='w-full px-5 py-3 mt-4 text-sm rounded bg-emerald-500 hover:bg-emerald-600'>Create Task</button>
                    </div>
                    
                </form>
            </div>
  )
}

export default CreateTask