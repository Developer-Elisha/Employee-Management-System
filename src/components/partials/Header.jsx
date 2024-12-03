import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    
    // window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName 👋</span></h1>
        <button onClick={logOutUser} className='px-5 py-2 text-lg font-medium text-white bg-red-600 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header