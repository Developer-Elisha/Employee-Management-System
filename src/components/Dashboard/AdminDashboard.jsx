import React from 'react'
import Header from '../partials/Header'
import CreateTask from '../partials/CreateTask'
import AllTask from '../partials/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='w-full h-screen p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard