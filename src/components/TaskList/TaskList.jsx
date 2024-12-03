import React from 'react'
import AccecptTask from './AccecptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        {data.tasks.map((elem, idx) => {
            if(elem.active){
                return <AccecptTask key={idx}  data={elem} />
            }
            if(elem.NewTask){
                return <NewTask key={idx} data={elem} />
            }
            if(elem.completed){
                return <CompletedTask key={idx} data={elem} />
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem} />
            }
        })}
    </div>
  )
}

export default TaskList