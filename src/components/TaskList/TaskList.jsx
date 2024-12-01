import React from 'react'
import AccecptTask from './AccecptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        {data.tasks.map((elem, idx) => {
            if(elem.active){
                return <AccecptTask key={idx} />
            }
            if(elem.NewTask){
                return <NewTask key={idx} />
            }
            if(elem.completed){
                return <CompletedTask key={idx} />
            }
            if(elem.failed){
                return <FailedTask key={idx} />
            }
        })}
    </div>
  )
}

export default TaskList