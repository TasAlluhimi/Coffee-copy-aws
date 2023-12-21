import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {

    const navigate = useNavigate()
    const [err, setErr] = useState('')
    const [data, setData] = useState([])
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    const addInputs = (event)=>{
        setInputs({...inputs,
        [event.target.name]: event.target.value
        })
    }

    const sign_in = ()=>{
        if (!inputs.username) {
            setErr('please enter your username')
            return
        }

        if (!inputs.password) {
            setErr('please enter your password')
            return
        }

        axios.get('https://657c6959853beeefdb9964e3.mockapi.io/users')
            .then(res=>{
                // console.log(res.data);
                const result = res.data.find((item)=>
                item.username === inputs.username && item.password === inputs.password
                )
                // console.log(result);
                if (result) {
                    localStorage.setItem('user', JSON.stringify(result))
                    localStorage.setItem('isLogged', true)
                    navigate('/')
                } else {
                    setErr('username or password is wrong')
                }
            })
    }

  return (
    <div>
        <div class="h-screen flex justify-center items-center bg-[#F5EBEB] py-20 p-4 md:p-20 lg:p-32">
    <div class=" bg-white rounded-lg overflow-hidden shadow-lg w-96">
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p class="text-gray-700 mb-6">Please sign in to your account</p>
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
                    onClick={sign_in}
                    class="bg-[#867070] hover:bg-[#D5B4B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign in
          </button>
                    <Link class="inline-block align-baseline font-bold text-sm text-[#867070] hover:text-[#D5B4B4]" 
                    to="/SignUp">
                        Dont have an account? sign up
                    </Link>
                </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default SignIn