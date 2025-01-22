import React, { useState, useEffect } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const hasLogged = React.useRef(false); // Prevent double logging

    useEffect(() => {
        if (!hasLogged.current) { 
            hasLogged.current = true; // Mark it as logged
            console.log("Email:", "elisha@e.com");
            console.log("Email:", "aaron@e.com");
            console.log("Email:", "danish@e.com");
            console.log("Email:", "shaloom@e.com");
            console.log("Email:", "joshua@e.com");
            console.log("Admin Email:", "admin@me.com");
            console.log("Password:", 123);
        }
    }, []); // Runs only once on mount

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <div className='p-20 border-2 rounded-xl border-emerald-600'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className='px-6 py-2 text-lg font-medium bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400' 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='px-6 py-2 mt-3 text-lg font-medium bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400' 
                        type="password" 
                        placeholder='Enter password' 
                    />
                    <button 
                        className='w-full px-8 py-2 text-lg font-semibold text-white border-none rounded-full outline-none mt-7 hover:bg-emerald-700 bg-emerald-600 placeholder:text-white'
                    >
                        Log in
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-500">Credentials are in Console</p>
            </div>
        </div>
    );
};

export default Login;
