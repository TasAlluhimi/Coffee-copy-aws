import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate()
    const [err, setErr] = useState('')
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })

    const addInputs = (event)=>{
        setInputs({...inputs,
        [event.target.name]: event.target.value
        })
    }

    const Sign_up = ()=>{
        if (inputs.username.length < 3) {
            setErr('username should be longer than 3')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputs.email)) {
            setErr('please enter a valid email')
            return
        }

        if (!/[a-zA-Z]/.test(inputs.password) && inputs.password.length < 6 && !/\d/.test(inputs.password)) {
            setErr('password should be longer than 6 and have a letters and numbers')
            return
        }
        
        axios.post('https://657c6959853beeefdb9964e3.mockapi.io/users', {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password
    })
    .then(res=>{
        console.log(res)
        navigate('/SignIn')
    })

    }


  return (
    <>

        <div class="h-screen flex justify-center items-center bg-[#F5EBEB] py-20 p-4 md:p-20 lg:p-32">
    <div class="w-96 bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Sign up!</h2>
            <p class="text-gray-700 mb-6">To order yummest coffee!</p>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="username">
            Username
          </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" type="text" placeholder="Username"
                    name='username'
                    value={inputs.username}
                    onChange={addInputs}
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" type="email" placeholder="Email"
                    name='email'
                    value={inputs.email}
                    onChange={addInputs}
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" type="password" placeholder="Password"
                    name='password'
                    value={inputs.password}
                    onChange={addInputs}
                    />
                </div>

                <div className='text-red-500 p-3 text-center'>{err}</div>
                <div class="flex items-center justify-between flex-wrap">
                    <button 
                    class="bg-[#867070] hover:bg-[#D5B4B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={Sign_up}
                    >
                        Sign Up
                    </button>
                    <Link class="inline-block align-baseline font-bold text-sm text-[#867070] hover:text-[#D5B4B4]" 
                    to="/SignIn">
                        have an account? Sign In
                    </Link>
                </div>
        </div>
    </div>
</div>
    </>
  )
}

export default SignUp