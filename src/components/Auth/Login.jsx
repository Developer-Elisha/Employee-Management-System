import React, { useState } from 'react'

const Login = ({handleLogin}) => {
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <div className='p-20 border-2 border-emerald-600 rounded-xl'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center'>

                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required 
                className='px-5 py-3 text-xl bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400' 
                type="email" 
                placeholder='Enter your email' 
                />

                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required 
                className='px-5 py-3 mt-3 text-xl bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400' 
                type="password" 
                placeholder='Enter password' 
                />

                <button className='w-full px-5 py-3 mt-5 text-xl text-white border-none rounded-full outline-none bg-emerald-600'>Log in</button>

            </form>
        </div>
    </div>
  )
}

export default Login